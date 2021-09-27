import { StarIcon } from "@heroicons/react/solid";
import Image from "next/dist/client/image";
import Currency from 'react-currency-formatter';
import { useDispatch } from "react-redux";
import prime from '../components/image/Prime-tag.png'
import { removeFromBasket } from '../slices/basketSlice';


function CheckoutProduct({id, title, rating, price, description, category, image, hasPrime}) {
    const dispatch = useDispatch();
    const removeItemFromBasket = () => {
        dispatch(removeFromBasket({ id }))

    }

    return (
        <div className="grid grid-cols-5">
            <Image src={image} width={200} height={200} objectFit="contain" />
            
            <div className="col-span-3 mx-5" >
                <p> {title} </p>
                <div className="flex">
                    {Array(rating).fill().map((_,i)=>(
                        <StarIcon key={i} className="h-5"/>
                    ))}
                </div>

                <p className="text-xs mt-2 mb-2 line-clamp-3">{description}</p>
                <Currency quantity={price} currency="USD" />

                {hasPrime[0] && (
                    <div className="flex items-center space-x-2" >
                        <Image src={prime} alt="" width={60} height={60} />
                        <p className="text-xs pl-2">Free Next Day Delivery</p>
                    </div>
                )}

            </div>
            <div className="flex flex-col space-y-2 my-auto justify-self-end">
                <button onClick={() => removeItemFromBasket()} className="button">Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
