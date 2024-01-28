/** @type { import('@storybook/react-vite').StorybookConfig } */
import type { StorybookConfig } from '@storybook/react-vite';


const config: StorybookConfig = {
  "stories": [
    "../my-react-app/src/**/*.mdx",
    "../my-react-app/src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  "docs": {
    "autodocs": "tag"
  }
};
export default config;
