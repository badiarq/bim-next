import { FC } from "react";

import { useAppContext } from "@/middleware";
import { PopupContainer } from "../popup-container"
import { InformationAlert } from "../messages/information-alert";
import { LogInButton, LogOutButton } from "./";
import { LogoLg } from "../logo/logo-lg";
import { useLanguageContext } from "@/middleware";

export const LoginTab:FC = () => {

  const userState = useAppContext()[0];
  const t = useLanguageContext()[1];

  return (
    <>
      <PopupContainer>
        <div className="card-body flex-auto">
          <LogoLg/>
          <div className="bg-gray-200 dark:bg-middleDark my-5 p-3 rounded-xl grid grid-cols-2 gap-3">
            <LogInButton />
            <p>SignUp</p>
          </div>
          <div className="welcome-container my-5">
            <h1 className="text-3xl font-bold text-center">{t.welcome},</h1>
            <h4 className="text-lg text-center text-gray-400 dark:text-middleDark">{t.signinToContinue}</h4>
          </div>
          <InformationAlert 
            textColor="text-primary-dark dark:text-gray-300"  
            backgroundColor="bg-primary-light15 dark:bg-gray-700"
          >
            <div className="font-light">
              <div>
                  <strong>{t.username}:</strong> {t.fakeName}
              </div>
              <div>
                  <strong>{t.password}:</strong> @ABC123
              </div>
            </div>
          </InformationAlert>
          {userState.user ? (<p>{userState.user.displayName}</p>) : (<LogOutButton />)}
        </div>
      </PopupContainer>
    </>
  );
};