import '../src/assets/styles/index.css';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import type { Preview } from '@storybook/react';
import MantineProvider from '../src/utils/providers/MantineProviderWrapper'
import React from 'react';

const withMantineProvider = (Story) => (
  <MantineProvider>
    <div className='grid place-items-center'>
      <Story />
    </div>
  </MantineProvider>
);


const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [withMantineProvider], // Add the decorator here
};

export default preview;
