import Image from "next/image";
import { Button } from "@heroui/react";
import textimage from "@/public/image5.webp";
import image from "@/public/image.webp";
import image1 from "@/public/image1.webp";
import image2 from "@/public/image2.webp";
import image3 from "@/public/image3.webp";
import image4 from "@/public/image4.webp";
import image6 from "@/public/image6.webp";

const Hero = () => {
    return (
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
    );
};

export default Hero;
