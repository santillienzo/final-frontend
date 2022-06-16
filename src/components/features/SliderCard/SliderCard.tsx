import React from 'react'
import {ProductCard} from '../../';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css/bundle";

import { FreeMode, Pagination } from "swiper";

import data from "../../../data"

const SliderCard = () => {
  return (
    <>
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
                data.map((product, i)=>(
                    <SwiperSlide key={product.id}>
                        <ProductCard id={product.id} image={product.image} name={product.name} description={product.description}/>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </>
  )
}

export default SliderCard