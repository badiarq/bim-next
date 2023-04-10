import { FC, useState, useEffect, ReactNode } from "react";

import { Grid } from "@nextui-org/react";
import PropTypes from 'prop-types';
import Head from 'next/head';
import Link from "next/link";
import classNames from "classnames";

import { useAppContext } from "@/middleware";
import { PopupContainer } from "../popup-container"
import { InformationAlert } from "../messages/information-alert";
import { GoogleLogin } from "@/components/user";
import { LogoLg } from "../logo/logo-lg";
import { useLanguageContext } from "@/middleware";
import { Dictionary } from "@/interfaces";

interface ILoginProps {
	isSignUpClicked?: boolean;
}

const handleOnClick = () => {
  console.log('clicked')
}

export const LoginTab:FC<ILoginProps> = ({ isSignUpClicked }) => {

  const userState = useAppContext()[0];
  const t:Dictionary = useLanguageContext()[1];

  const [singUpClickedStatus, setSingUpClickedStatus] = useState<boolean>(!!isSignUpClicked);

  useEffect(() => {
    const loginButton:HTMLElement | null = document.getElementById('loginButtonTab')
    const signupButton:HTMLElement | null = document.getElementById('signupButtonTab')
    const nameInputContainer:HTMLElement | null = document.getElementById('nameInputContainer')
    const emailLoginButton:HTMLElement | null = document.getElementById('emailLoginButton');

    if(singUpClickedStatus) {
      emailLoginButton!.textContent = t.signUp;
      signupButton!.classList.add("bg-primary-middle", "dark:bg-secondary-light", "dark:text-dark", "shadow-inner");
      loginButton!.classList.remove("bg-primary-middle", "dark:bg-secondary-light", "dark:text-dark", "shadow-inner");
      nameInputContainer!.style.display = 'block';
    } else {
      emailLoginButton!.textContent = t.login;
      signupButton!.classList.remove("bg-primary-middle", "dark:bg-secondary-light", "dark:text-dark", "shadow-inner");
      loginButton!.classList.add("bg-primary-middle", "dark:bg-secondary-light", "dark:text-dark", "shadow-inner");
      nameInputContainer!.style.display = 'none';
    }
  }, [singUpClickedStatus]);
    
  const handleSignUp = () => {
    setSingUpClickedStatus(true);
  }
  
  const handleLogin = () => { 
    setSingUpClickedStatus(false);
  }

  return (
    <>
      <PopupContainer>
        <Head>
          <title>{singUpClickedStatus ? `${t.signUp} - ${t.appName}` : `${t.login} - ${t.appName}`}</title>
        </Head>
        <div className="card-body flex-auto">
          <LogoLg/>
          <div className="bg-gray-200 dark:bg-middleDark dark:text-white mt-4 p-2 rounded-xl grid grid-cols-2 gap-3">
            <button
              id="loginButtonTab"
              className="btn-transparent hover:secondary-dark"
              onClick={handleLogin}>
              {t.login}
            </button>
            <button
              id="signupButtonTab"
              className="btn-transparent hover:secondary-dark"
              onClick={handleSignUp}>
              {t.signUp}
            </button>
          </div>
          <div className="welcome-container my-3">
            <h1 className="h-8 text-3xl font-bold text-center dark:text-white">{t.welcome},</h1>
            <h4 className="text-lg text-center text-gray-400">{t.signinToContinue}</h4>
          </div>
          <InformationAlert
            textColor="text-primary-dark dark:text-gray-300"  
            backgroundColor="bg-primary-light15 dark:bg-gray-700"
          >
            <div className="font-light ">
              <div><strong className="font-bold">{t.email}:</strong> {t.fakeEmail}</div>
              <div><strong className="font-bold">{t.password}:</strong> @ABC123</div>
            </div>
          </InformationAlert>
          <form>
            <Grid.Container className="flex flex-col mb-2">
              <Grid id="nameInputContainer" className="mb-2 hidden">
                <label htmlFor="name" className="form-label">{t.fullName}</label>
                  <input
                    id="nameInput"
                    className="form-control text-gray-300"
                    placeholder={t.fakeName}
                    type="text"
                    required
                  />
                </Grid>
              <Grid className="mb-2">
              <label htmlFor="loginUsername" className="form-label text-base">{t.email}</label>
                <input
                  id="loginUsername"
                  className="form-control text-gray-300"
                  placeholder={t.fakeEmail}
                  type="email"
                  required
                />
              </Grid>
              <Grid className="mb-2">
              <label htmlFor="loginPassword" className="form-label text-base">{t.password}</label>
                <input
                  id="loginPassword"
                  className="form-control text-gray-300"
                  placeholder="*******"
                  type="password"
                  required
                />
              </Grid>
            </Grid.Container>

            <button id="emailLoginButton" type="submit" className="btn primary-dark dark:primary-light dark:text-dark text-center flex flex-row justify-around items-center mt-2 ml-0 mb-6 h-10 w-full">
            </button>

          </form>

          <GoogleLogin />

          <div className='text-center flex flex-row justify-around mt-4'>
							<Link
								href='/'
								className={classNames('text-decoration-none me-3', 'dark:text-gray-200', 'text-sm', 'mr-6', {
									'link-light': singUpClickedStatus,
									'link-dark': !singUpClickedStatus,
								})}>
								{t.privacyPolicy}
							</Link>
							<Link
								href='/'
								className={classNames('link-light text-decoration-none', 'dark:text-gray-200', 'text-sm', {
									'link-light': singUpClickedStatus,
									'link-dark': !singUpClickedStatus,
								})}>
								{t.termsOfUse}
							</Link>
						</div>

        </div>
      </PopupContainer>
    </>
  );
};

LoginTab.propTypes = {
	isSignUpClicked: PropTypes.bool,
};
LoginTab.defaultProps = {
	isSignUpClicked: false,
};