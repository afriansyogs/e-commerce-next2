'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import PsProduct from '../assets/img/PsProduct.png';
import Women from '../assets/img/Women.png';
import Parfume from '../assets/img/Parfume.png';
import Speaker from '../assets/img/Speaker.png';

const Featured = () => {
    useEffect(() => {
        if (window.AOS) {
            window.AOS.init({
                duration: 1000, // Durasi animasi dalam milidetik
                once: true,     // Animasi hanya terjadi sekali
            });
        }
    }, []);

    return (
        <div className="mt-16 ms-[70px] w-[90%] pb-10">
            <div className="flex items-center">
                <div className="w-5 h-10 bg-red-600 rounded-md"></div>
                <div className="ms-4 text-md text-red-600 font-semibold">Featured</div>
            </div>
            <div className="mt-2 flex items-end">
                <div className="text-[36px] font-bold">
                    New Arrival
                </div>
            </div>
            <div className="mt-12 flex flex-row gap-x-8">
                <div className="relative w-1/2 h-[600px] bg-black flex items-end justify-center" data-aos="fade-right">
                    <Image 
                        src={PsProduct} 
                        width={500} 
                        height={500} 
                        alt="PlayStation 5" 
                        className="object-cover" 
                    />
                    <div className="absolute bottom-3 left-10 p-4 text-white">
                        <h1 className="text-2xl font-semibold">PlayStation 5</h1>
                        <div className="w-[242px]">
                            <p className="text-sm mt-[14px] pb-3">Black and White version of the PS5 coming out on sale.</p>
                        </div>
                        <a href='#' className="text-base font-medium underline underline-offset-2">Shop Now.</a>
                    </div>
                </div>
                <div className="w-1/2 bg-transparent">
                    <div className="relative w-full h-[284px] bg-black flex items-end justify-end" data-aos="fade-down">
                        <Image 
                            src={Women}
                            width={280} 
                            height={280} 
                            alt="Women’s Collections" 
                            className="object-cover" 
                        />
                        <div className="absolute bottom-3 left-10 p-4 text-white">
                            <h1 className="text-2xl font-semibold">Women’s Collections</h1>
                            <div className="w-[220px]">
                                <p className="text-sm mt-[14px] pb-3">Featured woman collections that give you another vibe.</p>
                            </div>
                            <a href='#' className="text-base font-medium underline underline-offset-2">Shop Now.</a>
                        </div>
                    </div>
                    <div className="flex flex-row gap-x-8 mt-8">
                        <div className="relative w-full h-[284px] bg-black flex items-center justify-center" data-aos="fade-up">
                            <Image 
                                src={Speaker}
                                width={220} 
                                height={220} 
                                alt="Speakers" 
                                className="object-cover" 
                            />
                            <div className="absolute bottom-3 left-10 p-4 text-white">
                                <h1 className="text-2xl font-semibold">Speakers</h1>
                                <p className="text-sm mt-[14px] pb-3">Amazon wireless speakers</p>
                                <a href='#' className="text-base font-medium underline underline-offset-2">Shop Now.</a>
                            </div>
                        </div>
                        <div className="relative w-full h-[284px] bg-black flex items-center justify-center" data-aos="fade-up">
                            <Image 
                                src={Parfume}
                                width={220} 
                                height={220} 
                                alt="Perfume" 
                                className="object-cover filter drop-shadow-grey" 
                            />
                            <div className="absolute bottom-3 left-10 p-4 text-white">
                                <h1 className="text-2xl font-semibold">Perfume</h1>
                                <p className="text-sm mt-[14px] pb-3">GUCCI INTENSE OUD EDP</p>
                                <a href='#' className="text-base font-medium underline underline-offset-2">Shop Now.</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;
