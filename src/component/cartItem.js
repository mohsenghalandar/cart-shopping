import React, { useContext } from 'react';
import { cartcontext } from '../context/cartcontextprovider';
import trash from './resource/icons/trash.svg' ;
const CartItem = (props) => {
    const {dispatch} = useContext(cartcontext);
    const {title,category,description,image,price,quantity} = props.data ;
    return (
        <div>
            <div>
                <h3>{title}</h3>
                <img style={{display:"inline",width:"150px",height:'100px'}} src={image} />
                <span style={{display:"inline-block"}} >
                    <div> price : {price} </div>
                    <div> count : {quantity} 
                        <span>
                            {quantity>1 
                                ?
                                <span>
                                    <button onClick={()=>dispatch({type:"INCREASE",playload:props.data})} >+</button>
                                    <button onClick={()=>dispatch({type:"DECREASE",playload:props.data})} >-</button>
                                </span>
                                :
                                <span>
                                    <button onClick={()=>dispatch({type:"INCREASE",playload:props.data})}>+</button>
                                    <button onClick={()=>dispatch({type:"REMOVE_ITEM",playload:props.data})}><img src={trash} alt="buy_logo"/></button>
                                </span>
                            }
                        </span> 
                    </div>

                    <div> total : {price * quantity}</div>
                </span>
            </div>
        </div>  
    );
};

export default CartItem;