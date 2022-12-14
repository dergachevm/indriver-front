import { memo } from "react";

import JobCardLayout from "@layouts/JobCardLayout";

import { TCardComponent } from "./types";
import styles from "./styles.module.scss";

import CardContent from "../CardContent";

const Card: TCardComponent = ({
    data,
    link,
    style = "white",
    marker = "marker-circle",
    max,
}) => {
    const { label } = data;

    return (
        <JobCardLayout style={style}>
            <div className={styles.title}>{label}</div>

            <CardContent data={data} link={link} marker={marker} max={max} />
        </JobCardLayout>
    );
};

export default memo(Card);
