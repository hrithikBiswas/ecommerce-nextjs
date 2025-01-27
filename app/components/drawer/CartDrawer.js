'use client';

import Image from 'next/image';
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    Button,
    Divider,
    useDisclosure,
} from "@heroui/react";
import { BsHandbag } from 'react-icons/bs';
import NotificationBadge from '@/app/components/NotificationBadge';
import cart from '@/public/empty-cart.png';

const CartDrawer = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <NotificationBadge
                onOpenDrawer={onOpen}
                Icon={BsHandbag}
                notification="12"
            />
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
                                <h2>Shopping Cart</h2>
                                <Divider className="my-2" />
                            </DrawerHeader>
                            <DrawerBody className="justify-center">
                                <div className="flex flex-col gap-y-5 items-center justify-center">
                                    <Image src={cart} alt="cart-image" />
                                    <h3 className="font-semibold text-black/90 mt-2">
                                        Your Cart is empty
                                    </h3>
                                    <Button
                                        className="bg-gray-500/10 text-black/90 font-semibold px-8 py-6"
                                        radius="full"
                                    >
                                        Go To Shop
                                    </Button>
                                </div>
                            </DrawerBody>
                            <DrawerFooter className="flex flex-col">
                                <Divider className="my-2" />
                                <div className="flex justify-between">
                                    <h3 className="font-bold">Subtotal:</h3>
                                    <h3 className="font-bold">$0.00</h3>
                                </div>
                                <div className="flex flex-col gap-y-3 my-6 pb-12">
                                    <Button className="bg-theme-primary text-white rounded-full py-[22px] tracking-wider">
                                        View Cart
                                    </Button>
                                    <Button className="bg-theme-primary text-white rounded-full py-[22px] tracking-wider">
                                        Checkout
                                    </Button>
                                </div>
                            </DrawerFooter>
                        </>
                    )}
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default CartDrawer;
