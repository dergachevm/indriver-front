import { memo, useCallback, useMemo, useRef, useState } from "react";
import classNames from "classnames";

import If from "@components/If";
import Icon from "@components/Icon";
import { eq, is } from "@utils/shared";

import { TListComponent, TListData } from "./types";
import styles from "./styles.module.scss";

import ListItem, { TMarker } from "../ListItem";

const VISABLE_MAX_COUNT = 5;
const MIN_EL_COUNT = 0;
const ZERO_EL_COUNT = 0;

const List: TListComponent = ({
    list,
    marker = "marker-circle",
    max = VISABLE_MAX_COUNT,
    btnColor = "transparent",
}) => {
    const listRef = useRef<HTMLDivElement | null>(null);
    const { current: listRefCurrent } = listRef;

    const [isActive, setIsActive] = useState(false);

    const itemsCount = is(undefined, list) ? ZERO_EL_COUNT : list.length;

    const rest = useMemo(() => {
        let slice: Array<TListData> = [];

        if (!is(undefined, list)) {
            slice = list.slice(max, list.length);
        }

        return slice;
    }, [list, max]);

    const main = useMemo(() => {
        let slice: Array<TListData> = [];

        if (!is(undefined, list)) {
            slice = list.slice(MIN_EL_COUNT, max);
        }

        return slice;
    }, [list, max]);

    const mapList = useCallback(
        (listItem: TListData) => {
            const { id, label } = listItem;

            return (
                <ListItem key={id} marker={marker as TMarker}>
                    {label}
                </ListItem>
            );
        },
        [marker]
    );

    const visableList = useMemo(() => {
        return main.map(mapList);
    }, [main, mapList]);

    const hiddenList = useMemo(() => {
        return rest.map(mapList);
    }, [rest, mapList]);

    const handleClick = useCallback(() => {
        setIsActive((last) => !last);
    }, []);

    const iconClasses = classNames(styles.btnIcon, isActive && styles.active);

    return (
        <div>
            <div>{visableList}</div>
            <div
                className={styles.restList}
                ref={listRef}
                style={{
                    height: isActive ? listRefCurrent?.scrollHeight : "0",
                }}>
                {hiddenList}
            </div>
            <If condition={itemsCount > max}>
                <button
                    className={classNames(
                        styles.btn,
                        eq(btnColor, "greenLight") && styles.greenLight
                    )}
                    type={"button"}
                    onClick={handleClick}>
                    {isActive ? "Hide" : `See all — ${itemsCount}`}
                    <Icon
                        className={iconClasses}
                        height={24}
                        name={"arrow-bottom"}
                        width={20}
                    />
                </button>
            </If>
        </div>
    );
};

export default memo(List);
