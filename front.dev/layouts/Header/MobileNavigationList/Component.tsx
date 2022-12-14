import { memo, useCallback, useMemo } from "react";

import { TNavigationTab } from "@dev/types";

import { TMobileNavigationListComponent } from "./types";
import styles from "./styles.module.scss";

import NavigationTab from "../NavigationTab";

const MobileNavigationList: TMobileNavigationListComponent = ({ list }) => {
    const mapElement = useCallback((el: TNavigationTab) => {
        const { label, url, id } = el;

        return (
            <li className={styles.element} key={id}>
                <NavigationTab color={"light"} label={label} url={url} />
            </li>
        );
    }, []);

    const elList = useMemo(() => {
        return list.map(mapElement);
    }, [list, mapElement]);

    return <ul className={styles.navigationList}>{elList}</ul>;
};

export default memo(MobileNavigationList);
