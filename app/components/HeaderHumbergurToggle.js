'use client';
import { HiBars3BottomLeft } from 'react-icons/hi2';
import { Button, Dropdown, DropdownTrigger } from "@heroui/react";
import Category from '@/app/ui/Category';

const HeaderHumbergurToggle = () => {
    return (
        <Dropdown>
            <DropdownTrigger>
                <Button isIconOnly className="bg-gray-300/15 p-1 rounded-md">
                    <HiBars3BottomLeft className="font-bold text-6xl text-white" />
                </Button>
            </DropdownTrigger>
            <Category />
        </Dropdown>
    );
};

export default HeaderHumbergurToggle;
