import { FC, PropsWithChildren } from "react";

export type THeaderProps = PropsWithChildren<{
    color?: THeaderColor;
    withJoin?: boolean;
}>;

export type THeaderComponent = FC<THeaderProps>;

export type THeaderColor =
    | "bezh"
    | "dark"
    | "green"
    | "light"
    | "transparent"
    | "white";

export type THeaderColorClassRecord = Record<THeaderColor, string>;
