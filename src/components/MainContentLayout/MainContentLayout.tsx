import React, { FC, PropsWithChildren } from 'react'

const MainContentLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="outline outline-1 outline-slate-400 shadow-sm rounded-md">
      {children}
    </div>
  )
}

export default MainContentLayout