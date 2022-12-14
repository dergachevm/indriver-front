import { memo, useCallback, useMemo } from "react";
import { SplideSlide } from "@splidejs/react-splide";
import classNames from "classnames";

import Image from "@components/Image";
import If from "@components/If";
import Icon from "@components/Icon";
import {
    eq,
    getArrLastElIndex,
    getRandomId,
    is,
    isEmptyStr,
} from "@utils/shared";
import MultilineText from "@components/MultilineText";

import { TSlideComponent } from "./types";
import styles from "./styles.module.scss";

import {
    TDefaultSlideData,
    TGraphSlideData,
    TImgSlideData,
    TSlideDataAchievement,
    TSlideType,
} from "../Slider";

const Slide: TSlideComponent = ({ data }) => {
    const { type } = data;

    const renderMultilineStr = useCallback((arr: Array<string>) => {
        if (!Array.isArray(arr)) {
            return "";
        }

        const lastIndex = getArrLastElIndex(arr);

        const mapFn = (str: string, index: number) => {
            if (eq(index, lastIndex)) {
                return <div key={getRandomId()}>{str}</div>;
            }

            return (
                <div key={getRandomId()}>
                    {str}
                    <br />
                </div>
            );
        };

        return arr.map(mapFn);
    }, []);

    const mapAchievement = useCallback(
        (slideData: TSlideDataAchievement) => {
            const { label, text, id } = slideData;

            return (
                <div className={styles.achievementCol} key={id}>
                    <If condition={!is(undefined, label) && !isEmptyStr(label)}>
                        <div className={styles.achievementLabelList}>
                            <MultilineText text={label as string} />
                        </div>
                    </If>

                    <If
                        condition={Array.isArray(text)}
                        els={
                            <div className={styles.achievementDesc}>
                                <MultilineText text={text as string} />
                            </div>
                        }>
                        <div className={styles.achievementDesc}>
                            {renderMultilineStr(text as Array<string>)}
                        </div>
                    </If>
                </div>
            );
        },
        [renderMultilineStr]
    );

    const renderAchievementList = useCallback(
        (achData: Array<TSlideDataAchievement>) => {
            return achData.map(mapAchievement);
        },
        [mapAchievement]
    );

    const renderImgSlide = useCallback(
        (imgSlideData: TImgSlideData) => {
            const { label, img, achievements } = imgSlideData;

            return (
                <div className={styles.imgSlideContent}>
                    <div className={styles.contentBox}>
                        <div className={styles.title}>
                            <MultilineText text={label} />
                        </div>

                        <div className={styles.achievementList}>
                            {renderAchievementList(achievements)}
                        </div>
                    </div>
                    <div className={styles.img}>
                        <Image src={img} />
                    </div>
                </div>
            );
        },
        [renderAchievementList]
    );

    const renderDefaultSlide = useCallback(
        (defaultSlideData: TDefaultSlideData) => {
            const { message, description, achievements } = defaultSlideData;

            return (
                <div className={styles.defaultSlideContent}>
                    <div className={styles.header}>
                        <div className={styles.messageBox}>
                            <div className={styles.message}>
                                <MultilineText text={message} />

                                <Icon
                                    className={styles.union}
                                    height={32}
                                    name={"union"}
                                    width={30}
                                />
                            </div>
                        </div>
                        <div className={styles.description}>{description}</div>
                    </div>
                    <div className={styles.achievementList}>
                        {renderAchievementList(achievements)}
                    </div>
                </div>
            );
        },
        [renderAchievementList]
    );

    const renderGraphSlide = useCallback(
        (graphData: TGraphSlideData) => {
            const { label, Graph, achievements } = graphData;

            const achievementListClasses = classNames(
                styles.achievementList,
                styles.small
            );

            return (
                <div className={styles.graphSlideContent}>
                    <div className={styles.contentBox}>
                        <div className={styles.title}>
                            <MultilineText text={label} />
                        </div>

                        <div className={achievementListClasses}>
                            {renderAchievementList(achievements)}
                        </div>
                    </div>
                    <div className={styles.graph}>
                        <Graph height={"100%"} width={"100%"} />
                    </div>
                </div>
            );
        },
        [renderAchievementList]
    );

    const slideType: Record<TSlideType, Function> = useMemo(() => {
        return {
            default: renderDefaultSlide,
            graph: renderGraphSlide,
            img: renderImgSlide,
        };
    }, [renderGraphSlide, renderDefaultSlide, renderImgSlide]);

    const content = useMemo(() => {
        const renderFn = slideType[type];

        return renderFn(data);
    }, [type, data, slideType]);

    return (
        <SplideSlide className={styles.slide}>
            <div className={styles.content}>{content}</div>
        </SplideSlide>
    );
};

export default memo(Slide);
