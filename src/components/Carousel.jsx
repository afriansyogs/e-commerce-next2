// src/components/Carousel.jsx
import React from 'react';
import Image from 'next/image';

const Carousel = () => {
    return (
        <div className="carousel rounded-box w-[892px] h-[392px] mt-6 mx-auto">
            <div className="carousel-item w-full">
                <Image 
                    src="/assets/img/Carousel1.png" 
                    alt="Carousel Image 1" 
                    width={852} 
                    height={392} 
                    className="w-full h-auto"
                />
            </div>
        </div>
    );
};

export default Carousel;
