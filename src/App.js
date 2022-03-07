import './App.css';
import { Route,Routes } from 'react-router-dom';
import ProductsContextProvider from "./context/productscontextprovider"
import Store from "./component/Store"
import Details from './component/details';
import CartContextProvider from './context/cartcontextprovider';
import Navbar from './component/Navbar';
import Cart from './component/Cart';
function App() {
  return (
    <div >
      
      <ProductsContextProvider>
        <CartContextProvider>
          <Navbar />
          <Routes>
            <Route index path="/" element={<Store />}/>
            <Route path="/product" element={<Store />} />
            <Route path="/products/:id" element={<Details />} />
            <Route path="/Cart" element={<Cart />}/>
          </Routes>
        </CartContextProvider>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
