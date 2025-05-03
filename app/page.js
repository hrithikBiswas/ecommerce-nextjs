import Header from '@/app/ui/Header';

import { Card, CardHeader, Divider } from '@heroui/react';
import Image from 'next/image';
import { Button } from '@heroui/react';
import textimage from '@/public/image5.webp';
import image from '@/public/image.webp';
import image1 from '@/public/image1.webp';
import image2 from '@/public/image2.webp';
import image3 from '@/public/image3.webp';
import image4 from '@/public/image4.webp';
import image6 from '@/public/image6.webp';
import image7 from '@/public/image7.webp';
import image9 from '@/public/image9.webp';
import image10 from '@/public/image10.webp';
import image11 from '@/public/image11.webp';
import image12 from '@/public/image12.webp';
import preTitle from '@/public/pre-title.webp';
import side1 from '@/public/side-1.webp';
import product1 from '@/public/product-1.webp';
import product2 from '@/public/product-2.webp';
import product3 from '@/public/product-3.webp';
import ctaThumb from '@/public/cta-thumb-1.webp';
import catShape1 from '@/public/cta-shape-1.webp';
import catShape2 from '@/public/cta-shape-2.webp';
import category1 from '@/public/category-1.jpg';
import category2 from '@/public/category-2.jpg';
import category3 from '@/public/category-3.jpg';
import category4 from '@/public/category-4.jpg';
import category5 from '@/public/category-5.jpg';
import bestBanner from '@/public/best-banner-1.jpg';
import { BsArrowRight } from 'react-icons/bs';
import { IoMdStar } from 'react-icons/io';
import { FiShoppingCart } from 'react-icons/fi';
import { LuEye } from 'react-icons/lu';
import { IoMdHeartEmpty } from 'react-icons/io';
import { MdOutlineLocalShipping, MdOutlineHeadset } from 'react-icons/md';
import { BsCurrencyDollar } from 'react-icons/bs';
import { CiCreditCard1 } from 'react-icons/ci';
import { FaGooglePlay, FaApple } from 'react-icons/fa';
import UserSwiper from '@/app/components/UserSwiper';
import BestsellSwiper from '@/app/components/BestsellSwiper';
import ShopCategorySwiper from '@/app/components/ShopCategorySwiper';
import Footer from '@/app/ui/Footer';
import { fetchProducts } from '@/app/api/api';
import TopSellingProduct from '@/app/components/TopSellingProduct';
import TopRatingProduct from '@/app/components/TopRatingProduct';

export default async function Home() {
    const products = await fetchProducts();

    return (
        <>
            <Header />
            <main>
                <section className="relative flex min-h-[700px] bg-gray-100 py-20 overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 justify-between items-center px-5 sm:px-8 lg:px-12 w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl 3xl:max-w-8xl mx-auto">
                        <div>
                            <Image src={textimage} alt="textimage" />
                            <h1 className="text-4xl lg:text-7xl 3xl:text-8xl font-semibold mb-12">
                                The Online <br />
                                Grocery Store
                            </h1>
                            <Button
                                radius="full"
                                className="bg-theme-primary text-white px-12"
                            >
                                Shop Now
                            </Button>
                        </div>
                        <div className="relative -mr-[190px]">
                            <Image src={image} alt="image" />
                            <Image
                                src={image6}
                                alt="image6"
                                className="hidden sm:inline-block absolute left-[10%] md:left-[30%] top-0"
                            />
                        </div>
                    </div>
                    <Image
                        src={image1}
                        alt="image1"
                        className="absolute left-[15%] top-[55%] md:top-[15%]"
                    />
                    <Image
                        src={image2}
                        alt="image2"
                        className="absolute right-[10%] top-[15%]"
                    />
                    <Image
                        src={image4}
                        alt="image4"
                        className="absolute left-[40%] right-[60%] top-[38%]"
                    />
                    <Image
                        src={image3}
                        alt="image3"
                        className="absolute left-[32%] bottom-[15%]"
                    />
                </section>
                <section className="py-28">
                    <div className="px-5 sm:px-8 pb-28 w-full sm:max-w-[540px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1024px] 3xl:max-w-8xl mx-auto">
                        <h3 className="text-theme-primary font-semibold text-center text-lg">
                            Shop by Category
                        </h3>
                        <h1 className="text-5xl text-center font-semibold pt-4 pb-16">
                            Popular on the Shofi store.
                        </h1>
                        <div className="">
                            <ShopCategorySwiper products={products} />
                        </div>
                    </div>
                </section>
                <section>
                    <div className="px-5 sm:px-8 pb-28 w-full sm:max-w-[540px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1024px] 3xl:max-w-8xl mx-auto">
                        <h3 className="mb-2 text-theme-primary font-semibold text-lg text-center xl:text-left">
                            Shop by Category
                        </h3>
                        <div className="flex flex-col items-center xl:flex-row xl:justify-between gap-y-10">
                            <h1 className="text-5xl text-center font-semibold">
                                Featured Products
                            </h1>
                            <ul className="relative flex flex-wrap gap-x-4 justify-center items-center text-xl text-gray-400">
                                <li className="text-black">All Products</li>
                                <li>Frozen Foods</li>
                                <li>Meat and Fish</li>
                                <li>Milk & Dairy</li>
                                <span className="hidden md:inline-block absolute left-0 -bottom-1 w-28 h-[2px] bg-black"></span>
                            </ul>
                        </div>
                        <div className="text-center mt-10">
                            <Button
                                radius="full"
                                className="bg-theme-primary text-white px-12"
                            >
                                Shop Now
                            </Button>
                        </div>
                    </div>
                </section>
                <section className="bg-gray-100 relative overflow-hidden py-48 md:py-36">
                    <div className="z-20 relative">
                        <h3 className="mb-2 text-theme-primary font-semibold text-lg text-center">
                            Shop by Category
                        </h3>
                        <h3 className="mb-2 font-semibold text-4xl sm:text-6xl text-center">
                            Grab the best Offer{' '}
                            <br className="hidden sm:block" /> Of this{' '}
                            <br className="block sm:hidden" /> Week!
                        </h3>
                        <ul className="flex flex-wrap justify-center align-center gap-5 mt-10 px-4">
                            <li className="relative flex flex-col justify-center items-center bg-white rounded-md py-2 px-5 time-colon">
                                <span className="text-theme-primary font-semibold text-3xl">
                                    0
                                </span>
                                <span>Days</span>
                            </li>
                            <li className="relative flex flex-col justify-center items-center bg-white rounded-md py-2 px-5 time-colon">
                                <span className="text-theme-primary font-semibold text-3xl">
                                    0
                                </span>
                                <span>Hours</span>
                            </li>
                            <li className="relative flex flex-col justify-center items-center bg-white rounded-md py-2 px-5 time-colon">
                                <span className="text-theme-primary font-semibold text-3xl">
                                    0
                                </span>
                                <span>Mins</span>
                            </li>
                            <li className="relative flex flex-col justify-center items-center bg-white rounded-md py-2 px-5">
                                <span className="text-theme-primary font-semibold text-3xl">
                                    0
                                </span>
                                <span>Secs</span>
                            </li>
                        </ul>
                    </div>
                    {/* <div className="max-w-8xl mx-auto"></div> */}
                    <Image
                        src={image9}
                        alt="image9"
                        className="absolute top-1/2 bottom-1/2 -translate-y-1/2"
                    />
                    <Image
                        src={image7}
                        alt="image7"
                        className="hidden sm:block absolute -left-72 xl:-left-40 2xl:left-0 top-1/2 bottom-1/2 -translate-y-1/2 w-[450px] h-[430px] object-fill z-10"
                    />
                    <Image
                        src={image10}
                        alt="image10"
                        className="absolute top-1/2 bottom-1/2 right-14 xl:right-20 2xl:right-40 -translate-y-1/2"
                    />
                    <Image
                        src={image11}
                        alt="image11"
                        className="hidden sm:block absolute top-[57%] bottom-[43%] -right-96 lg:-right-48 xl:-right-40 2xl:right-36 -translate-y-1/2"
                    />
                    <Image
                        src={image12}
                        alt="image12"
                        className="absolute bottom-0  left-[40%] right-[60%] -translate-x-1/2"
                    />
                    <Image
                        src={image1}
                        alt="image1"
                        className="absolute top-14 left-[65%] right-[35%] -translate-x-1/2 scale-125"
                    />
                </section>
                <section className="mt-28 pb-14 w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-8xl mx-auto">
                    <div className="px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <div className="bg-[#EEEBE4] flex flex-col justify-center items-center rounded-2xl pt-14 mr-12 mb-14">
                            <Image
                                src={preTitle}
                                alt="preTitle"
                                className="mb-4"
                            />
                            <h2 className="px-2 text-2xl lg:text-3xl font-semibold text-center mb-7">
                                Get Up to 26% Off Vegetables
                            </h2>
                            <Button
                                radius="full"
                                className="bg-theme-primary px-8 text-white mb-16"
                            >
                                Shop Now <BsArrowRight />
                            </Button>
                            <Image
                                src={side1}
                                alt="side1"
                                className="translate-y-6"
                            />
                        </div>
                        <TopSellingProduct products={products} />
                        <TopRatingProduct products={products} />
                    </div>
                </section>
                <section className="mb-16">
                    <div className="px-4 w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-8xl mx-auto">
                        <div className="rounded-2xl ring-1 ring-gray-200 py-14 lg:py-20 px-6 sm:px-10 lg:px-24">
                            <div className="flex flex-col justify-center items-start xl:items-center mb-14">
                                <h3 className="text-theme-primary font-semibold text-lg mb-2 ">
                                    Customer Reviews
                                </h3>
                                <h1 className="font-semibold text-5xl">
                                    Our Happy Customers
                                </h1>
                            </div>
                            <div>
                                <UserSwiper />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mt-28 pb-14 w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-8xl mx-auto">
                    <div className="px-4 grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 xl:grid-cols-4">
                        <div className="md:col-span-2 lg:col-span-1 overflow-hidden flex justify-center md:justify-normal items-center md:items-start rounded-2xl mr-8 mb-14">
                            <Image
                                src={bestBanner}
                                alt="bestBanner"
                                className="max-w-72 max-h-[615px] w-full h-full object-cover"
                            />
                        </div>
                        <div className="px-3 mb-14 md:col-span-3 lg:col-span-2 xl:col-span-3">
                            <div>
                                <h3 className="text-theme-primary font-semibold text-lg mb-2 ">
                                    More to Discover
                                </h3>
                                <h1 className="font-semibold text-5xl">
                                    Bestsellers of the week
                                </h1>
                            </div>
                            <div className="flex gap-3 mt-12">
                                <BestsellSwiper />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mb-16">
                    <div className="px-4 w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-8xl mx-auto">
                        <div className="rounded-2xl ring-1 ring-gray-200 py-6 px-10 sm:px-12">
                            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-between items-center gap-y-6">
                                <li className="flex gap-2 items-center">
                                    <MdOutlineLocalShipping className="text-3xl text-theme-primary" />
                                    <h4 className="text-lg">
                                        Flexible Delivery
                                    </h4>
                                </li>
                                <li className="flex gap-2 items-center">
                                    <BsCurrencyDollar className="text-3xl text-theme-primary" />
                                    <h4 className="text-lg">100% Money Back</h4>
                                </li>
                                <li className="flex gap-2 items-center">
                                    <CiCreditCard1 className="text-3xl text-theme-primary" />
                                    <h4 className="text-lg">Secure Payment</h4>
                                </li>
                                <li className="flex gap-2 items-center">
                                    <MdOutlineHeadset className="text-3xl text-theme-primary" />
                                    <h4 className="text-lg">24 Hour Support</h4>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="relative overflow-hidden pt-11">
                    <div className="bg-theme-primary pt-20 md:pb-20 relative">
                        <div className="px-4 w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-8xl mx-auto">
                            <div className="flex justify-between flex-col md:flex-row gap-y-24">
                                <div className="relative z-20">
                                    <h1 className="text-white text-[40px] lg:text-5xl font-semibold mb-8 leading-[45px] lg:leading-[60px]">
                                        Get the app & get{' '}
                                        <br className="xl:hidden" /> Your{' '}
                                        <br className="hidden xl:block" />{' '}
                                        Groceries <br className="xl:hidden" />{' '}
                                        from home
                                    </h1>
                                    <div className="flex gap-4">
                                        <Button className="bg-black text-white shadow-lg py-7 px-6 rounded-[30px] hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
                                            <FaGooglePlay className="text-2xl" />
                                            <span className="flex flex-col items-start">
                                                <span className="text-xs font-semibold">
                                                    GET IT ON
                                                </span>
                                                <span className="font-bold text-base">
                                                    Google Play
                                                </span>
                                            </span>
                                        </Button>
                                        <Button className="bg-white text-black shadow-lg py-7 px-6 rounded-[30px] hover:bg-black hover:text-white transition-all duration-300 ease-in-out">
                                            <FaApple className="text-2xl" />
                                            <span className="flex flex-col items-start">
                                                <span className="text-xs font-semibold">
                                                    DOWNLOAD ON THE
                                                </span>
                                                <span className="font-bold text-base">
                                                    App Store
                                                </span>
                                            </span>
                                        </Button>
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <div className="relative md:absolute z-20 w-[300px] h-[470px] bg-white md:right-[6%] lg:right-[10%] xl:right-[14%] 2xl:right-[23%] -bottom-[17%] rounded-[30px] ring-[6px] ring-black overflow-hidden">
                                        <Image
                                            src={ctaThumb}
                                            alt="ctaThumb"
                                            className="relative md:absolute w-full object-cover -top-3"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Image
                            src={catShape1}
                            alt="catShape1"
                            className="absolute bottom-0 left-0 mix-blend-luminosity z-10"
                        />
                        <Image
                            src={catShape2}
                            alt="catShape2"
                            className="absolute top-0 right-0 mix-blend-luminosity z-10"
                        />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
