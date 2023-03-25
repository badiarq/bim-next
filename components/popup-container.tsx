import React, { FC, ReactNode } from "react";

interface Props {
  children : ReactNode,
}

export const PopupContainer: FC<Props> = ({children}) => {
  return (
    <div className="dark:bg-dark bg-primary-light h-screen w-screen login-tab z-1 grow box-border flex flex-col flex-auto p-0 ease-in-out">
      <div className={`h-screen w-screen flex-wrap flex flex-auto flex-col items-center justify-center p-5 pt-8 ml-auto mr-auto`}>
        <div className={`popup-container bg-white dark:bg-primary-dark shadow-md dark:shadow-slate-800 relative rounded-xl p-6 col-span-4 lg:col-span-6 md:col-span-8`}>
          {children}
        </div>
      </div>
    </div>
  )
};
