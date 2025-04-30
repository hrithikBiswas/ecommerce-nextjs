import Image from 'next/image';
import Search from '@/app/components/Search';
import HeaderControls from '@/app/components/HeaderControls';
import Navbar from '@/app/ui/Navbar';
import Logo from '@/public/logo.svg';
import HeaderHumbergurToggle from '@/app/components/HeaderHumbergurToggle';
import ToggleMenuDrawer from '@/app/components/drawer/ToggleMenuDrawer';

const Header = () => {
    return (
        <header className="bg-theme-primary text-white px-1 sm:px-7 py-4">
            <div className="grid grid-cols-12 items-center px-3">
                <div className="col-span-6 xl:col-span-3 2xl:col-span-2 flex items-center gap-x-4 font-bold text-2xl">
                    <div className="hidden lg:contents">
                        <HeaderHumbergurToggle />
                    </div>
                    <div className="lg:hidden">
                        <ToggleMenuDrawer />
                    </div>

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
