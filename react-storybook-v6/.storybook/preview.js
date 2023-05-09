/** @type { import('@storybook/react').Preview } */
import Center from '../src/components/Center/Center'
import React from 'react'
import { ThemeProvider, theme, CSSReset, Box } from '@chakra-ui/react'

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    }, 
    options: {
      storySort: (a, b) =>
        a.id === b.id ? 0 : a.id.localeCompare(b.id, undefined, { numeric: true }),
    },
  },
  // decorators: [Story => (<Center><Story/></Center>)]
  decorators : [(Story) => (
    <ThemeProvider theme={theme}>
      <CSSReset />
        <Box m='4'>
          <Story />
        </Box>
    </ThemeProvider>
  )]
};


export default preview;
