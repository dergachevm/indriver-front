import { getRandomInt } from "@utils/shared";

export const getHeight = (
    len: number,
    list: Array<number>,
    index: number,
    heightList: Array<number>
): number => {
    if (index === 0) {
        return heightList[0];
    }

    const number = getRandomInt(0, heightList.length - 1);
    const height = heightList[number];

    if (list[index - 1] === height) {
        return getHeight(len, list, index, heightList);
    }

    if (index === len - 1) {
        if (list[index - 1] === height || list[0] === height) {
            return getHeight(len, list, index, heightList);
        }

        return height;
    }

    return height;
};

export const getRandomHeight = (len: number, heightList: Array<number>) => {
    return new Array<number>(len).fill(1).map<number>((_el, index, arr) => {
        return getHeight(len, arr, index, heightList);
    });
};
