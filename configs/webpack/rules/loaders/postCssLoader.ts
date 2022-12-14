export const getPostCssLoader = (isDev: boolean) => {
    return {
        loader: "postcss-loader",
        options: {
            postcssOptions: {
                plugins: ["autoprefixer"],
            },
            sourceMap: isDev,
        },
    };
};
