import { memo, useCallback, useMemo, useState } from "react";

import classNames from "classnames";

import Accordion from "@components/Accordion";
import { eq } from "@utils/shared";

import { TSliderMobileComponent } from "./types";
import styles from "./styles.module.scss";

import Tab from "../Tab";
import { TSlideData } from "../Slider";
import Slide from "../Slide";

const SliderMobile: TSliderMobileComponent = ({
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

    const mapData = useCallback(
        (slideData: TSlideData, index: number) => {
            const { id, label, name, text } = slideData;

            const isActive = eq(activeId, id);

            return (
                <Accordion
                    active={isActive}
                    className={styles.accordion}
                    key={slideData.id}>
                    <Accordion.Head>
                        <Tab
                            active={isActive}
                            forModal={forModal}
                            index={index}
                            label={label}
                            name={name}
                            scrollToEl={!forModal}
                            onClick={handleClick(id)}
                        />
                    </Accordion.Head>
                    <Accordion.Body>
                        <Slide number={index + 1} text={text} />
                    </Accordion.Body>
                </Accordion>
            );
        },
        [activeId, forModal, handleClick]
    );

    const accordionList = useMemo(() => {
        return data.map(mapData);
    }, [mapData, data]);

    const classes = classNames(styles.wrap, className);

    return <div className={classes}>{accordionList}</div>;
};

export default memo(SliderMobile);
