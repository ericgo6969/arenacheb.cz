import React from "react";
import Logo from "@/public/assets/images/logo.png";
import Image from "next/image";
import { BurgerBtn, LanguageSwitcher } from "../svgs";

export default function Header() {
    return (
        <header className="flex justify-between items-center px-12 pt-6 w-full absolute top-0 z-50">
            <Image
                className="h-10 object-contain w-fit"
                src={Logo}
                alt="Go Kart Logo"
            />
            <div className="flex items-center gap-8">
                <LanguageSwitcher className="text-3xl" />
                <div className="p-3.5 rounded-[50%] bg-mediumgray">
                    <BurgerBtn className="text-base" />
                </div>
            </div>
        </header>
    );
}
