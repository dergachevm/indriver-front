export const getUrlLoader = () => {
    return {
        loader: "url-loader",
        options: {
            limit: 4096,
        },
    };
};
