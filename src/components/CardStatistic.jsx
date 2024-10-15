import React from 'react';
import { fieldStatistic } from '@/lib/data';
const CardStatistic = () => {
    return (
        <div className="flex flex-row gap-x-16 justify-center mb-32" data-aos="zoom-in" data-aos-duration="500">
            {fieldStatistic.map((items, index) => (
                <div 
                    key={index} 
                    className="flex flex-col items-center justify-center w-64 h-60 border-2 border-black bg-transparent hover:bg-red-500 hover:text-white group transition duration-105"
                >
                    <div className="w-20 h-20 rounded-full bg-black border-8 border-gray-300 text-xl text-white flex items-center justify-center mb-2 group-hover:border-red-300 group-hover:bg-white">
                        <i className={`fa-solid ${items.iconStatistic} fa-lg group-hover:text-black transition`}></i>
                    </div>
                    <div className='items-center justify-center'>
                        <h1 className='mt-2 font-bold text-3xl text-center'>{items.jumlahStatistic}</h1>
                        <p className='text-sm text-center mt-3'>{items.descriptionStatistic}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardStatistic;
