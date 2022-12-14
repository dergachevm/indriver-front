import { memo } from "react";

import Icon from "@components/Icon";
import { eq } from "@utils/shared";
import If from "@components/If";
import MultilineText from "@components/MultilineText";
import useAppSize from "@hooks/useAppSize";

import { THeaderComponent } from "./types";
import styles from "./styles.module.scss";

const Header: THeaderComponent = () => {
    const { size: appSize } = useAppSize();

    const isDekstop = eq(appSize, "dekstop");
    const isMobile = eq(appSize, "mobile");

    return (
        <div className={styles.header}>
            <div className={styles.labelWrap}>
                <div className={styles.label}>
                    <MultilineText
                        text={
                            "Now it is you<:0-768:>who sets<:1200-9999:>the fare<:0-768:>for a taxi ride!"
                        }
                    />

                    <If condition={isMobile}>
                        <Icon
                            className={styles.icon}
                            height={40}
                            name={"like"}
                            width={48}
                        />
                    </If>
                </div>
                <If condition={isDekstop}>
                    <Icon
                        className={styles.icon}
                        height={80}
                        name={"like-big"}
                        width={80}
                    />
                </If>
            </div>
            <div className={styles.content}>
                {
                    "inDrive is about the freedom of choice for 100 million people all over the world! Say goodbye to high demand, hidden fees, and intermediaries. Transparent terms, honest prices, and full freedom are at your disposal."
                }
            </div>
        </div>
    );
};

export default memo(Header);
