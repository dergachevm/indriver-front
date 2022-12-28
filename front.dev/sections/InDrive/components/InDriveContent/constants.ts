import { getRandomId } from "@utils/shared";

import { TContentData } from "../Card";

export const contentData: Array<TContentData> = [
    {
        desc:
            "With inDrive, it is simple: your rides are just cheaper. Rains, bad traffic, and Mercury retrograde no longer affect the cost",
        icon: "rocket",
        id: getRandomId(),
        label: "Save on your<:1150-9999:>rides",
    },
    {
        desc:
            "Set your destination and a fair ride cost — our drivers will not make you wait",
        icon: "heart",
        id: getRandomId(),
        label: "Suggest<:1150-9999:>your fares",
    },
    {
        desc:
            "Average vehicle delivery time with inDriver. Our map will show you if your driver is on the way and when it is time to go",
        icon: "fire",
        id: getRandomId(),
        label: "Only<:1150-9999:>5 minutes",
    },
    {
        desc:
            "We provide you with all options possible; you need to choose the most convenient one based on the end fare, car model, driver's rating, and vehicle delivery time",
        icon: "star",
        id: getRandomId(),
        label: "Choose<:1150-9999:>the best deal",
    },
];
