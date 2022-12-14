import { memo } from "react";

import JobCardLayout from "@layouts/JobCardLayout";
import MultilineText from "@components/MultilineText";

import { TApplyFormComponent } from "./types";
import styles from "./styles.module.scss";

import Form from "../Form/Component";

const ApplyForm: TApplyFormComponent = ({ id }) => {
    return (
        <JobCardLayout className={styles.cardLayout}>
            <div className={styles.titleWrap}>
                <div className={styles.title}>
                    <MultilineText text={"Apply<:0-9999:>for job"} />
                </div>
            </div>
            <Form id={id} />
        </JobCardLayout>
    );
};

export default memo(ApplyForm);
