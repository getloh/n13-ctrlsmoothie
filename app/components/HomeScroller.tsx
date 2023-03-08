'use client';

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/pagination";

export default function HomeScroller()
{

    const [tabState, setTabState] = useState(0);
    const [vState1, setVState1] = useState(0);
    const [vState2, setVState2] = useState(0);
    const [vState3, setVState3] = useState(0);
    const [vState4, setVState4] = useState(0);

    return (
        <div className="h-128 relative flex justify-center">
            <Swiper
                direction={"vertical"}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
                onActiveIndexChange={(swiperObj) => setTabState(swiperObj.activeIndex)}
            >
                <SwiperSlide>
                    <Swiper className="mySwiper-hor1"
                            slidesPerView={3}
                            // loop={true}
                            spaceBetween={30}
                            centeredSlides={true}
                            onActiveIndexChange={(swiperObj)=> setVState1(swiperObj.activeIndex)}
                            >
                        <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        <SwiperSlide>Slide 5</SwiperSlide>
                    </Swiper>

                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>

            <div className="absolute bottom-5 z-10">
                <p className="text-3xl">TEST TEXT</p>

            </div>
        </div>
    );
}
