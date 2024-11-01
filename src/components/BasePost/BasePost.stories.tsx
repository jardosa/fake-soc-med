import type { Meta, StoryObj } from '@storybook/react';
import { BasePost } from './BasePost';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof BasePost> = {
  component: BasePost,
  title: 'BasePost',
};
export default meta;
type Story = StoryObj<typeof BasePost>;

export const Primary: Story = {
  args: {
    datePosted: '5/28/2024',
    profile: {
      name: "John Ardosa",
    },
    onClickComment: () => console.log('comment'),
    onClickLike: () => console.log('like'),
    onClickName: () => console.log('click name'),
    onClickPostDate: () => console.log('click post date'),
    liked: true,
    content: 'A quick brown fox jumps over the lazy dog'
  },
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(/Welcome to BasePost!/gi)).toBeTruthy();
  },
};
