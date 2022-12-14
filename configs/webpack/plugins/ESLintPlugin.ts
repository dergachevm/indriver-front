// import { resolve } from "path";

import ESLintPlugin from "eslint-webpack-plugin";

export const getESLintPlugin = () => {
    return new ESLintPlugin({
        extensions: ["js", "jsx", "ts", "tsx"],
    });
};
