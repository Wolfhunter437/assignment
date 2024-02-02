import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

export default function Section3() {

    const swiperRef = useRef(null);

    const handlePrevClick = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    };

    const handleNextClick = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };

    const getRef = (swiperInstance) => {
        swiperRef.current = swiperInstance;
    };
    return (
        <div className='section3'>
            <div className='section3Bg'>
                <div className='imgOverlay'></div>
                <img src="./Assets/section3Bg.jpg" alt="" />
            </div>
            <div className='section3Content'>
                <h1>General Sales & Service Agent</h1>
                <div className='section3ImgandText'>
                    <div className='section3Img'>
                        <img src="./Assets/section3Bg.jpg" alt="" />
                    </div>
                    <div className='section3Text'>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias culpa magnam tempore eaque optio voluptas reiciendis facilis assumenda modi atque velit sunt, dolore qui quidem, perferendis laboriosam excepturi odit earum?</p>
                        <button className='btns' onClick={handleNextClick}><i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>
                <div className='section3Btns'>
                    <button id='prev' className='btns' onClick={handlePrevClick}><i class="fa-solid fa-arrow-left"></i></button>
                    <button id='next' className='btns' onClick={handleNextClick}><i class="fa-solid fa-arrow-right"></i></button>
                </div>
                <div className='section3Slider'>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        navigation={true}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true
                        }}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                        onSwiper={getRef}
                    >
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
