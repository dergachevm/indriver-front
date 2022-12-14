import { memo } from "react";
import classNames from "classnames";

import Section from "@layouts/Section";

import { TInfoCardComponent } from "./types";
import styles from "./styles.module.scss";
import Header from "./components/Header";
import Content from "./components/Content";

const InfoCard: TInfoCardComponent = ({ data, elRef, className, style }) => {
    const {
        header: { label, desc },
        content,
        bgImage,
    } = data;

    const classes = classNames(styles.infoCard, className);

    return (
        <Section
            className={classes}
            contentClassName={styles.infoCardContent}
            elRef={elRef}
            style={style}
            wrapBgImage={bgImage}
            wrapClassName={styles.infoCardWrap}>
            <Header desc={desc} label={label} />
            <Content dataList={content} />
        </Section>
    );
};

export default memo(InfoCard);
