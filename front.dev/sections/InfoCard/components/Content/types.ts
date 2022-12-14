import { FC } from "react";

import { TColData } from "../Col";

export type TContentProps = {
    dataList: Array<TColData>;
};

export type TContentComponent = FC<TContentProps>;
