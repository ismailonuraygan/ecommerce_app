import React from 'react'
import Image from "next/image";
import logo from '../public/image/download-removebg-preview.png';
import {MenuIcon, SearchIcon , ShoppingCartIcon} from '@heroicons/react/outline';

function Header() {
    return (
        <header>
            <div className="flex items-center bg-yellow-300 p-1 flex-grow">
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <Image
                         src={logo}
                        width={100}
                        height={70}
                        objectFit="contain"
                        className="cursor-pointer"
                    />
                </div>
                {/* Search */}
                <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-gray-400 hover:bg-gray-500">
                    <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4" type="text" />
                    <SearchIcon className="h-12 p-4"/>
                </div>
            </div>
            <div>

            </div>
        </header>
    )
}

export default Header;
