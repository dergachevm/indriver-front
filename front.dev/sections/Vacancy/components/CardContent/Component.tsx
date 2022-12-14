import { memo } from "react";

import If from "@components/If";
import { eq, is } from "@utils/shared";
import LinkBtn from "@components/LinkBtn";

import { TCardComponent } from "./types";
import styles from "./styles.module.scss";

import List from "../List";

const Card: TCardComponent = ({
    data,
    marker = "marker-circle",
    max,
    style,
}) => {
    const { items, desc, link } = data;

    return (
        <div className={styles.contentWrap}>
            <If condition={!is(undefined, desc)}>
                <div className={styles.text}>{desc}</div>
            </If>
            <If condition={!is(undefined, items)}>
                <List
                    btnColor={eq(style, "white") ? "transparent" : "greenLight"}
                    list={items}
                    marker={marker}
                    max={max}
                />
            </If>
            <If condition={!is(undefined, link)}>
                <LinkBtn
                    color={eq(style, "white") ? "transparent" : "greenLight"}
                    href={link as string}
                    label={"Look"}
                    style={"outlined"}
                />
            </If>
        </div>
    );
};

export default memo(Card);
