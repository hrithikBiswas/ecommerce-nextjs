import React from 'react';
import Image from 'next/image';
import product1 from '@/public/product-1.webp';
import product2 from '@/public/product-2.webp';
import product3 from '@/public/product-3.webp';
import { IoMdStar } from 'react-icons/io';
import { truncateWord, truncateText } from '@/app/lib/action';
const TopRatingProduct = ({ products }) => {
    const topRatedProduct = products
        .filter((product) => Math.round(product.rating) === 5)
        .slice(0, 3);

    return (
        <div className="px-3 mb-14">
            <h2 className="text-3xl mb-8">Top Rated Products</h2>
            <div className="flex flex-col gap-3">
                {topRatedProduct.map((product) => (
                    <div
                        key={product.id}
                        className="w-full md:max-w-md p-3 border-1 border-gray-200 rounded-xl cursor-pointer group/productImg hover:border-theme-primary transition-all duration-400 ease-in-out"
                    >
                        <div className="flex flex-row gap-4">
                            <div className="overflow-hidden">
                                <Image
                                    src={product.images[0]}
                                    alt={product3}
                                    height={100}
                                    width={100}
                                    className="object-cover bg-gray-100/60 w-[140px] h-[140px] aspect-square rounded-lg group-hover/productImg:scale-110 transition-all duration-400 ease-in-out"
                                />
                            </div>
                            <div className="flex flex-col justify-between flex-grow py-3">
                                <div>
                                    <h3 className="text-gray-500">
                                        {truncateWord(product.title, 2)}
                                    </h3>
                                    <p className="">
                                        {truncateText(product.description, 22)}
                                    </p>
                                </div>
                                <div className="">
                                    <span className="flex text-yellow-400 text-medium ml-1">
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                    </span>
                                    <span className="font-bold text-gray-800">
                                        &#36; 49.00
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopRatingProduct;
