import { Plus } from "lucide-react";
import { Button } from "../components/ui/button";
import { ProjectCard } from "../components/projects/ProjectCard";
import { mockProjects } from "../data/mockProjects";

/**
 * Projects list screen showing all user projects.
 * Entry point to the project workspace environment.
 */
export function ProjectsListScreen() {
  const handleNewProject = () => {
    console.log("Create new project");
    // In a real app, this would open a dialog or navigate to a creation flow
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1>My Projects</h1>
        <Button onClick={handleNewProject} className="gap-2">
          <Plus className="h-4 w-4" />
          New Project
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
