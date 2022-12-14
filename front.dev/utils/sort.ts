import { TAnyRecord } from "@dev/types";

import { isString } from "./shared";

const ZERO = 0;
export const sortStrings = (str1: string, str2: string): number => {
    const lowStr1 = str1.toLowerCase();
    const lowStr2 = str2.toLowerCase();

    return lowStr1.localeCompare(lowStr2);
};

export const sortStringsByField = <R extends TAnyRecord, K extends keyof R>(
    key: K
) => {
    return (record1: R, record2: R): number => {
        const str1 = record1[key];
        const str2 = record2[key];

        if (!isString(str1) || !isString(str2)) {
            return ZERO;
        }

        return sortStrings(str1, str2);
    };
};
