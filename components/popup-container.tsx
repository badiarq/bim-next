import React, { FC, ReactNode } from "react";

interface Props {
  children : ReactNode,
}

export const PopupContainer: FC<Props> = ({children}) => {
  return (
    <div className="h-screen w-screen login-tab z-1 grow box-border flex flex-col flex-auto p-0 ease-in-out">
      <div className={`w-screen bg-primary-light dark:bg-middleDark flex-wrap flex flex-auto flex-col items-center justify-center p-4 ml-auto mr-auto`}>
        <div className={`min-w-[33%] popup-container bg-white dark:bg-primary-dark shadow-md dark:shadow-slate-800 relative rounded-xl p-6 col-span-4 lg:col-span-6 md:col-span-8`}>
          {children}
        </div>
      </div>
    </div>
  )
};
