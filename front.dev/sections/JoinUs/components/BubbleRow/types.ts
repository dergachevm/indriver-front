import { FC } from "react";

import { TBubbelData } from "../Bubble";

export type TBubbleRowProps = {
    data: TBubbelDataRow;
};

export type TBubbleRowComponent = FC<TBubbleRowProps>;

export type TBubbelDataRow = {
    id: string;
    row: [TBubbelData?, TBubbelData?];
    position: "center" | "flex-end" | "flex-start";
};
