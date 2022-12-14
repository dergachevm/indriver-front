import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import classNames from "classnames";

import { is } from "@utils/shared";

import { TBubbleBoxComponent } from "./types";
import styles from "./styles.module.scss";
import { copyBubbleRow } from "./utils";

import BubbleRow, { TBubbelDataRow } from "../BubbleRow";

const BUBBLE_ANIM_DURACTION = 2000;
const BUBBLE_ANIM_DELAY = 800;

const BubbleBox: TBubbleBoxComponent = ({ data }) => {
    const listRef = useRef<HTMLDivElement | null>(null);

    const [dataList, setDataList] = useState(data.list);

    const dataListCopy = useMemo(() => {
        return dataList.map(copyBubbleRow);
    }, [dataList]);

    const mapBubbleRow = useCallback((bubbleRowData: TBubbelDataRow) => {
        const { id } = bubbleRowData;

        return <BubbleRow data={bubbleRowData} key={id} />;
    }, []);

    const swapBubbleRow = useCallback(() => {
        const { current } = listRef;

        if (is(null, current)) {
            return;
        }

        current.classList.remove(styles.bubbleBoxMoved);
        current.classList.add(styles.bubbleBoxMoveAnim);

        setTimeout(() => {
            current.classList.add(styles.bubbleBoxMoved);
            current.classList.remove(styles.bubbleBoxMoveAnim);

            const child = current.removeChild(current.firstChild as ChildNode);
            current.appendChild(child);
        }, BUBBLE_ANIM_DELAY);
    }, [listRef]);

    const bubbleRowList = useMemo(() => {
        return dataList.map(mapBubbleRow);
    }, [dataList, mapBubbleRow]);

    const bubbleRowListCopy = useMemo(() => {
        return dataListCopy.map(mapBubbleRow);
    }, [dataListCopy, mapBubbleRow]);

    const [resultList, setResultList] = useState<Array<JSX.Element>>([]);

    useEffect(() => {
        const timer = setInterval(swapBubbleRow, BUBBLE_ANIM_DURACTION);

        return (): void => {
            clearInterval(timer);
        };
    }, [swapBubbleRow]);

    useEffect(() => {
        setResultList([...bubbleRowList, ...bubbleRowListCopy]);
        swapBubbleRow();
    }, [bubbleRowList, bubbleRowListCopy, swapBubbleRow]);

    useEffect(() => {
        setDataList(data.list);
    }, [data]);

    return (
        <div className={styles.bubbleBoxContainer}>
            <div className={styles.bubbleBoxWrap}>
                <div className={classNames(styles.bubbleBox)} ref={listRef}>
                    {resultList}
                </div>
            </div>
        </div>
    );
};

export default memo(BubbleBox);
