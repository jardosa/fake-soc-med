import type { Meta, StoryObj } from '@storybook/react';
import { ComposerCTA } from './ComposerCTA';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { cn } from '../../utils/tailwindCn';
import { ChatBubbleLeftEllipsisIcon, FaceSmileIcon, HandThumbUpIcon, VideoCameraIcon } from '@heroicons/react/20/solid';

const meta: Meta<typeof ComposerCTA> = {
  component: ComposerCTA,
  title: 'ComposerCTA',
};
export default meta;
type Story = StoryObj<typeof ComposerCTA>;

export const Primary: Story = {
  args: {
    profile: {
      name: "John Ardosa",
    },
    actions: [
      {
        label: 'Live Video',
        icon: <VideoCameraIcon className={cn('w-5 h-5')} />,
        onClick: () => console.log('Live Video')
      },
      {
        label: 'Photo/Video',
        icon: <ChatBubbleLeftEllipsisIcon className={cn('w-5 h-5')} />,
        onClick: () => console.log('Photo/Video')
      },
      {
        label: 'Feeling/Activity',
        icon: <FaceSmileIcon className={cn('w-5 h-5')} />,
        onClick: () => console.log('Feeling/Activity')
      },
    ],
    onClick: () => console.log('open cta')
  },
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(/Welcome to ComposerCTA!/gi)).toBeTruthy();
  },
};
