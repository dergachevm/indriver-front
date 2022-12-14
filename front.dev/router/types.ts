import { FC } from "react";
import { Page } from "./enums";

export type TRouterProps = Record<string, unknown>;

export type TRouterComponent = FC<TRouterProps>;

export type TRouteData = {
    id: string;
    Component: FC<TPageProps>;
    name: string;
    path: string;
};

export type TPageProps = {
    title: string;
};

export type TPageTypeRecord = Record<Page, string>;
