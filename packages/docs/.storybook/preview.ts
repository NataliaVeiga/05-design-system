import type { Preview } from "@storybook/react";
import { themes } from '@storybook/theming'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      description: {
        story: 'Por padrão o heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`.',
      },
    },
  },
};

export default preview;
