import postcssPresetEnv from "postcss-preset-env";

export default {
    plugins: [
        postcssPresetEnv ({
            stage: 3,
            features: {
                'custom-media-queries': true,
		'logical-properties-and-values': true
            },
        }),
    ]
};
