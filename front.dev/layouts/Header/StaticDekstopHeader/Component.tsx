import { memo } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import Icon from "@components/Icon";
import { pagePathRecord } from "@router/constants";
import { Page } from "@router/enums";
import Section from "@layouts/Section";
import LinkBtn from "@components/LinkBtn";
import If from "@components/If";

import { TStaticDekstopHeaderComponent } from "./types";
import styles from "./styles.module.scss";
import { joinStyleRecord } from "./constants";

import DekstopNavigationList from "../DekstopNavigationList";

const StaticDekstopHeader: TStaticDekstopHeaderComponent = ({
    tabs,
    withJoin = false,
    color = "green",
    className,
}) => {
    const joinProps = joinStyleRecord[color];

    const classes = classNames(styles.wrapper, className);

    return (
        <Section
            className={classes}
            contentClassName={styles.content}
            wrapClassName={styles.dekstopHeaderWrap}>
            <div className={styles.contentBox}>
                <div className={styles.wrap}>
                    <Link to={pagePathRecord[Page.Main]}>
                        <Icon height={46} name={"logo"} width={205} />
                    </Link>
                    <DekstopNavigationList color={"dark"} list={tabs} />
                </div>

                <If condition={withJoin}>
                    <LinkBtn
                        className={styles.join}
                        color={joinProps.color}
                        href={pagePathRecord[Page.JobListing]}
                        label={"Join us"}
                        style={joinProps.style}
                    />
                </If>
            </div>
        </Section>
    );
};

export default memo(StaticDekstopHeader);
