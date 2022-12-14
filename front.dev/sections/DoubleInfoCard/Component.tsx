import { memo, useCallback, useLayoutEffect, useMemo, useRef } from "react";

import InfoCard from "@sections/InfoCard";
import { getRect, is } from "@utils/shared";
import useOnResize from "@hooks/useOnResize";
import useOnScroll from "@hooks/useOnScroll";

import { TDoubleInfoCardComponent } from "./types";
import styles from "./styles.module.scss";

const TRANSFORM_FISRT_SPEED = 0.75;
const TRANSFORM_SECOND_SPEED = 0.25;
const FIRST_EL_HEIGHT_SCALE = 2;

const DoubleInfoCard: TDoubleInfoCardComponent = ({ first, second }) => {
    const componentRef = useRef<HTMLDivElement | null>(null);
    const parentRef = useRef<HTMLDivElement | null>(null);
    const firstRef = useRef<HTMLDivElement | null>(null);
    const secondRef = useRef<HTMLDivElement | null>(null);

    const observeSlide = useCallback(() => {
        const { current: firstWrap } = firstRef;
        const { current: secondWrap } = secondRef;
        const { current: componentWrap } = componentRef;
        const { current: parentWrap } = parentRef;

        if (
            is(null, firstWrap) ||
            is(null, secondWrap) ||
            is(null, componentWrap) ||
            is(null, parentWrap)
        ) {
            return;
        }

        const firstOffsetTop = firstWrap.offsetTop;

        const windowHeight = window.innerHeight;
        const windowScrollY = window.scrollY;

        const firstRect = getRect(firstWrap);
        const secondRect = getRect(secondWrap);
        const parentRect = getRect(parentWrap);

        const firstHeight = firstRect.height;
        const secondHeight = secondRect.height;
        const parentHeight = parentRect.height;

        const heightDiff = firstRect.height - secondRect.height;

        const offsetStart = Math.max((window.innerHeight - firstHeight) / 2, 0);

        const start = firstOffsetTop - windowHeight + firstHeight + offsetStart;
        const end = start + FIRST_EL_HEIGHT_SCALE * firstHeight + secondHeight;

        if (windowScrollY < start || windowScrollY > end) {
            return;
        }

        const maxTransform = firstHeight;
        const scrolled = windowScrollY - start;
        const transform = Math.min(maxTransform, scrolled);

        const secondFransform = transform * TRANSFORM_SECOND_SPEED - heightDiff;

        const parentElMaxHeight =
            parentHeight - maxTransform * TRANSFORM_SECOND_SPEED + heightDiff;

        const firstTransform = transform * TRANSFORM_FISRT_SPEED;

        componentWrap.style.maxHeight = `${parentElMaxHeight}px`;

        const newValue = Math.floor(firstTransform);

        firstWrap.style.transform = `translateY(${newValue}px) translateZ(0px)`;
        secondWrap.style.transform = `translateY(-${Math.floor(
            secondFransform
        )}px)`;
    }, [firstRef, secondRef, componentRef, parentRef]);

    const throttle = useMemo(() => {
        let locked = false;

        return () => {
            if (locked) {
                return;
            }

            locked = true;

            setTimeout(() => {
                observeSlide();
                locked = false;
            }, 10);
        };
    }, [observeSlide]);

    useOnResize(throttle);
    useOnScroll(throttle);

    useLayoutEffect(observeSlide, [observeSlide]);

    return (
        <div className={styles.wrap} ref={componentRef}>
            <div ref={parentRef}>
                <InfoCard
                    className={styles.firstEl}
                    data={first}
                    elRef={firstRef}
                    key={"firstInfoCard"}
                />
                <InfoCard
                    className={styles.secondEl}
                    data={second}
                    elRef={secondRef}
                    key={"secondInfoCard"}
                />
            </div>
        </div>
    );
};

export default memo(DoubleInfoCard);
