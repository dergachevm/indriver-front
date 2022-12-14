import { memo, useCallback, useMemo } from "react";

import { TContentComponent } from "./types";
import styles from "./styles.module.scss";

import Card, { TContentData } from "../Card";

const Content: TContentComponent = ({ list }) => {
    const mapEl = useCallback((data: TContentData) => {
        const { id } = data;

        return <Card data={data} key={id} />;
    }, []);

    const elList = useMemo(() => {
        return list.map(mapEl);
    }, [list, mapEl]);

    return <div className={styles.content}>{elList}</div>;
};

export default memo(Content);
