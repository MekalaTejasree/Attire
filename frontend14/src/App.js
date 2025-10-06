import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/authcontext';
import { Toaster } from 'react-hot-toast';
import { All } from './pages/ALL';
import  Cart  from './pages/Cart';
import { CartProvider } from './context/CartContext';
import { LoginSignup } from './pages/LoginSignup';
import { ALLCategory } from './pages/ALLCategory';
import Checkout from './pages/Checkout/Checkout';
import CheckoutSuccess from './pages/Checkout/CheckoutSuccess';
import CheckoutCancel from './pages/Checkout/CheckoutCancel';


import Footer from './Components/Footer/Footer';
import Jeans from './pages/WOMEN/WESTERN/JEANS/jeans';
import Shirts from './pages/WOMEN/WESTERN/SHIRTS&TOPS/shirts';
import Tshirts from './pages/WOMEN/WESTERN/T-SHIRTS/tshirts';
import Trousers from './pages/WOMEN/WESTERN/TROUSERS/trousers';
import Ethnicset from './pages/WOMEN/ETHNIC/ETHNIC SET/ethnicset';
import Ethnicsuit from './pages/WOMEN/ETHNIC/ETHNIC SUITS/suits';
import Kurtas from './pages/WOMEN/ETHNIC/KURTHAS&KURTHIS/kurthi';
import Formals from './pages/MEN/WESTERN/FORMALS/formals';
import Menjeans from './pages/MEN/WESTERN/JEANS/jeans';
import Mentshirts from './pages/MEN/WESTERN/T-SHIRTS/tshirts';
import Mentrousers from './pages/MEN/WESTERN/TROUSERS/trousers';
import Men from './pages/MEN/men';
import Women from './pages/WOMEN/women';
import Mencare from './pages/SKIN CARE/MEN/men';
import Womencare from './pages/SKIN CARE/WOMEN/women';
import Skincare from './pages/SKIN CARE/skincare';
import Boyjeans from './pages/KIDS/5-14 YEARS/BOY/JEANS/jeans';
import Boyshots from './pages/KIDS/5-14 YEARS/BOY/SHOTS/shots';
import Boytop from './pages/KIDS/5-14 YEARS/BOY/TOP/top';
import Dress from './pages/KIDS/5-14 YEARS/GIRL/DRESS/dress';
import Girljeans from './pages/KIDS/5-14 YEARS/GIRL/JEANS/jeans';
import Girltop from './pages/KIDS/5-14 YEARS/GIRL/TOP/top';
import Babytop from './pages/KIDS/0-5 YEARS/BABY BOY/TOP/top';
import Babybottom from './pages/KIDS/0-5 YEARS/BABY BOY/BOTTOM/bottom';
import Babygirltop from './pages/KIDS/0-5 YEARS/BABY GIRL/TOP/top';
import Babygirlbottom from './pages/KIDS/0-5 YEARS/BABY GIRL/BOTTOM/bottom';
import Kids from './pages/KIDS/kids';
import Belt from './pages/ACCESORIES/MEN/BELT/belt';
import Rings from './pages/ACCESORIES/MEN/RINGS/rings';
import Sunglass from './pages/ACCESORIES/MEN/SUNGLASSES/sunglasses';
import Wallet from './pages/ACCESORIES/MEN/WALLET/wallet';
import Hairpins from './pages/ACCESORIES/WOMEN/HAIRPINS/hairpins';
import Handbag from './pages/ACCESORIES/WOMEN/HANDBAGS/handbag';
import Sunglasses from './pages/ACCESORIES/WOMEN/SUNGLASSES/sunglass';
import Accesories from './pages/ACCESORIES/accesories';
import Sandels from './pages/WOMEN/FOOTWEAR/SANDELS/sandels'
import Wshoes from './pages/WOMEN/FOOTWEAR/SHOES/shoes'
import Wsneakers from './pages/WOMEN/FOOTWEAR/SNEAKERS/sneakers'
import Shoes from './pages/MEN/FOOTWEAR/SHOES/shoes'
import Sneakers from './pages/MEN/FOOTWEAR/SNEAKERS/sneakers'



function ProtectedRoute({ children }) {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider><CartProvider >
        <div className="app">
          <Toaster /> {/* Added Toaster component */}
          <Navbar />
          <main>
            <Routes>
              <Route path='/checkout' element={
              <ProtectedRoute>
              <Checkout />
              </ProtectedRoute>
              } />
              <Route path='/checkout/success' element={<CheckoutSuccess />} />
              <Route path='/checkout/cancel' element={<CheckoutCancel />} />
              <Route path='/' element={<All />} />
              <Route path='/MEN/shoes' element={<Shoes/>}/>
              <Route path='/MEN/sneakers' element={<Sneakers/>}/>
              <Route path='/WOMEN/shoes' element={<Wshoes/>}/>
              <Route path='/WOMEN/sneakers' element={<Wsneakers/>}/>
              <Route path='/WOMEN/sandals' element={<Sandels/>}/>
              <Route path='/ACCESORIES' element={<Accesories/>}/>
              <Route path='/ACCESORIES/WOMEN/hairpins' element={<Hairpins/>}/>
              <Route path='/ACCESORIES/WOMEN/handbags' element={<Handbag/>}/>
              <Route path='/ACCESORIES/WOMEN/sunglasses' element={<Sunglasses/>}/>
              <Route path='/ACCESORIES/hairpins' element={<Hairpins/>}/>
              <Route path='/ACCESORIES/handbags' element={<Handbag/>}/>
              <Route path='/ACCESORIES/sunglasses' element={<Sunglasses/>}/>
              <Route path='/ACCESORIES/belts' element={<Belt/>}/>
              <Route path='/ACCESORIES/rings-&-bracelets' element={<Rings/>}/>
              <Route path='/ACCESORIES/sunglass' element={<Sunglass/>}/>
              <Route path='/ACCESORIES/wallets' element={<Wallet/>}/>
              <Route path='/ACCESORIES/MEN/belts' element={<Belt/>}/>
              <Route path='/ACCESORIES/MEN/rings-&-braclets' element={<Rings/>}/>
              <Route path='/ACCESORIES/MEN/sunglass' element={<Sunglass/>}/>
              <Route path='/ACCESORIES/MEN/wallets' element={<Wallet/>}/>
              <Route path='/KIDS' element={<Kids/>}/>
              <Route path='/KIDS/jacket' element={<Babytop/>}/>
              <Route path='/KIDS/Bottom' element={<Babybottom/>}/>
              <Route path='/KIDS/top' element={<Babygirltop/>}/>
              <Route path='/KIDS/bottom' element={<Babygirlbottom/>}/>
              <Route path='/KIDS/dress' element={<Dress/>}/>
              <Route path='/KIDS/jeans' element={<Girljeans/>}/>
              <Route path='/KIDS/tops' element={<Girltop/>}/>
              <Route path='/KIDS/jeans' element={<Boyjeans/>}/>
              <Route path='/KIDS/shots' element={<Boyshots/>}/>
              <Route path='/KIDS/t-shirt' element={<Boytop/>}/>
              <Route path='/SKINCARE/men' element={<Mencare/>}/>
              <Route path='/SKINCARE/women' element={<Womencare/>}/>
              <Route path='/SKINCARE' element={<Skincare/>}/>
              <Route path='/MEN' element={<Men/>}/>
              <Route path='/WOMEN' element={<Women/>}/>
              <Route path='/MEN/trousers' element={<Mentrousers/>}/>
              <Route path='/MEN/t-shirts' element={<Mentshirts/>}/>
              <Route path='/MEN/jeans' element={<Menjeans/>}/>
              <Route path='/MEN/formal' element={<Formals/>}/>
              <Route path='/WOMEN/kurtas' element={<Kurtas/>}/>
              <Route path='/WOMEN/suits' element={<Ethnicsuit/>}/>
              <Route path='/WOMEN/dresses' element={<Ethnicset/>}/>
              <Route path='/WOMEN/trousers' element={<Trousers/>}/>
              <Route path='/WOMEN/t-shirts' element={<Tshirts/>}/>
              <Route path="/WOMEN/tops" element={<Shirts />}/>
              <Route path="/WOMEN/jeans" element={<Jeans />} />
              <Route path='/:category/:item' element={<ALLCategory />} />
             
             
              <Route path='/cart' element={
                
                  <Cart />
               
              } />
              <Route path='/login' element={<LoginSignup />} />
              
            </Routes>
          </main>
          <Footer />
        </div> </CartProvider>
      </AuthProvider>
     
      <Toaster position='bottom-right'/>
    </BrowserRouter>
  );
}

export default App;