import { FC } from "react";

import { TRowData } from "../Row";

export type TRowListProps = {
    data: Array<TRowData>;
    className?: string;
};

export type TRowListComponent = FC<TRowListProps>;
