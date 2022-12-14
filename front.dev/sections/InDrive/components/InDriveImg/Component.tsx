import { memo } from "react";

import inDrive from "@assets/img/inDriveImg.png";
import Image from "@components/Image";

import { TInDriveImgComponent } from "./types";
import styles from "./styles.module.scss";

const InDriveImg: TInDriveImgComponent = () => {
    return (
        <div className={styles.inDriveImgWrap}>
            <Image alt={"indrive"} src={inDrive} />
        </div>
    );
};

export default memo(InDriveImg);
