import { memo } from "react";

import { TRowComponent } from "./types";
import styles from "./styles.module.scss";
import { padStartZeros } from "@utils/shared";

const Row: TRowComponent = ({ data, number }) => {
    const { label, desc } = data;

    return (
        <div className={styles.row}>
            <div className={styles.roof} />
            <div className={styles.content}>
                <div className={styles.number}>{padStartZeros(number)}</div>
                <div className={styles.box}>
                    <div className={styles.label}>{label}</div>
                    <div className={styles.desc}>{desc}</div>
                </div>
            </div>
        </div>
    );
};

export default memo(Row);
