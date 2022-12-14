import classNames from "classnames";
import { SplideProps } from "@splidejs/react-splide";

import styles from "./styles.module.scss";

export const sliderOptions: SplideProps["options"] = {
    arrows: true,
    focus: "center",
    gap: 20,
    height: "auto",
    lazyLoad: "sequential",
    loop: true,
    perMove: 1,
    perPage: 1,
    type: "loop",
};

export const ARROWS_CLASSES = classNames("splide__arrows", styles.arrows);
export const PREV_ARROW_CLASSES = classNames(
    "splide__arrow",
    "splide__arrow--prev",
    styles.arrow
);
export const NEXT_ARROW_CLASSES = classNames(
    "splide__arrow",
    "splide__arrow--next",
    styles.arrow
);

export const ZERO_OPACITY = 0;
export const FULL_OPACITY = 1;

export const ICON_SIZE = 48;
