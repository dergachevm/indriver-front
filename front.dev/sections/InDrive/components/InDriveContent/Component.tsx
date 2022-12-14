import { memo } from "react";
import classNames from "classnames";

import { eq } from "@utils/shared";
import useAppSize from "@hooks/useAppSize";
import If from "@components/If";

import { TInDriveContentComponent } from "./types";
import styles from "./styles.module.scss";
import { contentData } from "./constants";

import Header from "../Header";
import Content from "../Content";
import InDriveImg from "../InDriveImg";

const InDriveContent: TInDriveContentComponent = ({ className }) => {
    const { size: appSize } = useAppSize();

    const isMobile = eq(appSize, "mobile");

    const classes = classNames(styles.wrap, className);

    return (
        <div className={classes}>
            <Header />
            <If condition={isMobile}>
                <InDriveImg />
            </If>
            <Content list={contentData} />
        </div>
    );
};

export default memo(InDriveContent);
