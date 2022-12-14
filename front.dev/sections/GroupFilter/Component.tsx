import { memo, useCallback, useMemo, useRef, useState } from "react";
import classNames from "classnames";

import Icon from "@components/Icon";
import { eq, getRect, is, isEmptyStr, scrollTop } from "@utils/shared";
import useOnScroll from "@hooks/useOnScroll";
import useAppSize from "@hooks/useAppSize";
import If from "@components/If";

import { TGroupFilterComponent } from "./types";
import styles from "./styles.module.scss";
import FilterList from "./components/FilterList";

const GroupFilter: TGroupFilterComponent = ({
    className,
    filters,
    selectedClusters,
    onSelectCluster,
    onClear,
    hasClear = false,
}) => {
    const { size: appSize } = useAppSize();

    const isMobile = eq(appSize, "mobile");

    const wrapRef = useRef<HTMLDivElement | null>(null);
    const [needHeader, setNeedHeader] = useState(false);

    const classes = classNames(styles.vacancies, className);
    const clearClasses = classNames(styles.clear, hasClear && styles.fade);

    const [selectedFiltersLabel, count] = useMemo(() => {
        const filterLabels = Object.entries(selectedClusters)
            .map(([category, names]) => {
                return names.map((name) => {
                    return filters[category].find((group) => {
                        return group.name === name;
                    })?.title;
                });
            })
            .filter((value) => {
                return !is(undefined, value) || !isEmptyStr(value);
            })
            .flat() as Array<string>;

        const filtersCount = filterLabels.length;

        if (filtersCount === 0) {
            return ["Filters", filtersCount];
        }

        if (filtersCount > 2) {
            return [`Filters (${filtersCount})`, filtersCount];
        }

        return [filterLabels.join(" + "), filtersCount];
    }, [selectedClusters, filters]);

    const filterHeaderClasses = classNames(
        styles.filterHeader,
        count > 0 && styles.green,
        needHeader && styles.show
    );

    const handleScroll = useCallback(() => {
        const { current } = wrapRef;

        if (is(null, current) || !isMobile) {
            return;
        }

        const { bottom } = getRect(current);

        setNeedHeader(bottom <= 0);
    }, [isMobile, wrapRef]);

    const handleScrollToTop = useCallback(() => {
        scrollTop(true);
    }, []);

    useOnScroll(handleScroll, true);

    return (
        <div className={classes} ref={wrapRef}>
            <FilterList
                record={filters}
                selectedClusters={selectedClusters}
                onSelectCluster={onSelectCluster}
            />

            <div className={clearClasses} onClick={onClear}>
                <Icon height={20} name={"cross"} width={20} />
                {"Clear"}
            </div>

            <If condition={isMobile}>
                <div
                    className={filterHeaderClasses}
                    onClick={handleScrollToTop}>
                    <Icon height={24} name={"arrow-top"} width={20} />
                    <div className={styles.label}>{selectedFiltersLabel}</div>
                </div>
            </If>
        </div>
    );
};

export default memo(GroupFilter);
