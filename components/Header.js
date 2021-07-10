import React from 'react';
import Image from 'next/image';

const Header = () => {
    return (
        <div className="flex items-center">
            {/* left */}

            <div>
                <Image alt="" src="https://links.papareact.com/5me" width={40} height={40} layout="fixed" />
            </div>
            <div className="flex items-center rounded-full ml-2 bg-gray-100 p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input className="flex ml-2 center bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search Facebook" />
            </div>

            {/* center */}
            {/* right */}
        </div>
    );
};

export default Header;