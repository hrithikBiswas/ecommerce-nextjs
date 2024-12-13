import Link from 'next/link';
import { IoIosArrowDown } from 'react-icons/io';
import SubmenuHoverCard from '@/app/components/SubmenuHoverCard';

const Navbar = () => {
    return (
        <ul className="col-span-6 2xl:col-span-4 hidden xl:flex gap-x-4">
            <li>
                <Link
                    className="relative flex items-center py-5 dot-hover-effect"
                    href="#"
                >
                    Home
                </Link>
            </li>
            <li className="relative group/submenu ">
                <Link
                    className="relative flex items-center py-5 dot-hover-effect"
                    href="#"
                >
                    Shop
                    <IoIosArrowDown />
                </Link>
                <SubmenuHoverCard />
            </li>
            <li className="relative group/submenu">
                <Link
                    className="relative flex items-center py-5 dot-hover-effect"
                    href="#"
                >
                    Pages
                    <IoIosArrowDown />
                </Link>
                <SubmenuHoverCard />
            </li>
            <li>
                <Link
                    className="relative flex items-center py-5 dot-hover-effect"
                    href="#"
                >
                    Coupons
                </Link>
            </li>
            <li className="relative group/submenu">
                <Link
                    className="relative flex items-center py-5 dot-hover-effect"
                    href="#"
                >
                    Blog
                    <IoIosArrowDown />
                </Link>
                <SubmenuHoverCard />
            </li>
            <li>
                <Link
                    className="relative flex items-center py-5 dot-hover-effect"
                    href="#"
                >
                    Contact
                </Link>
            </li>
        </ul>
    );
};

export default Navbar;
