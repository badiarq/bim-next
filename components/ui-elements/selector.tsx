import { listOfLanguages } from "../../public/locales/languages"
import { useRouter } from "next/router"

type selectorType = {
    option: string;
    value: string;
}

export const LanguageSelector = () => {

    const router = useRouter();

    const optionsGenerator = listOfLanguages.map( (element:selectorType) => 
        <option key={`${element.option}-${element.value}`} value={element.value}>
            {element.option}
        </option>
    )

    const changeLanguage = (e : any) => {
        router.push(router.pathname, router.pathname, {
            locale: e.target.value,
        });
    };

  return (
    <>
        <select className="btn bg-white text-black dark:bg-dark dark:text-white flex w-fit text-sm font-normal border-none" 
            name="LanguageSelector"
            onChange={changeLanguage}
        >

            {optionsGenerator}

        </select>
    </>
  )
}
