import { memo } from "react";
import { Link } from "react-router-dom";

import Card from "@components/Card";
import { JOB_ROUTE } from "@router/constants";

import { TVacancyComponent } from "./types";
import styles from "./styles.module.scss";

import TagList from "../TagList";

const Vacancy: TVacancyComponent = ({ data }) => {
    const { label, description, tags, id } = data;

    return (
        <Link to={`${JOB_ROUTE}/${id}`}>
            <Card className={styles.card}>
                <div className={styles.label}>{label}</div>
                <div className={styles.content}>
                    <div className={styles.desc}>{description}</div>

                    <TagList list={tags} />
                </div>
            </Card>
        </Link>
    );
};

export default memo(Vacancy);
