import { memo, useCallback } from "react";
import classNames from "classnames";

import { is } from "@utils/shared";

import { TTabComponent } from "./types";
import styles from "./styles.module.scss";

const Tab: TTabComponent = ({ label, onClick, active, id }) => {
    const handleClick = useCallback(() => {
        if (is(undefined, onClick)) {
            return;
        }

        onClick(id);
    }, [onClick, id]);

    const classes = classNames(styles.tab, active && styles.active);

    return (
        <div className={classes} onClick={handleClick}>
            {label}
        </div>
    );
};

export default memo(Tab);
