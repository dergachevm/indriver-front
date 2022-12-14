import { memo } from "react";

import Card from "@components/Card";

import { TCategoryComponent } from "./types";
import styles from "./styles.module.scss";

import TagList from "../TagList";

const Category: TCategoryComponent = ({ data, onClick }) => {
    const { label, tags } = data;

    return (
        <Card className={styles.card} onClick={onClick}>
            <div className={styles.label}>{label}</div>
            <div className={styles.content}>
                <TagList list={tags} />
            </div>
        </Card>
    );
};

export default memo(Category);
