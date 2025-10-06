import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { doc, getDoc, setDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../context/firebase/firebaseConfig';
import { useAuth } from './authcontext';
import { toast } from 'react-hot-toast';

const CartContext = createContext();

export function CartProvider({ children }) {
  const { currentUser } = useAuth();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load cart from Firestore or localStorage
  const loadCart = useCallback(async () => {
    setLoading(true);
    try {
      if (currentUser) {
        const cartRef = doc(db, 'userCarts', currentUser.uid);
        const cartSnap = await getDoc(cartRef);
        if (cartSnap.exists()) {
          setCartItems(cartSnap.data().items || []);
        } else {
          await setDoc(cartRef, { items: [], updatedAt: serverTimestamp() });
          setCartItems([]);
        }
      } else {
        const localCart = JSON.parse(localStorage.getItem('guestCart')) || [];
        setCartItems(localCart);
      }
    } catch (error) {
      toast.error('Failed to load cart');
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [currentUser]);

  // Save cart to appropriate storage
  const saveCart = useCallback(async () => {
    if (loading) return;
    try {
      if (currentUser) {
        await updateDoc(doc(db, 'userCarts', currentUser.uid), {
          items: cartItems,
          updatedAt: serverTimestamp()
        });
      } else {
        localStorage.setItem('guestCart', JSON.stringify(cartItems));
      }
    } catch (error) {
      console.error('Failed to save cart:', error);
    }
  }, [cartItems, currentUser, loading]);

  // Merge guest cart on login
  const mergeCarts = useCallback(async () => {
    if (!currentUser) return;
    const guestCart = JSON.parse(localStorage.getItem('guestCart')) || [];
    if (guestCart.length === 0) return;

    try {
      const cartRef = doc(db, 'userCarts', currentUser.uid);
      const cartSnap = await getDoc(cartRef);
      const existingItems = cartSnap.exists() ? cartSnap.data().items || [] : [];

      const mergedItems = [...existingItems, ...guestCart];
      await updateDoc(cartRef, {
        items: mergedItems,
        updatedAt: serverTimestamp()
      });

      localStorage.removeItem('guestCart');
      toast.success('Cart items merged!');
      loadCart();
    } catch (error) {
      console.error('Merge failed:', error);
    }
  }, [currentUser, loadCart]);

  // Effects
  useEffect(() => { loadCart(); }, [loadCart]);
  useEffect(() => { saveCart(); }, [cartItems, saveCart]);
  useEffect(() => { mergeCarts(); }, [mergeCarts]);

  // Cart actions
  const addToCart = (item) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id && i.size === item.size);
      const updated = existing
        ? prev.map(i => i === existing ? { ...i, quantity: i.quantity + (item.quantity || 1) } : i)
        : [...prev, { ...item, quantity: item.quantity || 1 }];

      return updated;
    });

    toast.success(`${item.name} added to cart!`);
  };

  const removeFromCart = (id, size) => {
    setCartItems(prev => prev.filter(i => !(i.id === id && i.size === size)));
    toast.success('Item removed');
  };

  const updateQuantity = (id, size, quantity) => {
    if (quantity < 1) return;
    setCartItems(prev =>
      prev.map(i =>
        i.id === id && i.size === size ? { ...i, quantity } : i
      )
    );
  };

  const clearCart = useCallback(async () => {
    try {
      // Clear state
      setCartItems([]);
      
      // Clear storage based on user type
      if (currentUser) {
        // Clear from Firestore
        await updateDoc(doc(db, 'userCarts', currentUser.uid), {
          items: [],
          updatedAt: serverTimestamp()
        });
        console.log('✅ Cart cleared from Firestore');
      } else {
        // Clear from localStorage
        localStorage.removeItem('guestCart');
        console.log('✅ Cart cleared from localStorage');
      }
      
      // Also clear any other cart-related localStorage items
      localStorage.removeItem('cart');
      
      toast.success('Cart cleared successfully!');
      console.log('✅ Cart cleared completely');
    } catch (error) {
      console.error('Error clearing cart:', error);
      toast.error('Failed to clear cart');
    }
  }, [currentUser]);

  // Calculations
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      subtotal,
      itemCount,
      total,
      loading
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
