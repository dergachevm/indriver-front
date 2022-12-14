import { FC, PropsWithChildren } from "react";

export type TListItemProps = PropsWithChildren<{
    marker?: TMarker;
}>;

export type TMarker =
    | "marker-circle"
    | "marker-rect"
    | "marker-star"
    | "marker-superellipse";

export type TListItemComponent = FC<TListItemProps>;
