import { memo, useCallback, useMemo } from "react";

import bgImage from "@assets/img/joinUsBg.jpg";
import useAppSize from "@hooks/useAppSize";
import { eq } from "@utils/shared";
import Section from "@layouts/Section";
import ParalaxWrap from "@layouts/ParalaxWrap";

import { TJoinUsComponent } from "./types";
import styles from "./styles.module.scss";
import { mobileBubbleBoxData, bubbleBoxData } from "./constants";
import BubbleBox from "./components/BubbleBox";
import If from "@components/If";
import LinkBtn from "@components/LinkBtn";
import { pagePathRecord } from "@router/constants";
import { Page } from "@router/enums";

const TAB_COUNT = 3;

const JoinUs: TJoinUsComponent = () => {
    const { size: appSize } = useAppSize();

    const isMobile = eq(appSize, "mobile");

    const mapTab = useCallback((_v: null, index: number) => {
        return <div className={styles.tab} key={index} />;
    }, []);

    const tabList = useMemo(() => {
        return new Array(TAB_COUNT).fill(null).map(mapTab);
    }, [mapTab]);

    return (
        <ParalaxWrap bgImage={bgImage} className={styles.paralaxWrap}>
            <Section
                className={styles.joinUs}
                contentClassName={styles.content}>
                <div className={styles.label}>{"Join us and get"}</div>

                <div className={styles.bubbleBox}>
                    <BubbleBox
                        data={isMobile ? mobileBubbleBoxData : bubbleBoxData}
                    />

                    <div className={styles.tabList}>{tabList}</div>
                </div>

                <If condition={isMobile}>
                    <LinkBtn
                        className={styles.btn}
                        color={"transparentLight"}
                        href={pagePathRecord[Page.JobListing]}
                        label={"Join us"}
                        style={"outlined"}
                    />
                </If>
            </Section>
        </ParalaxWrap>
    );
};

export default memo(JoinUs);
