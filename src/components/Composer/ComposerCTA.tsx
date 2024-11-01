import React, { ComponentProps, FC } from 'react'
import BasePost from '../BasePost/BasePost'
import { ReactNode } from '@tanstack/react-router'
import { Action, Profile } from '../types'
import MainContentLayout from '../MainContentLayout/MainContentLayout'
import { Avatar, UnstyledButton } from '@mantine/core'
import { cn } from '../../utils/tailwindCn'

type ComposerCTAProps = {
  profile: Profile
  actions: Action[]
  placeholder: string;
  onClick: () => void
}

export const ComposerCTA: FC<ComposerCTAProps> = (props) => {
  const { onClick, actions, profile, placeholder = `What's on your mind?` } = props


  return (
    <MainContentLayout>
      <div>
        {/* Header */}
        <div className='flex gap-2 items-center p-2'>
          <Avatar
            src={profile.profilePicture}
            color={profile.profilePicture ? undefined : 'initials'}
            name={profile.name} size={'md'} />
          <button onClick={onClick} className={cn(
            "rounded-md ",
            "bg-slate-100 ",
            "p-2 ",
            "text-left ",
            "text-lg ",
            "text-slate-500 ",
            "hover:text-opacity-65 ",
            "w-full",
          )}>
            {placeholder}
          </button>
        </div>
        {/*  */}
        <div className='flex justify-evenly border-t border-t-slate-400 p-1'>
          {actions.map((action) => <button title={action.label} onClick={action.onClick} className='flex-1 flex items-center gap-2 justify-center py-2 hover:bg-slate-200'>
            {action.icon}
            <div className='font-semibold hidden sm:block '>{action.label}</div>
          </button>)}
        </div>
      </div>
    </MainContentLayout>
  )
}

export default ComposerCTA