import Image from "next/image";
import React from "react";
import logoFooter from "@/public/logo-footer.svg";
import footerPay from "@/public/footer-pay-2.webp";
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedin,
    FaInstagram,
} from "react-icons/fa";
import { RiMailSendLine } from "react-icons/ri";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Footer = () => {
    return (
        <footer>
            <div className="px-4 w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-8xl mx-auto">
                <div className="pt-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-20">
                        <div className="flex flex-col gap-y-5">
                            <Image src={logoFooter} alt="logoFooter" />
                            <p className="text-xl">
                                We are a team of designers and developers that
                                create high quality Website
                            </p>
                            <ul className="flex gap-2">
                                <li className="text-black rounded-full ring-1 ring-gray-300 shadow-sm p-2 text-lg hover:bg-theme-primary hover:text-white transition-all duration-300">
                                    <FaFacebookF />
                                </li>
                                <li className="text-black rounded-full ring-1 ring-gray-300 shadow-sm p-2 text-lg hover:bg-theme-primary hover:text-white transition-all duration-300">
                                    <FaTwitter />
                                </li>
                                <li className="text-black rounded-full ring-1 ring-gray-300 shadow-sm p-2 text-lg hover:bg-theme-primary hover:text-white transition-all duration-300">
                                    <FaLinkedin />
                                </li>
                                <li className="text-black rounded-full ring-1 ring-gray-300 shadow-sm p-2 text-lg hover:bg-theme-primary hover:text-white transition-all duration-300">
                                    <FaInstagram />
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="font-semibold text-2xl mb-5">
                                My Account
                            </h2>
                            <ul className="text-gray-600 text-sm leading-7 ">
                                <li className="list-dot hover:text-theme-primary transition-all duration-300">
                                    <a href="#">Track Orders</a>
                                </li>
                                <li className="list-dot hover:text-theme-primary transition-all duration-300">
                                    <a href="#">Shipping</a>
                                </li>
                                <li className="list-dot hover:text-theme-primary transition-all duration-300">
                                    <a href="#">Wishlist</a>
                                </li>
                                <li className="list-dot hover:text-theme-primary transition-all duration-300">
                                    <a href="#">My Account</a>
                                </li>
                                <li className="list-dot hover:text-theme-primary transition-all duration-300">
                                    <a href="#">Order History</a>
                                </li>
                                <li className="list-dot hover:text-theme-primary transition-all duration-300">
                                    <a href="#">Returns</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="font-semibold text-2xl mb-5">
                                Information
                            </h2>
                            <ul className="text-gray-600 text-sm leading-7 ">
                                <li className="list-dot hover:text-theme-primary transition-all duration-300">
                                    <a href="#">Our Story</a>
                                </li>
                                <li className="list-dot hover:text-theme-primary transition-all duration-300">
                                    <a href="#">Careers</a>
                                </li>
                                <li className="list-dot hover:text-theme-primary transition-all duration-300">
                                    <a href="#">Privacy Policy</a>
                                </li>
                                <li className="list-dot hover:text-theme-primary transition-all duration-300">
                                    <a href="#">Terms & Conditions</a>
                                </li>
                                <li className="list-dot hover:text-theme-primary transition-all duration-300">
                                    <a href="#">Latest News</a>
                                </li>
                                <li className="list-dot hover:text-theme-primary transition-all duration-300">
                                    <a href="#">Contact us</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="font-semibold text-2xl mb-5">
                                Information
                            </h2>
                            <p className="text-sm text-gray-600">
                                Got Questions? Call us
                            </p>
                            <h2 className="font-semibold text-2xl mb-5">
                                +1 234 567 89
                            </h2>
                            <div className="flex gap-3 mb-2">
                                <RiMailSendLine className="text-lg" />{" "}
                                <p className="text-sm text-gray-600">
                                    shofy@gmail.com
                                </p>
                            </div>
                            <div className="text-sm text-gray-600 flex gap-3">
                                <HiOutlineLocationMarker className="text-lg" />{" "}
                                <div className="flex flex-col">
                                    <p className="text-sm text-gray-600">
                                        79 Sleepy Hollow St.
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        Jamaica, New York 1432
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-y-4 justify-between border-t-1 border-t-gray-300 pt-5 pb-9">
                        <p className="text-gray-500">
                            &copy; 2024 All Rights Reserved | Next js Template
                            by Themepure.
                        </p>
                        <Image src={footerPay} alt="footerPay" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
