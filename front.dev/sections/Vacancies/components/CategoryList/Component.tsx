import { memo, useCallback, useMemo } from "react";
import classNames from "classnames";

import { TCategoryListComponent } from "./types";
import styles from "./styles.module.scss";

import Category, { TCategory } from "../Category";

const CategoryList: TCategoryListComponent = ({
    list,
    className,
    onSelectCluster,
    elRef,
}) => {
    const mapCategory = useCallback(
        (categoryData: TCategory) => {
            const { id, data } = categoryData;

            const selectItem = () => {
                onSelectCluster(data.category, data);
            };

            return (
                <Category data={categoryData} key={id} onClick={selectItem} />
            );
        },
        [onSelectCluster]
    );

    const elList = useMemo(() => {
        return list.map(mapCategory);
    }, [list, mapCategory]);

    const classes = classNames(styles.vacancyList, className);

    return (
        <div className={classes} ref={elRef}>
            {elList}
        </div>
    );
};

export default memo(CategoryList);
