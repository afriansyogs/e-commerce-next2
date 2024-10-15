// src/components/Carousel.jsx
import React from 'react';
import Image from 'next/image';
import CarouselGambar1 from '../assets/img/Carousel1.png';

const Carousel = () => {
    return (
        <div className="carousel rounded-box w-[892px] h-[392px] mt-6 mx-auto">
            <div className="carousel-item w-full">
                <Image src={CarouselGambar1} className="w-full" alt="Carousel Image 1" />
            </div>
        </div>
    );
};

export default Carousel;
