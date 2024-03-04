import { HeadingText } from "@/components/common/heading-text"
import { SocialMediaIcons } from "@/components/common/social-media-icons"
import { ProjectCard } from "@/components/projects/project-card"

import { projects } from "./projects"

export default async function Home() {
  return (
    <main className="py-4">
      <section className="space-y-4 py-4">
        <p className="font-light">
          Iniciativas por la <span className="font-semibold">libertad</span>, el{" "}
          <span className="font-semibold">capitalismo</span>, y la{" "}
          <span className="font-semibold">fiscalización del Estado</span>.
        </p>
        <SocialMediaIcons />
      </section>
      <section className="space-y-4 py-4">
        <HeadingText>Projectos</HeadingText>
        <div className="flex flex-col items-end gap-4">
          <div className="grid w-full grid-cols-1 gap-y-4">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
