import { memo } from "react";

import { TJobCardLayoutComponent } from "./types";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { jobCardContentStyleClasses, jobCardStyleClasses } from "./constants";

const JobCardLayout: TJobCardLayoutComponent = ({
    className,
    wrapClassName,
    style="white",
    children
}) => {
    const cardStyle = jobCardStyleClasses[style];
    const cardLayoutStyle = jobCardContentStyleClasses[style];


    const wrapClasses = classNames(styles.cardLayoutWrap, cardStyle, wrapClassName);
    const contentClasses = classNames(styles.cardLayout, cardLayoutStyle, className);


    return (
        <div className={wrapClasses}>
            <div className={contentClasses}>{children}</div>
        </div>
    );
};

export default memo(JobCardLayout);
