import React from 'react'

const InProgressCounter = ({ count }) => {
    return (
        <div className="flex flex-col justify-center items-center 
        h-[140px] md:h-[180px] w-full rounded-xl text-white
        bg-gradient-to-r from-purple-500 to-indigo-500">

            <p className="text-sm md:text-base opacity-90">
                In-Progress
            </p>

            <h1 className="text-3xl md:text-4xl font-bold">
                {count}
            </h1>
        </div>
    )
}

export default InProgressCounter