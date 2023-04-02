import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import { ActiveLink } from "@/components";
import { LanguageSelector } from "@/components/ui-elements"
import { useLanguageContext } from "@/middleware";

export function Navbar() {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    const t = useLanguageContext()[1];

    const navMenuItems = [
        {   text: t.home,
            href: "/"},
        {   text: t.login,
            href: "/login"},
        {   text: t.building,
            href: "/building-viewer"},
        {   text: t.map,
            href: "/map"},
        {   text: t.about,
            href: "/about"}
    ]

    const navMenuGenerator = navMenuItems.map(({text, href}) => 
    <div key={`${ text }-${ href }`}>
        <h1 className="mr-8">
            <ActiveLink key={`${ text }-${ href }`} text={ text } href={ href } />
        </h1>
    </div>
    )
      
    useEffect(() => {
        setMounted(true);
    }, [])

    const renderThemeChanger = () => {
        if(!mounted) return null;
        
        const currentTheme = theme === "system"? systemTheme : theme;

        if(currentTheme === "dark") {

            return (
                <>
                    <button className="btn bg-[#ffb703] text-white flex w-fit text-sm font-normal"
                        onClick={() => setTheme("light")}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 mr-2">
                            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                        </svg>{t.lightMode}
                    </button>
                </>
            )
        } else {
            return (
                <>
                    <button className="btn bg-[#023047] text-white flex w-fit text-sm font-normal"
                        onClick={() => setTheme("dark")}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                        </svg>{t.darkMode}
                    </button>
                </>
            )
        }
    }

    return (
        <div className="navbar h-10">
            <nav className="flex flex-row justify-around bg-primary-middle text-white dark:bg-lightyellow dark:text-primary-dark h-10 items-center">
                <div className="nav-titles flex">
                    {navMenuGenerator}
                </div>
                <div>
                    <LanguageSelector />
                </div>
                <div className="flex">
                    {renderThemeChanger()}
                </div>
            </nav>
        </div>
    );
};