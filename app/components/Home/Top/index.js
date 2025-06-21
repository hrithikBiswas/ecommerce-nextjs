import Image from "next/image";
import { Button } from "@heroui/react";
import preTitle from "@/public/pre-title.webp";
import side1 from "@/public/side-1.webp";
import { BsArrowRight } from "react-icons/bs";
import TopSellingProduct from "@/app/components/TopSellingProduct";
import TopRatingProduct from "@/app/components/TopRatingProduct";
import { fetchProducts } from "@/app/api/api";

const Top = async () => {
    const products = await fetchProducts();

    return (
        <section className="mt-28 pb-14 w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-8xl mx-auto">
            <div className="px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="bg-[#EEEBE4] flex flex-col justify-center items-center rounded-2xl pt-14 mr-12 mb-14">
                    <Image src={preTitle} alt="preTitle" className="mb-4" />
                    <h2 className="px-2 text-2xl lg:text-3xl font-semibold text-center mb-7">
                        Get Up to 26% Off Vegetables
                    </h2>
                    <Button
                        radius="full"
                        className="bg-theme-primary px-8 text-white mb-16"
                    >
                        Shop Now <BsArrowRight />
                    </Button>
                    <Image src={side1} alt="side1" className="translate-y-6" />
                </div>
                <TopSellingProduct products={products} />
                <TopRatingProduct products={products} />
            </div>
        </section>
    );
};

export default Top;
