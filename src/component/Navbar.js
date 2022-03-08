import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import cart from "./resource/icons/cart_shopping.svg"
import {cartcontext} from "../context/cartcontextprovider"
import { productscontext } from '../context/productscontextprovider';
import style from "./styles/nav.module.css"
import getProducts from '../services/getproducts';

const Navbar = () => {
    const {state} = useContext(cartcontext);
    const {products} = useContext(productscontext);
    const [product,setProduct] = products ;
    //state.itemsCounter for numbert cart
   

    const getCat = ()=>{
        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=> setCat(json))
    }
    const [cat,setCat] = useState([]);
    const [modal,setModal] = useState(false);
    useEffect(()=>{
        const setter =()=>{
            (getCat());
        }
        setter();
    },[])
    const toggle = ()=>{
        if (modal === true)
        {setModal(false)}
        else(setModal(true))
    }
    //this to function is about managin dataa
    const fliter =async (category)=>{
        const data = await(getProducts(category));
        setProduct(data);
    }
    const onload = async()=>{
        const data = await(getProducts());
        setProduct(data);
    }
    return (
        <div className={style.main}>
            <span className={style.cart}>
                <Link to="/cart"><img style={{width:"50px",height:"30px"}} src={cart} alt="cart" /></Link>
                <span style={{display:"inline-block",color:'brown',marginRight:"-12px"}}>1</span>
            </span>
        <span><Link onClick={onload} className={style.product} to="/product">Product</Link></span>
        <button className={`${style.cat} ${modal && style.active}`} onClick={toggle} >Categories</button>
            { modal &&
            <div className={style.modal}>
                <ul>
                    {cat && cat.map(item => <ol className={style.filter} onClick={()=>fliter(item)} key={item}>{item}</ol>)}
                </ul>
            </div>
            }
        </div>
    );
};

export default Navbar;