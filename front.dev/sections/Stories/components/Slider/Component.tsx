import { memo, MouseEvent, useCallback, useRef } from "react";
import { Splide, SplideTrack } from "@splidejs/react-splide";

import Icon from "@components/Icon";
import { is } from "@utils/shared";
import { setStyles } from "@utils/css";

import { TSliderComponent } from "./types";
import styles from "./styles.module.scss";

import Slide from "../Slide";
import {
    ARROWS_CLASSES,
    FULL_OPACITY,
    ICON_SIZE,
    NEXT_ARROW_CLASSES,
    PREV_ARROW_CLASSES,
    sliderOptions,
    ZERO_OPACITY,
} from "./constants";

const Slider: TSliderComponent = ({ data }) => {
    const cursorLeftRef = useRef<HTMLDivElement | null>(null);
    const cursorRightRef = useRef<HTMLDivElement | null>(null);

    const slideList = data.map((slideData) => {
        const { id } = slideData;

        return <Slide data={slideData} key={id} />;
    });

    const handleMouseMove = useCallback(
        (icon: HTMLDivElement | null, clientX: number, clientY: number) => {
            if (is(null, icon)) {
                return;
            }

            setStyles(icon, {
                left: `${clientX}px`,
                opacity: FULL_OPACITY,
                top: `${clientY}px`,
            });
        },
        []
    );

    const handleLeaveMove = useCallback((icon: HTMLDivElement | null) => {
        if (is(null, icon)) {
            return;
        }

        setStyles(icon, {
            opacity: ZERO_OPACITY,
        });
    }, []);

    const handleLeftMouseMove = useCallback(
        (event: MouseEvent<HTMLDivElement>) => {
            const { current } = cursorLeftRef;
            const { clientX, clientY } = event;

            handleMouseMove(current, clientX, clientY);
        },
        [cursorLeftRef, handleMouseMove]
    );

    const handleRightMouseMove = useCallback(
        (event: MouseEvent<HTMLDivElement>) => {
            const { current } = cursorRightRef;
            const { clientX, clientY } = event;

            handleMouseMove(current, clientX, clientY);
        },
        [cursorRightRef, handleMouseMove]
    );

    const handleLeftMouseLeave = useCallback(() => {
        handleLeaveMove(cursorLeftRef.current);
    }, [cursorLeftRef, handleLeaveMove]);

    const handleRightMouseLeave = useCallback(() => {
        handleLeaveMove(cursorRightRef.current);
    }, [cursorRightRef, handleLeaveMove]);

    return (
        <Splide
            className={styles.slider}
            hasTrack={false}
            options={sliderOptions}>
            <SplideTrack>{slideList}</SplideTrack>

            <div className={ARROWS_CLASSES}>
                <div
                    className={PREV_ARROW_CLASSES}
                    onMouseLeave={handleLeftMouseLeave}
                    onMouseMove={handleLeftMouseMove}
                />
                <div
                    className={NEXT_ARROW_CLASSES}
                    onMouseLeave={handleRightMouseLeave}
                    onMouseMove={handleRightMouseMove}
                />

                <Icon
                    className={styles.icon}
                    elRef={cursorLeftRef}
                    height={ICON_SIZE}
                    name={"cursor-left"}
                    width={ICON_SIZE}
                />
                <Icon
                    className={styles.icon}
                    elRef={cursorRightRef}
                    height={ICON_SIZE}
                    name={"cursor-right"}
                    width={ICON_SIZE}
                />
            </div>
        </Splide>
    );
};

export default memo(Slider);
