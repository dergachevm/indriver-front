import { FC } from "react";

import { TSvg } from "@dev/types";

export type TSliderProps = {
    data: Array<TSlideData>;
};

export type TSlideData = TDefaultSlideData | TGraphSlideData | TImgSlideData;

export type TSlideType = TSlideData["type"];

export type TDefaultSlideData = {
    achievements: [
        TSlideDefaultDataAchievement,
        TSlideDefaultDataAchievement,
        TSlideDefaultDataAchievement,
        TSlideDefaultDataAchievement
    ];
    description: string;
    id: string;
    message: string;
    type: "default";
};

export type TGraphSlideData = {
    achievements: [TSlideGraphDataAchievement, TSlideGraphDataAchievement];
    label: string;
    Graph: TSvg;
    id: string;
    type: "graph";
};

export type TImgSlideData = {
    achievements: [TSlideImageDataAchievement, TSlideImageDataAchievement];
    img: string;
    label: string;
    id: string;
    type: "img";
};

export type TSlideDataAchievement =
    | TSlideDefaultDataAchievement
    | TSlideGraphDataAchievement
    | TSlideImageDataAchievement;

export type TSlideGraphDataAchievement = {
    id: string;
    label?: string;
    text: Array<string>;
};

export type TSlideImageDataAchievement = {
    id: string;
    label: string;
    text: string;
};

export type TSlideDefaultDataAchievement = {
    id: string;
    label: string;
    text: string;
};

export type TSliderComponent = FC<TSliderProps>;
