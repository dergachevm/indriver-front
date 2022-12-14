import { TSetTags } from "./types";

const setTags: TSetTags = (state, action) => {
    const { tags } = action.payload;

    return {
        ...state,
        tags,
    };
};

export default setTags;
