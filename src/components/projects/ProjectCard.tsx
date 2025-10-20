import { Link } from "react-router-dom";
import { Project } from "../../types/project";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Calendar } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

/**
 * Project card component for the projects list.
 * Clickable card that navigates to the project detail view.
 */
export function ProjectCard({ project }: ProjectCardProps) {
  const formattedDate = new Date(project.lastUpdated).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Link to={`/projects/${project.id}`} className="block">
      <Card className="hover:shadow-lg transition-shadow cursor-pointer">
        <CardHeader>
          <CardTitle>{project.name}</CardTitle>
          <CardDescription>{project.clientName}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>Last updated {formattedDate}</span>
          </div>
          <div className="mt-3">
            <span className="text-muted-foreground">
              {project.products.length} {project.products.length === 1 ? "item" : "items"}
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
