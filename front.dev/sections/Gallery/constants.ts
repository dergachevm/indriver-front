import img1 from "@assets/img/gallery-1.jpeg";
import img2 from "@assets/img/gallery-2.jpeg";
import img3 from "@assets/img/gallery-3.jpeg";
import img4 from "@assets/img/gallery-4.png";
import img5 from "@assets/img/gallery-5.png";
import img6 from "@assets/img/gallery-6.jpeg";

import { getRandomId } from "@utils/shared";

import { TSlideData } from "./Slider";
import { getRandomHeight } from "./utils";

// По убыванию обязательно
export const HEIGHT_LIST = [1, 0.8, 0.6, 0.4];
export const DEFAULT_WIDTH_ZOOM = 0.8;

export const getSlideData = (): Array<TSlideData> => {
    const data = [
        {
            id: getRandomId(),
            img: img1,
            widthZoom: DEFAULT_WIDTH_ZOOM,
        },
        {
            id: getRandomId(),
            img: img2,
            widthZoom: 0.8,
        },
        {
            id: getRandomId(),
            img: img3,
            widthZoom: DEFAULT_WIDTH_ZOOM,
        },
        {
            id: getRandomId(),
            img: img4,
            widthZoom: DEFAULT_WIDTH_ZOOM,
        },
        {
            id: getRandomId(),
            img: img5,
            widthZoom: DEFAULT_WIDTH_ZOOM,
        },
        {
            id: getRandomId(),
            img: img6,
            widthZoom: DEFAULT_WIDTH_ZOOM,
        },
    ];

    const heightList = getRandomHeight(data.length, HEIGHT_LIST);

    return data.map((slideData, index) => {
        return {
            ...slideData,
            heightZoom: heightList[index],
        };
    });
};

export const slideData: Array<TSlideData> = getSlideData();
