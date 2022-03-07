import React, { useContext } from 'react';
import { cartcontext } from '../context/cartcontextprovider';
import trash from './resource/icons/trash.svg' ;
import style from './styles/cart.module.css'
const CartItem = (props) => {
    const {dispatch} = useContext(cartcontext);
    const {title,category,description,image,price,quantity} = props.data ;
    return (
        <div className={style.main}>
                <h3 className={style.title}>{title}</h3>
                <img className={style.image} src={image} />
                <p className={style.describe}>{description}</p>
                <div>
                    <div className={style.price}> price : {price} </div>
                    <div>   
                        <span>
                            {quantity>1 
                                ?
                                <span>
                                    <button className={style.plus} onClick={()=>dispatch({type:"INCREASE",playload:props.data})} >+</button>
                                    <p className={style.count}>{quantity}</p>
                                    <button className={style.minus} onClick={()=>dispatch({type:"DECREASE",playload:props.data})} >-</button>
                                </span>
                                :
                                <span>
                                    <button className={style.plus} onClick={()=>dispatch({type:"INCREASE",playload:props.data})}>+</button>
                                    <p className={style.count}>{quantity}</p>
                                    <button className={style.trash} onClick={()=>dispatch({type:"REMOVE_ITEM",playload:props.data})}><img src={trash} alt="buy_logo"/></button>
                                </span>
                            }
                        </span> 
                    </div>
                    <div className={style.total}> total : {price * quantity}</div>
                </div>
            
        </div>  
    );
};

export default CartItem;