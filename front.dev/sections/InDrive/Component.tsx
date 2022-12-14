import { memo } from "react";

import useAppSize from "@hooks/useAppSize";
import { eq } from "@utils/shared";
import If from "@components/If";
import Section from "@layouts/Section";

import InDriveImg from "./components/InDriveImg";
import InDriveContent from "./components/InDriveContent";
import { TInDriveComponent } from "./types";
import styles from "./styles.module.scss";

const InDrive: TInDriveComponent = () => {
    const { size: appSize } = useAppSize();

    const isDekstop = eq(appSize, "dekstop");

    return (
        <Section contentClassName={styles.inDriveContent}>
            <If condition={isDekstop}>
                <InDriveImg />
            </If>
            <InDriveContent />
        </Section>
    );
};

export default memo(InDrive);
