"use client";

import {
    About,
    Activities,
    Banner,
    Footer,
    Gifting,
    Header,
    Registration,
} from "@/components/modules";
import FloatingLogo from "@/public/assets/images/floating-logo.png";
import Image from "next/image";

export default function Home() {
    return (
        <div className="w-screen font-secondary">
            <Header />
            <Banner />
            <main className="grid grid-cols-1 lg:gap-[100px] gap-0 items-center sm:items-start bg-background pb-[100px]">
                <article id="about-wrap" className="relative">
                    <Registration />
                    <About />
                    <Image
                        className="absolute left-16 w-40 top-1/6 object-contain lg:block hidden"
                        src={FloatingLogo}
                        alt="Go Kart logo"
                    />
                </article>
                <Activities />
                <Gifting />
            </main>
            <Footer />
        </div>
    );
}
