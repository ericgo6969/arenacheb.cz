import Image from "next/image";
import React from "react";
import GiftBox from "@/public/assets/images/gift-box.png";

export default function Activities() {
    return (
        <section
            id="activities"
            className="w-screen min-h-1/2 flex justify-center md:mt-0 mt-[50px]"
        >
            <div className="lg:w-[70%] w-[85%] py-12 flex justify-end items-end lg:-ml-14">
                <div className="w-full p-4 flex flex-col lg:flex-row justify-between md:py-6 md:px-0 bg-blend-multiply items-center bg-[url('/assets/images/gifting-bg.png')] bg-primary-red bg-contain rounded-3xl">
                    <div className="flex gap-2 md:flex-row flex-col items-center">
                        <div className="relative w-56">
                            <Image
                                className="w-56 absolute left-0 top-1/2 -translate-y-1/2 object-contain"
                                src={GiftBox}
                                alt="Go Kart Gift Box"
                            />
                        </div>
                        <div className="md:pt-0 pt-20">
                            <h1 className="text-[32px] font-medium">
                                Make somebody happy with a gift voucher
                            </h1>
                            <span className="text-base font-medium">
                                The voucher is valid for all services.
                                Unforgettable experiences for children and
                                adults!
                            </span>
                        </div>
                    </div>
                    <a
                        href="https://vouchers.funarenacheb.cz/c/darkovy-poukaz"
                        target="blank"
                        className="font-bold text-base px-6 h-11 text-black bg-white rounded-xl lg:-mr-14 lg:mb-0 mr-0 -mb-10 leading-11"
                    >
                        Buy now
                    </a>
                </div>
            </div>
        </section>
    );
}
