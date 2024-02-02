import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FreeMode, Navigation } from 'swiper/modules';

export default function Section3() {

    const swiperRef = useRef(null);
    const [index, setIndex] = useState(0);

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

    const handleNextContentClick = () => {
        if (index === slides.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }

    const getRef = (swiperInstance) => {
        swiperRef.current = swiperInstance;
    };

    const handleSlideClick = (clickedIndex) => {
        setIndex(clickedIndex);
        if (swiperRef.current) {
            swiperRef.current.slideTo(clickedIndex);
        }
    };

    const slides = [
        {
            heading: "General Sales & Service Agent",
            image: "./Assets/section3Bg.jpg",
            para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, voluptatum.'
        },
        {
            heading: "General Sales Agents",
            image: "./Assets/section3Bg.jpeg",
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        },
        {
            heading: "Total Cargo Management",
            image: "./Assets/section3slide3.jpg",
            para: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour"
        },
        {
            heading: "Cargo Sales Agent",
            image: "./Assets/section3slide4.jpeg",
            para: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."
        },
        {
            heading: "Block Space Agreement",
            image: "./Assets/section3slide5.jpeg",
            para: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        }
    ];
    return (
        <div className='section3'>
            <div className='section3Bg'>
                <div className='imgOverlay'></div>
                <img src="./Assets/section3Bg.jpg" alt="" />
            </div>
            <div className='section3Content'>
                <h1>{slides[index].heading}</h1>
                <div className='section3ImgandText'>
                    <div className='section3Img'>
                        <img src={slides[index].image} alt="" />
                    </div>
                    <div className='section3Text'>
                        <p>{slides[index].para}</p>
                        <button className='btns' onClick={handleNextContentClick}><i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>
                <div className='section3Btns'>
                    <button id='prev' className='btns' onClick={handlePrevClick}><i class="fa-solid fa-arrow-left"></i></button>
                    <button id='next' className='btns' onClick={handleNextClick}><i class="fa-solid fa-arrow-right"></i></button>
                </div>
                <div className='section3Slider'>
                    <Swiper
                        navigation={true}
                        centeredSlides={false}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true
                        }}
                        modules={[Navigation, FreeMode]}
                        className="mySwiper"
                        onSwiper={getRef}
                        breakpoints={{
                            280: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                                loop: true
                            },
                            768: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                                loop: true
                            },
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 25,
                                loop: false
                            },
                            1280: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                                loop: false
                            }
                        }}
                    >
                        {slides.map((slide, slideIndex) => (
                            <SwiperSlide key={slideIndex} onClick={() => handleSlideClick(slideIndex)}>
                                <img src={slide.image} alt="" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
