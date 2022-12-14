import { FC } from "react";

import { TCardData } from "@sections/InfoCard";

export type TDoubleInfoCardProps = {
    first: TCardData;
    second: TCardData;
};

export type TDoubleInfoCardComponent = FC<TDoubleInfoCardProps>;
