import md5 from "md5";

import { MOBILE_MAX_SIZE } from "@dev/constants";
import { TAnyRecord } from "@dev/types";

const DEFAULT_START_PAD_LEN = 2;

const FIRST_ARR_EL_INDEX = 0;
const LAST_ARR_EL_INDEX_OFFSET = 1;
const EMPTY_ARR_LENGTH = 0;
const EMPTY_STR_LENGTH = 0;

const TOP_SCROLL = 0;
const LEFT_SCROLL = 0;

const DEFAULT_BASE = 1;
const RANDOM_OFFSET = 1;

export const getRandomId = (hash = "") => {
    return `indrive--${md5(`${hash}-${Math.random()}`).toString()}`;
};

export const is = <T extends null | undefined>(
    eq: T,
    value: unknown
): value is T => {
    return value === eq;
};

export const eq = <T = unknown>(first: T, second: T): boolean => {
    return first === second;
};

export const isString = (value: unknown): value is string => {
    return typeof value === "string";
};

export const isNumber = (value: unknown): value is number => {
    return typeof value === "number";
};

export const isNaN = (value: number): boolean => {
    return Number.isNaN(value);
};

export const padStartZeros = (
    num: number,
    len = DEFAULT_START_PAD_LEN
): string => {
    if (isNaN(num)) {
        return "";
    }

    return num.toString().padStart(len, "0");
};

export const getArrLastElIndex = <T>(arr: Array<T>): number => {
    return arr.length - LAST_ARR_EL_INDEX_OFFSET;
};

export const getLastArrEl = <T>(arr: Array<T>): T => {
    return arr[getArrLastElIndex(arr)];
};

export const getFirstArrEl = <T>(arr: Array<T>): T => {
    return arr[FIRST_ARR_EL_INDEX];
};

export const isEmptyArr = <T>(arr: Array<T>): boolean => {
    if (!Array.isArray(arr)) {
        return false;
    }

    return arr.length === EMPTY_ARR_LENGTH;
};

export const isEmptyStr = (arr: string): boolean => {
    return arr.length === EMPTY_STR_LENGTH;
};

export const getSize = () => {
    return window.innerWidth < MOBILE_MAX_SIZE ? "mobile" : "dekstop";
};

export const objToFormData = (obj: TAnyRecord) => {
    const formData = new FormData();

    for (const key in obj) {
        formData.append(key, obj[key] as Blob | string);
    }

    return formData;
};

export const swapBoolean = (value: boolean): boolean => {
    return !value;
};

export const scrollTop = (behaviorScroll = false) => {
    window.scrollTo({
        behavior: behaviorScroll ? "smooth" : undefined,
        left: LEFT_SCROLL,
        top: TOP_SCROLL,
    });
};

export const getRandomInt = (min: number, max: number, base = DEFAULT_BASE) => {
    const minRes = Math.ceil(min);
    const maxRes = Math.floor(max);

    const mult = maxRes - minRes + RANDOM_OFFSET;
    const randomNumber = Math.random() * mult;
    const randomMin = randomNumber + min;

    return Math.floor(randomMin / base) * base;
};

export const getRandomFloat = (min: number, max: number) => {
    const diff = max - min;
    const random = Math.random() * diff;

    return random + min;
};

export const isMedia = (query: string) => {
    return window.matchMedia(`(${query})`).matches;
};

export const getRect = (el: HTMLElement) => {
    return el.getBoundingClientRect();
};

export const getElementCoords = (elem: HTMLElement) => {
    const box = elem.getBoundingClientRect();

    const { body } = document;
    const docEl = document.documentElement;

    const pageScrollTop =
        window.pageYOffset || docEl.scrollTop || body.scrollTop;
    const pageScrollLeft =
        window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

    const clientTop = docEl.clientTop || body.clientTop || 0;
    const clientLeft = docEl.clientLeft || body.clientLeft || 0;

    const top = box.top + pageScrollTop - clientTop;
    const left = box.left + pageScrollLeft - clientLeft;

    return {
        left,
        top,
    };
};

export const scrollToElement = (
    element: HTMLElement,
    offsetTop = 0,
    behavior?: ScrollBehavior
): void => {
    const top = getElementCoords(element).top - offsetTop;

    window.scrollTo({
        behavior,
        top,
    });
};
