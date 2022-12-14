import { memo } from "react";

import Process from "@sections/Process";

import { TFormSuccessModalComponent } from "./types";
import styles from "./styles.module.scss";

const FormSuccessModal: TFormSuccessModalComponent = () => {
    return (
        <div className={styles.modal}>
            <Process forModal={true} />
        </div>
    );
};

export default memo(FormSuccessModal);
