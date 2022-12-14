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
                        "What we love, can, and use!<:0-9999:>always open to learn something new, too!"
                    }
                />
            </div>
        </div>
    );
};

export default memo(Header);
