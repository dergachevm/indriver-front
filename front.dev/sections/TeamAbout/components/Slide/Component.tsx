import { memo } from "react";
import classNames from "classnames";
import { SplideSlide } from "@splidejs/react-splide";

import Image from "@components/Image";

import { TSlideComponent } from "./types";

import styles from "./styles.module.scss";

const Info: TSlideComponent = ({ className, img, text, imgType }) => {
    const classes = classNames(styles.wrap, className);
    const classesImg = classNames(styles.img, styles[imgType]);

    return (
        <SplideSlide className={styles.slide}>
            <div className={classes}>
                <Image className={classesImg} src={img} />

                <div className={styles.text}>{text}</div>
            </div>
        </SplideSlide>
    );
};

export default memo(Info);
