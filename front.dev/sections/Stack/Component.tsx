import { memo } from "react";

import Section from "@layouts/Section";

import { TStackComponent } from "./types";
import styles from "./styles.module.scss";
import Header from "./components/Header";
import Slider from "./components/Slider";
import { sliderData } from "./constants";

const Stack: TStackComponent = () => {
    return (
        <Section
            className={styles.stack}
            contentClassName={styles.stackContent}>
            <Header />
            <Slider data={sliderData} />
        </Section>
    );
};

export default memo(Stack);
