import { TSetRequestStatus } from "./types";

const setRequestStatus: TSetRequestStatus = (state, action) => {
    const { requestStatus } = action.payload;

    return {
        ...state,
        requestStatus,
    };
};

export default setRequestStatus;
