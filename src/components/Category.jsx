// src/components/Category.jsx
import React from 'react';
import { productData } from '@/lib/data';
import  Point  from "@/components/Point";

const Category = () => {
    const filterSubCategory = productData
        .map(product => ({ subCategory: product.subCategory, icon: product.icon }))
        .filter((subCategoryObj, index, self) => index === self.findIndex((t) => t.subCategory === subCategoryObj.subCategory));

    return (
        <div className="mt-12 lg:mt-20 ms-[10px] md:ms-[70px] w-[95%] md:w-[90%] border-b-2 border-base-300 pb-20">
            <Point text="Categories" />
            <div className="mt-2 flex items-end">
                <div className="text-2xl md:text-4xl lg:text-[36px] font-bold">Browse By Category</div>
            </div>
            <div className="overflow-x-auto scrollbar-hide">
                <div className="flex gap-4 sm:gap-6 md:gap-8 mt-10 md:mt-14 w-max">
                    {filterSubCategory.map((subCategoryObj, index) => (
                        <div
                            key={index}
                            className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-36 border-2 border-black p-2 flex flex-col items-center justify-center hover:text-white hover:bg-red-500 transition duration-200 cursor-pointer"
                            data-aos="zoom-in"
                            data-aos-duration="500"
                        >
                            <i className={`${subCategoryObj.icon} text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2`}></i>
                            <div className="text-sm sm:text-base font-semibold text-center">
                                {subCategoryObj.subCategory}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Category;
