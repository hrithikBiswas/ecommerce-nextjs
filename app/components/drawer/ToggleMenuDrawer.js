'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    Button,
    Divider,
    useDisclosure,
} from '@heroui/react';
import cart from '@/public/empty-cart.png';
import { HiBars3BottomLeft } from 'react-icons/hi2';
import footerLogo from '@/public/logo-footer.svg';
import { MdKeyboardArrowRight } from 'react-icons/md';

const ToggleMenuDrawer = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [isOpenSubMenu, setIsOpenSubMenu] = useState(false);

    const openSubMenuHandler = () => {
        return setIsOpenSubMenu((prev) => !prev);
    };

    console.log(isOpenSubMenu);

    return (
        <>
            <Button
                isIconOnly
                className="bg-gray-300/15 p-1 rounded-md"
                onPress={onOpen}
            >
                <HiBars3BottomLeft className="font-bold text-6xl text-white" />
            </Button>
            <Drawer
                isOpen={isOpen}
                size="xs"
                motionProps={{
                    variants: {
                        enter: {
                            opacity: 1,
                            x: 0,
                            duration: 0.3,
                        },
                        exit: {
                            x: 100,
                            opacity: 0,
                            duration: 0.3,
                        },
                    },
                }}
                onOpenChange={onOpenChange}
            >
                <DrawerContent>
                    {(onClose) => (
                        <>
                            <DrawerHeader className="flex flex-col gap-1">
                                <Image src={footerLogo} alt="footerLogo" />
                                <Divider className="my-2" />
                            </DrawerHeader>
                            <DrawerBody className="">
                                <ul className="text-base leading-7 px-4 flex flex-col">
                                    <li className=" py-2 hover:text-theme-primary transition-all duration-300">
                                        <a href="#">Home </a>
                                    </li>
                                    <li className=" py-2">
                                        <div className="flex justify-between items-center hover:text-theme-primary transition-all duration-300">
                                            <span>Shop</span>
                                            <button
                                                onClick={openSubMenuHandler}
                                                className="cursor-pointer ring-1 ring-gray-300 text-[28px] text-gray-400 hover:bg-theme-primary hover:text-white transition-all duration-300 ease-in-out"
                                            >
                                                <MdKeyboardArrowRight />
                                            </button>
                                        </div>
                                        <ul
                                            className={`${
                                                isOpenSubMenu
                                                    ? 'flex'
                                                    : 'hidden'
                                            } top-divider ml-6 flex-col`}
                                        >
                                            <li className="py-2 cursor-pointer hover:text-theme-primary transition-all duration-300">
                                                Shop
                                            </li>
                                            <li className="py-2 cursor-pointer hover:text-theme-primary transition-all duration-300">
                                                Cart
                                            </li>
                                            <li className="py-2 cursor-pointer hover:text-theme-primary transition-all duration-300">
                                                Wishlist
                                            </li>
                                        </ul>
                                    </li>

                                    <li className=" py-2 hover:text-theme-primary transition-all duration-300">
                                        <a href="#">Pages </a>
                                    </li>
                                    <li className=" py-2 hover:text-theme-primary transition-all duration-300">
                                        <a href="#">Coupons </a>
                                    </li>
                                    <li className=" py-2 hover:text-theme-primary transition-all duration-300">
                                        <a href="#">Blog </a>
                                    </li>
                                    <li className=" py-2 hover:text-theme-primary transition-all duration-300">
                                        <a href="#">Contact </a>
                                    </li>
                                </ul>
                            </DrawerBody>
                        </>
                    )}
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default ToggleMenuDrawer;
