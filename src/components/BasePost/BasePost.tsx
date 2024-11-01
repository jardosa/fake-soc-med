import React, { FC } from 'react'
import { cn } from '../../utils/tailwindCn'
import { Avatar } from '@mantine/core';
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { FaThumbsUp } from 'react-icons/fa';
import { ChatBubbleLeftEllipsisIcon, HandThumbUpIcon } from '@heroicons/react/20/solid';
import MainContentLayout from '../MainContentLayout/MainContentLayout';
import { Profile } from '../types';

dayjs.extend(relativeTime);

type BasePostProps = {
  profile: Profile,
  datePosted: string | Date;
  content: string
  onClickLike: () => void;
  onClickComment: () => void;
  onClickName: () => void;
  onClickPostDate: () => void;
  liked?: boolean
}

export const BasePost: FC<BasePostProps> = ({
  profile,
  datePosted,
  content,
  onClickComment,
  onClickLike,
  liked,
  onClickName,
  onClickPostDate }) => {
  const parsedDate = dayjs(datePosted).fromNow()
  return (
    <MainContentLayout>
      {/* Header */}
      <div className='flex items-center justify-between px-3 py-2 border-b border-b-slate-400'>
        <div className='flex items-center gap-2'>
          <Avatar
            src={profile.profilePicture}
            color={profile.profilePicture ? undefined : 'initials'}
            name={profile.name} size={'md'} />
          <div>
            <button tabIndex={0} onClick={onClickName} className='hover:underline block text-sm'>{profile.name}</button>
            <button tabIndex={0} onClick={onClickPostDate} className='hover:underline block text-xs text-slate-400'>{parsedDate}</button>
          </div>
        </div>
        <div>
          {/* 3 Dots (to implement later) */}
        </div>
      </div>
      {/* Body */}
      <div className='px-3 py-2'>
        {content}
      </div>
      {/* Actions */}
      <div className='grid grid-cols-2 border-t border-t-slate-400 p-1'>
        <button onClick={onClickLike} className='flex items-center gap-2 justify-center py-2 hover:bg-slate-200'>
          <HandThumbUpIcon className={cn('w-5 h-5', liked ? 'text-blue-500' : '')} />
          <div className='font-semibold'>Like</div>
        </button>
        <button onClick={onClickComment} className='flex items-center gap-2 justify-center py-2 hover:bg-slate-200'>
          <ChatBubbleLeftEllipsisIcon className='w-5 h-5' />
          <div className='font-semibold'>Comment</div>
        </button>
      </div>
    </MainContentLayout>
  )
}

export default BasePost