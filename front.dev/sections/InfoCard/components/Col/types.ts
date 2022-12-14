import { FC } from "react";

export type TColProps = {
    data: TColData;
};

export type TColComponent = FC<TColProps>;

export type TColData = {
    desc: string;
    id: string;
    label: Array<string> | string;
};
