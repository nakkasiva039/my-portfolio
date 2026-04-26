import Container from "../layout/Container";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import SectionTitle from "../components/SectionTitle";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-10 scroll-mt-24 bg-gray-50 dark:bg-gray-900"
    >
      <Container>
        <SectionTitle
          title="Professional Experience"
          subtitle="Projects developed as part of my work experience"
        />

        <p className="text-xs sm:text-sm text-gray-500 mb-6 sm:mb-8 max-w-2xl">
          Note: The following projects were developed as part of my professional
          experience and may not have public repositories due to company
          policies.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
