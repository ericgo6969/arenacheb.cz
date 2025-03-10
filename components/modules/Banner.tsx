import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { data } from "@/data/slider";
import { Hero } from "@/components/modules";
import Image from "next/image";

import Flag from "@/public/assets/images/flag.png";
import { Phone } from "../svgs";

const Banner = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index: number, className: string) {
            return (
                '<span class="' +
                className +
                ' !h-3 !w-3 !m-0 border-[1px] border-lightgray bg-transparent"></span>'
            );
        },
    };

    return (
        <div className="relative">
            <Swiper
                className="bg-background"
                pagination={pagination}
                modules={[Pagination]}
                slidesPerView={1}
                autoplay={{
                    delay: 6000,
                }}
            >
                {data.map(({ id, mainText, subText, img }) => (
                    <SwiperSlide
                        key={id}
                        className="w-full h-screen flex flex-col"
                    >
                        <Hero mainText={mainText} subText={subText} img={img} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="top-[calc(50%_+_154px)] flex items-center justify-between w-fit gap-4 p-1 pl-3 bg-lightgray rounded-[50px] absolute xl:bottom-16 xl:top-auto md:right-12 right-6 z-50">
                <p className="text-base font-lexend text-mediumgray font-bold">
                    +420737878891
                </p>
                <div className="p-2 rounded-[50%] bg-primary-red">
                    <Phone className="text-sm" />
                </div>
            </div>
            <div className="flex flex-col md:left-auto md:translate-x-0 left-1/2 -translate-x-1/2 w-fit absolute xl:bottom-28 xl:top-auto top-1/2 md:right-12 right-auto z-50">
                <div className="flex justify-between flex-col pt-2 px-4 bg-mediumgray/60 gap-1 w-fit rounded-3xl rounded-bl-none relative">
                    <div className="flex justify-between">
                        <Image
                            className="h-20 object-contain -mt-7 -ml-8 w-fit"
                            src={Flag}
                            alt="Go Kart Flag"
                        />
                        <p className="text-[32px] font-primary uppercase">
                            Everyday fun for everyone
                        </p>
                    </div>
                    <p className="text-sm w-[350px]">
                        A few kilometers from Cheb, we have built a new
                        entertainment centre{" "}
                        <span className="highlight">FUN Arena Cheb</span> for
                        you. You will find entertainment and sports activities
                        for children and adults here.
                    </p>
                    <div className="absolute content-[''] w-1/2 h-8 bg-mediumgray/60 rounded-b-3xl left-0 -bottom-8">
                        <div className="relative w-full h-full">
                            <div
                                className="h-4 w-4 overflow-hidden absolute top-0 -right-[15.5px] opacity-60"
                                style={{
                                    aspectRatio: 1,
                                    backgroundImage:
                                        "radial-gradient(circle at 100% 100%, transparent 16px, #292929 16px)",
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
