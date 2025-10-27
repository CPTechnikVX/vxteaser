/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
    stories:    ["../stories/index.stories.js"],

    addons:     [
        "@storybook/addon-webpack5-compiler-swc",
        "@storybook/addon-onboarding",
        "@chromatic-com/storybook",
        "@storybook/addon-docs"
    ],

    framework:  {
		name:    "@storybook/react-webpack5",
		options: {},
	},

    typescript: {
		check:                        false,
		checkOptions:                 {},
		reactDocgen:                  'react-docgen-typescript',
		reactDocgenTypescriptOptions: {
			shouldExtractLiteralValuesFromEnum: true,
			propFilter:                         (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
		},
	},

    // Add this section:
    server: {
		open: false,
	},

    docs: {}
};
export default config;
