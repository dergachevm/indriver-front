import { memo } from "react";

import { TInDriveComponent } from "./types";
import styles from "./styles.module.scss";

import Frame from "../Frame";

const InDrive: TInDriveComponent = ({ scrollEnd, scrollStart, number }) => {
    return (
        <Frame
            className={styles.frame}
            number={number}
            scrollEnd={scrollEnd}
            scrollStart={scrollStart}
        />
    );
};

export default memo(InDrive);
