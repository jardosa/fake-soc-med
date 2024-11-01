import React, { ComponentProps, FC } from 'react'
import BasePost from '../BasePost/BasePost'
import MainContentLayout from '../MainContentLayout/MainContentLayout'

type ComposerProps = Pick<ComponentProps<typeof BasePost>, 'profile'> & {
  onClickPost: () => void
}

const Composer: FC<ComposerProps> = ({ onClickPost, profile }) => {
  return (
    <MainContentLayout>

    </MainContentLayout>
  )
}

export default Composer