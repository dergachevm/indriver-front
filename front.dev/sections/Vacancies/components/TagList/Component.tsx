import { memo, useCallback, useMemo } from "react";

import Tag from "@components/Tag";
import { TVacancyTag } from "@services/Redux/slices";
import { sortStringsByField } from "@utils/sort";

import { TTagListComponent } from "./types";
import styles from "./styles.module.scss";

const TagList: TTagListComponent = ({ list }) => {
    const mapTab = useCallback((data: TVacancyTag) => {
        const { id, label, name, count } = data;

        return <Tag count={count} icon={name} key={id} label={label} />;
    }, []);

    const elList = useMemo(() => {
        return [...list].sort(sortStringsByField("label")).map(mapTab);
    }, [list, mapTab]);

    return <div className={styles.tabList}>{elList}</div>;
};

export default memo(TagList);
