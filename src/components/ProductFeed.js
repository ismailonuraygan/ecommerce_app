import React from 'react'
import Product from './Product';
import img4 from './image/4.jpg';
import Image from 'next/dist/client/image';
import styles from './ProductFeed.module.css';


const ProductFeed = ({ products }) => {
    return (
        <div className="grid relative  mx-auto my-0 max-w-screen-2xl grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-28">
            {products.slice(0, 4).map(({ id, title, price, description, category, image }) => (
                <Product
                    key={id}
                    id={id}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                />
            ))}
            <img className="md:col-span-full w-full" src="https://links.papareact.com/dyz" alt=""  />


            <div className={styles.secondFeed}>
                {products.slice(4, 5).map(({ id, title, price, description, category, image }) => (
                    <Product
                        key={id}
                        id={id}
                        title={title}
                        price={price}
                        description={description}
                        category={category}
                        image={image}
                    />
                ))}
            </div>
                {products.slice(5, products.length).map(({ id, title, price, description, category, image }) => (
                    <Product
                        key={id}
                        id={id}
                        title={title}
                        price={price}
                        description={description}
                        category={category}
                        image={image}
                    />
                ))}
            </div>
    )
}

export default ProductFeed
