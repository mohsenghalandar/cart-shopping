import React, { useContext } from 'react';
import {productscontext} from "../context/productscontextprovider"
import Product from './product';
import Loader from './loader';
import style from './styles/cart.module.css'
import getProducts from '../services/getproducts';

const Store = () => {
    const {products} = useContext(productscontext);
    const [product,setProduct] = products;

    return (
        <div style={{display:"flex",flexFlow:"row wrap",justifyContent:'center'}}>
            {product == null ? <Loader /> 
            :
            product.map(item => <Product
                            key={item.id}
                            pp={item}
             /> )}
        </div>
    );
};

export default Store;