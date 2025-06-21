import Image from "next/image";
import image1 from "@/public/image1.webp";
import image7 from "@/public/image7.webp";
import image9 from "@/public/image9.webp";
import image10 from "@/public/image10.webp";
import image11 from "@/public/image11.webp";
import image12 from "@/public/image12.webp";

const Offer = () => {
    return (
        <section className="bg-gray-100 relative overflow-hidden py-48 md:py-36">
            <div className="z-20 relative">
                <h3 className="mb-2 text-theme-primary font-semibold text-lg text-center">
                    Shop by Category
                </h3>
                <h3 className="mb-2 font-semibold text-4xl sm:text-6xl text-center">
                    Grab the best Offer <br className="hidden sm:block" /> Of
                    this <br className="block sm:hidden" /> Week!
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
    );
};

export default Offer;
