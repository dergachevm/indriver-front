import { memo, useCallback, useLayoutEffect, useMemo } from "react";

import { addClass, removeClass } from "@utils/css";

import { TCultureFramesComponent, TFrameData, TFrameList } from "./types";
import styles from "./styles.module.scss";
import { calculateScroll, calculateScrollToIndex } from "./utils";
import { frames } from "./constants";

const INDEX_OFFSET = 1;
const CultureFrames: TCultureFramesComponent = () => {
    const mapFrame = useCallback(
        (data: TFrameData, index: number, all: TFrameList) => {
            const { Component, scroll, id } = data;

            const scrollStart = calculateScrollToIndex(all, index);

            return (
                <Component
                    key={id}
                    number={index + INDEX_OFFSET}
                    scrollEnd={scrollStart + scroll}
                    scrollStart={scrollStart}
                />
            );
        },
        []
    );

    const height = useMemo(() => {
        return calculateScroll(frames);
    }, []);

    const frameElList = useMemo(() => {
        return frames.map(mapFrame);
    }, [mapFrame]);

    useLayoutEffect(() => {
        addClass(document.body, styles.hideScroll);

        return () => {
            removeClass(document.body, styles.hideScroll);
        };
    });

    return (
        <div
            style={{
                height,
            }}>
            {frameElList}
        </div>
    );
};

export default memo(CultureFrames);
