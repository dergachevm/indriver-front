import { FC } from "react";

export type TNavigationTabProps = {
    label: string;
    url: string;
    color?: TTabColor;
};

export type TNavigationTabComponent = FC<TNavigationTabProps>;

export type TTabColor = "dark" | "light";

export type TColorClassRecord = Record<TTabColor, string>;
