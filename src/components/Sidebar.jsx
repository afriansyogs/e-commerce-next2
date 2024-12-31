// src/components/Sidebar.jsx
"use client";
import { useState } from 'react';
import Link from 'next/link';
import {sidebarCategory} from '@/lib/data'


const Sidebar = () => {
    const [sideIsOpen, setSideOpen] = useState(false);

    const toggleSidebar = () => {
        setSideOpen(!sideIsOpen);
    };

    return (
    <>
        <div className="hidden lg:block h-97 md:w-60 lg:w-72 px-12 flex flex-col border-e-2 border-base-300">
            <nav className="flex-1 p-2 pt-4">
                <ul className="">
                    {sidebarCategory.map((item, index) => (
                        <li key={index} className="text-black block py-2.5 px-4 rounded transition duration-200 hover:bg-black hover:text-white">
                            <Link href={item.url}>
                                {item.category}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>

        {/* sidebar mobile  */}
        <div className="relative h-auto lg:hidden">
            {sideIsOpen && (
                <div 
                className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-20 lg:hidden"
                onClick={toggleSidebar}
                />
            )}
            <button
                className={`lg:hidden absolute top-0 z-30 bg-trasnparant text-sm text-red-600 font-bold ms-2 mt-2 rounded-r-lg transition-all duration-300 flex items-center ${
                    sideIsOpen ? 'left-64' : 'left-0'
                }`}
                onClick={toggleSidebar}
            >
                {!sideIsOpen && <span className="me-1 md:ms-4">Category</span>}
                {sideIsOpen ? (
                    <i className="fa-solid fa-angles-left"></i>
                ) : (
                    <i className="fa-solid fa-angles-right"></i>
                )}
            </button>

            {/* Sidebar */}
            <div 
                className={`fixed top-0 left-0 z-20 w-64 bg-white h-full p-5 transition-transform duration-300 ease-in-out ${
                sideIsOpen ? 'translate-x-0' : '-translate-x-full'
                } lg:hidden`}
            >
                <h2 className="text-red-500 font-bold text-2xl mb-4">Categories</h2>
                <ul className="text-black">
                {sidebarCategory.map((item, index) => (
                    <li key={index} className="mb-4 hover:bg-black ">
                        <a href={item.url} className="hover:text-white ">
                            {item.category}
                        </a>
                    </li>
                ))}
                </ul>
            </div>
        </div>
    </>
    );
};

export default Sidebar;
