import { FC } from "react";
import { TBubbelDataRow } from "../BubbleRow";

export type TBubbleBoxProps = {
    data: TBubbleBoxData;
    className?: string;
};

export type TBubbleBoxData = {
    id: string;
    list: Array<TBubbelDataRow>;
};

export type TBubbleBoxComponent = FC<TBubbleBoxProps>;
