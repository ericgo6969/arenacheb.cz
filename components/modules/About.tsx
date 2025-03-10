import React, { useRef, useState } from "react";
import Link from "next/link";

import { ArrowRight, PlayButton } from "../svgs";
import goKartIntroVideoThump from "@/public/assets/images/go-kart-introduce-thump.jpg";
const goKartIntroVideo = "/assets/videos/go-kart-introduce.mp4";

export default function About() {
    const [isPaused, setIsPaused] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    function toggleVideo() {
        const video = videoRef.current;

        if (video) {
            setIsPaused(!video.paused);
            if (video.paused) video.play();
            else video.pause();
        }
    }

    return (
        <section id="about" className="w-screen min-h-1/2 flex justify-center">
            <div className="max-w-[85%] py-12 flex flex-col justify-end items-end gap-12">
                <div className="flex lg:flex-row flex-col lg:gap-0 gap-6 w-full lg:max-w-[80%] justify-between lg:items-end items-start">
                    <div className="flex flex-col w-[70%] gap-8">
                        <h1 className="uppercase font-bold lg:text-7xl text-5xl font-primary">
                            New entertainment centre near Cheb
                        </h1>
                        <h2 className="text-base lg:w-2/3 w-full">
                            We have been entertaining children and adults in
                            western Bohemia for more than 10 years!
                        </h2>
                    </div>
                    <div>
                        <Link className="flex gap-3" href={"/"}>
                            <span className="text-base">
                                Find more about us
                            </span>
                            <div className="flex justify-center items-center h-6 w-6">
                                <ArrowRight className="text-2xl" />
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="rounded-3xl overflow-hidden w-full relative">
                    <video
                        height={500}
                        poster={goKartIntroVideoThump.src}
                        width={"100%"}
                        ref={videoRef}
                        controls={!isPaused}
                    >
                        <source src={goKartIntroVideo} />
                    </video>
                    {isPaused && (
                        <div className="absolute z-20 top-0 left-0 w-full h-full flex justify-center items-center">
                            <button
                                onClick={toggleVideo}
                                className="p-6 bg-primary-blue rounded-xl"
                            >
                                <PlayButton className="text-4xl" />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
