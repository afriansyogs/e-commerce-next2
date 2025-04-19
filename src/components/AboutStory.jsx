import React from 'react';
import Image from 'next/image';

const AboutStory = () => {
    return (
        <>
        <h1 className="text-center text-4xl lg:text-5xl font-semibold lg:hidden mt-3 md:mt-6">Our Story</h1>
        <div className="flex flex-col-reverse lg:flex-row h-auto lg:h-screen">
            <div className="w-full lg:w-1/2 flex justify-center px-6 lg:px-0" data-aos="fade-right">
                <div className="w-full max-w-[469px] md:max-w-[540px] lg:max-w-[469px] mt-10 lg:mt-28">
                    <h1 className="text-4xl lg:text-5xl font-semibold hidden lg:block">Our Story</h1>
                    <p className="text-sm lg:text-base first-letter:ml-6 mt-6 lg:mt-10">
                        Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.
                    </p>
                    <p className="text-sm lg:text-base mt-4 lg:mt-6 first-letter:ml-6">
                        Exclusive has more than 1 Million products to offer, growing very fast. Exclusive offers a diverse assortment in categories ranging from consumer.
                    </p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 flex items-center lg:items-start justify-center mt-14 lg:mt-24 px-6 lg:px-0">
                <div className="relative w-full max-w-[350px] md:max-w-[420px] lg:max-w-[500px] h-auto" data-aos="fade-left">
                    <Image 
                        src="/assets/img/e-commerce-illustration.png" 
                        alt="About Us" 
                        width={350} 
                        height={392} 
                        className="w-full h-auto"
                    />
                </div>
            </div>
        </div>
        </>
    );
};

export default AboutStory;
