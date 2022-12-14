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
            "InDriver does not strive to make a developer a submissive performer of tasks from above, but, on the contrary, they are interested in the freedom of conscious professional expression",
    },
    {
        id: getRandomId(),
        img: slide_2,
        imgType: "cover",

        text:
            "inDriver is the personification of the alternative. This is a company that has found financial stability. Working in it, you can not worry about the danger of wasting time.",
    },
];
