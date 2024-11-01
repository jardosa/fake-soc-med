import type { Meta, StoryObj } from '@storybook/react';
import { Comment } from './Comment';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Comment> = {
  component: Comment,
  title: 'Comment',
};
export default meta;
type Story = StoryObj<typeof Comment>;

export const Primary: Story = {
  args: {
    datePosted: '5/28/2024',
    profile: {
      name: "John Ardosa",
    },
    onClickLike: () => console.log('like'),
    onClickName: () => console.log('click name'),
    onClickPostDate: () => console.log('click post date'),
    liked: true,
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum officia, aut aliquam nisi odit impedit dolores. Eveniet autem, voluptate illo fugit possimus expedita laudantium adipisci officia, temporibus magnam pariatur voluptatum voluptatibus rem odio. Accusamus, laborum. Nisi tempore illo excepturi libero, adipisci distinctio dolores quaerat, magnam suscipit alias saepe dolorem voluptatibus!'
  },
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(/Welcome to Comment!/gi)).toBeTruthy();
  },
};
