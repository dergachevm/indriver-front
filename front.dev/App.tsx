import { memo } from "react";

import ModalManager from "@components/ModalManager";

import { TAppComponent } from "./types";
import Router from "./router";

const App: TAppComponent = () => {
    return (
        <>
            <Router />
            <ModalManager />
        </>
    );
};

export default memo(App);
