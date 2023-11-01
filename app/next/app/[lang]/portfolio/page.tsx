import flow from "@/lib/flow";
import { TProject } from "@/types/Project";
import Project from "@/app/_components/Project";

export default async function projects() {
  const projects: TProject[] = await flow("/projects");

  return (
    <div>
      {projects.map((project, i) => {
        project["i"] = i;
        return <Project {...project} key={i} />;
      })}
    </div>
  );
}
