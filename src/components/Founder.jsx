import React from 'react';
import Image from 'next/image';
import { founderData } from '@/lib/data';

const Founder = () => {
    return (
        <div className="flex justify-center w-full gap-44 pt-28 pb-16">
            {founderData.map((item, index) => (
                <div key={index} className="flex flex-col items-center" data-aos="fade-up" data-aos-duration="600">
                    <div className="relative w-72 h-56 rounded-t-full bg-red-500">
                        <img 
                            src={item.founderImg} 
                            alt={item.founderName} 
                            className="absolute bottom-0 left-0 w-full h-[385px] object-cover rounded-t-full transition-transform duration-300 ease-in-out transform hover:scale-110 hover:-translate-y-5" 
                        />
                    </div>
                    <div className="text-center mt-2">
                        <h1 className="text-black font-bold text-lg">{item.founderName}</h1>
                        <h2 className="text-black font-medium text-base">{item.position}</h2>
                    </div>
                    <div className="flex gap-4 mt-3">
                        <i className="fa-brands fa-x-twitter transition-transform duration-200 ease-in-out transform hover:scale-125"></i>
                        <i className="fa-brands fa-linkedin-in transition-transform duration-200 ease-in-out transform hover:scale-125"></i>
                        <i className="fa-brands fa-instagram transition-transform duration-200 ease-in-out transform hover:scale-125"></i>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Founder;
