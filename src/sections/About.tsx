import SectionTitle from "../components/SectionTitle";
import Container from "../layout/Container";

const About = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-4 scroll-mt-24 bg-white dark:bg-gray-900"
    >
      <Container>
        <SectionTitle title="About Me" subtitle="Get to know more about me" />

        {/* Content */}
        <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl">
            I am a Frontend Developer with 4 years of experience building scalable
            and user-friendly web applications. I specialize in{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              React, Redux, and TypeScript
            </span>{" "}
            along with modern frontend development practices.
          </p>

          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl">
            I have contributed to production-grade applications including loan
            management systems, document management platforms, and enterprise
            dashboards, improving performance, usability, and maintainability.
          </p>

          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl">
            I focus on writing clean, reusable code and delivering
            high-performance user experiences that align with business goals. I am
            passionate about building performant and scalable frontend
            architectures while continuously improving user experience.
          </p>
        </div>

        {/* Optional Stats Section (Premium Look) */}
        <div className="flex gap-8 mt-10">
          <div className="text-center">
            <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              4
            </p>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              Years Experience
            </p>
          </div>

          <div className="text-center">
            <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              6+
            </p>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              Projects Delivered
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
