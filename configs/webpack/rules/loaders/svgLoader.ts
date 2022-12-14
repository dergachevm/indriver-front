export const getSvgLoader = () => {
    return {
        loader: "@svgr/webpack",
        options: {
            options: {
                namedExport: "ReactComponent"
            },
            svgoConfig: {
                plugins: [
                    {
                        name: 'preset-default',
                        params: {
                            overrides: {
                                removeViewBox: false,
                            },
                        },
                    },
                ],
            },
        },
    };
};
