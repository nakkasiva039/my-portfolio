import SectionTitle from "../components/SectionTitle";
import Container from "../layout/Container";

const About = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-24 scroll-mt-24 bg-white dark:bg-gray-900"
    >
      <Container>
        <SectionTitle title="About Me" subtitle="Get to know more about me" />

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl">
          I am a Frontend Developer with 4 years of experience building scalable
          and user-friendly web applications. I specialize in{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            React, Redux, and TypeScript
          </span>{" "}
          along with modern frontend development practices.
        </p>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-6 max-w-3xl">
          I have contributed to production-grade applications including loan
          management systems, document management platforms, and enterprise
          dashboards, improving performance, usability, and maintainability.
        </p>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-6 max-w-3xl">
          I focus on writing clean, reusable code and delivering
          high-performance user experiences that align with business goals. I am
          passionate about building performant and scalable frontend
          architectures while continuously improving user experience.
        </p>

        {/* Optional Stats Section (Premium Look) */}
        <div className="flex gap-8 mt-10">
          <div>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              4
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Years Experience
            </p>
          </div>

          <div>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              7+
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Projects Delivered
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
