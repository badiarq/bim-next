import { FC } from 'react';
import { useRouter } from "next/router";
import Link from "next/link";
import { anchorType } from '@/interfaces';

export const ActiveLink: FC<anchorType> = ({text, href}) => {

    const { asPath } = useRouter();

    if (asPath === href) {
        return(<Link className="text-primary-dark dark:text-secondary-dark shadow-white drop-shadow-sm font-bold" href={ href }>{ text }</Link>)
    } else {
        return(<Link href={ href }>{ text }</Link>)
    }

}