import { Button } from '@nextui-org/react';
import { AiOutlineUser } from 'react-icons/ai';
import { IoMdHeartEmpty } from 'react-icons/io';
import { BsHandbag } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';
import NotificationBadge from '@/app/components/NotificationBadge';
import Link from 'next/link';
import CartDrawer from '@/app/components/drawer/CartDrawer';

const HeaderControls = () => {
    return (
        <div className="col-span-6 xl:col-span-3 2xl:col-span-2 flex items-center justify-end gap-x-4 pr-4">
            <div className="hidden md:flex items-center gap-x-3">
                <Button isIconOnly className="bg-gray-300/25 p-2 rounded-full">
                    <AiOutlineUser className="text-2xl text-white" />
                </Button>
                <div className="flex flex-col">
                    <span className="font-semibold text-sm text-gray-300/90">
                        Hello
                    </span>
                    <Link href="/login" className="font-semibold text-sm">
                        Login
                    </Link>
                </div>
            </div>
            <NotificationBadge
                Icon={IoMdHeartEmpty}
                notification="0"
                hideIconClass="hidden sm:flex"
            />
            <CartDrawer />
            {/* <NotificationBadge Icon={BsHandbag} notification="12" /> */}
            <Button
                isIconOnly
                className="bg-gray-300/25 p-2 rounded-full hidden sm:block 2xl:hidden"
            >
                <FiSearch className="text-2xl font-semibold text-white" />
            </Button>
        </div>
    );
};

export default HeaderControls;
