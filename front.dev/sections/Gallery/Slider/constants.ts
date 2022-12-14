import { SplideProps } from "@splidejs/react-splide";

import { TAppSize } from "@hooks/useAppSize/types";

export const options: SplideProps["options"] = {
    arrows: false,
    autoScroll: {
        pauseOnHover: true,
        rewind: false,
        speed: 1,
    },
    autoWidth: true,
    gap: 2,
    lazyLoad: "sequential",
    pagination: false,
    type: "loop",
};

export const sizeHeightRecord: Record<TAppSize, number> = {
    dekstop: 488,
    mobile: 302,
};

export const TARGET_DATA_NAME = "slide_img_taget";
