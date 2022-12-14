import { FC, PropsWithChildren } from "react";

export type TPageLayoutProps = PropsWithChildren<{
    title: string;
    bgColor?: TBgColor;
    behaviorScroll?: boolean;
}>;

export type TPageLayoutComponent = FC<TPageLayoutProps>;

export type TBgColor = "bezh" | "green" | "light" | "transparent";

export type TBgColorClassRecord = Record<TBgColor, string>;

export type TBgBodyColorClassRecord = Record<TBgColor, string>;
