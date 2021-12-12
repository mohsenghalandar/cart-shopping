import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {cartcontext} from '../context/cartcontextprovider';
import CartItem from './cartItem';
const Cart = () => {
    const {state,dispatch} = useContext(cartcontext);
    return (
        <div>
            <div>
                {state.selectedItems.map(item => <CartItem key={item.id} data={item} />)}
            </div>
            <div>
                <button onClick={()=>dispatch({type:"CHECKOUT"})}>Check Out</button>
                <button onClick={()=>dispatch({type:"CLEAR"})}>Clear</button>
                {state.checkout && <div>تسویه موفق حساب شما <Link to="/product">buy more</Link></div>}
                {!state.checkout &&state.itemsCounter ===0 && <div> your cart is empty!! </div>}
            </div>
        </div>
    );
};

export default Cart;