import { FC, useEffect } from "react";

import { useLanguageContext } from "@/middleware";

export const TestElement: FC = () => {
  const t = useLanguageContext()[1];

  let subMenu:HTMLElement | null = null;
  let arrowButton:HTMLElement | null = null;
  let menuTitle:HTMLElement | null = null;
  
  useEffect(() => {
    subMenu = document.querySelector("#submenu")
    arrowButton = document.querySelector("#arrow")
    // menuTitle = document.querySelector("#menu-title")

    dropdown();

  }, [openSidebar]);

  function dropdown() {
    subMenu!.classList.toggle("hidden");
    arrowButton!.classList.toggle("rotate-0");
  }

  function openSidebar() {
    setTimeout(function() {
      showMenuTexts()
    }, (0.3*1000));

  }

  function closeSidebar() {

    setTimeout(function() {
      hideMenuTexts()
    }, (0.5*1000));


  }

  function hideMenuTexts(){
    const allTexts = Array.from(document.getElementsByClassName('sidebar-menu-text') as HTMLCollectionOf<HTMLElement>);
    for (const menuText of allTexts) {
      // menuText.style.display = 'none';
      menuText.classList.add('hidden');
    }
  };

  function showMenuTexts(){
    const allTexts = Array.from(document.getElementsByClassName('sidebar-menu-text') as HTMLCollectionOf<HTMLElement>);
    for (const menuText of allTexts) {
      // menuText.style.display = 'block';
      menuText.classList.remove('hidden');
    }
  };
  
  return (
      <>
        <div className="sideBarTab w-12 hover:w-72 absolute"
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
                <h1 id="menu-title" className="sidebar-menu-text hidden text-gray-200 h-6 text-base font-bold">Menu</h1>
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
                  placeholder="Search"
                  className="sidebar-menu-text hidden col-span-5 h-8 text-[14px] bg-transparent focus:outline-none placeholder:text-primary-light"
                />
              </div>

              <div className="sidebar-menu-button grid grid-cols-6 gap-1 bg-yellow-200">
                <div className="sidebar-menu-img w-10 bg-blue-500">Hi</div>
                <div className="sidebar-menu-text hidden col-span-5 bg-green-500">Text</div>
              </div>
              <div className="sidebar-menu-button grid grid-cols-6 gap-1 bg-yellow-200">
                <div className="sidebar-menu-img w-10 bg-blue-500">bYE</div>
                <div className="sidebar-menu-text hidden col-span-5 bg-green-500">Text</div>
              </div>
            </div>


            <div
              className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-primary-middle text-secondary-dark"
            >
              <i className="bi bi-house-door-fill"></i>
              <span className="text-[15px] ml-4 text-gray-200 font-bold">Home</span>
            </div>
            <div
              className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-primary-middle text-secondary-dark"
            >
              <i className="bi bi-bookmark-fill"></i>
              <span className="text-[15px] ml-4 text-gray-200 font-bold">Bookmark</span>
            </div>
            <div className="my-4 bg-gray-500 h-[1px]"></div>
            <div
              className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-primary-middle text-secondary-dark"
              onClick={dropdown}
            >
              <i className="bi bi-chat-left-text-fill"></i>
              <div className="flex justify-between w-full items-center">
                <span className="text-[15px] ml-4 text-gray-200 font-bold">Chatbox</span>
                <span className="text-sm rotate-180" id="arrow">
                  <i className="bi bi-chevron-down"></i>
                </span>
              </div>
            </div>
            <div
              className="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold"
              id="submenu"
            >
              <h1 className="cursor-pointer p-2 hover:bg-primary-middle rounded-md mt-1">
                Social
              </h1>
              <h1 className="cursor-pointer p-2 hover:bg-primary-middle rounded-md mt-1">
                Personal
              </h1>
              <h1 className="cursor-pointer p-2 hover:bg-primary-middle rounded-md mt-1">
                Friends
              </h1>
            </div>
            <div
              className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-primary-middle text-secondary-dark"
            >
              <i className="bi bi-box-arrow-in-right"></i>
              <span className="text-[15px] ml-4 text-gray-200 font-bold">Logout</span>
            </div>
          </div>
        </div>
      </>
  )
};