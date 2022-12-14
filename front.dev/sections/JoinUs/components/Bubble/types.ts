import { FC } from "react";

export type TBubbleProps = {
    data: TBubbelData;
    position: TPosition;
};

export type TBubbleComponent = FC<TBubbleProps>;

export type TBubbelData = {
    id: string;
    label: string;
};

export type TPosition = "left" | "right";

export type TPositionObj = Record<TPosition, TPositionData>;

export type TPositionData = {
    transform?: string;
};
