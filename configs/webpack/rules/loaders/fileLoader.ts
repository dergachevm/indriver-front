export const getFileLoader = (entryDir: string) => {
    return {
        loader: "file-loader",
        options: {
            name: "../[path][name].[ext]",
            context: entryDir,
        },
    };
};
