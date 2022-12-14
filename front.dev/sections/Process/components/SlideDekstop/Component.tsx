import { memo, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import classNames from "classnames";

import { TSlideDekstopComponent } from "./types";
import { slideAnimClasses } from "./constants";
import styles from "./styles.module.scss";

import Slide from "../Slide";

export const SlideDekstop: TSlideDekstopComponent = ({
    active,
    className,
    number,
    text,
}) => {
    const refWrap = useRef<HTMLDivElement | null>(null);

    const classes = classNames(styles.transition, className);

    return (
        <CSSTransition
            classNames={slideAnimClasses}
            in={active}
            nodeRef={refWrap}
            timeout={400}
            unmountOnExit={true}>
            <Slide
                className={classes}
                elRef={refWrap}
                number={number}
                text={text}
            />
        </CSSTransition>
    );
};

export default memo(SlideDekstop);
