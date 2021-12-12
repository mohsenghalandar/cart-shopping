import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import cart from "./resource/icons/cart_shopping.svg"
import {cartcontext} from "../context/cartcontextprovider"
const Navbar = () => {
    const state = useContext(cartcontext);
    return (
        <div>
            <div><Link to="/product">Product</Link></div>
            <div>
                <Link to="/cart"><img style={{width:"50px",height:"30px"}} src={cart} alt="cart" /></Link>
                <span>{state.itemsCounter}</span>
            </div>
        </div>
    );
};

export default Navbar;