import { memo } from "react";

import { TCultureOfChallengeComponent } from "./types";
import styles from "./styles.module.scss";

import Frame from "../Frame";

const CultureOfChallenge: TCultureOfChallengeComponent = ({
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

export default memo(CultureOfChallenge);
