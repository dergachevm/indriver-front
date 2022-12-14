import { memo, useCallback, useMemo } from "react";
import classNames from "classnames";

import { TNavigationTab } from "@dev/types";

import { TDekstopNavigationListComponent } from "./types";
import styles from "./styles.module.scss";

import NavigationTab from "../NavigationTab";

const MIN_INDEX = 0;

const DekstopNavigationList: TDekstopNavigationListComponent = ({
    list,
    color = "dark",
}) => {
    const mapElement = useCallback(
        (el: TNavigationTab, index: number) => {
            const { label, url, id } = el;

            const classes = classNames(
                styles.element,
                index > MIN_INDEX && styles.withDot,
                styles[color]
            );

            return (
                <li className={classes} key={id}>
                    <NavigationTab color={color} label={label} url={url} />
                </li>
            );
        },
        [color]
    );

    const elList = useMemo(() => {
        return list.map(mapElement);
    }, [list, mapElement]);

    return <ul className={styles.navigationList}>{elList}</ul>;
};

export default memo(DekstopNavigationList);
