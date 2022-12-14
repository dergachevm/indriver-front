import { getRandomId } from "@utils/shared";

import BeYourself from "./components/BeYourself";
import Community from "./components/Community";
import CultureOfChallenge from "./components/CultureOfChallenge";
import InDrive from "./components/InDrive";
import MakeIt from "./components/MakeIt";

import { TFrameList } from "./types";

export const frames: TFrameList = [
    {
        Component: CultureOfChallenge,
        id: getRandomId(),
        scroll: 4000,
    },
    {
        Component: BeYourself,
        id: getRandomId(),
        scroll: 4000,
    },
    {
        Component: Community,
        id: getRandomId(),
        scroll: 4000,
    },
    {
        Component: MakeIt,
        id: getRandomId(),
        scroll: 4000,
    },
    {
        Component: InDrive,
        id: getRandomId(),
        scroll: 4000,
    },
];
