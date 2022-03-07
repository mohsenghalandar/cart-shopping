import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {cartcontext} from '../context/cartcontextprovider';
import CartItem from './cartItem';
const ss ={
    btn:{color:"brown",padding:'5px 10px 5px 10px',color:'white',border:"none",borderRadius:'5px',margin:'5px',cursor:'pointer',backgroundColor:'brown'},
    num:{color:"brown"},
    total:{color:'brown'}
}
  
const Cart = () => {
    const {state,dispatch} = useContext(cartcontext);
    return (
        <div>
            <div style={{float:"left",width:'70%',marginLeft:'5%'}}>
                {state.selectedItems.map(item => <CartItem key={item.id} data={item} />)}
            </div>
            <div style={{border:'1px solid brown',textAlign:'center',marginTop:'5px',borderRadius:"5px",padding:'10px',float:'right',width:'20%',marginRight:'5%'}}>
                <p style={ss.num}>Number : {state.itemsCounter}</p>
                <p style={ss.total}>Total : ${state.total}</p>
                <button style={ss.btn} onClick={()=>dispatch({type:"CHECKOUT"})}>Check Out</button>
                <button style={ss.btn} onClick={()=>dispatch({type:"CLEAR"})}>Clear</button>
                {state.checkout && <div>تسویه موفق حساب شما <Link to="/product">buy more</Link></div>}
                {!state.checkout &&state.itemsCounter ===0 && <div> your cart is empty!! </div>}
            </div>
        </div>
    );
};

export default Cart;