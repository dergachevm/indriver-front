import { memo } from "react";
import classNames from "classnames";

import { THeaderComponent } from "./types";
import styles from "./styles.module.scss";

const Header: THeaderComponent = ({ label, desc, className }) => {
    const classes = classNames(styles.header, className);

    return (
        <div className={classes}>
            <div className={styles.label}>{label}</div>
            <div className={styles.desc}>{desc}</div>
        </div>
    );
};

export default memo(Header);
