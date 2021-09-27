import React, { useState } from 'react'
import Image from 'next/dist/client/image';
import { StarIcon } from '@heroicons/react/solid';
import Currency from 'react-currency-formatter';
import prime from './image/Prime-tag.png';
import {useDispatch} from 'react-redux';
import { addToBasket } from '../slices/basketSlice';
function Product({id, title, price, description, category, image}) {
    const max_rating = 5;
    const min_rating = 1;
    const [rating] = useState(Math.floor(Math.random() * (max_rating - min_rating + 1 )) + min_rating)
    const hasPrime = useState(Math.random() < 0.5);
    const dispatch = useDispatch()
    const addBasket = () => {
        const product ={
            id, title, price, description, category, image
        }
        //Sending the product as an action to the redux store. 
        dispatch(addToBasket(product))
    }

    return (
        <div className="relative flex flex-col m-5 bg-white z-30 p-5">
            <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>
            <Image
                src={image}
                width={200}
                height={200}
                objectFit="contain"
            />
            <h4 className="my-2">{title}</h4>
            <div className="flex">
                {Array(rating).fill().map((_, i) => (
                    <StarIcon className="h-5 w-5" />
                    
                ))}
            </div>
            <p className="text-cs my-2 line-clamp-2">{description}</p>
            <div>
                <Currency quantity={price} currency="USD" />
            </div>

            {hasPrime[0] && (
                <div className="flex items-center space-x-2 mt-3">
                    <Image src={prime}  width={60} height={60} alt="" />
                    <p>Free next-day delivery</p>
                </div>
                
            )}
            <button onClick={addBasket} className="mt-auto button">Add to Basket</button>
        </div>
    )
}

export default Product
