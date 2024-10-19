import React from 'react';

const ButtonAllProduct = ({ text }) => {
    return (
        <button className='w-72 h-14 rounded-md bg-red-500 text-white border-2 hover:bg-white hover:text-red-500 hover:border-red-500 active:scale-110 transition duration-200'>
            {text}
        </button>
    );
};

export default ButtonAllProduct;