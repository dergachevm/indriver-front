import { FC } from "react";

export type TCommunityProps = {
    scrollStart: number;
    scrollEnd: number;
    number: number;
};

export type TCommunityComponent = FC<TCommunityProps>;
