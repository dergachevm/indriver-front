import { memo } from "react";
import classNames from "classnames";

import { TBurgerComponent } from "./types";
import styles from "./styles.module.scss";

const Burger: TBurgerComponent = ({
    isOpen,
    onClick,
    thin = false,
    withWrap = false,
}) => {
    const burgerClasses = classNames(
        styles.burger,
        isOpen && styles.open,
        thin && styles.thin
    );

    const burger = (
        <div className={burgerClasses} onClick={onClick}>
            <div />
            <div />
        </div>
    );

    if (withWrap) {
        return <div className={styles.burgerWrap}>{burger}</div>;
    }

    return burger;
};

export default memo(Burger);
