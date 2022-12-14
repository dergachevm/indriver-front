import "@scss/index.scss";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ParallaxProvider } from "react-scroll-parallax";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { is } from "@utils/shared";
import { store } from "@services/Redux";

import App from "./App";

export const initApp = () => {
    const container = document.getElementById("root");

    if (is(null, container)) {
        return;
    }

    const root = createRoot(container);

    root.render(
        <StrictMode>
            <Provider store={store}>
                <BrowserRouter>
                    <ParallaxProvider>
                        <App />
                    </ParallaxProvider>
                </BrowserRouter>
            </Provider>
        </StrictMode>
    );
};

initApp();
