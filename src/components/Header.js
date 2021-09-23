import React from 'react'
import Image from "next/image";
import logo from '../public/image/mustache-161330_960_720.png';
import {MenuIcon, SearchIcon , ShoppingCartIcon} from '@heroicons/react/outline';
import { ShoppingBagIcon } from '@heroicons/react/outline';
function Header() {
    return (
        <header>
            <div className="flex items-center bg-yellow-300 p-1 flex-grow">
                <div className="mt-2 mr-4 ml-2 flex items-center flex-grow sm:flex-grow-0">
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
                {/* Right */}
                <div className="flex items-center text-sm whitespace-nowrap">
                    <div className="mx-3 cursor-pointer hover:underline">
                        <p>Cigogne</p>
                        <p className="font-extrabold">Account & List</p>
                    </div>
                    
                    <div className="mx-3 cursor-pointer hover:underline">
                        <p className="font-extrabold md:text-base">Returns</p>
                        <p className="font-extrabold md:text-base">& Orders</p>
                    </div>
                    <div className = "relative mx-5 cursor-pointer hover:underline flex items-center">
                        <span className="absolute top-0 left-7 right-0 md:right-10 h-5 w-5 bg-black text-center rounded-full text-white">0</span>
                        <ShoppingBagIcon className="h-10"/> 
                        <p className="hidden sm:flex font-extrabold md:text-base mt-2">Basket</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center bg-yellow-100  p-2 space-x-3 pl-5">
                <p className="font-bold flex items-center hover:underline cursor-pointer">
                    <MenuIcon className="h-6 mr-1"/> 
                    All
                </p>
                <p className="font-bold hover:underline cursor-pointer">Today' Deals</p>
                <p className="font-bold hover:underline cursor-pointer">Customer Service</p>
                <p className="hidden sm:inline-block font-bold hover:underline cursor-pointer">Gift Cards</p>
            </div>
        </header>
    )
}

export default Header;
