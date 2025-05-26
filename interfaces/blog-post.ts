import { JSX } from "react";

export default interface BlogPost {
    slug: string;
    title: string;
    date: string;
    content: JSX.Element;
    excerpt: string;
}