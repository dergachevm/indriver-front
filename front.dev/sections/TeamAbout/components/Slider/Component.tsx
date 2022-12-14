import { memo, useCallback, useMemo } from "react";
import { Splide, SplideProps } from "@splidejs/react-splide";

import scssConst from "@scss/modules/index.module.scss";
import MultilineText from "@components/MultilineText";

import { TSliderComponent } from "./types";
import styles from "./styles.module.scss";

import Slide, { TSlideData } from "../Slide";

const sliderOptions: SplideProps["options"] = {
    arrows: false,
    breakpoints: {
        [Number.parseInt(scssConst.max_sm)]: {
            gap: 8,
            perPage: 1,
        },
    },
    gap: 2,
    lazyLoad: "sequential",
    pagination: false,
    perPage: 2,
};

const Slider: TSliderComponent = ({ data }) => {
    const mapSlide = useCallback((slideData: TSlideData) => {
        const { id, img, text, imgType } = slideData;

        return <Slide img={img} imgType={imgType} key={id} text={text} />;
    }, []);

    const slideList = useMemo(() => {
        return data.map(mapSlide);
    }, [data, mapSlide]);

    return (
        <div className={styles.wrap}>
            <div className={styles.title}>
                <MultilineText text={"Hacking<:0-9999:>Philosophy"} />
            </div>

            <Splide className={styles.slider} options={sliderOptions}>
                {slideList}
            </Splide>
        </div>
    );
};

export default memo(Slider);
