'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import  Point  from "@/components/Point";

const Featured = () => {
    useEffect(() => {
        if (window.AOS) {
            window.AOS.init({
                duration: 1000,
                once: true,    
            });
        }
    }, []);

    return (
        <div className="mt-16 ms-[10px] md:ms-[70px] w-[95%] md:w-[90%] pb-10">
            <Point text="Featured" />
            <div className="mt-2 flex items-end">
                <div className="text-2xl md:text-4xl lg:text-[36px] font-bold">
                    New Arrival
                </div>
            </div>
            <div className="mt-6 lg:mt-12 flex flex-col md:flex-row gap-y-8 md:gap-x-8">
                <div className="relative md:w-1/2 h-[400px] md:h-[600px] bg-black flex items-end justify-center" data-aos="fade-right">
                    <Image 
                        src="/assets/img/PsProduct.png" 
                        width={500} 
                        height={500} 
                        alt="PlayStation 5" 
                        className="object-cover" 
                    />
                    <div className="absolute bottom-3 left-4 md:left-10 p-4 text-white">
                        <h1 className="text-xl md:text-2xl font-semibold">PlayStation 5</h1>
                        <div className="w-[180px] md:w-[242px]">
                            <p className="text-xs md:text-sm mt-2 md:mt-[14px] pb-3">
                                Black and White version of the PS5 coming out on sale.
                            </p>
                        </div>
                        <a href='#' className="text-sm md:text-base font-medium underline underline-offset-2">Shop Now.</a>
                    </div>
                </div>
                <div className="md:w-1/2 bg-transparent flex flex-col gap-y-8">
                    <div className="relative w-full h-[284px] bg-black flex items-end justify-end" data-aos="fade-down">
                        <Image 
                            src="/assets/img/Women.png"
                            width={280} 
                            height={280} 
                            alt="Women’s Collections" 
                            className="object-cover" 
                        />
                        <div className="absolute bottom-3 left-4 md:left-10 p-4 text-white">
                            <h1 className="text-xl md:text-2xl font-semibold">Women’s Collections</h1>
                            <div className="w-[180px] md:w-[220px]">
                                <p className="text-xs md:text-sm mt-2 md:mt-[14px] pb-3">
                                    Featured woman collections that give you another vibe.
                                </p>
                            </div>
                            <a href='#' className="text-sm md:text-base font-medium underline underline-offset-2">Shop Now.</a>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-y-8 sm:gap-x-8">
                        <div className="relative w-full h-[284px] bg-black flex items-center justify-center" data-aos="fade-up">
                            <Image 
                                src="/assets/img/Speaker.png"
                                width={220} 
                                height={220} 
                                alt="Speakers" 
                                className="object-cover" 
                            />
                            <div className="absolute bottom-3 left-4 md:left-10 p-4 text-white">
                                <h1 className="text-xl md:text-2xl font-semibold">Speakers</h1>
                                <p className="text-xs md:text-sm mt-2 md:mt-[14px] pb-3">Amazon wireless speakers</p>
                                <a href='#' className="text-sm md:text-base font-medium underline underline-offset-2">Shop Now.</a>
                            </div>
                        </div>
                        <div className="relative w-full h-[284px] bg-black flex items-center justify-center" data-aos="fade-up">
                            <Image 
                                src="/assets/img/Parfume.png"
                                width={220} 
                                height={220} 
                                alt="Perfume" 
                                className="object-cover filter drop-shadow-grey" 
                            />
                            <div className="absolute bottom-3 left-4 md:left-10 p-4 text-white">
                                <h1 className="text-xl md:text-2xl font-semibold">Perfume</h1>
                                <p className="text-xs md:text-sm mt-2 md:mt-[14px] pb-3">GUCCI INTENSE OUD EDP</p>
                                <a href='#' className="text-sm md:text-base font-medium underline underline-offset-2">Shop Now.</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;
