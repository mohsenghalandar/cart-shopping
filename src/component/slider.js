import React,{useState,useEffect} from 'react'; //this just show in details.
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import style from "./styles/slider.module.css"
import bycategory from '../helper/filterBycat';
import { shorter } from '../helper/shorter';
import { Link } from 'react-router-dom';
const Slider = (props) => {
    const {cat} = props;

    return (
        <div className={style.main}>
            <Splide              options={ {
          type         : 'loop',
          gap          : '1rem',
          autoplay     : true,
          pauseOnHover : false,
          resetProgress: false,
          arrows       : 'slider',
          perPage   : 4,
        } }
        hasSliderWrapper
        hasAutoplayProgress >
                { cat &&
                   cat.map((item)=><SplideSlide key={item.id}> 
                       <Link style={{textDecoration:'none'}} to={`/products/${item.id}`}>
                   <div className={style.item} title={item.title}>
                            <img className={style.pic} src={item.image} alt={item.title} />
                            <p>{shorter(item.title)}</p>
                            <p>{item.price}</p>
                        </div>
                        </Link>
                    </SplideSlide>
                    )
                }
            </Splide>    
        </div>
    );
};

export default Slider;