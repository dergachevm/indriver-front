import { TNavigationTab } from "@dev/types";
import { getRandomId } from "@utils/shared";

export const navigationTabs: Array<TNavigationTab> = [
    // {
    //     id: getRandomId(),
    //     label: "Culture of Challenge",
    //     url: "/culture",
    // },
    {
        id: getRandomId(),
        label: "About inDrive.Tech",
        url: "/team",
    },
    {
        id: getRandomId(),
        label: "Career",
        url: "/jobs",
    },
];
