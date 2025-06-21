import ShopCategorySwiper from "@/app/components/ShopCategorySwiper";
import { fetchProducts } from "@/app/api/api";

const Popular = async () => {
    const products = await fetchProducts();

    return (
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
    );
};

export default Popular;
