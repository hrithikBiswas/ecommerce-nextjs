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
                    <div className="grid grid-cols-1 lg:grid-cols-2 justify-between items-center px-5 sm:px-0 w-full sm:max-w-[540px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1024px] 3xl:max-w-[1320px] mx-auto">
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
                <section className="flex flex-col justify-center items-center max-w-[1320px] mx-auto">
                    <h3 className="text-theme-primary font-semibold text-lg">
                        Shop by Category
                    </h3>
                    <h1 className="text-7xl font-semibold">
                        Popular on the Shofi store.
                    </h1>
                    <div className="gap-2 grid grid-cols-5">
                        <Card isPressable className="border-none" radius="lg">
                            <CardHeader className="absolute z-10 top-1 flex-col justify-center">
                                <h4 className="text-black  text-large">
                                    Frozen Food
                                </h4>
                            </CardHeader>
                            <Image
                                alt="Woman listing to music"
                                className="object-cover"
                                height={200}
                                src={category1}
                                width={200}
                            />
                        </Card>
                        <Card isPressable className="border-none" radius="lg">
                            <CardHeader className="absolute z-10 top-1 flex-col justify-center">
                                <h4 className="text-black  text-large">
                                    Frozen Food
                                </h4>
                            </CardHeader>
                            <Image
                                alt="Woman listing to music"
                                className="object-cover"
                                height={200}
                                src={category2}
                                width={200}
                            />
                        </Card>
                        <Card isPressable className="border-none" radius="lg">
                            <CardHeader className="absolute z-10 top-1 flex-col justify-center">
                                <h4 className="text-black  text-large">
                                    Frozen Food
                                </h4>
                            </CardHeader>
                            <Image
                                alt="Woman listing to music"
                                className="object-cover"
                                height={200}
                                src={category3}
                                width={200}
                            />
                        </Card>
                        <Card isPressable className="border-none" radius="lg">
                            <CardHeader className="absolute z-10 top-1 flex-col justify-center">
                                <h4 className="text-black  text-large">
                                    Frozen Food
                                </h4>
                            </CardHeader>
                            <Image
                                alt="Woman listing to music"
                                className="object-cover"
                                height={200}
                                src={category4}
                                width={200}
                            />
                        </Card>
                        <Card isPressable className="border-none" radius="lg">
                            <CardHeader className="absolute z-10 top-1 flex-col justify-center">
                                <h4 className="text-black  text-large">
                                    Frozen Food
                                </h4>
                            </CardHeader>
                            <Image
                                alt="Woman listing to music"
                                className="object-cover"
                                height={200}
                                src={category5}
                                width={200}
                            />
                        </Card>
                    </div>
                </section>
            </main>
        </>
    );
}
