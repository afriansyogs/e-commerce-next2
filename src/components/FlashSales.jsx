'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { productData } from '@/lib/data';

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
        <div className="mt-14 ms-[70px] w-[90%] border-b-2 border-base-300 pb-20">
            <div className="flex items-center">
                <div className="w-5 h-10 bg-red-600 rounded-md"></div>
                <div className="ms-4 text-md text-red-600 font-semibold">Today&apos;s</div>
            </div>
            <div className="mt-2 flex items-end">
                <div className="text-[36px] font-bold">
                    Flash Sales
                </div>
                <div className="grid grid-flow-col gap-5 text-center auto-cols-max ms-20">
                    <div className="flex flex-col">
                        <div className="text-sm font-medium">Days</div>
                        <span className="countdown font-mono text-4xl font-bold">
                            <span className='mx-auto' style={{ "--value": 3 }}></span>
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <div className="text-sm font-medium">Hours</div>
                        <span className="countdown font-mono text-4xl font-bold">
                            <span className='mx-auto' style={{ "--value": 10 }}></span>
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <div className="text-sm font-medium">Minutes</div>
                        <span className="countdown font-mono text-4xl font-bold">
                            <span className='mx-auto' style={{ "--value": 24 }}></span>
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <div className="text-sm font-medium">Seconds</div>
                        <span className="countdown font-mono text-4xl font-bold">
                            <span className='mx-auto' style={{ "--value": counter }}></span>
                        </span>
                    </div>
                </div>
            </div>
            <div className="overflow-x-auto scrollbar-hide">
                <div className="flex gap-8 mt-12 w-max pb-8">
                    {filteredProductFlashSale.map((item, index) => (
                        <div key={index} className="group relative card bg-base-100 w-72 shadow-xl overflow-hidden" data-aos="fade-up">
                            <figure className="w-full h-48 flex justify-center items-center bg-gray-200 relative">
                                <div className="absolute top-3 left-3 w-14 h-7 bg-red-600 flex items-center justify-center rounded">
                                    <h1 className="text-white text-sm">
                                        -{item.discount}%
                                    </h1>
                                </div>
                                <div className="absolute top-3 right-3">
                                    <button className="w-8 h-8 bg-white flex items-center justify-center rounded-full active:scale-110 hover:bg-red-500 hover:text-white transition duration-200">
                                        <i className="fa-regular fa-heart"></i>
                                    </button>
                                    <button className="mt-2 w-8 h-8 bg-white flex items-center justify-center rounded-full active:scale-110 hover:bg-black hover:text-white transition duration-200">
                                        <i className="fa-regular fa-eye"></i>
                                    </button>
                                </div>
                                <Image 
                                    src={item.images}
                                    alt={item.productName} 
                                    layout="fill" 
                                    objectFit="contain" 
                                    className="max-w-full max-h-full object-contain"
                                />
                                <div className="absolute inset-x-0 bottom-0 transition-transform transform translate-y-full group-hover:translate-y-0 duration-300 flex justify-center bg-black py-2 hover:bg-gray-300 text-white hover:text-black cursor-pointer">
                                    <div className="font-bold">Buy Now</div>
                                </div>
                            </figure>
                            <div className="card-body pt-2">
                                <h2 className="text-[16px] font-medium mt-5">{item.productName}</h2>
                                <div className="flex">
                                    <p className='text-[16px] font-medium text-red-500'>
                                        {(item.harga - item.discount).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}
                                    </p>
                                    <p className='text-[16px] font-medium text-slate-400'>
                                        <s>{item.harga.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</s>
                                    </p>
                                </div>
                                <div className="text-sm font-semibold text-gray-500">
                                    ({item.terjual})
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center mt-16 bg-transparent">
                <button className='w-72 h-14 rounded-md bg-red-500 text-white border-2 hover:bg-white hover:text-red-500 hover:border-red-500 active:scale-110 transition duration-200'>
                    View All Products
                </button>
            </div>
        </div>
    );
};

export default FlashSales;
