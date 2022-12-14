import { FC } from "react";

export type TInDriveProps = {
    scrollStart: number;
    scrollEnd: number;
    number: number;
};

export type TInDriveComponent = FC<TInDriveProps>;
