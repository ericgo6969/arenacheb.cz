import Image, { StaticImageData } from "next/image";
import React from "react";

import Shadow from "@/public/assets/images/Shadow.png";

type HeroBanner = {
    mainText: string;
    subText: string;
    img: StaticImageData;
};

export default function Hero({ mainText, subText, img }: HeroBanner) {
    return (
        <section className="w-screen h-fit mb-[50px] relative">
            <Image
                className="w-full h-screen object-cover"
                src={img}
                alt="Go Kart Banner"
            />
            <div className="absolute pb-[90px] pl-12 flex items-start xl:items-end w-full h-full bg-gradient-to-t to-50% from-footerbg to-footerbg/0 top-20 left-0">
                <div className="w-fit">
                    <h1 className="md:text-[120px] md:mt-0 mt-6 text-5xl uppercase font-title">
                        {mainText}
                    </h1>
                    <div className="flex flex-col md:flex-row justify-between md:items-center items-start gap-5 w-fit">
                        <p className="text-sm max-w-[347px]">{subText}</p>
                        <button className="flex py-3.5 px-7 justify-center items-center font-bold border-lightgray border-[1px] rounded-lg -skew-x-[25deg]">
                            <p className="text-base skew-x-[25deg]">
                                Find out more
                            </p>
                        </button>
                    </div>
                </div>
            </div>
            <div className="absolute -bottom-9 left-1/2 -translate-1/2">
                <button className="relative flex gap-0 justify-center items-center">
                    <Image
                        className="w-[150%] object-contain absolute left-0 z-10"
                        src={Shadow}
                        alt=""
                    />
                    <div className="flex py-4 px-6 text-[32px] justify-center items-center font-bold bg-primary-blue uppercase rounded-lg -skew-x-[25deg] z-30">
                        <p className="text-base skew-x-[25deg]">reserve</p>
                    </div>
                    <div className="flex -m-3 py-4 px-6 text-[32px] justify-center items-center font-bold bg-primary-red uppercase rounded-lg -skew-x-[25deg] z-20">
                        <p className="text-base skew-x-[25deg]">now!</p>
                    </div>
                </button>
            </div>
        </section>
    );
}
