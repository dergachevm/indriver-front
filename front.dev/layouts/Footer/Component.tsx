import { memo, useMemo } from "react";

import LinkBtn from "@components/LinkBtn";
import useAppSize from "@hooks/useAppSize";
import { eq } from "@utils/shared";
import If from "@components/If";
import { Page } from "@router/enums";
import { pagePathRecord } from "@router/constants";
import Section from "@layouts/Section";
import MultilineText from "@components/MultilineText";

import TechBox from "./components/TechBox";
import { techBoxData } from "./constants";
import { TFooterComponent } from "./types";
import styles from "./styles.module.scss";

const Footer: TFooterComponent = () => {
    const { size: appSize } = useAppSize();

    const privatyPolity = useMemo(() => {
        return (
            <div className={styles.foot}>
                <div className={styles.inDrive}>{"© inDrive 2022"}</div>
                <div className={styles.privacy}>{"Privacy policy"}</div>
            </div>
        );
    }, []);

    const isMobile = eq(appSize, "mobile");
    const isDekstop = eq(appSize, "dekstop");

    return (
        <Section
            className={styles.footer}
            contentClassName={styles.footerContent}>
            <div className={styles.left}>
                <div className={styles.head}>
                    <div className={styles.title}>
                        <MultilineText
                            text={
                                "inDrive — reliability<:0-9999:>of a corporation<:1024-9999:>and freedon of a startup"
                            }
                        />
                    </div>
                    <div className={styles.desc}>
                        <MultilineText
                            text={
                                "Join our global team and work<:0-9999:>from anywhere in the world!"
                            }
                        />
                    </div>
                    <LinkBtn
                        className={styles.btn}
                        color={"dark"}
                        href={pagePathRecord[Page.JobListing]}
                        label={"Join us"}
                        style={"outlined"}
                    />
                </div>
                <If condition={isDekstop}>{privatyPolity}</If>
            </div>

            <TechBox data={techBoxData} />

            <If condition={isMobile}>{privatyPolity}</If>
        </Section>
    );
};

export default memo(Footer);
