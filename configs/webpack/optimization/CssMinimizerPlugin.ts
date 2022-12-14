import CssMinimizerPlugin from "css-minimizer-webpack-plugin";

export const getCssMinimizerPlugin = () => {
    return new CssMinimizerPlugin({
        parallel: true,
        minimizerOptions: {
            preset: [
                "default",
                {
                    discardComments: {
                        removeAll: true,
                    },
                },
            ],
        },
    });
};
