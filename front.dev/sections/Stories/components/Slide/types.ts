import { FC } from "react";

import { TSlideData } from "../Slider";

export type TSlideProps = {
    data: TSlideData;
};

export type TSlideComponent = FC<TSlideProps>;
