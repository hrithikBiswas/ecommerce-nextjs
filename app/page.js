import Header from '@/app/ui/Header';

import { Card, CardBody, CardFooter, CardHeader } from '@heroui/react';
import Image from 'next/image';
import { Button } from '@heroui/react';
import textimage from '@/public/image5.webp';
import image from '@/public/image.webp';
import image1 from '@/public/image1.webp';
import image2 from '@/public/image2.webp';
import image3 from '@/public/image3.webp';
import image4 from '@/public/image4.webp';
import image6 from '@/public/image6.webp';
import category1 from '@/public/category-1.jpg';
import category2 from '@/public/category-2.jpg';
import category3 from '@/public/category-3.jpg';
import category4 from '@/public/category-4.jpg';
import category5 from '@/public/category-5.jpg';
import category6 from '@/public/category-6.jpg';

export default function Home() {
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
                    <div className="px-5 sm:px-8 flex flex-col justify-center items-center max-w-8xl mx-auto">
                        <h3 className="text-theme-primary font-semibold text-lg">
                            Shop by Category
                        </h3>
                        <h1 className="text-5xl text-center font-semibold pt-4 pb-16">
                            Popular on the Shofi store.
                        </h1>
                        <div className="gap-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
                            <Card
                                isPressable
                                className="border-none"
                                radius="lg"
                            >
                                <CardHeader className="absolute z-10 top-1 flex-col justify-center">
                                    <h4 className="text-gray-800 font-semibold text-large">
                                        Frozen Food
                                    </h4>
                                </CardHeader>
                                <Image
                                    alt="Woman listing to music"
                                    src={category1}
                                    className="object-cover h-[250px] w-[250px]"
                                    radius="lg"
                                    shadow="sm"
                                    width="100%"
                                />
                            </Card>
                            <Card
                                isPressable
                                className="border-none"
                                radius="lg"
                            >
                                <CardHeader className="absolute z-10 top-1 flex-col justify-center">
                                    <h4 className="text-gray-800 font-semibold text-large">
                                        Frozen Food
                                    </h4>
                                </CardHeader>
                                <Image
                                    alt="Woman listing to music"
                                    src={category2}
                                    className="object-cover h-[250px] w-[250px]"
                                    radius="lg"
                                    shadow="sm"
                                    width="100%"
                                />
                            </Card>
                            <Card
                                isPressable
                                className="border-none"
                                radius="lg"
                            >
                                <CardHeader className="absolute z-10 top-1 flex-col justify-center">
                                    <h4 className="text-gray-800 font-semibold text-large">
                                        Frozen Food
                                    </h4>
                                </CardHeader>
                                <Image
                                    alt="Woman listing to music"
                                    src={category3}
                                    className="object-cover h-[250px] w-[250px]"
                                    radius="lg"
                                    shadow="sm"
                                    width="100%"
                                />
                            </Card>
                            <Card
                                isPressable
                                className="border-none"
                                radius="lg"
                            >
                                <CardHeader className="absolute z-10 top-1 flex-col justify-center">
                                    <h4 className="text-gray-800 font-semibold text-large">
                                        Frozen Food
                                    </h4>
                                </CardHeader>
                                <Image
                                    alt="Woman listing to music"
                                    src={category4}
                                    className="object-cover h-[250px] w-[250px]"
                                    radius="lg"
                                    shadow="sm"
                                    width="100%"
                                />
                            </Card>
                            <Card
                                isPressable
                                className="border-none"
                                radius="lg"
                            >
                                <CardHeader className="absolute z-10 top-1 flex-col justify-center">
                                    <h4 className="text-gray-800 font-semibold text-large">
                                        Frozen Food
                                    </h4>
                                </CardHeader>
                                <Image
                                    alt="Woman listing to music"
                                    src={category5}
                                    className="object-cover h-[250px] w-[250px]"
                                    radius="lg"
                                    shadow="sm"
                                    width="100%"
                                />
                            </Card>
                            {/* <Card isPressable className="border-none" radius="lg">
                            <CardHeader className="absolute z-10 top-1 flex-col justify-center">
                                <h4 className="text-gray-800 font-semibold text-large">
                                    Frozen Food
                                </h4>
                            </CardHeader>
                            <Image
                                alt="Woman listing to music"
                                src={category6}
                                className="object-cover h-[250px] w-[250px]"
                                radius="lg"
                                shadow="sm"
                                width="100%"
                            />
                        </Card> */}
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
            </main>
        </>
    );
}
