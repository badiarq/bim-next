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
  
  useEffect(() => {
    subMenu = document.querySelector("#submenu")
    arrowButton = document.querySelector("#arrow")
    sideBar = document.querySelector(".sidebar")
    sideBarTab = document.querySelector(".sideBarTab")
    // sideMenuText = document.querySelector(".sidebar-menu-text")
    nbMenuButtons = document.querySelectorAll(".sidebar-menu-text").length

    dropdown();
    

  }, [openSidebar]);

  function dropdown() {
    subMenu!.classList.toggle("hidden");
    arrowButton!.classList.toggle("rotate-0");
  }

  function openSidebar() {
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
  
  return (
      <>
        <div className="sideBarTab w-12 hover:w-72 absolute"> 
          
          <div className="p-2.5 mt-1 flex items-center">
            <i className="bi bi-app-indicator px-2 py-1 rounded-md bg-primary-middle"
                onClick={openSidebar}
              ></i>
            <i
              className="bi bi-x cursor-pointer ml-28 lg:hidden"
              onClick={openSidebar}
            ></i>
          </div>

          <div
            className="sidebar"
          >
            <div className="text-gray-100 text-xl">
              <div className="p-2.5 mt-1 flex items-center">
                <i className="bi bi-app-indicator px-2 py-1 rounded-md bg-primary-middle"
                   onClick={openSidebar}
                  ></i>
                <h1 className="font-bold text-gray-200 text-[16px] ml-3">Menu</h1>
                <i
                  className="bi bi-x cursor-pointer ml-28 lg:hidden"
                  onClick={openSidebar}
                ></i>
              </div>
              <div className="my-2 bg-gray-600 h-[1px]"></div>
            </div>

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
                <div className="sidebar-menu-img w-8 bg-blue-500">Hello</div>
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
            <div className="my-4 bg-gray-600 h-[1px]"></div>
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