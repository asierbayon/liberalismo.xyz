import { siteConfig } from "@/config/site"

import { Button } from "./button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu"

export const ContributionDropdown: React.FC = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <span>Contribuye</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {siteConfig.contribution.map((item) => (
          <DropdownMenuItem key={item.text}>
            <a target="_blank" href={item.url}>
              {item.text}
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
