import { memo } from "react";

import PageLayout from "@layouts/PageLayout";
import { getRandomId } from "@utils/shared";
import img1 from "@assets/img/gallery-1.jpeg";
import img2 from "@assets/img/gallery-2.jpeg";
import img3 from "@assets/img/gallery-3.jpeg";
import img4 from "@assets/img/gallery-4.png";
import img5 from "@assets/img/gallery-5.png";
import img6 from "@assets/img/gallery-6.jpeg";

import { TDevelopmentComponent } from "./types";
import ImageGallery from "./ImageGallery";

const getData = () => [
    {
        id: getRandomId(),
        img: img1,
    },
    {
        id: getRandomId(),
        img: img2,
    },
    {
        id: getRandomId(),
        img: img3,
    },
    {
        id: getRandomId(),
        img: img4,
    },
    {
        id: getRandomId(),
        img: img5,
    },
    {
        id: getRandomId(),
        img: img6,
    },
];

const data = [...getData()];
const Development: TDevelopmentComponent = ({ title }) => {
    return (
        <PageLayout bgColor={"transparent"} title={title}>
            <ImageGallery data={data} />
            {/* <div style={{ height: 9999, width: "100%" }}></div> */}
        </PageLayout>
    );
};

export default memo(Development);
