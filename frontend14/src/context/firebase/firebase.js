import { initializeApp, getApps, getApp } from 'firebase/app';
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendEmailVerification,
  sendPasswordResetEmail,
  onAuthStateChanged,
  signOut,
  updateProfile
} from 'firebase/auth';
import { 
  getFirestore,
  doc,
  setDoc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  arrayUnion,
  serverTimestamp
} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getFunctions } from 'firebase/functions';

// Your ATTIRE project configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase only once
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const functions = getFunctions(app);
const googleProvider = new GoogleAuthProvider();

// Collections
const usersCollection = collection(db, 'users');
const productsCollection = collection(db, 'products');
const categoriesCollection = collection(db, 'categories');
const ordersCollection = collection(db, 'orders');
const userCartsCollection = collection(db, 'userCarts');

// User Management
const createUserProfile = async (user, additionalData = {}) => {
  if (!user?.uid) throw new Error('No user UID provided');
  
  const userRef = doc(db, 'users', user.uid);
  try {
    await setDoc(userRef, {
      uid: user.uid,
      email: user.email,
      emailVerified: user.emailVerified || false,
      createdAt: serverTimestamp(),
      lastLogin: serverTimestamp(),
      ...additionalData
    }, { merge: true });
    return await getUserProfile(user.uid);
  } catch (error) {
    console.error('Failed to create user profile:', error);
    throw error;
  }
};

const getUserProfile = async (uid) => {
  if (!uid) return null;
  try {
    const docSnap = await getDoc(doc(db, 'users', uid));
    return docSnap.exists() ? { uid, ...docSnap.data() } : null;
  } catch (error) {
    console.error('Failed to fetch user profile:', error);
    throw error;
  }
};

const updateUserProfile = async (uid, data) => {
  try {
    await setDoc(doc(db, 'users', uid), data, { merge: true });
    return await getUserProfile(uid);
  } catch (error) {
    console.error('Profile update failed:', error);
    throw error;
  }
};

const updateUserDisplayName = async (user, displayName) => {
  try {
    await updateProfile(user, { displayName });
    await updateUserProfile(user.uid, { displayName });
    return true;
  } catch (error) {
    console.error('Display name update failed:', error);
    throw error;
  }
};

// Authentication
const registerUser = async (email, password, userData = {}) => {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    await sendEmailVerification(user);
    
    // Update display name if provided
    if (userData.displayName) {
      await updateUserDisplayName(user, userData.displayName);
    }
    
    const profile = await createUserProfile(user, userData);
    await initializeUserCart(user.uid);
    
    return { user, profile };
  } catch (error) {
    console.error('Registration failed:', error);
    throw error;
  }
};

const loginUser = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    await updateUserProfile(user.uid, { lastLogin: serverTimestamp() });
    const profile = await getUserProfile(user.uid);
    return { user, profile };
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};

const loginWithGoogle = async () => {
  try {
    const { user } = await signInWithPopup(auth, googleProvider);
    const profile = await createUserProfile(user, {
      displayName: user.displayName,
      photoURL: user.photoURL,
      provider: 'google'
    });
    return { user, profile };
  } catch (error) {
    console.error('Google login failed:', error);
    throw error;
  }
};

const logoutUser = async () => {
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    console.error('Logout failed:', error);
    throw error;
  }
};

const sendPasswordResetEmailToUser = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    return true;
  } catch (error) {
    console.error('Password reset failed:', error);
    throw error;
  }
};

// Cart Management
const initializeUserCart = async (userId) => {
  try {
    await setDoc(doc(db, 'userCarts', userId), {
      items: [],
      coupon: null,
      discount: 0,
      updatedAt: serverTimestamp()
    });
    return true;
  } catch (error) {
    console.error('Error initializing user cart:', error);
    throw error;
  }
};

const getUserCart = async (userId) => {
  try {
    const cartSnap = await getDoc(doc(db, 'userCarts', userId));
    return cartSnap.exists() ? cartSnap.data() : { items: [], coupon: null, discount: 0 };
  } catch (error) {
    console.error('Error getting user cart:', error);
    throw error;
  }
};

const updateUserCart = async (userId, cartData) => {
  try {
    await setDoc(doc(db, 'userCarts', userId), {
      ...cartData,
      updatedAt: serverTimestamp()
    }, { merge: true });
    return true;
  } catch (error) {
    console.error('Error updating user cart:', error);
    throw error;
  }
};

const clearUserCart = async (userId) => {
  try {
    await updateUserCart(userId, {
      items: [],
      coupon: null,
      discount: 0
    });
    return true;
  } catch (error) {
    console.error('Error clearing user cart:', error);
    throw error;
  }
};

// Product Management
const getProduct = async (productId) => {
  try {
    const productSnap = await getDoc(doc(db, 'products', productId));
    return productSnap.exists() ? { id: productId, ...productSnap.data() } : null;
  } catch (error) {
    console.error('Error getting product:', error);
    throw error;
  }
};

const getProductsByCategory = async (categoryId) => {
  try {
    const q = query(productsCollection, where('categoryId', '==', categoryId));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error getting products by category:', error);
    throw error;
  }
};

// Order Management
const createOrder = async (orderData) => {
  try {
    const orderRef = doc(ordersCollection);
    await setDoc(orderRef, {
      ...orderData,
      createdAt: serverTimestamp(),
      status: 'pending'
    });
    return orderRef.id;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};

// Auth State Listener
const initAuthListener = (callback) => {
  return onAuthStateChanged(auth, async (user) => {
    if (user) {
      try {
        const profile = await getUserProfile(user.uid);
        callback({ user, profile });
      } catch (error) {
        console.error('Auth state error:', error);
        callback(null);
      }
    } else {
      callback(null);
    }
  });
};

// Export everything
export {
  // Firebase services
  app,
  auth,
  db,
  storage,
  functions,
  
  // Collections
  usersCollection,
  productsCollection,
  categoriesCollection,
  ordersCollection,
  userCartsCollection,
  
  // Auth methods
  registerUser,
  loginUser,
  loginWithGoogle,
  logoutUser,
  sendPasswordResetEmailToUser,
  initAuthListener,
  
  // User methods
  getUserProfile,
  updateUserProfile,
  updateUserDisplayName,
  
  // Cart methods
  getUserCart,
  updateUserCart,
  clearUserCart,
  
  // Product methods
  getProduct,
  getProductsByCategory,
  
  // Order methods
  createOrder,
  
  // Utilities
  doc,
  getDoc,
  setDoc,
  updateDoc,
  arrayUnion,
  serverTimestamp,
  query,
  where,
  getDocs
};