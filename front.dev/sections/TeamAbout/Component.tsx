import { memo } from "react";

import Section from "@layouts/Section";
import ParalaxWrap from "@layouts/ParalaxWrap";
import bgImage from "@assets/img/office_wall.jpg";
import MultilineText from "@components/MultilineText";

import Info from "./components/Info";
import Slider from "./components/Slider";
import { TTeamAboutComponent } from "./types";
import { sliderData } from "./constants";
import styles from "./styles.module.scss";

const TeamAbout: TTeamAboutComponent = () => {
    return (
        <>
            <Section
                contentClassName={styles.sectionTitleContent}
                wrapClassName={styles.sectionTitleWrap}>
                <div className={styles.title}>
                    <MultilineText
                        text={
                            "Become part<:1024-9999:>of The INDRIVE.TECH Team"
                        }
                    />
                </div>
            </Section>
            <ParalaxWrap bgImage={bgImage}>
                <Section
                    className={styles.section}
                    contentClassName={styles.sectionContent}
                    wrapClassName={styles.sectionWrap}>
                    <Info />
                    <Slider data={sliderData} />
                </Section>
            </ParalaxWrap>
        </>
    );
};

export default memo(TeamAbout);
