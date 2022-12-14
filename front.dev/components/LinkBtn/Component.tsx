import { memo } from "react";
import classNames from "classnames";

import { TLinkBtnComponent } from "./types";
import styles from "./styles.module.scss";
import { btnColorClasses, btnStyleClasses } from "./constants";

import Icon from "../Icon";

const BLANK_PROPS = {
    rel: "noreferrer",
    target: "_blank",
};

const LinkBtn: TLinkBtnComponent = ({
    label,
    href,
    color = "dark",
    style = "filled",
    className,
    blank = false,
}) => {
    const btnStyle = btnStyleClasses[style];
    const btnColor = btnColorClasses[color];

    const classes = classNames(styles.linkBtn, btnStyle, btnColor, className);

    const blankProps = blank ? BLANK_PROPS : {};

    return (
        <a className={classes} href={href} {...blankProps}>
            {label}
            <Icon height={24} name={"arrow-right"} width={20} />
        </a>
    );
};

export default memo(LinkBtn);
