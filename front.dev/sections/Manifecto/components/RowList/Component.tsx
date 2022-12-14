import { memo, useCallback, useMemo } from "react";
import classNames from "classnames";

import { TRowListComponent } from "./types";
import styles from "./styles.module.scss";

import Row, { TRowData } from "../Row";

const ROW_NUMBER_INCREMENT = 1;

const RowList: TRowListComponent = ({ className, data }) => {
    const mapRow = useCallback((rowData: TRowData, index: number) => {
        const { id } = rowData;

        return (
            <Row
                data={rowData}
                key={id}
                number={index + ROW_NUMBER_INCREMENT}
            />
        );
    }, []);

    const rowListEl = useMemo(() => {
        return data.map(mapRow);
    }, [mapRow, data]);

    const classes = classNames(styles.rowList, className);

    return <div className={classes}>{rowListEl}</div>;
};

export default memo(RowList);
