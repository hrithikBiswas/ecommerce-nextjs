'use client';
import Image from 'next/image';
import { Button } from '@heroui/react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { truncateWord, truncateText } from '@/app/lib/action';
import product1 from '@/public/product-1.webp';
import product2 from '@/public/product-2.webp';
import product3 from '@/public/product-3.webp';
import product4 from '@/public/product-4.webp';
import { FiShoppingCart } from 'react-icons/fi';
import { LuEye } from 'react-icons/lu';
import { IoMdHeartEmpty } from 'react-icons/io';

export default function BestsellSwiper({ products }) {
    const bestSellingProducts = products.filter((product) => {
        const highestRatinReview = product.reviews.filter(
            (review) => review.rating === 4
        );
        return highestRatinReview.length >= 2;
    });

    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                className="mySwiper"
                breakpoints={{
                    600: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
            >
                {bestSellingProducts.map((product) => (
                    <SwiperSlide key={product.id}>
                        <div className="relative group/product-active-tooltip">
                            <div className="rounded-3xl overflow-hidden w-full cursor-pointer">
                                <Image
                                    src={product.images[0]}
                                    alt="product.images[0]"
                                    height={100}
                                    width={100}
                                    loading="lazy"
                                    className="max-w-[292px] bg-gray-100/60 max-h-[337px] rounded-3xl w-full hover:scale-110 transition-transform duration-300 ease-in-out"
                                />
                                <div className="absolute left-0 top-20 z-10 flex flex-col gap-5 transition-all duration-400 ease-in-out group-hover/product-active-tooltip:left-6 opacity-0 group-hover/product-active-tooltip:opacity-100">
                                    <Button className="group/tooltip shadow-md overflow-visible w-10 h-10 flex items-center justify-center min-h-0 min-w-0 p-0 rounded-full bg-white hover:bg-theme-primary hover:text-white transition-all duration-400 ease-in-out">
                                        <FiShoppingCart />
                                        <span className="absolute w-fit  left-[45px] rounded-md px-3 py-1 text-xs bg-black text-white opacity-0 tooltip-right-arrow transition-all duration-400 ease-in-out group-hover/tooltip:left-[55px] group-hover/tooltip:opacity-100">
                                            Add To Cart
                                        </span>
                                    </Button>
                                    <Button className="group/tooltip shadow-md overflow-visible w-10 h-10 flex items-center justify-center min-h-0 min-w-0 p-0 rounded-full bg-white hover:bg-theme-primary hover:text-white transition-all duration-400 ease-in-out">
                                        <LuEye />
                                        <span className="absolute w-fit  left-[45px] rounded-md px-3 py-1 text-xs bg-black text-white opacity-0 tooltip-right-arrow transition-all duration-400 ease-in-out group-hover/tooltip:left-[55px] group-hover/tooltip:opacity-100">
                                            Quick View
                                        </span>
                                    </Button>
                                    <Button className="group/tooltip shadow-md overflow-visible w-10 h-10 flex items-center justify-center min-h-0 min-w-0 p-0 rounded-full bg-white hover:bg-theme-primary hover:text-white transition-all duration-400 ease-in-out">
                                        <IoMdHeartEmpty />
                                        <span className="absolute w-fit  left-[45px] rounded-md px-3 py-1 text-xs bg-black text-white opacity-0 tooltip-right-arrow transition-all duration-400 ease-in-out group-hover/tooltip:left-[55px] group-hover/tooltip:opacity-100">
                                            Add To Wishlist
                                        </span>
                                    </Button>
                                </div>
                            </div>
                            <div className="mt-4">
                                <h4 className="font-semibold text-gray-400">
                                    {truncateWord(product.title, 3)}
                                </h4>
                                <h4 className="font-semibold text-xl">
                                    {truncateText(product.description, 22)}
                                </h4>
                                <h4 className="font-semibold">
                                    &#36;
                                    {(
                                        product.price -
                                        (product.price *
                                            product.discountPercentage) /
                                            100
                                    ).toFixed()}{' '}
                                    <del className="text-gray-400">
                                        &#36;{product.price}
                                    </del>
                                </h4>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
