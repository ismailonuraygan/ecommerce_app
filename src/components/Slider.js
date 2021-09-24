import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import img1 from './image/first.jpg';
import img2 from './image/second.jpg';
import img3 from './image/third.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Image from 'next/dist/client/image';

const Slider = () => {
    return (
        <div className="relative">
            <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20"/>
            <Carousel
                    autoPlay
                    infiniteLoop
                    showStatus={false}
                    showIndicators={false}
                    showThumbs={false}
                    interval={5000}
                >
                    <div>
                        <Image src={img1} alt="" />
                    </div>
                    <div>
                        <Image src={img2} alt="" />
                    </div>
                    <div>
                        <Image src={img3} alt="" />
                    </div>

            </Carousel>
            
        </div>
    )
}

export default Slider
