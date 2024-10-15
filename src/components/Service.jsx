// src/components/Service.jsx
'use client';
import React, { useState, useEffect } from 'react';

const Service = () => {
    useEffect(() => {
        if (window.AOS) {
            window.AOS.init({
                duration: 1000, 
                once: true,    
            });
        }
    }, []);

    return (
        <div className="w-[90%] ms-[70px] mb-36 mt-24">
            <div className="flex flex-row gap-x-36 justify-center">
                {/* Layanan Pengiriman */}
                <div className="flex flex-col items-center" data-aos="zoom-out">
                    <div className="w-20 h-20 rounded-full bg-black border-8 border-gray-300 text-xl text-white flex items-center justify-center mb-2">
                        <i className="fa-solid fa-truck-fast fa-lg"></i>
                    </div>
                    <div className='items-center justify-center'>
                        <h1 className='font-semibold text-xl text-center'>FREE AND FAST DELIVERY</h1>
                        <p className='text-sm text-center'>Free delivery for all orders over $140</p>
                    </div>
                </div>

                {/* Layanan Pelanggan */}
                <div className="flex flex-col items-center" data-aos="zoom-out">
                    <div className="w-20 h-20 rounded-full bg-black border-8 border-gray-300 text-xl text-white flex items-center justify-center mb-2">
                        <i className="fa-solid fa-headset fa-xl"></i>
                    </div>
                    <div className='items-center justify-center'>
                        <h1 className='font-semibold text-xl text-center'>24/7 CUSTOMER SERVICE</h1>
                        <p className='text-sm text-center'>Friendly 24/7 customer support</p>
                    </div>
                </div>

                {/* Jaminan Uang Kembali */}
                <div className="flex flex-col items-center" data-aos="zoom-out">
                    <div className="w-20 h-20 rounded-full bg-black border-8 border-gray-300 text-xl text-white flex items-center justify-center mb-2">
                        <i className="fa-solid fa-hand-holding-dollar fa-xl"></i>
                    </div>
                    <div className='items-center justify-center'>
                        <h1 className='font-semibold text-xl text-center'>MONEY BACK GUARANTEE</h1>
                        <p className='text-sm text-center'>We return money within 30 days</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;