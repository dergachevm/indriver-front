import { memo } from "react";
import RenderIfVisible from "react-render-if-visible";
import classNames from "classnames";

import { TCardComponent } from "./types";
import styles from "./styles.module.scss";

const Card: TCardComponent = ({ children, className, onClick, elRef }) => {
    const classes = classNames(styles.card, className);

    return (
        <RenderIfVisible>
            <div className={classes} ref={elRef} onClick={onClick}>
                {children}
            </div>
        </RenderIfVisible>
    );
};

export default memo(Card);
