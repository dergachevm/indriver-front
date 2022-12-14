import { getRandomId } from "@utils/shared";

import { TBubbleBoxData } from "./components/BubbleBox";

export const bubbleBoxData: TBubbleBoxData = {
    id: getRandomId(),
    list: [
        {
            id: getRandomId(),
            position: "flex-start",
            row: [
                {
                    id: getRandomId(),
                    label: "Flexible hours",
                },
                {
                    id: getRandomId(),
                    label: "Relocation package",
                },
            ],
        },
        {
            id: getRandomId(),
            position: "center",
            row: [
                {
                    id: getRandomId(),
                    label: "Summits, hackatons, meet-ups",
                },
            ],
        },
        {
            id: getRandomId(),
            position: "flex-end",
            row: [
                {
                    id: getRandomId(),
                    label: "Working from anywhere",
                },
                {
                    id: getRandomId(),
                    label: "Stock option plans",
                },
            ],
        },
        {
            id: getRandomId(),
            position: "flex-start",
            row: [
                {
                    id: getRandomId(),
                    label: "Unique challenges",
                },
                {
                    id: getRandomId(),
                    label: "Flexible grading system",
                },
            ],
        },
    ],
};

export const mobileBubbleBoxData: TBubbleBoxData = {
    id: getRandomId(),
    list: [
        {
            id: getRandomId(),
            position: "flex-end",
            row: [
                undefined,
                {
                    id: getRandomId(),
                    label: "Relocation package",
                },
            ],
        },
        {
            id: getRandomId(),
            position: "flex-start",
            row: [
                {
                    id: getRandomId(),
                    label: "Flexible hours",
                },
                undefined,
            ],
        },
        {
            id: getRandomId(),
            position: "flex-end",
            row: [
                undefined,
                {
                    id: getRandomId(),
                    label: "Summits, hackatons, meet-ups",
                },
            ],
        },
        {
            id: getRandomId(),
            position: "flex-start",
            row: [
                {
                    id: getRandomId(),
                    label: "Working from anywhere",
                },
                undefined,
            ],
        },
        {
            id: getRandomId(),
            position: "flex-end",
            row: [
                undefined,
                {
                    id: getRandomId(),
                    label: "Stock option plans",
                },
            ],
        },
        {
            id: getRandomId(),
            position: "flex-start",
            row: [
                {
                    id: getRandomId(),
                    label: "Unique challenges",
                },
                undefined,
            ],
        },
        {
            id: getRandomId(),
            position: "flex-end",
            row: [
                undefined,
                {
                    id: getRandomId(),
                    label: "Flexible grading system",
                },
            ],
        },
    ],
};
