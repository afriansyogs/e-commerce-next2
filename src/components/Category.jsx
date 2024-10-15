// src/components/Category.jsx
import React from 'react';
import { productData } from '@/lib/data';

const Category = () => {
    const filterSubCategory = productData
        .map(product => ({ subCategory: product.subCategory, icon: product.icon }))
        .filter((subCategoryObj, index, self) => index === self.findIndex((t) => t.subCategory === subCategoryObj.subCategory));

    return (
        <div className="mt-20 ms-[70px] w-[90%] border-b-2 border-base-300 pb-20">
            <div className="flex items-center">
                <div className="w-5 h-10 bg-red-600 rounded-md"></div>
                <div className="ms-4 text-md text-red-600 font-semibold">Categories</div>
            </div>
            <div className="mt-2 flex items-end">
                <div className="text-[36px] font-bold">Browse By Category</div>
            </div>
            <div className="overflow-x-auto scrollbar-hide">
                <div className="flex gap-8 mt-14 w-max">
                    {filterSubCategory.map((subCategoryObj, index) => (
                        <div
                            key={index}
                            className="w-40 h-36 border-2 border-black p-2 flex flex-col items-center justify-center hover:text-white hover:bg-red-500 transition duration-200 cursor-pointer"
                            data-aos="zoom-in"
                            data-aos-duration="500"
                        >
                            <i className={`${subCategoryObj.icon} text-2xl mb-2`}></i>
                            <div className="text-base font-semibold">{subCategoryObj.subCategory}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Category;
