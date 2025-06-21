import { MdOutlineLocalShipping, MdOutlineHeadset } from "react-icons/md";
import { BsCurrencyDollar } from "react-icons/bs";
import { CiCreditCard1 } from "react-icons/ci";
const Accessibility = () => {
    return (
        <section className="mb-16">
            <div className="px-4 w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-8xl mx-auto">
                <div className="rounded-2xl ring-1 ring-gray-200 py-6 px-10 sm:px-12">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-between items-center gap-y-6">
                        <li className="flex gap-2 items-center">
                            <MdOutlineLocalShipping className="text-3xl text-theme-primary" />
                            <h4 className="text-lg">Flexible Delivery</h4>
                        </li>
                        <li className="flex gap-2 items-center">
                            <BsCurrencyDollar className="text-3xl text-theme-primary" />
                            <h4 className="text-lg">100% Money Back</h4>
                        </li>
                        <li className="flex gap-2 items-center">
                            <CiCreditCard1 className="text-3xl text-theme-primary" />
                            <h4 className="text-lg">Secure Payment</h4>
                        </li>
                        <li className="flex gap-2 items-center">
                            <MdOutlineHeadset className="text-3xl text-theme-primary" />
                            <h4 className="text-lg">24 Hour Support</h4>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Accessibility;
