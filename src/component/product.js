import React from 'react';
import { Link } from 'react-router-dom';
const Product = (props) => {
    return (
        <div style={{width:"250px"}}>
            <h3>{props.title}</h3>
            <img src={props.image} alt="fuck you" style={{width:"90%"}} />
            <p>{props.price}$</p>
            <p>{props.category}</p>
            <div>
                <button>Buy</button>
                <Link to={`/products/${props.id}`}>description</Link>
            </div>
        </div>
    );
};

export default Product;