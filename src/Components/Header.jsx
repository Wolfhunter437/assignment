import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-creative';

export default function Header() {
    return (
        <>
            <Swiper
                grabCursor={true}
                effect={'creative'}
                // autoplay={{
                //   delay: 2500,
                //   disableOnInteraction: false,
                // }}
                creativeEffect={{
                    prev: {
                        shadow: false,
                        translate: ['-20%', 0, -1],
                    },
                    next: {
                        translate: ['100%', 0, 0],
                    },
                }}
                modules={[EffectCreative, Autoplay]}
                className="mySwiper3"
            >
                <SwiperSlide>
                    <img src="./Assets/download.png" alt="1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./Assets/download.png" alt="1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./Assets/download.png" alt="1" />
                </SwiperSlide>
            </Swiper>
        </>
    )
}
