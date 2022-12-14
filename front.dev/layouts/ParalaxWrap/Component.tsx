import { memo } from "react";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import classNames from "classnames";

import Image from "@components/Image";

import { TParalaxWrapComponent } from "./types";
import styles from "./styles.module.scss";

const ParalaxWrap: TParalaxWrapComponent = ({
    bgImage,
    children,
    className,
}) => {
    const classes = classNames(styles.wrap, className);

    return (
        <div className={classes}>
            <ParallaxBanner className={styles.banner}>
                <ParallaxBannerLayer translateY={["-25%", "25%"]}>
                    <Image className={styles.bgImage} src={bgImage} />
                </ParallaxBannerLayer>
                <ParallaxBannerLayer></ParallaxBannerLayer>
            </ParallaxBanner>
            {children}
        </div>
    );
};

export default memo(ParalaxWrap);
