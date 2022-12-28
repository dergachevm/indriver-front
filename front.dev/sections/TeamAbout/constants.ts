import { getRandomId } from "@utils/shared";

import slide_1 from "@assets/img/team-about-1.png";
import slide_2 from "@assets/img/team-about-2.png";

import { TSlideData } from "./components/Slide";

export const sliderData: Array<TSlideData> = [
    {
        id: getRandomId(),
        img: slide_1,
        imgType: "default",

        text:
            "inDrive development team, which for the sake of constant growth knows how to experiment and learn from mistakes. That's 450+ engineers working in over 50 cross-functional teams.",
    },
    {
        id: getRandomId(),
        img: slide_2,
        imgType: "cover",

        text:
            "We employ people who are not afraid to take responsibility and create their own rules when the usual ones do not work. The main thing is the freedom of professional expression of inDrive.Tech developers.",
    },
];
