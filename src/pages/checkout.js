import Header from "../components/Header"
import Image from 'next/image';
import checkout_banner from '../components/image/70143581-e-commerce-banner.jpg'
import { useSelector } from "react-redux";
import { selectItems, selectTotalPrice } from "../slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import Currency from 'react-currency-formatter';
import { useSession } from "next-auth/client";

function Checkout() {
    const items = useSelector(selectItems);
    const session = useSession();
    const totalPrice = useSelector(selectTotalPrice);
    console.log(session);
    return (
        <div className="bg-gray-100" >
            <Header />
            <main className="lg:flex max-w-screen-2xl mx-auto">
                <div className="flex-grow m-5 shadow-sm">
                    <Image
                     src={checkout_banner}
                     width={1024}
                     height={341}
                     objectFit="contain"
                     />
                <div className="flex flex-col p-5 space-y-10 bg-white">
                    <h1 className="text-3xl border-b pb-4">
                        My Basket
                    </h1>

                        {items.length !== 0 ? 
                         items.map((item,i) => (
                            <CheckoutProduct
                                key={i} 
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                description={item.description}
                                category={item.category}
                                image={item.image}
                                hasPrime={item.hasPrime}
                                rating={item.rating}
                            />
                        )): 'Basket is empty'}
                </div>
                </div>
                {/* Right Sidebar */}
                <div className="flex flex-col bg-white p-10">
                    {items.length > 0 && (
                        <div>
                            <h2 className="whitespace-nowrap">
                                Total ({items.length} items): 
                                <span className="font-bold ml-2">
                                <Currency quantity={totalPrice} currency="USD" />
                                </span>
                            </h2>
                            <button disabled={!session[0]} className={`button mt-2 ${!session[0] && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300'}`}>
                                {!session ? "Sign in to checkout" : "Proceed to checkout"}
                            </button>
                        </div>
                    )}
                </div>
            </main>

        </div>
    )
}

export default Checkout
