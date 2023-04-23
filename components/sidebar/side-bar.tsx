import { FC, useEffect } from "react";

import { useLanguageContext  } from "@/middleware";
import { LogOutButtonTransparent } from "@/components/user";
import { Dictionary } from "@/interfaces";

export const SideBar: FC = () => {
  const t:Dictionary = useLanguageContext()[1];

  let subMenu:HTMLElement | null = null;
  let arrowButton:HTMLElement | null = null;
  
  useEffect(() => {
    subMenu = document.querySelector("#submenu")
    arrowButton = document.querySelector("#arrow")

  }, [openSidebar, closeSidebar]);

  function dropdown() {
    if(subMenu!.style.display == 'none') {
      subMenu!.style.display = "block";
      arrowButton!.style.transform = "rotate(180deg)";
      console.log(arrowButton!.style.transform)
    } else {
      subMenu!.style.display = "none";
      arrowButton!.style.transform = "rotate(0deg)";
      console.log(arrowButton!.style.transform)
    } 
  }

  function openSidebar() {
    setTimeout(function() { showMenuTexts() }, (0.3*1000));
  }

  function closeSidebar() {
    subMenu!.style.display = "none";
    arrowButton!.style.transform = "rotate(0deg)";
    setTimeout(function() { hideMenuTexts() }, (0.5*1000));
  }

  function showMenuTexts(){
    const allTexts = Array.from(document.getElementsByClassName('sidebar-menu-text') as HTMLCollectionOf<HTMLElement>);
    for (const menuText of allTexts) {
      if(menuText.style.display == 'none') {
        menuText.style.display = 'block';
      }
    }
  };

  function hideMenuTexts(){
    const allTexts = Array.from(document.getElementsByClassName('sidebar-menu-text') as HTMLCollectionOf<HTMLElement>);
    for (const menuText of allTexts) {
      if(menuText.style.display == 'block') {
        menuText.style.display = 'none';
      }
    }
  };

  return (
      <>
        <div className="sideBarTab w-12 absolute"
              onMouseEnter={openSidebar}
              onMouseLeave={closeSidebar}
        > 

          <div
            className="sidebar"
          >

            <div className="sidebar-menu-section flex flex-row my-3">
              <div className="text-gray-100 text-xl flex flex-row  w-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="white" className="w-10 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" 
                  />
                </svg>
                <h1 id="menu-title" className="sidebar-menu-text font-bold hidden justify-self-start text-gray-200 h-6 text-base">Menu</h1>
              </div>
            </div>

            <div className="my-2 bg-gray-500 h-[1px]"></div>

            <div id="sidebar-menu-container" className="grid grid-cols-1 gap-3">

              <div className="grid grid-cols-6 gap-1 pr-2 h-12 w-full text-gray-100 items-center rounded-md cursor-pointer bg-primary-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-5">
                  <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
                </svg>
                <input
                  type="text"
                  placeholder={t.search}
                  className="sidebar-menu-text font-normal hidden h-8 bg-transparent focus:outline-none placeholder:text-primary-light"
                />
              </div>

              <div className="sidebar-menu-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="sidebar-menu-img">
                  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                  <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>
                <span className="sidebar-menu-text font-bold">{t.home}</span>
              </div>

              <div className="sidebar-menu-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="sidebar-menu-img">
                  <path fillRule="evenodd" d="M4.5 2.25a.75.75 0 000 1.5v16.5h-.75a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5h-.75V3.75a.75.75 0 000-1.5h-15zM9 6a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm-.75 3.75A.75.75 0 019 9h1.5a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM9 12a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm3.75-5.25A.75.75 0 0113.5 6H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM13.5 9a.75.75 0 000 1.5H15A.75.75 0 0015 9h-1.5zm-.75 3.75a.75.75 0 01.75-.75H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM9 19.5v-2.25a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75h-4.5A.75.75 0 019 19.5z" clipRule="evenodd" />
                </svg>
                <span className="sidebar-menu-text font-bold">{t.building}</span>
              </div>

            </div>

            <div className="my-2 bg-gray-500 h-[1px]"></div>

            <div className="sidebar-menu-button" onClick={dropdown}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="sidebar-menu-img">
                <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
              </svg>
              <div className="sidebar-menu-text">
                <div className="grid grid-cols-5">
                  <span className="font-bold col-span-4 self-center justify-self-start select-none">{t.BIMPlatform}</span>
                  <svg id="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="sidebar-menu-img rotate-0">
                    <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div
              className="hidden text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold"
              id="submenu"
            >
              <h1 className="cursor-pointer select-none p-2 hover:bg-primary-middle rounded-md mt-1">
                SubFolder 1
              </h1>
              <h1 className="cursor-pointer select-none p-2 hover:bg-primary-middle rounded-md mt-1">
                SubFolder 2
              </h1>
              <h1 className="cursor-pointer select-none p-2 hover:bg-primary-middle rounded-md mt-1">
                SubFolder 3
              </h1>
            </div>

            <div className="my-2 bg-gray-500 h-[1px]"></div>

            <div
              className="sidebar-menu-button bg-secondary-middle hover:bg-secondary-middle hover:-translate-y-1 ease-in transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={'fill-primary-dark'} className="sidebar-menu-img">
                <path fillRule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z" clipRule="evenodd" />
              </svg>
              <div className="hidden sidebar-menu-text">
                <LogOutButtonTransparent classNames="text-primary-dark" />
              </div>
            </div>

          </div>
        </div>
      </>
  )
};