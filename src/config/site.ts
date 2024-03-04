import { SiteConfig } from "@/types"

import { env } from "@/env.mjs"

export const siteConfig: SiteConfig = {
  name: "liberalismo.xyz",
  author: "asierbayon",
  description:
    "Iniciativas por la libertad, el capitalismo y la fiscalización del Estado.",
  url: env.NEXT_PUBLIC_APP_URL,
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.jpg`,
  contribution: [
    {
      url: "https://forms.gle/gxMJpDPYGN14ZuX9A",
      text: "Añadir un proyecto",
    },
    {
      url: "https://github.com/asierbayon/liberalismo.xyz",
      text: "Abrir una merge-request",
    },
    {
      url: "https://etherscan.io/address/0xb79786b11fA27DF856Ba58fB9f8f2cfa2F790522",
      text: "Ayudar a mantener el proyecto",
    },
  ],
  links: {
    github: "https://github.com/asierbayon/liberalismo.xyz",
    twitter: "https://twitter.com/asier_bayon",
    email: "mailto:bayonasier@gmail.com",
  },
}
