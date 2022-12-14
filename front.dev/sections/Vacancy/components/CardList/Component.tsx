import { memo } from "react";
import classNames from "classnames";

import useAppSize from "@hooks/useAppSize";
import { eq } from "@utils/shared";

import { TCardListComponent } from "./types";
import styles from "./styles.module.scss";

import Card from "../Card";
import ApplyForm from "../ApplyForm";

const MAX_TERMS_MOBILE_SIZE = 3;

const CardList: TCardListComponent = ({ data, id, className }) => {
    const { size: appSize } = useAppSize();

    const {
        tasks,
        expectations,
        teamDescription,
        stack,
        // interviewProcessLink,
        terms,
    } = data;

    const isMobile = eq(appSize, "mobile");

    const classes = classNames(styles.wrap, className);

    return (
        <div className={classes}>
            <div className={styles.cardList}>
                <Card data={tasks} style={"white"} />
                <Card
                    data={expectations}
                    marker={"marker-superellipse"}
                    style={"white"}
                />
                <Card
                    data={terms}
                    marker={"marker-star"}
                    max={isMobile ? MAX_TERMS_MOBILE_SIZE : undefined}
                    style={"green"}
                />
                <Card data={teamDescription} style={"white"} />
                <Card data={stack} marker={"marker-rect"} style={"white"} />
                {/* <Card
                data={{
                    label: "the interview process",
                    link: interviewProcessLink,
                }}
                marker="marker-rect"
                style={"green"}
            /> */}

                <ApplyForm id={id} />
            </div>
        </div>
    );
};

export default memo(CardList);
