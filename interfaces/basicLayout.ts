import { ReactNode } from "react";

export interface BasicLayoutType {
    title?: string;
    description: string;
    keywords: string;
    children: ReactNode;
}