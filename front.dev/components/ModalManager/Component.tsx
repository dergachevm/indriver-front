import { memo, useCallback, useMemo, useRef } from "react";
import { CSSTransition } from "react-transition-group";

import { ANIM_DURACTION } from "@dev/constants";
import {
    actions,
    storeGetters,
    useDispatch,
    useSelector,
} from "@services/Redux";
import { TAnyRecord } from "@dev/types";
import { is } from "@utils/shared";

import { modalAnimClasses, modalRecord } from "./constants";
import { TModalManagerComponent } from "./types";
import styles from "./styles.module.scss";

const {
    app: { setActiveModal },
} = actions;

const ModalManager: TModalManagerComponent = () => {
    const elRef = useRef<HTMLDivElement | null>(null);

    const dispatch = useDispatch();
    const { active, modalState } = useSelector(storeGetters.modalManagerGetter);

    const modal = useMemo(() => {
        if (is(null, active)) {
            return null;
        }

        const ModalComponent = modalRecord[active];
        const modalProps = modalState[active];

        const props = is(null, modalProps)
            ? ({} as TAnyRecord)
            : modalProps.props || ({} as TAnyRecord);

        return <ModalComponent {...props} />;
    }, [active, modalState]);

    const closeModal = useCallback(() => {
        dispatch(
            setActiveModal({
                name: null,
            })
        );
    }, [dispatch]);

    if (is(null, modal)) {
        document.body.classList.remove(styles.noScrollable);
    } else {
        document.body.classList.add(styles.noScrollable);
    }

    return (
        <CSSTransition
            classNames={modalAnimClasses}
            in={!is(null, modal)}
            nodeRef={elRef}
            timeout={ANIM_DURACTION}
            unmountOnExit={true}>
            <div className={styles.modalContainer} ref={elRef}>
                <div className={styles.closeBtn} onClick={closeModal} />

                {modal}
            </div>
        </CSSTransition>
    );
};

export default memo(ModalManager);
