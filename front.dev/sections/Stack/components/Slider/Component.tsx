import { memo, useCallback, useMemo, useState } from "react";

import { is } from "@utils/shared";

import { TSlideData, TSliderComponent } from "./types";
import styles from "./styles.module.scss";

import Slide from "../Slide";
import Tab from "../Tab";

const TAB_ZERO_INDEX = 0;

const Slider: TSliderComponent = ({ data }) => {
    const [activeTab, setActiveTab] = useState<string | null>(null);

    const mapSlide = useCallback(
        (slideData: TSlideData, index: number) => {
            const { lang, id } = slideData;

            const isActive = is(null, activeTab)
                ? index === TAB_ZERO_INDEX
                : id === activeTab;

            return (
                <Slide
                    active={isActive}
                    className={styles.slide}
                    key={id}
                    langList={lang}
                />
            );
        },
        [activeTab]
    );

    const mapTab = useCallback(
        (slideData: TSlideData, index: number) => {
            const { label, id } = slideData;

            const isActive = is(null, activeTab)
                ? index === TAB_ZERO_INDEX
                : id === activeTab;

            return (
                <Tab
                    active={isActive}
                    id={id}
                    key={id}
                    label={label}
                    onClick={setActiveTab}
                />
            );
        },
        [activeTab]
    );

    const slideList = useMemo(() => {
        return data.map(mapSlide);
    }, [data, mapSlide]);

    const tabList = useMemo(() => {
        return data.map(mapTab);
    }, [data, mapTab]);

    return (
        <div className={styles.slider}>
            <div className={styles.tabList}>{tabList}</div>
            <div className={styles.slideList}>{slideList}</div>
        </div>
    );
};

export default memo(Slider);
