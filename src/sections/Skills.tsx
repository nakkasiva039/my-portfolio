import SectionTitle from "../components/SectionTitle";
import { useInView } from "../hooks/useInView";
import Container from "../layout/Container";

const skills = [
  "React",
  "Hooks",
  "Redux",
  "Context API",
  "JavaScript",
  "TypeScript",
  "Next.Js",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Code Splitting",
  "Performance Optimization",
  // "Testing (Jest, React Testing Library)",
  // "Webpack",
  // "ESLint",
  // "Prettier",
  "Visual Studio Code",
  "Git",
];

const Skills = () => {
  const { ref, isVisible } = useInView();
  return (
  <section id="skills" ref={ref} className="py-12 scroll-mt-24">
      <Container>
        <SectionTitle title="Skills" subtitle="Technologies I work with" />
        <div
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ${
            isVisible ? "animate-zoom-in" : "opacity-0"
          }`}
        >
          {skills.map((skill) => (
            <div
              key={skill}
              className="border border-gray-200 dark:border-gray-700 
                 bg-white dark:bg-gray-800 
                 rounded-lg p-6 text-center shadow-sm 
                 hover:shadow-md hover:scale-105 
                 transition duration-300"
            >
              {skill}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Skills;
