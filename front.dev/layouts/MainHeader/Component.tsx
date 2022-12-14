import { memo } from "react";

import LinkBtn from "@components/LinkBtn";
import If from "@components/If";
import { eq } from "@utils/shared";
import { pagePathRecord } from "@router/constants";
import { Page } from "@router/enums";
import useAppSize from "@hooks/useAppSize";
import Car from "@components/Car";
import Header from "@layouts/Header";
import MultilineText from "@components/MultilineText";

import { TMainHeaderComponent } from "./types";
import styles from "./styles.module.scss";

const MainHeader: TMainHeaderComponent = () => {
    const { size: appSize } = useAppSize();

    const isMobile = eq(appSize, "mobile");
    const isDekstop = eq(appSize, "dekstop");

    return (
        <div className={styles.mainHeader}>
            <div className={styles.wrap}>
                <Car className={styles.bgImage} />

                <If condition={isMobile}>
                    <Header color={"transparent"} />
                </If>

                <div className={styles.content}>
                    <div className={styles.label}>
                        <MultilineText text={"Driven by<:0-9999:>Challenge"} />
                    </div>

                    <LinkBtn
                        className={styles.join}
                        href={pagePathRecord[Page.JobListing]}
                        label={"Join us"}
                    />
                </div>

                <If condition={isDekstop}>
                    <Header color={"transparent"} />
                </If>
            </div>
        </div>
    );
};

export default memo(MainHeader);
