import { FC } from "react";

import { TLang } from "../Slide/types";

export type TSliderProps = {
    data: Array<TSlideData>;
};

export type TSlideData = {
    label: string;
    id: string;

    lang: Array<TLang>;
};

export type TSliderComponent = FC<TSliderProps>;
