import React from 'react';
import Image from 'next/image';

const AboutStory = () => {
    return (
        <>
        <div className="flex flex-row h-screen">
            <div className="w-1/2 flex justify-center">
                <div className="w-[469px] mt-28 ">
                    <h1 className='text-5xl font-semibold'>Our Story</h1>
                    <p className='text-base mt-10'>
                        Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region. 
                    </p>
                    <p className='text-base mt-6'>
                        Exclusive has more than 1 Million products to offer, growing very fast. Exclusive offers a diverse assortment in categories ranging from consumer.
                    </p>
                </div>
            </div>
            <div className="w-1/2 flex items-center justify-center">
                <div className="relative w-full h-full"> 
                    <Image src="/assets/img/aboutImg.png" alt="About Us" 
                        width={852} height={392}
                    />
                </div>
            </div>
        </div>
        </>
    );
};

export default AboutStory;
