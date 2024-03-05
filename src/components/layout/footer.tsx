import { siteConfig } from "@/config/site"

export default function Footer() {
  return (
    <footer className="mt-auto block pb-2 pt-4 text-sm text-zinc-500 dark:text-zinc-400">
      Esta web es{" "}
      <a
        target="_blank"
        href={`${siteConfig.links.github}`}
        className="underline"
      >
        open source
      </a>
      . Haz lo que quieras con el código.
    </footer>
  )
}
