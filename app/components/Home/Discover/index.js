import Image from "next/image";
import bestBanner from "@/public/best-banner-1.jpg";
import BestsellSwiper from "@/app/components/BestsellSwiper";
import { fetchProducts } from "@/app/api/api";

const Discover = async () => {
    const products = await fetchProducts();

    return (
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
                        <BestsellSwiper products={products} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Discover;
