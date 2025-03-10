import React from "react";
import Image from "next/image";

import aboutQrCode from "@/public/assets/images/qr-fun.png";

export default function Registration() {
    return (
        <section
            id="registration"
            className="w-screen min-h-1/2 flex justify-center items-center"
        >
            <div className="max-w-[85%] py-12 flex justify-between lg:flex-row flex-col gap-8 lg:gap-0">
                <div className="flex flex-col gap-8 lg:w-[40%] w-full">
                    <h1 className="uppercase font-bold lg:text-7xl text-5xl font-primary">
                        Registration
                    </h1>
                    <h2 className="text-base">
                        For organizational and security reasons, every visitor
                        to the FUN arena Cheb must register before entering the
                        attraction. At the reception, your registration will be
                        completed and you will receive a loyalty card which you
                        will use for our services.
                    </h2>
                </div>
                <div className="flex flex-col gap-8 lg:w-1/2 w-full">
                    <div className="flex flex-col gap-24 items-end">
                        <div className="flex gap-4 justify-between w-full">
                            <div className="flex pl-2 mt-8 justify-center items-center font-bold bg-mediumgray/50 w-16 h-fit rounded-xl -skew-x-[25deg]">
                                <button className="text-7xl leading-12 h-fit skew-x-[25deg] text-primary-blue">
                                    1
                                </button>
                            </div>
                            <div className="ml-4 flex flex-col gap-2 w-full">
                                <div className="flex p-10 items-center font-bold bg-mediumgray h-16 rounded-xl -skew-x-[25deg]">
                                    <h6 className="font-bold text-2xl skew-x-[25deg]">
                                        Choose an Attraction
                                    </h6>
                                </div>
                                <span className="font-secondary ml-10 text-base">
                                    Choose from the attractions of the FUN
                                    arena.
                                </span>
                            </div>
                        </div>
                        <div className="flex gap-4 justify-between w-full">
                            <div className="flex pl-2 mt-8 justify-center items-center font-bold bg-mediumgray/50 w-16 h-fit rounded-xl -skew-x-[25deg]">
                                <button className="text-7xl leading-12 h-fit skew-x-[25deg] text-primary-blue">
                                    2
                                </button>
                            </div>
                            <div className="ml-4 flex flex-col gap-2 w-full">
                                <div className="flex p-10 items-center justify-between font-bold bg-mediumgray h-16 rounded-xl -skew-x-[25deg]">
                                    <h6 className="font-bold text-2xl skew-x-[25deg]">
                                        Register
                                    </h6>
                                </div>
                                <div className="flex">
                                    <span className="font-secondary ml-10 text-base">
                                        You can register at the reception or by
                                        clicking the button above from the
                                        comfort of your home.
                                    </span>
                                    <div className="flex relative">
                                        <a
                                            href="https://web.racefacer.com/kiosk/kartarenacheb"
                                            target="blank"
                                            className="py-1 px-2.5 rounded-lg bg-primary-red absolute left-0 top-[40%] md:-left-16 md:-top-[calc(100%_-_10px)] text-sm font-bold"
                                        >
                                            Click here
                                        </a>
                                        <Image
                                            className="h-32 object-contain -mt-16 z-10"
                                            src={aboutQrCode}
                                            alt="fun about qr code"
                                        ></Image>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4 justify-between w-full">
                            <div className="flex pl-2 mt-8 justify-center items-center font-bold bg-mediumgray/50 w-16 h-fit rounded-xl -skew-x-[25deg]">
                                <button className="text-7xl leading-12 h-fit skew-x-[25deg] text-primary-blue">
                                    3
                                </button>
                            </div>
                            <div className="ml-4 flex flex-col gap-2 w-full">
                                <div className="flex p-10 items-center font-bold bg-mediumgray h-16 rounded-xl -skew-x-[25deg]">
                                    <h6 className="font-bold text-2xl skew-x-[25deg]">
                                        Have Fun
                                    </h6>
                                </div>
                                <span className="font-secondary ml-10 text-base w-3/4">
                                    Thank you for your online registrations. For
                                    each purchase you get points, which you can
                                    apply to our services and attractions then.
                                    We look forward to you!
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
