'use client';

import React, { useEffect } from 'react';
import { contactData } from '@/lib/data';

const ContactCompany = () => {
    useEffect(() => {
        if (typeof window !== 'undefined' && window.AOS) {
            window.AOS.init({
                duration: 1000,
                once: true,
            });
        }
    }, []);

    return (
        <div className="h-auto my-5">
            <h1 className='mt-3 text-center text-4xl font-bold'>Contact</h1>
            <div className="w-[90%] mx-auto mt-10">
                <div className="flex flex-wrap gap-10 justify-center items-center" data-aos="zoom-in">
                    {contactData.map((item) => (
                        <div key={item.id} className="w-64 h-40 border-2 border-black rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out bg-white hover:bg-black hover:text-white hover:scale-105 active:scale-95">
                            <div className="flex flex-col items-center justify-center text-center">
                                <i className={`${item.icon} fa-2xl mt-10`} aria-hidden="true"></i>
                                <h1 className="text-lg font-bold pt-6">{item.name}</h1>
                                <h1 className="text-lg font-semibold mt-0">{item.data}</h1>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-10 pb-10" data-aos="fade-up">
                    <div className="flex items-center justify-center space-x-2">
                        <div className="w-96 border-2 border-black mt-3 me-5"></div>
                        <h1 className='text-5xl font-bold'>Location</h1>
                        <i className="fa-solid fa-location-dot text-red-500 pe-4 mt-1 text-[2.6rem]" aria-hidden="true"></i>
                        <div className="w-96 border-2 border-black mt-3"></div>
                    </div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.666307543373!2d106.82458402475007!3d-6.175408343811958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2db8c5617%3A0x4e446b7ac891d847!2sMonas%2C%20Gambir%2C%20Kecamatan%20Gambir%2C%20Kota%20Jakarta%20Pusat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1724207839247!5m2!1sid!2sid"
                        className='w-full h-[500px] mt-5 rounded-2xl'
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default ContactCompany;
