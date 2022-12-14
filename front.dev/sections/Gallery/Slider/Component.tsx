import { memo, useCallback, useEffect, useRef } from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import Image from "@components/Image";
import useAppSize from "@hooks/useAppSize";
import { eq, is } from "@utils/shared";
import { addClass, containClass, removeClass } from "@utils/css";
import useOnClickOutside from "@hooks/useClickOutside";

import styles from "./styles.module.scss";
import { TSliderComponent } from "./types";
import { options, sizeHeightRecord, TARGET_DATA_NAME } from "./constants";
import { getImgList } from "./utils";

const Slider: TSliderComponent = ({ data }) => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const { size: appSize } = useAppSize();
    const isMobile = eq(appSize, "mobile");

    const sizeHeight = sizeHeightRecord[appSize];

    const slideList = data.map(
        (slideData) => {
            const { id, img, heightZoom, widthZoom } = slideData;

            const style = {
                height: sizeHeight * heightZoom,
                width: sizeHeight * widthZoom,
            };

            return (
                <SplideSlide className={styles.slide} id={id} key={id}>
                    <Image
                        className={styles.img}
                        data-target={TARGET_DATA_NAME}
                        noHide={true}
                        src={img}
                        style={style}
                    />
                </SplideSlide>
            );
        },
        [sizeHeight, isMobile]
    );

    const handleMouseMove = useCallback(
        (event: Event) => {
            event.preventDefault();

            if (isMobile) {
                return;
            }

            const target = event.target as HTMLImageElement;

            const isActive = containClass(target, styles.active);

            if (isActive) {
                return;
            }

            addClass(target, styles.active);
            removeClass(target, styles.imgZIndex);
        },
        [isMobile]
    );

    const handleMouseLeave = useCallback(
        (event: Event) => {
            event.preventDefault();

            if (isMobile) {
                return;
            }

            const target = event.target as HTMLImageElement;

            const isActive = containClass(target, styles.active);

            if (!isActive) {
                return;
            }

            removeClass(target, styles.active);
            addClass(target, styles.imgZIndex);
        },
        [isMobile]
    );

    const clearActive = useCallback(() => {
        if (!isMobile) {
            return;
        }

        const { current } = sliderRef;

        if (is(null, current)) {
            return;
        }

        const imgList = getImgList(current);

        imgList.forEach((el) => {
            removeClass(el, styles.active);
            addClass(el, styles.imgZIndex);
        });
    }, [sliderRef, isMobile]);

    const handleClick = useCallback(
        (event: Event) => {
            event.preventDefault();

            if (!isMobile) {
                return;
            }

            const target = event.target as HTMLImageElement;

            const isActive = containClass(target, styles.active);

            if (!isActive) {
                clearActive();
                addClass(target, styles.active);
                removeClass(target, styles.imgZIndex);

                return;
            }

            removeClass(target, styles.active);
            addClass(target, styles.imgZIndex);
        },
        [isMobile, clearActive]
    );

    useEffect(() => {
        const { current } = sliderRef;

        if (is(null, current)) {
            return;
        }

        const imgList = getImgList(current);

        imgList.forEach((el) => {
            el.addEventListener("mousemove", handleMouseMove);
            el.addEventListener("mouseleave", handleMouseLeave);
            el.addEventListener("click", handleClick);
        });

        return () => {
            imgList.forEach((el) => {
                el.removeEventListener("mousemove", handleMouseMove);
                el.removeEventListener("mouseleave", handleMouseLeave);
                el.removeEventListener("click", handleClick);
            });
        };
    });

    useOnClickOutside([sliderRef], clearActive);

    return (
        <div className={styles.wrap} ref={sliderRef}>
            <Splide
                className={styles.slider}
                extensions={{ AutoScroll }}
                options={options}>
                {slideList}
            </Splide>
        </div>
    );
};

export default memo(Slider);
