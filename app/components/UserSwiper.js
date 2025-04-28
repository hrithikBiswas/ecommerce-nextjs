'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import user2 from '@/public/user-2.webp';
import user3 from '@/public/user-3.webp';
import testimonialQuote2 from '@/public/testimonial-quote-2.webp';
import { IoMdStar } from 'react-icons/io';

const UserSwiper = () => {
    return (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
                <div className="flex flex-col md:flex-row gap-12 items-start lg:items-center">
                    <div className="relative">
                        <div className="w-[240px] h-[267px] rounded-[50%] rotate-6 overflow-hidden">
                            <Image
                                src={user2}
                                alt="user2"
                                className="w-[240px] h-[267px] object-cover"
                            />
                        </div>
                        <span className="absolute z-20 right-0 bottom-8 ring-4 ring-white rounded-full bg-theme-primary h-16 w-16 flex items-center justify-center">
                            <Image
                                src={testimonialQuote2}
                                alt="testimonialQuote2"
                                className=""
                            />
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex text-yellow-500 mb-2 text-lg">
                            <span>
                                <IoMdStar />
                            </span>
                            <span>
                                <IoMdStar />
                            </span>
                            <span>
                                <IoMdStar />
                            </span>
                            <span>
                                <IoMdStar />
                            </span>
                            <span>
                                <IoMdStar />
                            </span>
                        </div>
                        <p className="text-2xl mb-8 leading-9 text-justify">
                            I have been shopping from shofi for the past few
                            months and am loving the experience. Have been
                            shopping from here have recommended my relatives
                            too.
                        </p>
                        <h3 className="text-xl font-bold">Theodor Handle</h3>
                        <h3 className="text-gray-600">UX/UI design</h3>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex flex-col md:flex-row gap-12 items-start lg:items-center">
                    <div className="relative">
                        <div className="w-[240px] h-[267px] rounded-[50%] rotate-6 overflow-hidden">
                            <Image
                                src={user3}
                                alt="user3"
                                className="w-[240px] h-[267px] object-cover"
                            />
                        </div>
                        <span className="absolute z-20 right-0 bottom-8 ring-4 ring-white rounded-full bg-theme-primary h-16 w-16 flex items-center justify-center">
                            <Image
                                src={testimonialQuote2}
                                alt="testimonialQuote2"
                                className=""
                            />
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex text-yellow-500 mb-2 text-lg">
                            <span>
                                <IoMdStar />
                            </span>
                            <span>
                                <IoMdStar />
                            </span>
                            <span>
                                <IoMdStar />
                            </span>
                            <span>
                                <IoMdStar />
                            </span>
                            <span>
                                <IoMdStar />
                            </span>
                        </div>
                        <p className="text-2xl mb-8 leading-9 text-justify">
                            I have been shopping from shofi for the past few
                            months and am loving the experience. Have been
                            shopping from here have recommended my relatives
                            too.
                        </p>
                        <h3 className="text-xl font-bold">Theodor Handle</h3>
                        <h3 className="text-gray-600">UX/UI design</h3>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default UserSwiper;
