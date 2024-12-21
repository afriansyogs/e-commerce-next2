'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { productData } from '@/lib/data';
import  ButtonAllProduct  from "@/components/ButtonAllProduct";
import  Point  from "@/components/Point";

const FlashSales = () => {
    const [counter, setCounter] = useState(60);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prevCounter) => (prevCounter > 0 ? prevCounter - 1 : 0));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const filteredProductFlashSale = productData.filter(item => item.discount);

    return (
        <div className="mt-14 ms-[10px] md:ms-[70px] w-[95%] md:w-[90%] border-b-2 border-base-300 pb-20">
            <Point text="Today&apos;s" />
            <div className="flex flex-wrap items-end gap-4 md:gap-8">
                <div className="text-2xl md:text-4xl lg:text-[36px] font-bold">
                    Flash Sales
                </div>
                <div className="flex ms-5 lg:ms-10 gap-2 md:gap-4 lg:gap-5 text-center auto-cols-max">
                    {['Days', 'Hours', 'Minutes', 'Seconds'].map((unit, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <div className="text-xs md:text-sm lg:text-md font-medium">{unit}</div>
                            <span className="countdown font-mono text-xl md:text-3xl lg:text-4xl font-bold">
                                <span className="mx-auto" style={{ "--value": [3, 10, 24, counter][i] }}></span>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="overflow-x-auto scrollbar-hide">
                <div className="flex gap-4 md:gap-8 mt-8 md:mt-12 w-max pb-8">
                    {filteredProductFlashSale.map((item, index) => (
                        <div key={index} className="group relative card bg-base-100 w-56 md:w-72 shadow-xl overflow-hidden" data-aos="fade-up">
                            <figure className="w-full h-36 md:h-48 flex justify-center items-center bg-gray-200 relative">
                                <div className="absolute top-2 left-2 w-12 md:w-14 h-6 md:h-7 bg-red-600 flex items-center justify-center rounded">
                                    <h1 className="text-white text-xs md:text-sm">
                                        -{item.discount}%
                                    </h1>
                                </div>
                                <div className="absolute top-2 right-2 z-10">
                                    <button className="w-7 md:w-8 h-7 md:h-8 bg-white flex items-center justify-center rounded-full active:scale-110 hover:bg-red-500 hover:text-white transition duration-200">
                                        <i className="fa-regular fa-heart"></i>
                                    </button>
                                    <button className="mt-1 md:mt-2 w-7 md:w-8 h-7 md:h-8 bg-white flex items-center justify-center rounded-full active:scale-110 hover:bg-black hover:text-white transition duration-200">
                                        <i className="fa-regular fa-eye"></i>
                                    </button>
                                </div>
                                <Image
                                    src={item.images}
                                    alt={item.productName}
                                    fill
                                    style={{ objectFit: "contain" }}
                                    className="max-w-full max-h-full object-contain z-0"
                                />
                                <div className="absolute inset-x-0 bottom-0 transition-transform transform translate-y-full group-hover:translate-y-0 duration-300 flex justify-center bg-black py-2 hover:bg-gray-300 text-white hover:text-black cursor-pointer z-10">
                                    <div className="font-bold">Buy Now</div>
                                </div>
                            </figure>
                            <div className="card-body pt-2">
                                <h2 className="text-[14px] md:text-[16px] font-medium mt-2 md:mt-5">{item.productName}</h2>
                                <div className="flex gap-1 md:gap-2">
                                    <p className="text-[14px] md:text-[16px] font-medium text-red-500">
                                        {(item.harga - item.discount).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}
                                    </p>
                                    <p className="text-[14px] md:text-[16px] font-medium text-slate-400">
                                        <s>{item.harga.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</s>
                                    </p>
                                </div>
                                <div className="text-xs md:text-sm font-semibold text-gray-500">
                                    ({item.terjual})
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center mt-12 md:mt-16 bg-transparent">
                <ButtonAllProduct text="View All Products" />
            </div>
        </div>
    );
};

export default FlashSales;
