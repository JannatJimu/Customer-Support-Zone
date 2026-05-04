import React from 'react';
import InProgressCounter from '../InProgressCounter/InProgressCounter';
import ResolveCounter from '../ResolveCounter/ResolveCounter';

const Banner = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 mt-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <InProgressCounter />
                <ResolveCounter />
            </div>

        </div>
    );
};

export default Banner;