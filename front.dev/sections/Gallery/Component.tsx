import { memo } from "react";

import Section from "@layouts/Section";
import MultilineText from "@components/MultilineText";

import Slider from "./Slider";
import { slideData } from "./constants";
import { TGalleryComponent } from "./types";
import styles from "./styles.module.scss";

const Gallery: TGalleryComponent = () => {
    return (
        <Section
            className={styles.section}
            contentClassName={styles.sectionContent}>
            <div className={styles.title}>
                <MultilineText
                    text={
                        "Indrive People<:0-1024:>Do<:1024-9999:>Good to Everyone"
                    }
                />
            </div>

            <Slider data={slideData} />
        </Section>
    );
};

export default memo(Gallery);
