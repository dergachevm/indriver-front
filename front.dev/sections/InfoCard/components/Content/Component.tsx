import { memo, useCallback, useMemo } from "react";

import { TContentComponent } from "./types";
import styles from "./styles.module.scss";

import Col, { TColData } from "../Col";

const Content: TContentComponent = ({ dataList }) => {
    const mapCol = useCallback((data: TColData) => {
        const { id } = data;

        return <Col data={data} key={id} />;
    }, []);

    const colList = useMemo(() => {
        return dataList.map(mapCol);
    }, [dataList, mapCol]);

    return <div className={styles.content}>{colList}</div>;
};

export default memo(Content);
