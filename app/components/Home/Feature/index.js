import { Button } from "@heroui/react";
const Feature = () => {
    return (
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
    );
};

export default Feature;
