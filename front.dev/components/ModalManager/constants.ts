import FormSuccessModal from "./components/FormSuccessModal";
import { TModalRecord } from "./types";
import styles from "./styles.module.scss";

export const modalRecord: TModalRecord = {
    "form-success": FormSuccessModal,
};

export const modalAnimClasses = {
    enter: styles.modalContainerEnter,
    enterActive: styles.modalContainerEnterActive,
    exit: styles.modalContainerExit,
    exitActive: styles.modalContainerExitActive,
};
