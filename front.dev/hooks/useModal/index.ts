import { useCallback } from "react";

import { actions, useDispatch } from "@services/Redux";

import { TUseModal } from "./types";

const {
    app: { setModalProps, setActiveModal },
} = actions;

const useModal: TUseModal = (name, props) => {
    const dispatch = useDispatch();

    const openModal = useCallback(() => {
        dispatch(
            setModalProps({
                name,
                props,
            })
        );
        dispatch(
            setActiveModal({
                name,
            })
        );
    }, [dispatch, props, name]);

    const closeModal = useCallback(() => {
        dispatch(
            setActiveModal({
                name: null,
            })
        );
    }, [dispatch]);

    return {
        closeModal,
        openModal,
    };
};

export default useModal;
