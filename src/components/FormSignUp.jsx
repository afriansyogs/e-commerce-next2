import React from 'react';
import Link from 'next/link'; 
import Image from 'next/image';

const FormSignUp = () => {
    return (
        <div className="flex flex-wrap w-full bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="w-full lg:w-1/2 flex items-end justify-end md:px-8 lg:px-0">
                <Image src="/assets/img/Sunday.png" alt="Sunday" width={2907} height={2420} responsive="true"/>
            </div>
            <div className="w-full lg:w-1/2 p-4 md:px-8 lg:px-0">
                <div className="lg:w-[380px] mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-center text-black">Create Account</h1>
                    <form className='mt-10'>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input id="name" type="text" placeholder="Enter your name"
                                className="border-b border-black focus:outline-none w-full pb-2"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input id="email" type="email" placeholder="Enter your email"
                                className="border-b border-black focus:outline-none w-full pb-2"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input id="password" type="password" placeholder="Enter your password"
                                className="border-b border-black focus:outline-none w-full pb-2"
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button type="submit" className="w-full h-14 bg-red-500 rounded-md border-2 border-red-500 hover:bg-white hover:text-red-500 active:scale-105 transform duration-200 text-white font-semibold">
                                Register
                            </button>
                        </div>
                        <div className="text-center text-base font-medium my-1">Or</div>
                        <div className="flex items-center justify-between">
                            <button type="submit" className="w-full h-14 rounded-md border-2 border-black hover:bg-black hover:text-white active:scale-105 transform duration-200 text-black font-semibold">
                                <div className="flex justify-center items-center space-x-3">
                                    <Image src="/assets/img/IconGoogle.png" width={24} height={24} alt="Google Icon" intrinsic />
                                    <div className='text-base'>Sign Up with Google</div>
                                </div>
                            </button>
                        </div>
                        <div className="mt-8 text-center text-base">
                            Already have an account? 
                            <Link href="/Login">
                                <div className='font-bold underline underline-offset-2 cursor-pointer hover:text-blue-600'>Login</div>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormSignUp;
