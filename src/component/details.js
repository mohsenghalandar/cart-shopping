import React, { useContext, useEffect, useState } from 'react';
import { productscontext } from '../context/productscontextprovider';
import { cartcontext } from '../context/cartcontextprovider';
import { useParams } from 'react-router';
import Slider from './slider';
import style from "./styles/details.module.css"
import bycategory from '../helper/filterBycat';
import trash from "./resource/icons/trash.svg";
import { counteritem } from '../helper/counteritem';
import { isIncart } from '../helper/isIncart';
const Details = (props) => {

    const {state,dispatch} = useContext(cartcontext);
    const {total} = state ;
    const {id} = useParams();
    const data = useContext(productscontext); // all data
    const product = data[id-1]//checking between all data and user info
    const {title,category,image,price,rating,description} = product ;
    const [cat,setCat] = useState(null);
    useEffect(()=>{
        const setter = async()=>{
            const dd = await (bycategory(category));
            setCat(dd);
            console.log(dd);
        }
        setter();
    },[])
    return (
        <div className={style.main}>
            <div className={style.titles}>
                <p className={style.category}>{category}</p>
                <span className={style.prices} >
                    <p className={style.price}>{price}$</p>
                    <div>
                        {
                            isIncart(state,parseInt(id)) ? 
                                <button className={style.plus} onClick={()=>dispatch({type:"INCREASE",playload:product})}>+</button>
                            :
                                <button className={style.add} onClick={()=>dispatch({type:"ADD_ITEM",playload:product})}>Add to Cart</button>    
                        }
                        {counteritem(state,parseInt(id)) >= 1 && <p className={style.count}>{counteritem(state,parseInt(id))}</p>}
                        {
                            counteritem(state,parseInt(id)) > 1 && <button className={style.minus} onClick={()=>dispatch({type:"DECREASE",playload:product})}>-</button>
                        }

                        {
                            counteritem(state,parseInt(id)) == 1 && <button className={style.trash} onClick={()=> dispatch({type:"REMOVE_ITEM",playload:product})}><img src={trash} alt="buy_logo"/></button>
                        }
                        
                    </div>
                    
                </span>
                <h3 className={style.title}>{title}</h3>
            </div>
            <div className={style.pp} >
                <img className={style.pic} src={image} alt="photo unLoad"/>
            </div>
            <div className={style.describe}>
                <p className={style.description}>{description}</p>
                <p className={style.r1}>rate: {rating.rate}/{rating.count}</p>
            </div>
            <Slider cat={cat} />
        </div>
    );
};

export default Details;