import { FC } from "react";

import { TColor, TStyle } from "@components/LinkBtn";
import { TNavigationTab } from "@dev/types";

import { THeaderColor } from "../types";

export type TStaticDekstopHeaderProps = {
    tabs: Array<TNavigationTab>;
    withJoin?: boolean;
    color?: THeaderColor;
    className?: string;
};

export type TJoinStylePropsRecord = Record<THeaderColor, TJoinStyleProps>;

export type TJoinStyleProps = {
    color: TColor;
    style: TStyle;
};

export type TStaticDekstopHeaderComponent = FC<TStaticDekstopHeaderProps>;
