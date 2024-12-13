import { category } from '../lib/data';
import { MdKeyboardArrowRight } from 'react-icons/md';
import {
    Button,
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
} from '@nextui-org/react';

const Category = () => {
    return (
        // <>
        //     <ul className="w-72 py-2 px-8 shadow-xl">
        //         {category.map((category) => (
        //             <li
        //                 key={category.id}
        //                 className="flex justify-between items-center border-b-1 border-gray-600 cursor-pointer relative px-2 category-hover-effect"
        //             >
        //                 <span className="py-2">{category.name}</span>
        //                 <MdKeyboardArrowRight />
        //             </li>
        //         ))}
        //     </ul>

        <DropdownMenu aria-label="Static Actions">
            {/* <DropdownItem key="copy">
                </DropdownItem> */}
            {category.map((category) => (
                <DropdownItem
                    key={category.id}
                    className="flex justify-between items-center border-b-1 border-gray-600 cursor-pointer relative px-2 category-hover-effect"
                >
                    <span className="py-2">{category.name}</span>
                    <MdKeyboardArrowRight />
                </DropdownItem>
            ))}
        </DropdownMenu>
        // </>
    );
};

export default Category;
