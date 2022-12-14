import { FC } from "react";

export type TListProps = {
    list: Array<TListData> | undefined;
    marker?: string;
    max?: number;
    btnColor?: "greenLight" | "transparent";
};

export type TListData = {
    id: string;
    label: string;
};

export type TListComponent = FC<TListProps>;
