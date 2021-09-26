import Header from "../components/Header"
import Image from 'next/image';
import checkout_banner from '../components/image/70143581-e-commerce-banner.jpg'
function Checkout() {
    return (
        <div className="bg-gray-100" >
            <Header />
            <main className="lg:flex max-w--screen-2xl mx-auto">
                <div className="flex-grow m-5 shadow-sm">
                    <Image
                     src={checkout_banner}
                     width={1024}
                     height={341}
                     objectFit="contain"
                     />
                <div className="flex flex-col p-5 space-y-10 bg-white">
                        <h1 className="text-3xl border-b pb-4">Your Shopping Basket</h1>
                </div>
                </div>
            </main>

        </div>
    )
}

export default Checkout
