import { memo } from "react";

import Section from "@layouts/Section";

import Slider from "./components/Slider";
import { sliderData } from "./constants";
import { TStoriesComponent } from "./types";
import styles from "./styles.module.scss";

const Stories: TStoriesComponent = () => {
    return (
        <Section
            className={styles.section}
            contentClassName={styles.sectionContent}>
            <div className={styles.title}>{"Success stories"}</div>
            <Slider data={sliderData} />
        </Section>
    );
};

export default memo(Stories);
