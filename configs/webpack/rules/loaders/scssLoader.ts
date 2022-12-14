export const getScssLoader = (isDev: boolean) => {
    return {
        loader: "sass-loader",
        options: {
            sourceMap: isDev,
        },
    };
};
