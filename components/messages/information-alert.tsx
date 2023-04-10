import { ReactNode, FC } from 'react';

interface infoAlert {
  children: ReactNode;
  textColor: string;
  backgroundColor: string;
}

export const InformationAlert: FC<infoAlert> = ({children, textColor, backgroundColor}) => {

    return (
      <div className="login-data-instructions my-3">
        <div className={`instructions-container ${textColor} border-gray-300 dark:border-gray-600 ${backgroundColor}`}>
          <div className="left-icon">
              <svg className="left-icon" viewBox="0 0 24 24" fill="currentColor"
                  data-name="Material--Lock">
                  <g fill="none">
                      <path d="M0 0h24v24H0V0z"></path>
                      <path d="M0 0h24v24H0V0z" opacity="0.87"></path>
                  </g>
                  <path d="M6 20h12V10H6v10zm6-7c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" opacity="0.3"></path>
                  <path
                      d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z">
                  </path>
              </svg> 
          </div>
          <div>
            {children}
          </div>
          <button className="btn-close" type="button" aria-label="Close"></button>
        </div>
      </div>
    )
  };
  