import { memo } from "react";

import { pagePathRecord } from "@router/constants";
import { Page } from "@router/enums";
import LinkBtn from "@components/LinkBtn";

import { TInfoComponent } from "./types";
import styles from "./styles.module.scss";

const Info: TInfoComponent = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.text}>
                {
                    "inDrive is an international technological platform for transport and personal services. We are one of the top 2 mobile travel services in the world with over 150 million installs, over 2 billion trips, and 700+ cities in 40+ countries."
                }
            </div>
            <LinkBtn
                className={styles.btn}
                color={"light"}
                href={pagePathRecord[Page.JobListing]}
                label={"View Vacancies"}
            />
        </div>
    );
};

export default memo(Info);
