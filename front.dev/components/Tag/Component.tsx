import { memo } from "react";
import classNames from "classnames";

import { is } from "@utils/shared";
import If from "@components/If";
import Icon from "@components/Icon";

import { TTagComponent, TTagIconName } from "./types";
import styles from "./styles.module.scss";
import { tagIcon } from "./constants";

const Tab: TTagComponent = ({
    label,
    icon,
    count,
    className,
    onClick,
    style,
}) => {
    const classes = classNames(
        styles.tab,
        !is(undefined, tagIcon[icon as TTagIconName]) && styles.withIcon,
        className
    );

    return (
        <div className={classes} style={style} onClick={onClick}>
            <If condition={!is(undefined, icon)}>
                <Icon height={24} name={icon as TTagIconName} width={28} />
            </If>

            {label}

            <If condition={!is(undefined, count)}>
                <div className={styles.count}>{count}</div>
            </If>
        </div>
    );
};

export default memo(Tab);
