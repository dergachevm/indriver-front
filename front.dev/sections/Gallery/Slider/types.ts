import { FC } from "react";

export type TSliderProps = {
    data: Array<TSlideData>;
};

export type TSlideData = {
    id: string;
    img: string;
    heightZoom: number;
    widthZoom: number;
};

export type TSliderComponent = FC<TSliderProps>;
