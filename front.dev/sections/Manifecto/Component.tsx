import { memo } from "react";

import LinkBtn from "@components/LinkBtn";
import useAppSize from "@hooks/useAppSize";
import { eq } from "@utils/shared";
import If from "@components/If";
import Section from "@layouts/Section";
import MultilineText from "@components/MultilineText";

import { TManifectoComponent } from "./types";
import styles from "./styles.module.scss";
import { rowDataList } from "./constants";
import RowList from "./components/RowList";

const Manifecto: TManifectoComponent = () => {
    const { size: appSize } = useAppSize();

    const isMobile = eq(appSize, "mobile");
    const isDekstop = eq(appSize, "dekstop");

    return (
        <Section contentClassName={styles.manifectoContent}>
            <div className={styles.left}>
                <div className={styles.label}>
                    <MultilineText text={"Engineer's<:0-9999:>Manifesto"} />
                </div>

                <If condition={isDekstop && false}>
                    <LinkBtn
                        className={styles.linkBtn}
                        color={"light"}
                        href={"/"}
                        label={"Our culture"}
                        style={"outlined"}
                    />
                </If>
            </div>
            <RowList className={styles.right} data={rowDataList} />
            <If condition={isMobile && false}>
                <LinkBtn
                    className={styles.linkBtn}
                    color={"light"}
                    href={"/"}
                    label={"Our culture"}
                    style={"outlined"}
                />
            </If>
        </Section>
    );
};

export default memo(Manifecto);
