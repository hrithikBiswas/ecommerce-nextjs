'use client';
import { HiBars3BottomLeft } from 'react-icons/hi2';
import {
    Button,
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
} from '@nextui-org/react';
import Category from '../ui/Category';

const HeaderHumbergurToggle = () => {
    return (
        <Dropdown>
            <DropdownTrigger>
                <Button isIconOnly className="bg-gray-300/15 p-1 rounded-md">
                    <HiBars3BottomLeft className="font-bold text-6xl text-white" />
                </Button>
            </DropdownTrigger>
            <Category />
            {/* <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="copy">
                </DropdownItem>
            </DropdownMenu> */}
        </Dropdown>
    );
};

export default HeaderHumbergurToggle;
