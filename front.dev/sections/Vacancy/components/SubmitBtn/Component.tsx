import { memo } from "react";

import classNames from "classnames";

import styles from "./styles.module.scss";

import Icon from "@components/Icon";
import { is } from "@utils/shared";
import If from "@components/If";

import { TSubmitBtnComponent } from "./types";

const SubmitBtn: TSubmitBtnComponent = ({
    label,

    className,
    onClick,
    submitted,
}) => {
    const classes = classNames(
        styles.submitBtn,
        submitted && styles.submitted,
        className
    );

    return (
        <button className={classes} type={"submit"} onClick={onClick}>
            <If
                condition={
                    is(null, submitted) ||
                    is(undefined, submitted) ||
                    !submitted
                }
                els={<Icon height={24} name={"ok"} width={33} />}>
                <>
                    {label}
                    <Icon height={24} name={"arrow-right"} width={20} />
                </>
            </If>
        </button>
    );
};

export default memo(SubmitBtn);
