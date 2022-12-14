import { memo, useCallback, useMemo } from "react";

import { TTechBoxComponent } from "./types";
import styles from "./styles.module.scss";

import TechRow, { TTechRowData } from "../TechRow";

const TechBox: TTechBoxComponent = ({ data }) => {
    const mapLink = useCallback((row: TTechRowData) => {
        const { id } = row;

        return <TechRow data={row} key={id} />;
    }, []);

    const rowElList = useMemo(() => {
        return data.map(mapLink);
    }, [data, mapLink]);

    return <div className={styles.techBox}>{rowElList}</div>;
};

export default memo(TechBox);
