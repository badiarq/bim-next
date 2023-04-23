import { FC, useEffect } from "react";

import { useLanguageContext } from "@/middleware";

export const TestElement: FC = () => {
  const t = useLanguageContext()[1];

  let subMenu:HTMLElement | null = null;
  let arrowButton:HTMLElement | null = null;
  let sideBar:HTMLElement | null = null;
  let sideBarTab:HTMLElement | null = null;
  let sideMenuText:HTMLElement | null = null;
  let nbMenuButtons:number = 0;
  let menuTitle:HTMLElement | null = null;
  
  useEffect(() => {
    subMenu = document.querySelector("#submenu")
    arrowButton = document.querySelector("#arrow")
    sideBar = document.querySelector(".sidebar")
    sideBarTab = document.querySelector(".sideBarTab")
    // sideMenuText = document.querySelector(".sidebar-menu-text")
    nbMenuButtons = document.querySelectorAll(".sidebar-menu-text").length
    menuTitle = document.querySelector("#menu-title")

    dropdown();
    

  }, [openSidebar]);

  function dropdown() {
    subMenu!.classList.toggle("hidden");
    arrowButton!.classList.toggle("rotate-0");
  }

  function openSidebar() {
    setTimeout(function() {
      menuTitle!.classList.remove("hidden");
    }, (0.1*1000));

    // if(sideBarTab?.classList.contains("w-12")) {
    //   sideBarTab!.classList.remove("w-12");
    //   sideBar!.classList.remove("w-12");
    //   sideBarTab!.classList.add("w-72");
    //   sideBar!.classList.add("w-auto");
    //   // sideMenuText!.classList.toggle('hidden');
    // } else if (sideBarTab?.classList.contains("w-72")) { 
    //   sideBarTab!.classList.remove("w-72");
    //   sideBar!.classList.remove("w-auto");
    //   sideBarTab!.classList.add("w-12");
    //   sideBar!.classList.add("w-12");
    //   for (let index = 1; index < nbMenuButtons; index++) {
    //     console.log(index)
    //     sideMenuText = document.querySelector(`.sidebar-menu-text:nth-of-type(${index})`)
    //     console.log(sideMenuText)
    //     sideMenuText!.classList.toggle('hidden');
    //   }
    // }
  }

  function closeSidebar() {

    setTimeout(function() {
      menuTitle!.classList.add("hidden");
    }, (0.3*1000));
  }
  
  return (
      <div
      onMouseEnter={openSidebar}
      onMouseLeave={closeSidebar}
      >
      
        <div className="sideBarTab w-12 hover:w-72 absolute"
        > 

          <div
            className="sidebar"
          >

            <div className="sidebar-menu-section flex flex-row">
              <div className="text-gray-100 text-xl flex flex-row  w-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="white" className="w-10 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" 
                  />
                </svg>
                <h1 id="menu-title" className="hidden text-gray-200 h-6 text-base font-bold">Menu</h1>
              </div>
            </div>

            <div className="my-2 bg-gray-500 h-[1px]"></div>

            <div
              className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-primary-middle text-white"
            >
              <i className="bi bi-search text-sm"></i>
              <input
                type="text"
                placeholder="Search"
                className="text-[15px] ml-4 w-full bg-transparent focus:outline-none placeholder:text-primary-light"
              />
            </div>

            <div id="sidebar-menu-container" className="grid grid-cols-1 gap-2 bg-red-500">
              <div className="sidebar-menu-button grid grid-cols-2 gap-2 bg-yellow-200">
                <div className="sidebar-menu-img w-8 bg-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" 
                      onClick={openSidebar}
                    />
                  </svg>
                </div>
                <div className="sidebar-menu-text bg-green-500">Text</div>
              </div>
              <div className="sidebar-menu-button grid grid-cols-2 gap-2 bg-yellow-200">
                <div className="sidebar-menu-img w-8 bg-blue-500">Hi</div>
                <div className="sidebar-menu-text bg-green-500">Text</div>
              </div>
              <div className="sidebar-menu-button grid grid-cols-2 gap-2 bg-yellow-200">
                <div className="sidebar-menu-img w-8 bg-blue-500">bYE</div>
                <div className="sidebar-menu-text bg-green-500">Text</div>
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
      </div>
  )
};