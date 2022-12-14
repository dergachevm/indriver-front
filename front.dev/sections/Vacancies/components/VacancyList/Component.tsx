import { memo, useCallback, useMemo } from "react";
import classNames from "classnames";

import { TShortVacancy } from "@services/Redux/slices";
import If from "@components/If";

import { TVacancyListComponent } from "./types";
import styles from "./styles.module.scss";

import Vacancy from "../Vacancy";

const EMTY_LIST_COUNT = 0;

const VacancyList: TVacancyListComponent = ({
    list,
    className,
    total,
    count,
    elRef,
}) => {
    const mapVacancy = useCallback((data: TShortVacancy) => {
        const { id } = data;

        return <Vacancy data={data} key={id} />;
    }, []);

    const elList = useMemo(() => {
        return list.map(mapVacancy);
    }, [list, mapVacancy]);

    const classes = classNames(styles.vacancyListWrap, className);

    return (
        <div className={classes} ref={elRef}>
            <If condition={total > EMTY_LIST_COUNT}>
                <div className={styles.vacanciesCount}>
                    <span>{"Vacancies"}</span>
                    <span>{`${count}/${total}`}</span>
                </div>
            </If>
            <div className={styles.vacancyList}>{elList}</div>
        </div>
    );
};

export default memo(VacancyList);
