import { memo } from "react";

import Icon from "@components/Icon";
import MultilineText from "@components/MultilineText";

import { TCardComponent } from "./types";
import styles from "./styles.module.scss";

const Card: TCardComponent = ({ data }) => {
    const { icon, label, desc } = data;

    return (
        <div className={styles.card}>
            <Icon className={styles.icon} height={80} name={icon} width={80} />

            <div className={styles.label}>
                <MultilineText text={label} />
            </div>
            <div className={styles.desc}>{desc}</div>
        </div>
    );
};

export default memo(Card);
