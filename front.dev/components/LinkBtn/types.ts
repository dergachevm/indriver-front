import { FC } from "react";

export type TLinkBtnProps = {
    href: string;
    label: string;

    color?: TColor;
    style?: TStyle;
    className?: string;
    blank?: boolean;
};

export type TLinkBtnComponent = FC<TLinkBtnProps>;

export type TColor =
    | "bezh"
    | "dark"
    | "green"
    | "greenLight"
    | "light"
    | "transparent"
    | "transparentLight"
    | "white";

export type TStyle = "filled" | "outlined";

export type TBtnColorClasses = Record<TColor, string>;

export type TBtnStyleClasses = Record<TStyle, string>;
