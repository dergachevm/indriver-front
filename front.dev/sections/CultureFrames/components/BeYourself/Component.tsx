import { memo } from "react";

import { TBeYourselfComponent } from "./types";
import styles from "./styles.module.scss";

import Frame from "../Frame";

const BeYourself: TBeYourselfComponent = ({
    scrollEnd,
    scrollStart,
    number,
}) => {
    return (
        <Frame
            className={styles.frame}
            number={number}
            scrollEnd={scrollEnd}
            scrollStart={scrollStart}
        />
    );
};

export default memo(BeYourself);
