import { ReactNode } from "react"

export type LayoutProps = {
  children: ReactNode
}

export type CardProps = {
  page: {
    slug: string;
    name: string;
    author: string;
    cover: string;
    published: string;
    tags: string[];
    content: string;
  }
}
