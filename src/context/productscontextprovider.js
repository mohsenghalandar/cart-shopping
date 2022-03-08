import React,{useState,useEffect} from 'react';
import getProducts from "../services/getproducts"

export const productscontext = React.createContext();

const ProductsContextProvider = (props) => {
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        const fetchapi = async()=>{
            const data = (await getProducts());
            setProducts(data);
            setTimeout(() => {
                console.log(data);
            }, 2000);
        }
    fetchapi();
    },[])


    return (
        <productscontext.Provider value={{products:[products,setProducts]}}>
            {props.children}
        </productscontext.Provider>
    );
};

export default ProductsContextProvider;