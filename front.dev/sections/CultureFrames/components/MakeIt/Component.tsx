import { memo } from "react";

import { TMakeItComponent } from "./types";
import styles from "./styles.module.scss";

import Frame from "../Frame";

const MakeIt: TMakeItComponent = ({ scrollEnd, scrollStart, number }) => {
    return (
        <Frame
            className={styles.frame}
            number={number}
            scrollEnd={scrollEnd}
            scrollStart={scrollStart}
        />
    );
};

export default memo(MakeIt);
