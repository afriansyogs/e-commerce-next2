// src/components/OurProduct.jsx
'use client';

import React, { useEffect } from 'react';
import { productData } from '@/lib/data';
import Image from 'next/image';
import  ButtonAllProduct  from "@/components/ButtonAllProduct";
import  Point  from "@/components/Point";

const OurProduct = () => {
    return (
        <div className="mt-16 ms-[10px] md:ms-[70px] w-[95%] md:w-[90%]">
            <Point text="Our Product" />
            <div className="mt-2 flex items-end">
                <div className="text-2xl md:text-4xl lg:text-[36px] font-bold">
                    Explore Our Products
                </div>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 mt-11 justify-center">
                {productData.slice(0, 8).map((item, index) => (
                    <div key={index} className="group relative card bg-base-100 w-72 shadow-xl overflow-hidden" data-aos="fade-up">
                        <figure className="w-full h-48 flex justify-center items-center bg-gray-200 relative">
                            <div className="absolute top-3 right-3">
                                <button className="w-8 h-8 bg-white flex items-center justify-center rounded-full active:scale-110 hover:bg-red-500 hover:text-white transition duration-200">
                                    <i className="fa-regular fa-heart"></i>
                                </button>
                                <button className="mt-2 w-8 h-8 bg-white flex items-center justify-center rounded-full active:scale-110 hover:bg-black hover:text-white transition duration-200">
                                    <i className="fa-regular fa-eye"></i>
                                </button>
                            </div>
                            <Image src={item.images} alt={item.productName}width={288} height={192} className="max-w-full max-h-full object-contain" responsive="true"/>
                            <div className="absolute inset-x-0 bottom-0 transition-transform transform translate-y-full group-hover:translate-y-0 duration-300 flex justify-center bg-black py-2 hover:bg-gray-300 text-white hover:text-black cursor-pointer">
                                <div className="font-bold">
                                    Buy Now
                                </div>
                            </div>
                        </figure>
                        <div className="card-body pt-2">
                            <h2 className="text-[16px] font-medium mt-5">{item.productName}</h2>
                            <div className="flex">
                                <p className='text-[16px] font-medium text-red-500'>{item.harga.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</p>
                            </div>
                            <div className="text-sm font-semibold text-gray-500">
                                ({item.terjual})
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-24 bg-transparent">
                <ButtonAllProduct text="View All Products" />
            </div>
        </div>
    );
};

export default OurProduct;
