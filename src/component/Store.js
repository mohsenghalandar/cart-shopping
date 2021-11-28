import React, { useContext } from 'react';
import {productscontext} from "../context/productscontextprovider"
import Product from './product';
import { shorter } from '../helper/shorter';
const Store = () => {
    const products = useContext(productscontext);

    return (
        <div style={{display:"flex",flexFlow:"row wrap"}}>
            {products.map(item => <Product
             key={item.id}
             id={item.id} 
             title={shorter(item.title)}
             image={item.image} 
             price={item.price}
             description={item.description}
             category={item.category}
             /> )}
        </div>
    );
};

export default Store;