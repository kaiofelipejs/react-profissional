module.exports = {
  stories: ["../src/stories/*.stories.js", "../src/components/*.stories.js"],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-viewport",
    "@storybook/addon-docs",
    "@storybook/addon-knobs",
  ],
};
