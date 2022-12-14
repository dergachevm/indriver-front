import { getRandomId } from "@utils/shared";
import slideImage from "@assets/img/slider-img.png";
import { ReactComponent as Graph } from "@assets/svg/graph.svg";

import { TSlideData } from "./components/Slider";

export const sliderData: Array<TSlideData> = [
    {
        achievements: [
            {
                id: getRandomId(),
                label: "$900 000<:0-9999:>raised",
                text: "within the<:0-9999:>seed round",
            },
            {
                id: getRandomId(),
                label: "x10 revenue<:0-9999:>growth",
                text: "annual revenue<:0-9999:>growth",
            },
            {
                id: getRandomId(),
                label: "Top #100<:0-9999:>startups",
                text:
                    "the most successful<:0-9999:>Russian startups of the year<:0-9999:>according to Inc. Russia.",
            },
            {
                id: getRandomId(),
                label: "100 million<:0-9999:>users",
                text:
                    "Like the entire population<:0-9999:>of Sweden, Sri Lanka,<:0-9999:>Australia and Canada",
            },
        ],
        description:
            "Raised $900,000 as part of a seed round at the AdVentureLand site of the Skolkovo Technopark. The project was funded by Starta Capital, members of the Angelsdeck club and private venture investors. The company was also named the future unicorn as part of the StartHub Moscow award and was included in the rating of the 100 most successful Russian startups",
        id: getRandomId(),
        message: "Raised $9000,000<:0-9999:>as part of a seed round",
        type: "default",
    },
    {
        achievements: [
            {
                id: getRandomId(),
                label: "April<:1024-9999:>2019",
                text:
                    "8th place<:1024-9999:>Our 5000th employee<:0-9999:>Various indicators",
            },
            {
                id: getRandomId(),
                label: "july<:1024-9999:>2019",
                text:
                    "5th place<:1024-9999:>Our 5000th employee<:0-9999:>Various indicators",
            },
        ],
        id: getRandomId(),
        img: slideImage,
        label:
            "“I upgraded as a<:1024-9999:>programmer and got my<:1024-9999:>first job at a cool company.”",
        type: "img",
    },
    {
        Graph: Graph,
        achievements: [
            {
                id: getRandomId(),
                label: "",
                text: [
                    "Raised $900,000 as part of a seed round at the AdVentureLand site of the Skolkovo Technopark. The project was funded by Starta Capital, members of the Angelsdeck club and private venture investors.",
                    "Raised $900,000 as part of a seed round at the AdVentureLand site of the Skolkovo Technopark. The project was funded by Starta Capital, members of the Angelsdeck club and private venture investors.",
                ],
            },
            {
                id: getRandomId(),
                label: "",
                text: [
                    "The company was also named the future unicorn as part of the StartHub Moscow award and was included in the rating of the 100 most successful Russian startups.",
                ],
            },
        ],

        id: getRandomId(),
        label: "Top ride-hailing apps<:1024-9999:>worldwibe by download",
        type: "graph",
    },
];
