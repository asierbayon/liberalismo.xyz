// *Config*
export type SiteConfig = {
  name: string
  author: string
  description: string
  url: string
  ogImage: string
  contribution: { url: string; text: string }[]
  links: {
    github: string
    twitter: string
    email: string
  }
}

// Project
export interface IProject {
  name: string
  description: string
  url?: string
  urlText?: string
  punchline?: string
  creatorUrl?: string
  category: string
}
