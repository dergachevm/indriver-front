import { memo } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import Icon from "@components/Icon";
import { pagePathRecord } from "@router/constants";
import { Page } from "@router/enums";
import Section from "@layouts/Section";
import LinkBtn from "@components/LinkBtn";

import { TFixedDekstopHeaderComponent } from "./types";
import styles from "./styles.module.scss";

import DekstopNavigationList from "../DekstopNavigationList";

const FixedDekstopHeader: TFixedDekstopHeaderComponent = ({
    tabs,
    className,
}) => {
    const classes = classNames(styles.wrapper, className);

    return (
        <Section
            className={classes}
            contentClassName={styles.content}
            wrapClassName={styles.dekstopHeaderWrap}>
            <div className={styles.contentBox}>
                <div className={styles.wrap}>
                    <Link to={pagePathRecord[Page.Main]}>
                        <Icon height={48} name={"logo-thin"} width={48} />
                    </Link>
                    <DekstopNavigationList color={"light"} list={tabs} />
                </div>

                <LinkBtn
                    className={styles.join}
                    color={"white"}
                    href={pagePathRecord[Page.JobListing]}
                    label={"Join us"}
                    style={"filled"}
                />
            </div>
        </Section>
    );
};

export default memo(FixedDekstopHeader);
