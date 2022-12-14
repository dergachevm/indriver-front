import { FC } from "react";

export type TSliderProps = {
    className?: string;
    data: Array<TSlideData>;
    forModal?: boolean;
};

export type TSlideData = {
    id: string;
    label: string;
    name: string;
    text: string;
};

export type TSliderComponent = FC<TSliderProps>;
