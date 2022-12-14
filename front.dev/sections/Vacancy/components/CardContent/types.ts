import { FC } from "react";

import { TStyle } from "@layouts/JobCardLayout";

import { TData } from "../Card/types";
import { TMarker } from "../ListItem";

export type TCardProps = {
    data: TData;
    link?: string;
    marker?: TMarker;
    max?: number;
    style?: TStyle;
};

export type TCardComponent = FC<TCardProps>;
