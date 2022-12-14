import { TCardData } from "@sections/InfoCard";
import { getRandomId } from "@utils/shared";

import technicalValueBg from "@assets/img/technicalValueBg.png";

export const aboutInDriveData: TCardData = {
    content: [
        {
            desc: "From the US and Mexico all the way to Russia and Tansania",
            id: getRandomId(),
            label: ["625+ cities", "42 countries"],
        },
        {
            desc: "That makes it 309,000 a day",
            id: getRandomId(),
            label: ["1 billion", "rides"],
        },
        {
            desc: "Dare to go after Uber and Gett with us?",
            id: getRandomId(),
            label: ["TOP #3", "globally"],
        },
        {
            desc:
                "As if we had the populations of Sweden, Sri-Lanka, Australia, and Canada together with us",
            id: getRandomId(),
            label: ["100 million", "users"],
        },
    ],
    header: {
        desc:
            "inDrive is a story about a startup from Yakutsk that evolved into a global company and is catching up with Uber in 42 countries and 625 cities all across the globe with its headquarters located in California!",
        label: "About inDrive",
    },
};

export const technicalValueData: TCardData = {
    bgImage: technicalValueBg,
    content: [
        {
            desc: "Dare to go after Uber and Gett with us?",
            id: getRandomId(),
            label: ["130 million", "installations"],
        },
        {
            desc: "670,000 people use it every day",
            id: getRandomId(),
            label: ["20 million", "MAU"],
        },
        {
            desc: "And everyone is very important to us",
            id: getRandomId(),
            label: ["2000+", "employees"],
        },
        {
            desc: "",
            id: getRandomId(),
            label: ["Estimated at", "$1.23 billion"],
        },
    ],
    header: {
        desc:
            "inDrive is a story about a startup from Yakutsk that evolved into a global company and is catching up with Uber in 42 countries and 625 cities all across the globe with its headquarters located in California!",
        label: "Technical value",
    },
};
