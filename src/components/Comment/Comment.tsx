import React, { ComponentProps, FC } from 'react'
import BasePost from '../BasePost/BasePost'
import { Avatar, Spoiler } from '@mantine/core'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { cn } from '../../utils/tailwindCn'

dayjs.extend(relativeTime);

type CommentProps = Omit<ComponentProps<typeof BasePost>, 'onClickComment'> & {
}

export const Comment: FC<CommentProps> = (props) => {
  const { content,
    datePosted,
    onClickLike,
    onClickName,
    onClickPostDate,
    profile,
    liked
  } = props

  const parsedDate = dayjs(datePosted).fromNow(true)
  return (
    <div className='flex gap-2'>
      <Avatar
        src={profile.profilePicture}
        color={profile.profilePicture ? undefined : 'initials'}
        name={profile.name} size={'md'} />
      <div className='space-y-1'>
        <div className='bg-slate-100 px-3 py-2 rounded-sm'>
          <button tabIndex={0} onClick={onClickName} className='hover:underline block text-sm'>{profile.name}</button>
          <Spoiler className='text-sm' maxHeight={60} showLabel="See more"  hideLabel="Hide">
            {content}
          </Spoiler>
        </div>
        <div className='flex gap-2  text-xs'>
          <button onClick={onClickPostDate} className='block'>{parsedDate}</button>
          <button onClick={onClickLike} className={cn('block', liked ? 'text-blue-500' : '', 'hover:text-blue-500')}>
            {liked ? 'Liked' : 'Like'}</button>
        </div>
      </div>
    </div>
  )
}

export default Comment