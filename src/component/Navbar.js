import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import cart from "./resource/icons/cart_shopping.svg"
import {cartcontext} from "../context/cartcontextprovider"
import style from "./styles/nav.module.css"
const Navbar = () => {
    const state = useContext(cartcontext);
    //state.itemsCounter for numbert cart
    return (
        <div className={style.main}>
            <span className={style.cart}>
                <Link to="/cart"><img style={{width:"50px",height:"30px"}} src={cart} alt="cart" /></Link>
                <span style={{display:"inline-block",color:'brown',marginRight:"-12px"}}>1</span>
            </span>
        <span><Link className={style.product} to="/product">Product</Link></span>
        </div>
    );
};

export default Navbar;