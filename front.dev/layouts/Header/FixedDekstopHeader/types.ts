import { FC } from "react";

import { TColor, TStyle } from "@components/LinkBtn";
import { TNavigationTab } from "@dev/types";

import { THeaderColor } from "../types";

export type TFixedDekstopHeaderProps = {
    tabs: Array<TNavigationTab>;
    className?: string;
};

export type TJoinStylePropsRecord = Record<THeaderColor, TJoinStyleProps>;

export type TJoinStyleProps = {
    color: TColor;
    style: TStyle;
};

export type TFixedDekstopHeaderComponent = FC<TFixedDekstopHeaderProps>;
