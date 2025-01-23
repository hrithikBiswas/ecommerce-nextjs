import Image from 'next/image';
import { HiBars3BottomLeft } from 'react-icons/hi2';
import Search from '@/app/components/Search';
import HeaderControls from '@/app/components/HeaderControls';
import Navbar from '@/app/ui/Navbar';
import {
    Button,
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
} from '@nextui-org/react';

import Logo from '@/public/logo.svg';
import HeaderHumbergurToggle from '@/app/components/HeaderHumbergurToggle';

const Header = () => {
    return (
        <header className="bg-theme-primary text-white px-1 sm:px-7 py-4">
            <div className="grid grid-cols-12 items-center px-3">
                <div className="col-span-6 xl:col-span-3 2xl:col-span-2 flex items-center gap-x-4 font-bold text-2xl">
                    <HeaderHumbergurToggle />
                    <Image src={Logo} className="" alt="logo" />
                </div>
                <Navbar />
                <Search />
                <HeaderControls />
            </div>
        </header>
    );
};

export default Header;
