import React from "react";
import { ArrowUp, Email, Facebook, Instagram, Phone } from "../svgs";
import Image from "next/image";
import Logo from "@/public/assets/images/footer-logo.png";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="py-20 flex justify-center items-center w-screen min-h-80 bg-[#131010]">
            <div className="w-full max-w-[85%] flex flex-col gap-6 justify-center items-center">
                <div className="flex justify-between items-start md:gap-0 gap-8 md:items-center w-full flex-col md:flex-row">
                    <Image
                        src={Logo}
                        alt="Go Kart logo"
                        className="h-24 object-contain w-fit"
                    />
                    <p className="text-sm w-[300px] leading-6">
                        New entertainment centre FUN arena Cheb. You will find
                        entertainment and sports activities for children and
                        adults here.
                    </p>
                    <div className="flex gap-2.5 text-sm items-start md:items-end flex-col">
                        <p>Potočiště 3, 350 02 Odrava</p>
                        <p>fun@funarenacheb.cz</p>
                        <p>+420737878891</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full md:gap-0 gap-3">
                    <div className="w-fit flex justify-between items-center gap-3 py-1 px-3 bg-mediumgray rounded-[300px]">
                        <div className="p-2.5">
                            <Facebook className="text-[12px]" />
                        </div>
                        <div className="p-2.5">
                            <Instagram className="text-[12px]" />
                        </div>
                        <div className="p-2.5">
                            <Email className="text-[12px]" />
                        </div>
                        <div className="p-2.5">
                            <Phone className="text-[12px]" />
                        </div>
                    </div>
                    <div className="clean"></div>
                    <div className="flex justify-center items-center gap-12">
                        <p className="text-sm">
                            © 2025 FUN Arena Cheb. All rights Reserved.
                        </p>
                        <button
                            onClick={scrollToTop}
                            className="p-3.5 bg-mediumgray rounded-[50%]"
                        >
                            <ArrowUp className="text-sm" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
