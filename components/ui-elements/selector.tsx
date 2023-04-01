// import { listOfLanguages } from "../../public/locales/languages"
// import { useRouter } from "next/router"
// import { useContext } from "react"
// import LanguageContext from "@/context/LanguageContext"

// type selectorType = {
//     option: String;
//     value: String;
// }

// type textsType = {
//     texts: Object;
//     handleLanguage: Function;
// }

// export const LanguageSelector = () => {
//     const router = useRouter();
//     const {texts, handleLanguage}: textsType = useContext(LanguageContext)

//     const optionsGenerator = listOfLanguages.map( (element:selectorType) => 
//         <option key={`${element.option}-${element.value}`} value={element.value}>
//             {element.option}
//         </option>
//     )

//     // const handleLanguage = (e : any) => {
//     //     router.push(router.pathname, router.pathname, {
//     //         locale: e.target.value,
//     //     });
//     // };

//   return (
//     <>
//         <select className="btn bg-white text-black dark:bg-dark dark:text-white flex w-fit text-sm font-normal border-none" 
//             name="LanguageSelector"
//             onChange={handleLanguage}
//         >
//             {/* this value comes from LanguageContext */}
//             {texts.home} 

//             {optionsGenerator}

//         </select>
//     </>
//   )
// }
