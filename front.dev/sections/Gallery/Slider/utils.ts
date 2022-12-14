import { TARGET_DATA_NAME } from "./constants";

export const getImgList = (current: HTMLElement) => {
    return current.querySelectorAll(`*[data-target=${TARGET_DATA_NAME}]`);
};
