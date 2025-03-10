import { StaticImageData } from "next/image";

export type tab = {
    id: number;
    tab: {
        title: string;
        img: StaticImageData;
    };
    content: string;
    background: StaticImageData;
};
