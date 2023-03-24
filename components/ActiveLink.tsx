import Link from "next/link"
import { useRouter } from "next/router";

type AnchorType = {
    text: string;
    href: string;
}

export const ActiveLink = ({text, href} : AnchorType) => {

    const { asPath } = useRouter();

    if (asPath === href) {
        return(<Link className="font-bold text-primary-dark dark:text-white" href={ href }>{ text }</Link>)
    } else {
        return(<Link href={ href }>{ text }</Link>)
    }

}