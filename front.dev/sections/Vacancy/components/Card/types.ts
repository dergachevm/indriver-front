import { FC } from "react";

import { TStyle } from "@layouts/JobCardLayout";

import { TMarker } from "../ListItem";

export type TCardProps = {
    data: TData;
    link?: string;
    style?: TStyle;
    marker?: TMarker;
    max?: number;
};

export type TData = {
    label: string;
    items?: Array<{
        id: string;
        label: string;
    }>;
    desc?: string;
    link?: string;
};

export type TCardComponent = FC<TCardProps>;
