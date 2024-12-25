"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation"; 
import Link from 'next/link';
import { menuData } from '@/lib/data';

const Navbar = () => {
    const pathname = usePathname(); // Mendapatkan pathname dari URL aktif
    const [open, setOpen] = useState(false);

    const isActive = (url) => pathname === url; // Menentukan apakah URL aktif sesuai dengan link

    return (
        <div className="relative">
            <div className="navbar bg-base-100 border-b-2 border-base-300">
                <div className="navbar-start">
                    <span className="ms-1 lg:mx-16 text-2xl font-bold">Exclusive</span>
                </div>
                <div className="navbar-center hidden lg:flex me-12 justify-center">
                    <ul className="menu-horizontal px-1 flex items-end justify-center space-x-5">
                        {menuData.map((item, index) => (
                            item.menu === 'Sign Up' ? (
                                <li key={index} className="flex items-center">
                                    <a
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-sm h-5 pt-1 rounded-lg border-2 active:scale-105 font-semibold transform duration-200 bg-black text-white border-black hover:bg-white hover:text-black hover:border-black"
                                    >
                                        {item.menu}
                                    </a>
                                </li>
                            ) : (
                                <li key={index} className={`flex items-center ${isActive(item.url) ? "font-bold" : ""}`}>
                                    <Link href={item.url} passHref>
                                        <span className={`relative after:content-[''] after:block after:w-full after:h-[2px] after:bg-black after:mt-[4px] 
                                            ${isActive(item.url) ? "after:scale-x-100 after:origin-left after:transition after:duration-200" : "after:scale-x-0"} 
                                            hover:after:scale-x-100 hover:after:origin-left hover:after:transition hover:after:duration-200`}
                                        >
                                            {item.menu}
                                        </span>
                                    </Link>
                                </li>
                            )
                        ))}
                    </ul>
                </div>
                <div className="navbar-end">
                    <label className="hidden sm:flex input input-bordered flex items-center gap-2">
                        <input type="text" className="grow" placeholder="Search" />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70"
                        >
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </label>
                    <div className="flex">
                        <Link href="" className="btn btn-ghost btn-circle hover:text-black">
                            <i className="fa-regular fa-heart"></i>
                        </Link>
                        <Link href="" className="btn btn-ghost btn-circle hover:text-black">
                            <i className="fa-solid fa-cart-shopping"></i>
                        </Link>
                        <Link href="" className="btn btn-ghost btn-circle hover:text-black lg:me-11">
                            <i className="fa-solid fa-user"></i>
                        </Link>
                        <Link href=""
                            className="btn btn-ghost text-gray-700 hover:text-gray-900 md:hidden"
                            onClick={() => setOpen(!open)} >
                            {open ? <i className="fa-solid fa-xmark fa-lg"></i> : <i className="fa-solid fa-bars"></i>}
                        </Link>
                    </div>
                </div>
            </div>
            {/* mobile menu  */}
            {open && (
                <div className="absolute w-full bg-base-100 shadow-lg md:hidden z-50">
                    <ul className="px-1 py-3 space-y-3">
                        {menuData.map((item, index) => (
                            item.menu === 'Sign Up' ? (
                                <li key={index} className="flex items-center px-3">
                                    <a
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-sm h-5 pt-1 rounded-lg border-2 active:scale-105 font-semibold transform duration-200 bg-black text-white border-black hover:bg-white hover:text-black hover:border-black"
                                    >
                                        {item.menu}
                                    </a>
                                </li>
                            ) : (
                                <li key={index} className={`flex items-center px-3 ${isActive(item.url) ? "font-bold" : ""}`}>
                                    <Link href={item.url} passHref>
                                        <span className={`relative after:content-[''] after:block after:w-full after:h-[2px] after:bg-black after:mt-[4px] 
                                            ${isActive(item.url) ? "after:scale-x-100 after:origin-left after:transition after:duration-200" : "after:scale-x-0"} 
                                            hover:after:scale-x-100 hover:after:origin-left hover:after:transition hover:after:duration-200`}
                                        >
                                            {item.menu}
                                        </span>
                                    </Link>
                                </li>
                            )
                        ))}
                        <li className="px-3">
                            <label className="input input-bordered flex items-center gap-2">
                                <input type="text" className="grow" placeholder="Search" />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </label>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
