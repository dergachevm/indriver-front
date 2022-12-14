import { memo, useCallback, useMemo, useRef } from "react";
import classNames from "classnames";
import { CSSTransition } from "react-transition-group";

import useGetVacancyList from "@hooks/useVacancyList";
import Section from "@layouts/Section";
import GroupFilter from "@sections/GroupFilter";
import { is, isEmptyArr } from "@utils/shared";
import { TTagData } from "@services/Redux/slices";
import { mainGroupName } from "@services/Redux/constants";
import { ANIM_DURACTION } from "@dev/constants";
import useSetSelectedFilters from "@hooks/useSetSelectedFilters";

import { TVacanciesComponent } from "./types";
import styles from "./styles.module.scss";
import VacancyList from "./components/VacancyList";
import CategoryList from "./components/CategoryList";
import {
    findClusterByName,
    mapSelectedClustersToFilters,
    mapTagToCategory,
} from "./utils";
import { categoryListAnimClasses, vacancyListAnimClasses } from "./constants";

const ZERO_SELECTED_CLUSTERS_INDEX = 0;
const REMOVED_EL_COUNT = 1;

const Vacancies: TVacanciesComponent = () => {
    const categoryListRef = useRef<HTMLDivElement | null>(null);
    const vacancyListRef = useRef<HTMLDivElement | null>(null);

    const {
        setSelectedFilters,
        selectedFilters,
        clearSelectedFilters,
    } = useSetSelectedFilters();

    const entries: Array<[string, Array<string>]> = Object.entries(
        selectedFilters
    );
    const hasNotSelectedCategory = entries.every((entry) => {
        const [, value] = entry;

        return isEmptyArr(value);
    });

    const { vacancyList, tagList, count, total } = useGetVacancyList(
        mapSelectedClustersToFilters(selectedFilters),
        !hasNotSelectedCategory
    );

    const selectCluster = useCallback(
        (group: string, cluster: TTagData) => {
            const copyRecord = { ...selectedFilters };

            let data = copyRecord[group];
            if (is(undefined, data)) {
                data = [];
            }

            const copy = [...data];
            const elIndex = copy.findIndex(findClusterByName(cluster.name));

            if (elIndex >= ZERO_SELECTED_CLUSTERS_INDEX) {
                copy.splice(elIndex, REMOVED_EL_COUNT);
            } else {
                copy.push(cluster.name);
            }
            copyRecord[group] = copy;

            setSelectedFilters(copyRecord);
        },
        [selectedFilters, setSelectedFilters]
    );

    const categoryList = useMemo(() => {
        if (is(null, tagList)) {
            return null;
        }

        const list = tagList[mainGroupName];

        if (is(undefined, list) || isEmptyArr(list)) {
            return null;
        }

        return list.map(mapTagToCategory);
    }, [tagList]);

    if (is(null, tagList) || is(null, categoryList)) {
        return (
            <Section
                className={styles.vacancies}
                contentClassName={styles.content}></Section>
        );
    }

    const groupFilterClasses = classNames(
        styles.filters,
        hasNotSelectedCategory && styles.forCategory
    );

    const listClasses = classNames(
        styles.list,
        hasNotSelectedCategory && styles.forCategory
    );

    return (
        <Section
            className={styles.vacancies}
            contentClassName={styles.content}>
            <GroupFilter
                className={groupFilterClasses}
                filters={tagList}
                hasClear={!hasNotSelectedCategory}
                selectedClusters={selectedFilters}
                onClear={clearSelectedFilters}
                onSelectCluster={selectCluster}
            />
            <div className={listClasses}>
                <CSSTransition
                    classNames={vacancyListAnimClasses}
                    in={!hasNotSelectedCategory}
                    nodeRef={vacancyListRef}
                    timeout={ANIM_DURACTION}
                    unmountOnExit={true}>
                    <VacancyList
                        count={count}
                        elRef={vacancyListRef}
                        list={vacancyList}
                        total={total}
                    />
                </CSSTransition>
                <CSSTransition
                    classNames={categoryListAnimClasses}
                    in={hasNotSelectedCategory}
                    nodeRef={categoryListRef}
                    timeout={ANIM_DURACTION}
                    unmountOnExit={true}>
                    <CategoryList
                        className={styles.categoryList}
                        elRef={categoryListRef}
                        list={categoryList}
                        onSelectCluster={selectCluster}
                    />
                </CSSTransition>
            </div>
        </Section>
    );
};

export default memo(Vacancies);
