import { TFrameData, TFrameList } from "./types";

const ZERO_VALUE = 0;

export const reduceScrollToIndex = (index: number) => {
    return (acc: number, el: TFrameData, elIndex: number) => {
        if (elIndex >= index) {
            return acc;
        }

        return acc + el.scroll;
    };
};

export const reduceScroll = (acc: number, el: TFrameData) => {
    return acc + el.scroll;
};

export const calculateScrollToIndex = (arr: TFrameList, index: number) => {
    return arr.reduce(reduceScrollToIndex(index), ZERO_VALUE);
};

export const calculateScroll = (arr: TFrameList) => {
    return arr.reduce(reduceScroll, ZERO_VALUE);
};
