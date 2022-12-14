import { memo, useCallback, useMemo } from "react";

import { isEmptyStr, isString } from "@utils/shared";
import If from "@components/If";

import { TColComponent } from "./types";
import styles from "./styles.module.scss";

const Col: TColComponent = ({ data }) => {
    const { label, desc } = data;

    const mapLabel = useCallback((labelStr: string) => {
        return (
            <div className={styles.label} key={labelStr}>
                {labelStr}
            </div>
        );
    }, []);

    const labelEl = useMemo(() => {
        if (isString(label)) {
            return mapLabel(label);
        }

        return label.map(mapLabel);
    }, [mapLabel, label]);

    return (
        <div className={styles.col}>
            <div className={styles.labelList}>{labelEl}</div>
            <If condition={!isEmptyStr(desc)}>
                <div className={styles.desc}>{desc}</div>
            </If>
        </div>
    );
};

export default memo(Col);
