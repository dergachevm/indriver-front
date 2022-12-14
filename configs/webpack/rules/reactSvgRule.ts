import { getSvgLoader } from "./loaders";

export const getReactSvgRule = () => {
    return {
        test: /\.svg$/i,
        use: [getSvgLoader()],
    };
};
