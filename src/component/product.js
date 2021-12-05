import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartcontext } from '../context/cartcontextprovider';
//icons and pic
import trash from "./resource/icons/trash.svg";
// the costom method that we need
import {isIncart} from "../helper/isIncart"
import { counteritem } from '../helper/counteritem';
const Product = (props) => {
    const {state,dispatch} = useContext(cartcontext);
    const {pp} = props; //because of some error change the productData
    return (
        <div style={{width:"250px"}}>
            <h3>{pp.title}</h3>
            <img src={pp.image} alt="fuck you" style={{width:"90%"}} />
            <p>{pp.price}$</p>
            <p>{pp.category}</p>
            <div>
                {
                    isIncart(state,pp.id) ? 
                        <button onClick={()=>dispatch({type:"INCREASE",playload:pp})}>+</button>
                    : 
                    <button onClick={()=>dispatch({type:"ADD_ITEM",playload:pp})}>Add to Cart</button>
                }
                {
                    counteritem(state,pp.id) > 1 && <button onClick={()=>dispatch({type:"DECREASE",playload:pp})}>-</button>
                }
                {
                    counteritem(state,pp.id) == 1 && <button onClick={()=> dispatch({type:"REMOVE_ITEM",playload:pp})}><img src={trash} alt="buy_logo"/></button>
                }
                <Link to={`/products/${pp.id}`}>description</Link>
            </div>
        </div>
    );
};

export default Product;