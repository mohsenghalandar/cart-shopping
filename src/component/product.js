import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartcontext } from '../context/cartcontextprovider';
import style from "./styles/product.module.css"
//icons and pic
import trash from "./resource/icons/trash.svg";
// the costom method that we need
import {isIncart} from "../helper/isIncart"
import { counteritem } from '../helper/counteritem';
import {shorter} from "../helper/shorter"
const Product = (props) => {
    const {state,dispatch} = useContext(cartcontext);
    const {pp} = props; //because of some error change the productData
    return (
        <div className={style.main}>
            <h3 className={style.title}>{shorter(pp.title)}</h3>
            <img src={pp.image} alt="fuck you" className={style.image} />
            <h5 className={style.price}><b>price</b> : {pp.price}$</h5>
            <p className={style.cat}>{pp.category}</p>
            <div>
                {
                    isIncart(state,pp.id) ? 
                        <button onClick={()=>dispatch({type:"INCREASE",playload:pp})} className={style.plus}>+</button>
                    : 
                    <button onClick={()=>dispatch({type:"ADD_ITEM",playload:pp})} className={style.add}>Add to Cart</button>
                }
                {counteritem(state,pp.id) >= 1 && <p className={style.count}>{counteritem(state,pp.id)}</p>}
                {
                    counteritem(state,pp.id) > 1 && <button onClick={()=>dispatch({type:"DECREASE",playload:pp})} className={style.minus}>-</button>
                }
                {
                    counteritem(state,pp.id) == 1 && <button onClick={()=> dispatch({type:"REMOVE_ITEM",playload:pp})} className={style.trash}><img src={trash} alt="buy_logo"/></button>
                }
            </div>
            <Link className={style.describe} to={`/products/${pp.id}`}>description</Link>
        </div>
    );
};

export default Product;