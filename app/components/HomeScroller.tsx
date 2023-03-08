'use client';

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/pagination";
import Image from "next/image";
import Button from "./Button";
import HomeScrollerButton from "./HomeScrollerButton";

export type sliderItem = {
    img: string;
    name: string;
    text: string;
    subtext: string;
}

export default function HomeScroller()
{
    //@ts-ignore
    const [swiper, setSwiper] = useState<Swiper>();
    const [tabState, setTabState] = useState(0);
    const [vState1, setVState1] = useState(0);
    const [vState2, setVState2] = useState(0);
    const [vState3, setVState3] = useState(0);
    const [vState4, setVState4] = useState(0);
    const [inTransition, setInTransition] = useState(false);

    const juiceArray: sliderItem[] = [
        {
            img: "juice1.png",
            name: "The Energy Shake",
            text: "Almond milk, beetroot, vanilla pods, maca powder, cacao and sea salt.",
            subtext: "330ml / £4.50"
        },
        {
            img: "juice2.png",
            name: "The Funky Shake",
            text: "Some stuff here 1",
            subtext: "330ml / £4.50"
        },
        {
            img: "juice1.png",
            name: "The Weird Shake",
            text: "Some stuff here 2",
            subtext: "330ml / £4.50"
        },
        {
            img: "juice1.png",
            name: "The Bouncy Shake",
            text: "Some stuff here 3",
            subtext: "330ml / £4.50"
        },
        {
            img: "juice1.png",
            name: "The Protein Shake",
            text: "Some stuff here 4",
            subtext: "330ml / £4.50"
        }
    ]
    const shotArray: sliderItem[] = [
        {
            img: "shot1.png",
            name: "The Energy Shot",
            text: "Almond milk, beetroot, vanilla pods, maca powder, cacao and sea salt.",
            subtext: "150ml / £4.50"
        },
        {
            img: "shot2.png",
            name: "The Funky Shot",
            text: "Some stuff here 5",
            subtext: "150ml / £4.50"
        },
        {
            img: "shot1.png",
            name: "The Weird Shot",
            text: "Some stuff here 6",
            subtext: "150ml / £4.50"
        },
        {
            img: "shot1.png",
            name: "The Bouncy Shot",
            text: "Some stuff here 7",
            subtext: "150ml / £4.50"
        },
        {
            img: "shot1.png",
            name: "The Protein Shot",
            text: "Some stuff here 8",
            subtext: "150ml / £4.50"
        }
    ]



    function renderText()
    {
        if (tabState == 0)
        {
            // Juice tab
            return (
                <div className="text-center">
                    <p className="text-3xl">{juiceArray[vState1].name}</p>
                    <p className="text-xl">{juiceArray[vState1].text}</p>
                    <p className="text-xl font-bold">{juiceArray[vState1].subtext}</p>

                </div>
            )
        }
        if (tabState == 1)
        {
            // Juice tab
            return (
                <div className="text-center">
                    <p className="text-3xl">{shotArray[vState2].name}</p>
                    <p className="text-xl">{shotArray[vState2].text}</p>
                    <p className="text-xl font-bold">{shotArray[vState2].subtext}</p>
                </div>
            )
        }
    }

    return (
        <div className="h-80 lg:h-128 relative flex justify-center pb-16">
            <Swiper
                direction={"vertical"}
                className="mySwiper"
                onActiveIndexChange={(swiperObj) => setTabState(swiperObj.activeIndex)}
                onSlideChangeTransitionStart={() => { setInTransition(true) }}
                onSlideChangeTransitionEnd={() => { setInTransition(false) }}
                onSwiper={(swiper) => setSwiper(swiper)}
            >
                <SwiperSlide>
                    <Swiper className="mySwiper-hor1"
                        slidesPerView={2}
                        // loop={true}
                        spaceBetween={0}
                        centeredSlides={true}
                        onActiveIndexChange={(swiperObj) => setVState1(swiperObj.activeIndex)}
                        onSlideChangeTransitionStart={() => { setInTransition(true) }}
                        onSlideChangeTransitionEnd={() => { setInTransition(false) }}
                    >
                        {juiceArray.map((juice) =>
                        {
                            return (
                                <SwiperSlide>
                                    <div className="p-40">

                                        <Image
                                            src={"/" + juice.img}
                                            width={400}
                                            height={400}
                                            alt={juice.name}
                                        />

                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>

                </SwiperSlide>
                <SwiperSlide>
                    <Swiper className="mySwiper-hor2"
                        slidesPerView={2}
                        // loop={true}
                        spaceBetween={0}
                        centeredSlides={true}
                        onActiveIndexChange={(swiperObj) => setVState2(swiperObj.activeIndex)}
                        onSlideChangeTransitionStart={() => { setInTransition(true) }}
                        onSlideChangeTransitionEnd={() => { setInTransition(false) }}
                    >
                        {shotArray.map((juice) =>
                        {
                            return (
                                <SwiperSlide>
                                    <div className="p-48">

                                        <Image
                                            src={"/" + juice.img}
                                            width={400}
                                            height={400}
                                            alt={juice.name}
                                        />

                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>

                </SwiperSlide>
                <SwiperSlide>
                    <Swiper className="mySwiper-hor3"
                        slidesPerView={2}
                        // loop={true}
                        spaceBetween={0}
                        centeredSlides={true}
                        onActiveIndexChange={(swiperObj) => setVState3(swiperObj.activeIndex)}
                        onSlideChangeTransitionStart={() => { setInTransition(true) }}
                        onSlideChangeTransitionEnd={() => { setInTransition(false) }}
                    >

                        <SwiperSlide
                            style={{ border: "2px solid red" }}
                        >
                            <p className="text-gray-400 font-bold font-2xl">
                                You get the idea
                            </p>
                        </SwiperSlide>
                        <SwiperSlide
                            style={{ border: "2px solid red" }}
                        >
                            <p className="text-gray-400 font-bold font-2xl">
                                You get the idea
                            </p>
                        </SwiperSlide>

                    </Swiper>
                </SwiperSlide>
                <SwiperSlide>                            
                    <p className="text-gray-400 font-bold font-2xl">
                    More things here
                </p></SwiperSlide>
            </Swiper>

            <div className="absolute bottom-16 z-10">
                {!inTransition && renderText()}
            </div>
            <div className="absolute top-1/2 -translate-y-2/3 z-0">
                <p className="font-bold" style={{ fontSize: "12rem", fontFamily: "sans-serif" }}>CTRL</p>
            </div>

            {/* <button 
                onClick={()=> {swiper.slideTo(1)}}
            >
                TEST
                </button> */}

            <div className="absolute left-0 top-1/2 -translate-y-2/3 z-20 flex flex-col ">
                <HomeScrollerButton
                    text="Juice"
                    active={tabState == 0}
                    onClick={() => { swiper.slideTo(0) }}
                />
                <HomeScrollerButton
                    text="Shots"
                    active={tabState == 1}
                    onClick={() => { swiper.slideTo(1) }}
                />
                <HomeScrollerButton
                    text="Packs"
                    active={tabState == 2}
                    onClick={() => { swiper.slideTo(2) }}
                />
                <HomeScrollerButton
                    text="▣"
                    active={tabState == 3}
                    onClick={() => { swiper.slideTo(3) }}
                />
            </div>

        </div>
    );
}
