'use client';

import { Card, CardHeader } from '@heroui/react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

const ShopCategorySwiper = ({ products }) => {
    const uniqueCategories = products.reduce((acc, product) => {
        const exists = acc.find((item) => item.name === product.category);
        if (!exists) {
            acc.push({
                name: product.category,
                image: product.images[0],
            });
        }
        return acc;
    }, []);

    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                className="mySwiper"
                breakpoints={{
                    600: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1200: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                }}
            >
                {uniqueCategories.map((category, index) => (
                    <SwiperSlide key={index}>
                        <Card isPressable className="border-none" radius="lg">
                            <CardHeader className="absolute z-10 top-1 flex-col justify-center">
                                <h4 className="text-gray-800 font-semibold text-large">
                                    {category.name}
                                </h4>
                            </CardHeader>
                            <Image
                                alt="Woman listing to music"
                                src={category.image}
                                className="object-cover bg-[#f3e3d6] h-[250px] w-[250px] hover:scale-105 transition-transform duration-400 ease-in-out"
                                radius="lg"
                                shadow="sm"
                                width="100"
                                height="100"
                            />
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default ShopCategorySwiper;
