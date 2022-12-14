import { memo, useCallback, useMemo } from "react";

import Tab from "@components/Tag";

import { TTagData, TTagListComponent } from "./types";
import styles from "./styles.module.scss";

const TagList: TTagListComponent = ({ list }) => {
    const mapTab = useCallback((data: TTagData) => {
        const { id, label, icon, count } = data;

        return <Tab count={count} icon={icon} key={id} label={label} />;
    }, []);

    const elList = useMemo(() => {
        return list.map(mapTab);
    }, [list, mapTab]);

    return <div className={styles.tabList}>{elList}</div>;
};

export default memo(TagList);
