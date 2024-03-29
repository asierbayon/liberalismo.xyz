import Link from "next/link"
import { IProject } from "@/types"
import { FaArrowRightLong } from "react-icons/fa6"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Badge } from "../ui/badge"
import { ColoredBadge } from "../ui/colored-badge"

interface ProjectCardProps {
  project: IProject
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card key={project.name} className="md:basis-[calc(50%-0.5rem)]">
      <div className="flex h-full flex-col justify-between">
        <CardHeader>
          <div className="flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-semibold">
              {project.name}
            </CardTitle>
            <Badge variant="secondary">{project.category}</Badge>
          </div>
          {project.creatorUrl && (
            <p className="text-sm">
              por{" "}
              <a
                href={project.creatorUrl}
                target="_blank"
                className="hover:underline"
              >
                @{new URL(project.creatorUrl).pathname.split("/")[1]}
              </a>
            </p>
          )}
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">{project.description}</p>
        </CardContent>
        <CardFooter>
          {project.url && (
            <Link
              href={project.url}
              target="_blank"
              className="flex items-center space-x-2 text-sm hover:underline"
            >
              {project.urlText}&nbsp;
              <FaArrowRightLong />
            </Link>
          )}
        </CardFooter>
      </div>
    </Card>
  )
}
