import { MOBILE_MAX_SIZE } from "@dev/constants";

export const getSize = () => {
    return window.innerWidth <= MOBILE_MAX_SIZE ? "mobile" : "dekstop";
};
