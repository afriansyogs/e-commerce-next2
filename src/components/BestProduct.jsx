// src/components/BestProduct.jsx
'use client';

import React, { useState, useEffect } from 'react';
import { productData } from '@/lib/data';
import Image from 'next/image';
import  ButtonAllProduct  from "@/components/ButtonAllProduct";
import  Point  from "@/components/Point";
// import ProductGambar from '/assets/img/bestSpeker.png';

const BestProduct = () => {
    const [counter, setCounter] = useState(60);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prevCounter) => (prevCounter > 0 ? prevCounter - 1 : 0));
        }, 1000);
    
        return () => clearInterval(interval);
    }, []);

    const sortedProducts = productData.sort((a, b) => b.terjual - a.terjual);
    const bestProducts = sortedProducts.slice(0, 10);

    return (
        <div className="mt-14 ms-[10px] md:ms-8 lg:ms-[70px] w-[95%] md:w-[91%] lg:w-[90%]">
            <Point text="This Month" />
            <div className="mt-2 flex justify-between items-end">
                <div className="text-2xl md:text-4xl lg:text-[36px] font-bold">Best Selling Products</div>
                <button className='hidden lg:block w-40 h-14 rounded-md bg-red-500 text-white border-2 hover:bg-white hover:text-red-500 hover:border-red-500 active:scale-110 transition duration-200'>View All</button>
            </div>
            <div className="overflow-x-auto scrollbar-hide">
                <div className="flex gap-4 md:gap-8 mt-8 md:mt-12 w-max pb-8">
                    {bestProducts.slice(0, 8).map((product, index) => (
                        <div key={index} className="group relative card bg-base-100 w-56 md:w-72 shadow-xl overflow-hidden" data-aos="fade-up">
                            <figure className="w-full h-36 md:h-48 flex justify-center items-center bg-gray-200 relative">
                                <div className="absolute top-3 right-3">
                                    <button className="w-8 h-8 bg-white flex items-center justify-center rounded-full active:scale-110 hover:bg-red-500 hover:text-white transition duration-200">
                                        <i className="fa-regular fa-heart"></i>
                                    </button>
                                    <button className="mt-2 w-8 h-8 bg-white flex items-center justify-center rounded-full active:scale-110 hover:bg-black hover:text-white transition duration-200">
                                        <i className="fa-regular fa-eye"></i>
                                    </button>
                                </div>
                                <Image
                                    src={product.images}
                                    alt={product.productName}
                                    width={288}
                                    height={192}
                                    className="max-w-full max-h-full object-contain"
                                />
                                <div className="absolute inset-x-0 bottom-0 transition-transform transform translate-y-full group-hover:translate-y-0 duration-300 flex justify-center bg-black py-2 hover:bg-gray-300 text-white hover:text-black cursor-pointer">
                                    <div className="font-bold">Buy Now</div>
                                </div>
                            </figure>
                            <div className="card-body pt-2">
                                <h2 className="text-[14px] md:text-[16px] font-medium mt-5">{product.productName}</h2>
                                <div className="flex">
                                    <p className='text-[14px] md:text-[16px] font-medium text-red-500'>{product.harga.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</p>
                                </div>
                                <div className="text-xs md:text-sm font-semibold text-gray-500">
                                    ({product.terjual})
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="lg:hidden flex justify-center mt-12 md:mt-16 bg-transparent">
                <ButtonAllProduct text="View All Products" />
            </div>
            
            {/* Banner */}
            <div className="mt-32 bg-black w-full h-auto lg:h-[520px] grid grid-cols-1 lg:grid-cols-2" data-aos="zoom-in" data-aos-duration="600">
                <div className="ps-5 sm:ps-10 lg:ps-14 pt-8 sm:pt-12 lg:pt-16">
                    <p className="text-lg text-green-400 font-semibold">Categories</p>
                    <div className="w-full lg:w-[430px] mt-4 sm:mt-6 text-white text-3xl sm:text-4xl lg:text-5xl font-semibold">
                        <h1 className=' hidden sm:block md:hidden lg:block'>Enhance Your</h1>
                        <h1 className="mt-2 hidden sm:block md:hidden lg:block">Music Experience</h1>
                        <h1 className='hidden md:block lg:hidden'>Enhance Your Music Experience</h1>
                    </div>
                    <div className="grid grid-flow-col gap-3 sm:gap-5 mt-6 sm:mt-8 text-center auto-cols-max">
                        <div className="flex flex-col bg-white rounded-full w-[60px] sm:w-[70px] py-2 sm:py-3">
                            <span className="countdown font-mono text-xl sm:text-2xl font-bold">
                                <span className="mx-auto" style={{ "--value": 3 }}></span>
                            </span>
                            <div className="text-xs sm:text-sm font-medium">Days</div>
                        </div>
                        <div className="flex flex-col bg-white rounded-full w-[60px] sm:w-[70px] py-2 sm:py-3">
                            <span className="countdown font-mono text-xl sm:text-2xl font-bold">
                                <span className="mx-auto" style={{ "--value": 10 }}></span>
                            </span>
                            <div className="text-xs sm:text-sm font-medium">Hours</div>
                        </div>
                        <div className="flex flex-col bg-white rounded-full w-[60px] sm:w-[70px] py-2 sm:py-3">
                            <span className="countdown font-mono text-xl sm:text-2xl font-bold">
                                <span className="mx-auto" style={{ "--value": 24 }}></span>
                            </span>
                            <div className="text-xs sm:text-sm font-medium">Minutes</div>
                        </div>
                        <div className="flex flex-col bg-white rounded-full w-[60px] sm:w-[70px] py-2 sm:py-3">
                            <span className="countdown font-mono text-xl sm:text-2xl font-bold">
                                <span className="mx-auto" style={{ "--value": counter }}></span>
                            </span>
                            <div className="text-xs sm:text-sm font-medium">Seconds</div>
                        </div>
                    </div>
                    <button className="hidden lg:block bg-green-500 w-[180px] sm:w-[200px] h-12 sm:h-14 mt-8 sm:mt-10 rounded-sm border-[3px] border-green-500 active:scale-110 transition duration-200 text-white text-sm sm:text-base font-medium text-center hover:text-green-400 hover:bg-white hover:border-green-500">
                        Buy Now!
                    </button>
                </div>
                <div className="flex items-center justify-center mt-8 lg:mt-0">
                    <Image 
                        src="/assets/img/bestSpeker.png" 
                        alt="Banner Image"
                        width={320} 
                        height={240} 
                        className="md:w-[450px] lg:w-[560px] lg:h-[410px] filter drop-shadow-white"
                    />
                </div>
                <button className="block lg:hidden bg-green-500 w-[180px] sm:w-[200px] h-12 sm:h-14 mt-8 sm:mt-10 mx-auto mb-10 rounded-sm border-[3px] border-green-500 active:scale-110 transition duration-200 text-white text-sm sm:text-base font-medium text-center hover:text-green-400 hover:bg-white hover:border-green-500">
                        Buy Now!
                </button>
            </div>
        </div>
    );
};

export default BestProduct;
