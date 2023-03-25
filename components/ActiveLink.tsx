import Link from "next/link"
import { useRouter } from "next/router";

interface anchorType  {
    text: string;
    href: string;
}

export const ActiveLink = ({text, href} : anchorType) => {

    const { asPath } = useRouter();

    if (asPath === href) {
        return(<Link className="font-bold text-primary-dark dark:text-white" href={ href }>{ text }</Link>)
    } else {
        return(<Link href={ href }>{ text }</Link>)
    }

}