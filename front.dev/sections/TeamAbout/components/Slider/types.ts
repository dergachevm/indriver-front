import { FC } from "react";

import { TSlideData } from "../Slide";

export type TSliderProps = {
    data: Array<TSlideData>;
};

export type TSliderComponent = FC<TSliderProps>;
