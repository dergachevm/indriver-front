import { memo, useCallback, useMemo, useState } from "react";
import classNames from "classnames";

import { eq } from "@utils/shared";

import { TSliderDesktopComponent } from "./types";
import styles from "./styles.module.scss";

import Tab from "../Tab";
import { TSlideData } from "../Slider";
import SlideDekstop from "../SlideDekstop";

const SliderDesktop: TSliderDesktopComponent = ({
    className,
    data,
    forModal = false,
}) => {
    const [activeId, setActiveId] = useState<string>(data[0].id);

    const handleClick = useCallback((id: string) => {
        return () => {
            setActiveId(id);
        };
    }, []);

    const mapSlide = useCallback(
        (slideData: TSlideData, index: number) => {
            const { id, text } = slideData;

            const isActive = eq(activeId, id);

            return (
                <SlideDekstop
                    active={isActive}
                    key={slideData.id}
                    number={index + 1}
                    text={text}
                />
            );
        },
        [activeId]
    );

    const mapTab = useCallback(
        (slideData: TSlideData, index: number) => {
            const { id, label, name } = slideData;

            const isActive = eq(activeId, id);

            return (
                <Tab
                    active={isActive}
                    forModal={forModal}
                    index={index}
                    key={id}
                    label={label}
                    name={name}
                    onClick={handleClick(id)}
                />
            );
        },
        [activeId, handleClick, forModal]
    );

    const slideList = useMemo(() => {
        return data.map(mapSlide);
    }, [data, mapSlide]);

    const tabList = useMemo(() => {
        return data.map(mapTab);
    }, [data, mapTab]);

    const classes = classNames(styles.wrap, className);

    return (
        <div className={classes}>
            <div className={styles.tabList}>{tabList}</div>
            <div className={styles.slideList}>{slideList}</div>
        </div>
    );
};

export default memo(SliderDesktop);
