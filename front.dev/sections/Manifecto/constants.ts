import { getRandomId } from "@utils/shared";

import { TRowData } from "./components/Row";

export const rowDataList: Array<TRowData> = [
    {
        desc: "Test out ideas, feel free to try something new",
        id: getRandomId(),
        label: "Change processes",
    },
    {
        desc:
            "Seeing weaker points and improving the product is a job for a team",
        id: getRandomId(),
        label: "Get involved",
    },
    {
        desc:
            "Use your team's talents to the benefit of all, and solve problems efficiently",
        id: getRandomId(),
        label: "Keep things simple",
    },
    {
        desc: "Inspire, and remember who you are and why you do what you do",
        id: getRandomId(),
        label: "Cultivate mindfulness",
    },
    {
        desc: "Receive higher grades and keep an eye out for modern tech",
        id: getRandomId(),
        label: "Become best",
    },
];
