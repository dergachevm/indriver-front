import { memo } from "react";
import classNames from "classnames";

import If from "@components/If";
import useAppSize from "@hooks/useAppSize";
import { eq } from "@utils/shared";

import { TFixedHeaderComponent } from "./types";
import styles from "./styles.module.scss";

import FixedDekstopHeader from "../FixedDekstopHeader";
import FixedMobileHeader from "../FixedMobileHeader";

const FixedHeader: TFixedHeaderComponent = ({ tabs, show = false }) => {
    const { size: appSize } = useAppSize();

    const isDekstop = eq(appSize, "dekstop");

    const classes = classNames(styles.header, !show && styles.hide);

    return (
        <If
            condition={isDekstop}
            els={<FixedMobileHeader className={classes} tabs={tabs} />}>
            <FixedDekstopHeader className={classes} tabs={tabs} />
        </If>
    );
};

export default memo(FixedHeader);
