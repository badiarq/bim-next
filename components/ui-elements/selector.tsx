import { ChangeEventHandler } from "react"
import { useRouter } from "next/router"

import { listOfLanguages } from "../../public/locales/languages"

type selectorType = {
    option: string;
    value: string;
    id: string;
}

type textsType = {
    texts: object;
    handleLanguage: ChangeEventHandler<HTMLSelectElement>;
}

export const LanguageSelector = () => {
    const router = useRouter();

    const optionsGenerator = listOfLanguages.map( (element:selectorType) => 
        <option id={`${element.id}`} key={`${element.option}-${element.value}`} value={element.value}>
            {element.option}
        </option>
    )

    const handleLanguage = (e : any) => {
        const selectedValue = e.target.value;

        router.push(router.pathname, router.pathname, {
            locale: selectedValue,
        });

        const options = e.target.options;
        for (let i = 0; i < options.length; i++) {
          const option = options[i];
          if (option.value === selectedValue) {
            option.selected = true;
          } else {
            option.selected = false;
          }
        }
    };

  return (
    <>
        <select className="btn bg-white text-black dark:bg-dark dark:text-white flex w-fit text-sm font-normal border-none" 
            name="LanguageSelector"
            onChange={handleLanguage}
        >
            <option id="language-selector-title">Language</option>
            {optionsGenerator}
        </select>
    </>
  )
}