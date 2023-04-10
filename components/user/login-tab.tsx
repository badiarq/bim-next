import { FC, useState } from "react";

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
	isSignUp?: boolean;
}

const handleOnClick = () => {
  console.log('clicked')
}

export const LoginTab:FC<ILoginProps> = ({ isSignUp }) => {

  const userState = useAppContext()[0];
  const t:Dictionary = useLanguageContext()[1];

  const [singUpStatus, setSingUpStatus] = useState<boolean>(!!isSignUp);

  const handleSignUp = () => {
    const loginButton = document.getElementById('loginButton')
    const nameInputContainer = document.getElementById('nameInputContainer')
    isSignUp = true;
    if(loginButton) {
      loginButton.style.display = 'none';
    }
    if(nameInputContainer) {
      nameInputContainer.style.display = 'block';
    }
  }

  const handleLogin = () => { 
    console.log('login')
  }

  return (
    <>
      <PopupContainer>
        <Head>
          <title>{singUpStatus ? `${t.signUp}` : `${t.login}`}</title>
        </Head>
        <div className="card-body flex-auto">
          <LogoLg/>
          <div className="bg-gray-200 dark:bg-middleDark dark:text-white mt-4 p-2 rounded-xl grid grid-cols-2 gap-3">
            <button 
              className="btn-transparent hover:secondary-dark"
              onClick={handleLogin}>
              {t.login}
            </button>
            <button 
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
                  />
                </Grid>
              <Grid className="mb-2">
              <label htmlFor="loginUsername" className="form-label text-base">{t.email}</label>
                <input
                  id="loginUsername"
                  className="form-control text-gray-300"
                  placeholder={t.fakeEmail}
                  type="text"
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

          </form>

          <GoogleLogin />

          <div className='text-center flex flex-row justify-around mt-4'>
							<Link
								href='/'
								className={classNames('text-decoration-none me-3', 'dark:text-gray-200', 'text-sm', {
									'link-light': singUpStatus,
									'link-dark': !singUpStatus,
								})}>
								{t.privacyPolicy}
							</Link>
							<Link
								href='/'
								className={classNames('link-light text-decoration-none', 'dark:text-gray-200', 'text-sm', {
									'link-light': singUpStatus,
									'link-dark': !singUpStatus,
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
	isSignUp: PropTypes.bool,
};
LoginTab.defaultProps = {
	isSignUp: false,
};