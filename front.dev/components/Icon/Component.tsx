import { memo } from "react";
import classNames from "classnames";

import { is } from "@utils/shared";

import { TIconComponent } from "./types";
import styles from "./styles.module.scss";
import { iconDataObj } from "./constants";

const Icon: TIconComponent = ({
    name,
    className,
    onClick,
    width,
    height,
    style,
    elRef,
}) => {
    const data = iconDataObj[name];

    if (is(undefined, data)) {
        return null;
    }

    const SVG = iconDataObj[name].Component;

    const classes = classNames(styles.icon, className);

    return (
        <div className={classes} ref={elRef} style={style} onClick={onClick}>
            <SVG height={height} width={width} />
        </div>
    );
};

export default memo(Icon);
