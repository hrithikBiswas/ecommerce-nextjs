import { category } from '../lib/data';
import { MdKeyboardArrowRight } from 'react-icons/md';
import {
    Button,
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
} from '@nextui-org/react';
import Image from 'next/image';

const Category = () => {
    return (
        <DropdownMenu
            id="hrithik"
            className="overflow-visible p-0"
            aria-label="Static Actions"
            variant="light"
        >
            {category.map((category) => (
                <DropdownItem
                    key={category.id}
                    color=""
                    className="flex justify-between items-center group/child rounded-none [&:not(:last-child)]:border-b-1  border-gray-200 cursor-pointer relative px-2 py-3 category-hover-effect"
                >
                    <div className="flex justify-between items-center text-gray-700 hover:text-theme-primary font-semibold transition-all">
                        <div className="flex items-center gap-2">
                            <Image
                                className="w-10 h-10 rounded-full object-cover"
                                src={category.image.src}
                                width="50"
                                height="50"
                                alt="cart-1"
                            />
                            <span className="py-2">{category.name}</span>
                        </div>
                        {category.children.length !== 0 && (
                            <MdKeyboardArrowRight />
                        )}
                    </div>
                    {category.children.length !== 0 && (
                        <ul className="absolute flex flex-col invisible group-hover/child:visible left-full top-6 bg-white shadow-md border-1 border-gray-50 w-72 py-2">
                            {category.children.map((children, index) => (
                                <li
                                    key={index}
                                    className="[&:not(:last-child)]:border-b-1  border-gray-200 px-7 py-2 relative text-gray-700 font-semibold hover:text-theme-primary category-hover-effect transition-colors"
                                >
                                    {children}
                                </li>
                            ))}
                        </ul>
                    )}
                </DropdownItem>
            ))}
        </DropdownMenu>
    );
};

export default Category;
