import { memo, useCallback, useMemo, useState } from "react";
import classNames from "classnames";

import { TTagData } from "@services/Redux/slices";
import { eq, isEmptyArr } from "@utils/shared";
import { mainGroupName } from "@services/Redux/constants";

import { TFilterListComponent } from "./types";
import styles from "./styles.module.scss";

import Filter from "../Filter";

const FilterList: TFilterListComponent = ({
    record,
    className,
    selectedClusters,
    onSelectCluster,
}) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const hasSelectedCategory = Object.entries(selectedClusters).some(
        (entry) => {
            const [, value] = entry;

            return !isEmptyArr(value);
        }
    );

    const handleActive = useCallback((index: number | null) => {
        return () => {
            setActiveIndex(index);
        };
    }, []);

    const handleDeactive = useCallback(() => {
        setActiveIndex(null);
    }, []);

    const mapFilter = useCallback(
        (data: [string, Array<TTagData>], index: number) => {
            const [name, list] = data;

            if (isEmptyArr(list)) {
                return null;
            }

            const isMain = mainGroupName === name;

            const isActive = eq(activeIndex, index);

            return (
                <Filter
                    active={isMain ? !isEmptyArr(list) && isActive : isActive}
                    hasSelectedCategory={hasSelectedCategory}
                    key={name}
                    main={isMain}
                    name={name}
                    selected={selectedClusters[name]}
                    tags={list}
                    onActive={handleActive(isActive ? null : index)}
                    onDeactive={handleDeactive}
                    onSelectCluster={onSelectCluster}
                />
            );
        },
        [
            activeIndex,
            handleActive,
            selectedClusters,
            onSelectCluster,
            handleDeactive,
            hasSelectedCategory,
        ]
    );

    const elList = useMemo(() => {
        return Object.entries(record).map(mapFilter);
    }, [record, mapFilter]);

    const classes = classNames(styles.filterList, className);

    return <div className={classes}>{elList}</div>;
};

export default memo(FilterList);
