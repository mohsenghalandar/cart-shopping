import React, { useContext } from 'react';
import {productscontext} from "../context/productscontextprovider"
import Product from './product';
import style from './styles/cart.module.css'
const Store = () => {
    const products = useContext(productscontext);

    return (
        <div style={{display:"flex",flexFlow:"row wrap",justifyContent:'center'}}>
            {products.map(item => <Product
                            key={item.id}
                            pp={item}
             /> )}
        </div>
    );
};

export default Store;