import { getCssMinimizerPlugin } from "./CssMinimizerPlugin";
import { getTerserPlugin } from "./TerserPlugin";

export const getOptimization = () => {
    return {
        innerGraph: true,
        minimize: true,
        minimizer: [getTerserPlugin(), getCssMinimizerPlugin()],
        removeAvailableModules: true,
        runtimeChunk: "single" as const,
        splitChunks: {
            chunks: "all" as const,
            cacheGroups: {
                react: {
                    test: /react/,
                    name: "react",
                },
            },
        },
    };
};
