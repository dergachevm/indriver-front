import { memo } from "react";
import classNames from "classnames";

import Section from "@layouts/Section";
import MultilineText from "@components/MultilineText";

import { TProcessComponent } from "./types";
import styles from "./styles.module.scss";
import Slider from "./components/Slider";
import { sliderData } from "./constants";

const Process: TProcessComponent = ({ forModal = false }) => {
    const classes = classNames(styles.section, forModal && styles.forModal);

    return (
        <Section
            className={classes}
            contentClassName={styles.sectionContent}
            wrapClassName={styles.sectionWrap}>
            <div className={styles.title}>
                <MultilineText text={"The Interview<:0-9999:>Process"} />
            </div>
            <Slider data={sliderData} forModal={forModal} />
        </Section>
    );
};

export default memo(Process);
