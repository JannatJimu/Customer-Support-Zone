import React from 'react'
import InProgressCounter from '../InProgressCounter/InProgressCounter'

const Banner = ({ inProgressCount, resolvedCount }) => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-4 md:py-6">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <InProgressCounter count={inProgressCount} />

                <div className="flex flex-col justify-center items-center 
                h-[140px] md:h-[180px] w-full rounded-xl text-white
                bg-gradient-to-r from-green-500 to-emerald-600">

                    <p>Resolved</p>
                    <h1 className="text-3xl font-bold">
                        {resolvedCount}
                    </h1>

                </div>

            </div>

        </div>
    )
}

export default Banner