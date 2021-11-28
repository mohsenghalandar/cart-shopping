import React, { useContext } from 'react';
import { productscontext } from '../context/productscontextprovider';
import { useParams } from 'react-router';
const Details = (props) => {
    const {id} = useParams();
    const data = useContext(productscontext); // all data
    const product = data[id-1]//checking between all data and user info
    const {title,category,image,price,rating} = product ;
    return (
        <div>
            <p>{category}</p>
            <h3>{title}</h3>
            <img src={image} alt="photo unLoad"></img>
            <p>{price}$</p>
            <p>{rating.rate}/{rating.count}</p>
        </div>
    );
};

export default Details;