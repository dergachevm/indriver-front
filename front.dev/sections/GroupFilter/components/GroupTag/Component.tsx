import { memo } from "react";
import classNames from "classnames";

import Tag from "@components/Tag";
import { ANIM_DURACTION } from "@dev/constants";

import { TGroupTagComponent } from "./types";
import styles from "./styles.module.scss";

const ANIM_DURACTION_OFFSET = 10;
const ZERO_INDEX = 0;

const GroupTag: TGroupTagComponent = ({
    label,
    onClick,
    active = false,
    index = ZERO_INDEX,
    animDuraction = false,
}) => {
    const classes = classNames(styles.tag, active && styles.active);

    const animDuractionValue = ANIM_DURACTION + index * ANIM_DURACTION_OFFSET;
    let animDuractionResult: string | undefined = undefined;

    if (animDuraction) {
        animDuractionResult = `${animDuractionValue}ms`;
    }

    return (
        <Tag
            className={classes}
            label={label}
            style={{
                animationDuration: animDuractionResult,
            }}
            onClick={onClick}
        />
    );
};

export default memo(GroupTag);
