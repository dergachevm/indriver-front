import { FC } from "react";

export type TSvgProps = {
    height?: number | string;
    width?: number | string;
};

export type TSvg = FC<TSvgProps>;

export type TAnyRecord = Record<string, unknown>;

export type TNavigationTab = {
    label: string;
    url: string;
    id: string;
};

export type TAppProps = Record<string, unknown>;

export type TAppComponent = FC<TAppProps>;
