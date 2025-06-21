import UserSwiper from "@/app/components/UserSwiper";

const Review = () => {
    return (
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
    );
};

export default Review;
