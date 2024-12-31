import React from 'react';

const Header = () => {
    return (
        <header className="bg-black w-full h-[65px] md:h-[44px] lg:h-12">
            <div className="flex justify-center items-center text-center pt-3">
                <div className="text-sm md:text-md text-white font-light w-[90%] lg:w-auto">
                    Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! 
                    <span className="text-sm md:text-md text-white font-semibold ms-2">ShopNow</span>
                </div>
                {/* <div className="text-md text-white font-semibold ms-3">ShopNow</div> */}
            </div>
            <div className="hidden lg:block absolute right-14 top-0 text-white">
                <ul className='menu menu-horizontal px-1'>
                    <li>
                        <details>
                            <summary className='text-white'>English</summary>
                            <ul className="bg-base-100 rounded-t-none p-2">
                                <li className='text-black hover:bg-black hover:text-white rounded-lg'>
                                    <a href="#">Indonesia</a>
                                </li>
                                <li className='text-black hover:bg-black hover:text-white rounded-lg'>
                                    <a href="#">Spanyol</a>
                                </li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;