import React from "react";
import './SliderCardSection.css'
import {ProductCard} from '../../';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css/bundle";


import { FreeMode, Pagination } from "swiper";

let products = [
    {
        nombre: "Producto"
    },
    {
        nombre: "Producto"
    },
    {
        nombre: "Producto"
    },
    {
        nombre: "Producto"
    },
    {
        nombre: "Producto"
    },
    {
        nombre: "Producto"
    },
    {
        nombre: "Producto"
    }
]

const SliderCardSection = () => {
    return (
        <>
            <h5>Holaa</h5>
            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
                
            >
                {
                    products.map((e,i)=>(
                        <SwiperSlide key={i}>
                            <ProductCard/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    );
};

export default SliderCardSection;
