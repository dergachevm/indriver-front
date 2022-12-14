import { getRandomId, is } from "@utils/shared";

import { TBubbelData } from "../Bubble/types";
import { TBubbelDataRow } from "../BubbleRow";

const FIRST_BUBBLE_ROW_EL_INDEX = 0;
const SECOND_BUBBLE_ROW_EL_INDEX = 1;

export const copyBubble = <T = TBubbelData | undefined>(bubble: T): T => {
    if (is(undefined, bubble)) {
        return bubble;
    }

    return {
        ...bubble,
        id: getRandomId(),
    };
};

export const copyBubbleRow = (rowData: TBubbelDataRow): TBubbelDataRow => {
    const { row } = rowData;

    return {
        ...rowData,
        id: getRandomId(),
        row: [
            copyBubble(row[FIRST_BUBBLE_ROW_EL_INDEX]),
            copyBubble(row[SECOND_BUBBLE_ROW_EL_INDEX]),
        ],
    };
};
