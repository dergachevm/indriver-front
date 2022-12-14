import { memo } from "react";

import { TCommunityComponent } from "./types";
import styles from "./styles.module.scss";

import Frame from "../Frame";

const Community: TCommunityComponent = ({ scrollEnd, scrollStart, number }) => {
    return (
        <Frame
            className={styles.frame}
            number={number}
            scrollEnd={scrollEnd}
            scrollStart={scrollStart}
        />
    );
};

export default memo(Community);
