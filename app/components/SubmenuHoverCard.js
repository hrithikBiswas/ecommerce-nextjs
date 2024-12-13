const SubmenuHoverCard = () => {
    return (
        <ul className="absolute invisible opacity-0 submenu-hover w-48  py-4 px-5 shadow-lg text-gray-700 bg-white group-hover/submenu:visible group-hover/submenu:opacity-100 group-hover/submenu:submenu-hover-effect transition-transform origin-top duration-200">
            <li className="hover:text-theme-primary transition cursor-pointer">
                Ship
            </li>
            <li className="hover:text-theme-primary transition cursor-pointer">
                Cart
            </li>
            <li className="hover:text-theme-primary transition cursor-pointer">
                Wishlist
            </li>
        </ul>
    );
};

export default SubmenuHoverCard;
