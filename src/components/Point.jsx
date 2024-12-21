import React from 'react';

const Point = ({ text }) => {
    return (
        <div className="flex items-center">
            <div className="w-4 h-7 lg:w-5 lg:h-10 bg-red-600 rounded-md"></div>
            <div className="ms-2 lg:ms-4 text-md text-red-600 font-semibold">{text}</div>
        </div>
    );
};

export default Point;