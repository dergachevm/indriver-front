import { TSetActiveModal } from "./types";

const setActiveModal: TSetActiveModal = (state, action) => {
    const { name } = action.payload;

    return {
        ...state,
        modalManager: {
            ...state.modalManager,
            active: name,
        },
    };
};

export default setActiveModal;
