module.exports = {
  "stories": [
    "../src/pages/**/*.stories.mdx",
    "../src/stories/**/*.stories.tsx"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y"
  ],
  "framework": "@storybook/react-vite",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  docs:{
    autodocs: true,
  },
  
  viteFinal: (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      config.base = '/05-design-system/'
    }
  
    return config
  },

  "features": {
    "storyStoreV7": true
  }
}
