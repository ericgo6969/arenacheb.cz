import TabTitleImage1 from "@/public/assets/images/Tab_title_1.jpg";
import TabTitleImage2 from "@/public/assets/images/Tab_title_2.jpg";
import TabTitleImage3 from "@/public/assets/images/Tab_title_3.jpg";
import TabTitleImage4 from "@/public/assets/images/Tab_title_4.jpg";
import TabTitleImage5 from "@/public/assets/images/Tab_title_5.jpg";
import TabTitleImage6 from "@/public/assets/images/Tab_title_6.jpg";
import TabBackground1 from "@/public/assets/images/Banner_Inner_1.jpg";
import TabBackground2 from "@/public/assets/images/Banner_Inner_2.jpg";
import TabBackground3 from "@/public/assets/images/Banner_Inner_3.jpg";
import TabBackground4 from "@/public/assets/images/Banner_Inner_4.jpg";
import TabBackground5 from "@/public/assets/images/Banner_Inner_5.jpg";
import { tab } from "@/types/activitiesTab";

export const activitiesTabs: tab[] = [
    {
        id: 0,
        tab: {
            title: "kartarena",
            img: TabTitleImage1,
        },
        content:
            "Enjoy an adrenaline ride in any weather. Outdoor track and indoor hall at a professional level with Sodi go-karts.",
        background: TabBackground1,
    },
    {
        id: 1,
        tab: {
            title: "jumparena",
            img: TabTitleImage2,
        },
        content:
            "Arena with lots of attractions for children and adults of all ages. Trampolines, climbing wall, ninja track and other attractions.",
        background: TabBackground2,
    },
    {
        id: 2,
        tab: {
            title: "virtual reality",
            img: TabTitleImage3,
        },
        content:
            "Díky naší virtuální realitě vstoupíte do jiného světa a poznáte nové technologie. Vyberte si z naší nabídky her a zažijte VR na vlastní kůži.",
        background: TabBackground3,
    },
    {
        id: 3,
        tab: {
            title: "multiball",
            img: TabTitleImage4,
        },
        content:
            "Interaktivní sportovní a herní konzole, která z pohybu a vzdělávání dělá opravdovou zábavu. Velké množství her zaujme všechny věkové kategorie.",
        background: TabBackground4,
    },
    {
        id: 4,
        tab: {
            title: "laser shooting range",
            img: TabTitleImage5,
        },
        content:
            "Vyzkoušejte si nebo vypilujte svou mušku! Laserová střelnice se třemi režimy střelby na čas otestuje nejen vaši přesnost, ale také rychlost a postřeh.",
        background: TabBackground5,
    },
    {
        id: 5,
        tab: {
            title: "company events",
            img: TabTitleImage6,
        },
        content:
            "Vyzkoušejte si nebo vypilujte svou mušku! Laserová střelnice se třemi režimy střelby na čas otestuje nejen vaši přesnost, ale také rychlost a postřeh.",
        background: TabBackground2,
    },
];
