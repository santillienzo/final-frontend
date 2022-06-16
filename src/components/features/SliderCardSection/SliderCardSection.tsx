import React from "react";
import './SliderCardSection.css'
import {ProductCard} from '../../';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css/bundle";

import data from "../../../data"

import { FreeMode, Pagination,Navigation } from "swiper";

interface SliderCardSectionProps{
    name: string, 
    products: any[]
}

const SliderCardSection = ({name, products}:SliderCardSectionProps) => {
    return (
        <div className="swipper-wrapper">
            <h5>{name}</h5>
            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                navigation
                freeMode={true}
                scrollbar={{draggable: true}}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    data.map((product,i)=>(
                        <SwiperSlide key={i}>
                            <ProductCard description={product.description} id={product.id} name={product.name} image={product.image}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default SliderCardSection;
