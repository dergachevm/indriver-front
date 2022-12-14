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
                    "A text about a cool team, interesting tasks. Et sodales cras nec ridiculus amet. Nec, sit morbi amet, rutrum. Cras nec et ipsum volutpat egestas cras. Orcitortor tincidunt at dictum. Posuere quisque sapien turpis faucibus imperdiet potenti scelerisque imperdiet neque."
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
