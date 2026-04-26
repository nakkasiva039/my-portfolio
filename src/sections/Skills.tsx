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
    <section
      id="skills"
      ref={ref}
      className="py-12 sm:py-12 md:py-14 scroll-mt-24"
    >
      <Container>
        <SectionTitle title="Skills" subtitle="Technologies I work with" />

        <div
          className={`mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 ${
            isVisible ? "animate-zoom-in" : "opacity-0"
          }`}
        >
          {skills.map((skill) => (
            <div
              key={skill}
              className="border border-gray-200 dark:border-gray-700 
              bg-white dark:bg-gray-800 
              rounded-lg p-4 sm:p-5 md:p-6 
              text-center text-sm sm:text-base
              shadow-sm hover:shadow-md hover:scale-105 
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
