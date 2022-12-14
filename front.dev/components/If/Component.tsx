import { memo } from "react";

import { TIfComponent } from "./types";

const If: TIfComponent = ({ condition, children, els = null }) => {
    if (condition) {
        return <>{children}</>;
    }

    return <>{els}</>;
};

export default memo(If);
