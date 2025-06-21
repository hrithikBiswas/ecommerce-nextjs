import Image from "next/image";
import { Button } from "@heroui/react";
import ctaThumb from "@/public/cta-thumb-1.webp";
import catShape1 from "@/public/cta-shape-1.webp";
import catShape2 from "@/public/cta-shape-2.webp";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const Newsteller = () => {
    return (
        <section className="relative overflow-hidden pt-11">
            <div className="bg-theme-primary pt-20 md:pb-20 relative">
                <div className="px-4 w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-8xl mx-auto">
                    <div className="flex justify-between flex-col md:flex-row gap-y-24">
                        <div className="relative z-20">
                            <h1 className="text-white text-[40px] lg:text-5xl font-semibold mb-8 leading-[45px] lg:leading-[60px]">
                                Get the app & get <br className="xl:hidden" />{" "}
                                Your <br className="hidden xl:block" />{" "}
                                Groceries <br className="xl:hidden" /> from home
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
    );
};

export default Newsteller;
