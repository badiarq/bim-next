import { FC, useState, useEffect, FormEvent } from "react";

import { Grid } from "@nextui-org/react";
import PropTypes from 'prop-types';
import Head from 'next/head';
import Link from "next/link";
import classNames from "classnames";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';

import { useAppContext } from "@/middleware";
import { GoogleLogin } from "@/components/user";
import { PopupContainer } from "../popup-container"
import { InformationAlert } from "../messages/information-alert";
import { LogoLg } from "../logo/logo-lg";
import { useLanguageContext } from "@/middleware";
import { Dictionary } from "@/interfaces";

interface ILoginProps {
  isSignUpClicked?: boolean;
}

export const LoginTab:FC<ILoginProps> = ({ isSignUpClicked }) => {
  const t:Dictionary = useLanguageContext()[1];
  const [singUpClickedStatus, setSingUpClickedStatus] = useState<boolean>(!!isSignUpClicked);

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const auth = getAuth();
  const [user, setUser] = useState('');

  const handleSignup = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    ev.stopPropagation();
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      const newUser = response.user;
      await updateProfile(newUser, {displayName: name});
      setUser(user);  
    } catch  (e:any) {
      if(e.code == "auth/email-already-in-use") {
        toast.error(`${t.notifyAlreadyExists}`, { autoClose: 15000 })
      } else if (e.code == "auth/invalid-email") {
        toast.error(`${t.notifyInvalidEmail}`)
      } else if (e.code == "auth/operation-not-allowed") {
        toast.error(`${t.notifyOperationNotAllowed}`)
      } else if (e.code == "auth/weak-password") {
        toast.error(`${t.notifyWeakPassword}`)
      }
    }
  }

  const handleEmailLogin = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    ev.stopPropagation();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch  (e:any) {
      console.log(e.message);
      if(e.code == "auth/invalid-email") {
        toast.error(`${t.notifyInvalidEmail}`)
      } else if (e.code == "auth/user-disabled") {
        toast.error(`${t.notifyUserDisabled}`)
      } else if (e.code == "auth/user-not-found") {
        toast.error(`${t.notifyUserNotFound}`)
      } else if (e.code == "auth/wrong-password") {
        toast.error(`${t.notifyWrongPassword}`)
      } else if (e.code == "auth/too-many-requests") {
        toast.error(`${t.notifyTooManyRequests}`, { autoClose: 15000 })
      }
    }
  }

  useEffect(() => {
    const loginForm:HTMLElement | null = document.getElementById('login-form')
    const signupForm:HTMLElement | null = document.getElementById('signup-form')
    const loginButton:HTMLElement | null = document.getElementById('loginButtonTab')
    const signupButton:HTMLElement | null = document.getElementById('signupButtonTab')

    if(singUpClickedStatus) {
      signupForm!.style.display = 'block';
      loginForm!.style.display = 'none';
      signupButton!.classList.add("bg-primary-middle", "dark:bg-secondary-light", "dark:text-dark", "shadow-inner");
      loginButton!.classList.remove("bg-primary-middle", "dark:bg-secondary-light", "dark:text-dark", "shadow-inner");
    } else {
      signupForm!.style.display = 'none';
      loginForm!.style.display = 'block';
      signupButton!.classList.remove("bg-primary-middle", "dark:bg-secondary-light", "dark:text-dark", "shadow-inner");
      loginButton!.classList.add("bg-primary-middle", "dark:bg-secondary-light", "dark:text-dark", "shadow-inner");
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
          <form id="signup-form" onSubmit={handleSignup}>
            <Grid.Container className="flex flex-col mb-2">
              <Grid className="mb-2">
                <label htmlFor="nameInput" className="form-label text-base">{t.fullName}</label>
                <input
                  id="nameInput"
                  className="form-control text-gray-300"
                  placeholder={t.fakeName}
                  onChange={(event) => setName(event.target.value)}
                  type="text"
                  required
                />
              </Grid>
              <Grid className="mb-2">
              <label htmlFor="signupUsername" className="form-label text-base">{t.email}</label>
                <input
                  id="signupUsername"
                  className="form-control text-gray-300"
                  placeholder={t.fakeEmail}
                  onChange={(event) => setEmail(event.target.value)}
                  type="email"
                  required
                />
              </Grid>
              <Grid className="mb-2">
              <label htmlFor="signupPassword" className="form-label text-base">{t.password}</label>
                <input
                  id="lsignupPassword"
                  className="form-control text-gray-300"
                  placeholder="*******"
                  onChange={(event) => setPassword(event.target.value)}
                  type="password"
                  required
                />
              </Grid>
            </Grid.Container>
            <button
              id="signupButton" 
                type="submit" 
                className="btn primary-dark dark:primary-light dark:text-dark text-center flex flex-row justify-around items-center mt-2 ml-0 mb-6 h-10 w-full"
              >
              {t.signUp}
            </button>
          </form>

          <form id="login-form" onSubmit={handleEmailLogin}>
            <Grid.Container className="flex flex-col mb-2">
              <Grid className="mb-2">
              <label htmlFor="loginUsername" className="form-label text-base">{t.email}</label>
                <input
                  id="loginUsername"
                  className="form-control text-gray-300"
                  placeholder={t.fakeEmail}
                  onChange={(event) => setEmail(event.target.value)}
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
                  onChange={(event) => setPassword(event.target.value)}
                  type="password"
                  required
                />
              </Grid>
            </Grid.Container>
            <button
              id="emailLoginButton" 
                type="submit" 
                className="btn primary-dark dark:primary-light dark:text-dark text-center flex flex-row justify-around items-center mt-2 ml-0 mb-6 h-10 w-full"
              >
              {t.login}
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