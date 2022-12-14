import { memo } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import If from "@components/If";
import LinkBtn from "@components/LinkBtn";
import { eq, is } from "@utils/shared";
import Icon from "@components/Icon";
import useGetVacancy from "@hooks/useVacancy";
import { pagePathRecord } from "@router/constants";
import { Page } from "@router/enums";
import { storeGetters, useSelector } from "@services/Redux";
import { RequestStatus } from "@dev/enums";
import Section from "@layouts/Section";
import useAppSize from "@hooks/useAppSize";

import TagList from "./components/TagList";
import CardList from "./components/CardList";
import { TVacancyComponent } from "./types";
import styles from "./styles.module.scss";

const Vacancy: TVacancyComponent = ({ id }) => {
    const { size: appSize } = useAppSize();

    const requestStatus = useSelector(storeGetters.requestStatusGetter);

    const isMobile = eq(appSize, "mobile");

    const { vacancy } = useGetVacancy(id);

    if (is(null, vacancy)) {
        const contentClasses = classNames(
            styles.vacancyContent,
            styles.notFoundVacancy
        );
        const classes = classNames(styles.vacancy, styles.notFoundVacancyWrap);

        return (
            <Section
                className={classes}
                contentClassName={contentClasses}
                wrapClassName={styles.vacancyWrap}>
                <If condition={requestStatus !== RequestStatus.Loading}>
                    {"Job not found"}
                </If>
            </Section>
        );
    }

    const classes = classNames(styles.vacancy, styles.appearance);

    return (
        <Section
            className={classes}
            contentClassName={styles.vacancyContent}
            wrapClassName={styles.vacancyWrap}>
            <div className={styles.left}>
                <div className={styles.head}>
                    <div className={styles.title}>{vacancy.label}</div>
                    <div className={styles.tagBox}>
                        <TagList data={vacancy.tags} />
                    </div>
                    <Link
                        className={styles.link}
                        to={pagePathRecord[Page.JobListing]}>
                        <Icon
                            className={styles.linkIcon}
                            height={24}
                            name={"arrow-right"}
                            width={20}
                        />
                        {"All vacancies"}
                    </Link>

                    <If condition={isMobile}>
                        <LinkBtn
                            className={styles.join}
                            color={"dark"}
                            href={pagePathRecord[Page.JobListing]}
                            label={"Join us"}
                            style={"filled"}
                        />
                    </If>
                </div>
            </div>
            <CardList className={styles.cardList} data={vacancy} id={id} />
        </Section>
    );
};

export default memo(Vacancy);
