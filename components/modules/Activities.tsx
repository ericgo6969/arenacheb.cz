import React, { useState } from "react";
import { Triangle } from "../svgs";
import Image from "next/image";
import { activitiesTabs } from "@/data/activities";
import { tab } from "@/types/activitiesTab";

export default function Activities() {
    const [activeTab, setActiveTab] = useState<tab>(activitiesTabs[1]);

    const toggleTab = (id: number) => {
        const tab = activitiesTabs[id];
        setActiveTab(tab || activitiesTabs[1]);
    };

    return (
        <section
            id="activities"
            className="w-screen min-h-1/2 flex justify-center"
        >
            <div className="flex flex-col gap-12 w-full max-w-[85%] py-12">
                <div className="flex lg:flex-row flex-col justify-between lg:items-center items-start">
                    <h1 className="font-bold font-primary lg:text-7xl text-5xl">
                        OUR ATTRACTIONS
                    </h1>
                    <div className="flex gap-6 justify-center items-center">
                        <p className="font-medium text-base">
                            Multiple activities at Fun Arena Cheb
                        </p>
                        <div className="flex gap-1">
                            <Triangle className="[&>path]:fill-primary-red text-base" />
                            <Triangle className="[&>path]:fill-primary-blue text-base" />
                        </div>
                    </div>
                </div>
                <div className="flex justify-between relative items-center gap-10 pl-3 lg:flex-row flex-col">
                    <div className="tab-headers lg:w-fit lg:overflow-x-visible flex flex-col lg:h-auto md:h-[200px] h-[100px] lg:flex-nowrap flex-wrap overflow-x-scroll lg:overflow-x-auto w-full gap-3 mr-3">
                        {activitiesTabs.map(({ id, tab }) => (
                            <button
                                key={id}
                                className={`tab-header lg:w-[460px] w-[300px] h-16 relative`}
                                onClick={() => toggleTab(id)}
                            >
                                <div
                                    className={`h-full absolute top-0 left-0 rounded-xl -skew-x-[25deg] ${
                                        id === activeTab.id
                                            ? "bg-mediumgray w-[150%]"
                                            : "bg-lightgray w-full"
                                    }`}
                                ></div>

                                <div className="h-16 rounded-xl rounded-br-none -skew-x-[25deg] overflow-hidden">
                                    <div className="-ml-3 pr-8 flex justify-between items-center skew-x-[25deg] relative">
                                        <div className="h-fit relative">
                                            <Image
                                                className="h-16 object-contain w-fit"
                                                src={tab.img}
                                                alt="Go Kart Tab Title 1"
                                            />
                                            <div
                                                className={`h-full w-full absolute top-0 left-0  ${
                                                    id === activeTab.id
                                                        ? "bg-gradient-to-r from-mediumgray/20 to-mediumgray"
                                                        : "bg-gradient-to-r from-lightgray/20 to-lightgray"
                                                }`}
                                            ></div>
                                        </div>

                                        <span
                                            className={`text-[32px] font-primary uppercase ${
                                                id === activeTab.id
                                                    ? "text-white right-1"
                                                    : "text-mediumgray right-8"
                                            } absolute top-1/2 -translate-y-1/2`}
                                        >
                                            {tab.title}
                                        </span>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                    <div className="relative lg:w-[60%] w-full md:h-full h-screen object-cover rounded-3xl overflow-hidden">
                        <div className="rounded-br-[0px] bg-gradient-to-t from-mediumgray to-mediumgray/0 absolute w-full h-full top-0 left-0 z-10"></div>
                        <Image
                            className={`w-full h-full object-cover`}
                            src={activeTab.background}
                            alt="Go Kart Tab Content"
                        />

                        <div className="bg-[url(/assets/images/gifting-bg.png)] w-full h-full absolute bottom-0 left-0 object-contain bg-contain"></div>

                        <div className="w-full h-full flex justify-between items-end absolute bottom-0 left-0 z-30">
                            <span className="text-base w-[55%] pl-8 pb-6">
                                {activeTab.content}
                            </span>
                            <div className="h-[50px] w-40 bg-background rounded-tl-3xl relative flex justify-end items-end">
                                <button className="font-bold text-base px-6 h-11 text-black bg-lightgray rounded-3xl">
                                    Find out more
                                </button>
                                <div
                                    className="h-6 w-6 overflow-hidden absolute bottom-0 -left-6 rotate-180"
                                    style={{
                                        aspectRatio: 1,
                                        backgroundImage:
                                            "radial-gradient(circle at 100% 100%, transparent 24px, #1e1e1e 24px)",
                                    }}
                                ></div>
                                <div
                                    className="h-6 w-6 overflow-hidden absolute -top-6 right-0 rotate-180"
                                    style={{
                                        aspectRatio: 1,
                                        backgroundImage:
                                            "radial-gradient(circle at 100% 100%, transparent 24px, #1e1e1e 24px)",
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
