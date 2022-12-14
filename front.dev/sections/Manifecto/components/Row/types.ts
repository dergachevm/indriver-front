import { FC } from "react";

export type TRowProps = {
    data: TRowData;
    number: number;
};

export type TRowData = {
    id: string;
    label: string;
    desc: string;
};

export type TRowComponent = FC<TRowProps>;
