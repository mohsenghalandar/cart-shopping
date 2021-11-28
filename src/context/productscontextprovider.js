import React,{useState,useEffect} from 'react';
import getProducts from "../services/getproducts"

export const productscontext = React.createContext();

const ProductsContextProvider = (props) => {
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        const fetchapi = async()=>{
            setProducts(await getProducts())
        }
    fetchapi();
    },[])


    return (
        <productscontext.Provider value={products}>
            {props.children}
        </productscontext.Provider>
    );
};

export default ProductsContextProvider;