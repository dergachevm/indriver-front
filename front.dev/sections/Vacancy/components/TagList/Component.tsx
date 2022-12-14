import { memo, useCallback, useMemo } from "react";

import Tag from "@components/Tag";
import { TVacancyTag } from "@services/Redux/slices";

import { TTagListComponent } from "./types";
import styles from "./styles.module.scss";

const TagList: TTagListComponent = ({ data }) => {
    const mapTag = useCallback((tagData: TVacancyTag) => {
        const { id, label } = tagData;

        return <Tag className={styles.tag} key={id} label={label} />;
    }, []);

    const elList = useMemo(() => {
        return data.map(mapTag);
    }, [data, mapTag]);

    return <div className={styles.tagList}>{elList}</div>;
};

export default memo(TagList);
