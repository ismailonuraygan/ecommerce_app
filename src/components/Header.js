import React from 'react'
import Image from "next/image";
import logo from '../public/image/amazonLogo.png';

function Header() {
    return (
        <header>
            <div>
                <div>
                    <Image
                         src={logo}
                        width={150}
                        height={40}
                        objectFit="contain"
                        className="cursor-pointer"
                    />
                </div>
            </div>
            <div>

            </div>
        </header>
    )
}

export default Header;
