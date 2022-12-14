import { CSSProperties, FC } from "react";

import { TSvg } from "@dev/types";

export type TIconProps = {
    name: TIconName;
    className?: string;

    height?: number;
    width?: number;
    style?: CSSProperties;

    elRef?: React.MutableRefObject<HTMLDivElement | null>

    onClick?: () => void;
};

export type TIconComponent = FC<TIconProps>;

export type TIconData = {
    Component: TSvg;
    url: string;
};

export type TIconName =
    | "arrow-bottom"
    | "arrow-right"
    | "arrow-right-big"
    | "arrow-right-big-green"
    | "arrow-right-big-green-m"
    | "arrow-top"
    | "clip"
    | "cross"
    | "cursor-left"
    | "cursor-right"
    | "fire"
    | "friend"
    | "heart"
    | "like-big"
    | "like"
    | "logo-mobile"
    | "logo-mobile-white"
    | "logo"
    | "logo-thin-small"
    | "logo-thin-white"
    | "logo-thin"
    | "marker-circle"
    | "marker-rect"
    | "marker-star"
    | "marker-superellipse"
    | "message-corner"
    | "minus"
    | "ok"
    | "plus"
    | "union"
    | `roman-numeral-${number}`
    | "star"
    | "rocket"
    ;

export type TIconDataObj = Record<TIconName, TIconData>;
