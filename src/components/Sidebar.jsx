// src/components/Sidebar.jsx
import React from 'react';
import Link from 'next/link';
import {sidebarCategory} from '@/lib/data'


const Sidebar = () => {
    return (
        <div className="h-97 md:w-60 lg:w-72 px-12 flex flex-col border-e-2 border-base-300">
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
    );
};

export default Sidebar;
