import { TSetModalProps } from "./types";

const setModalProps: TSetModalProps = (state, action) => {
    const { name, props } = action.payload;

    return {
        ...state,
        modalManager: {
            ...state.modalManager,
            modalState: {
                ...state.modalManager.modalState,
                [name]: props,
            },
        },
    };
};

export default setModalProps;
