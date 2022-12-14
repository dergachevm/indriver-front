import { memo, useCallback, useMemo, useRef } from "react";

import { is } from "@utils/shared";

import { TBubbleRowComponent } from "./types";
import styles from "./styles.module.scss";

import Bubble, { TBubbelData } from "../Bubble";

const BUBBLE_ZERO_NUMBER = 0;

const BubbleRow: TBubbleRowComponent = ({ data }) => {
    const rowRef = useRef<HTMLDivElement | null>(null);

    const { position } = data;

    const mapBubble = useCallback(
        (bubbleData: TBubbelData | undefined, index: number) => {
            if (is(undefined, bubbleData)) {
                return null;
            }

            const { id } = bubbleData;

            return (
                <Bubble
                    data={bubbleData}
                    key={id}
                    position={index === BUBBLE_ZERO_NUMBER ? "left" : "right"}
                />
            );
        },
        []
    );

    const bubbleList = useMemo(() => {
        return data.row.map(mapBubble);
    }, [data, mapBubble]);

    return (
        <div
            className={styles.bubbleRow}
            ref={rowRef}
            style={{
                justifyContent: position,
            }}>
            {bubbleList}
        </div>
    );
};

export default memo(BubbleRow);
