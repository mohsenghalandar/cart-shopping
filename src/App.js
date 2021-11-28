import './App.css';
import { Route,Routes } from 'react-router-dom';
import ProductsContextProvider from "./context/productscontextprovider"
import Store from "./component/Store"
import Details from './component/details';

function App() {
  return (
    <div >
      <ProductsContextProvider>
        <Routes>
          <Route path="/" element={<Store />}/>
          <Route path="/products/:id" element={<Details />} />
        </Routes>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
