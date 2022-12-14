import { getRandomId } from "@utils/shared";

import { TTechRowData } from "./components/TechRow";

export const techBoxData: Array<TTechRowData> = [
    {
        id: getRandomId(),
        linkList: [
            {
                filters: {
                    stack: ["backend"],
                },
                id: getRandomId(),
                label: "Backend & Infra",
                link: "/jobs",
            },
            {
                filters: {
                    stack: ["android"],
                },
                id: getRandomId(),
                label: "Android",
                link: "/jobs",
            },
        ],
    },
    {
        id: getRandomId(),
        linkList: [
            {
                filters: {
                    stack: ["ios"],
                },
                id: getRandomId(),
                label: "iOS",
                link: "/jobs",
            },
            {
                filters: {
                    stack: ["web"],
                },
                id: getRandomId(),
                label: "Web",
                link: "/jobs",
            },
        ],
    },
    {
        id: getRandomId(),
        linkList: [
            {
                filters: {
                    stack: ["data-science", "qa", "data-analysis"],
                },
                id: getRandomId(),
                label: "Data & QA",
                link: "/jobs",
            },
            {
                filters: {
                    stack: ["web"],
                },
                id: getRandomId(),
                label: "Frontend",
                link: "/jobs",
            },
        ],
    },
];
