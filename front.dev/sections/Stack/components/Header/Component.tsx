import { memo } from "react";

import MultilineText from "@components/MultilineText";

import { THeaderComponent } from "./types";
import styles from "./styles.module.scss";

const Header: THeaderComponent = () => {
    return (
        <div className={styles.header}>
            <div className={styles.labelHead}>{"inDrive.Tech's  Stack "}</div>
            <div className={styles.label}>
                <MultilineText
                    text={
                        "WHAT WE LOVE, CAN, AND USE!<:0-9999:>ALWAYS OPEN TO LEARNING SOMETHING NEW, TOO!"
                    }
                />
            </div>
        </div>
    );
};

export default memo(Header);
