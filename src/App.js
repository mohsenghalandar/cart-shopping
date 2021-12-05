import './App.css';
import { Route,Routes } from 'react-router-dom';
import ProductsContextProvider from "./context/productscontextprovider"
import Store from "./component/Store"
import Details from './component/details';
import CartContextProvider from './context/cartcontextprovider';

function App() {
  return (
    <div >
      <ProductsContextProvider>
        <CartContextProvider>
          <Routes>
            <Route path="/" element={<Store />}/>
            <Route path="/products/:id" element={<Details />} />
          </Routes>
        </CartContextProvider>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
