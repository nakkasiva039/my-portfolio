import Container from "../layout/Container";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import SectionTitle from "../components/SectionTitle";

const Projects = () => {
  return (
   <section id="projects" className="py-24 scroll-mt-24 bg-gray-50 dark:bg-gray-900">
      <Container>
        <SectionTitle title="Projects" subtitle="Some of the work I've built" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
