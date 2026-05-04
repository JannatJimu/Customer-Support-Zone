import React from 'react';

const ResolveCounter = () => {
    return (
        <div className="flex flex-col justify-center items-center 
        h-[140px] md:h-[180px] w-full rounded-xl text-white
        bg-gradient-to-r from-green-500 to-teal-500">

            <p className="text-sm md:text-base opacity-90">
                Resolved
            </p>

            <h1 className="text-3xl md:text-4xl font-bold">
                0
            </h1>
        </div>
    );
};

export default ResolveCounter;