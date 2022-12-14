import { memo } from "react";

import { TBubbleComponent } from "./types";
import styles from "./styles.module.scss";
import Icon from "@components/Icon";
import { positionDataObj } from "./constants";

const Bubble: TBubbleComponent = ({ data, position }) => {
    const { label } = data;

    return (
        <div className={styles.bubble}>
            {label}
            <Icon
                className={styles.corner}
                height={32}
                name={"message-corner"}
                style={{
                    [position]: -8,
                    transform: positionDataObj[position].transform,
                }}
                width={30}
            />
        </div>
    );
};

export default memo(Bubble);
