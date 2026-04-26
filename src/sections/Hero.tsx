import Container from "../layout/Container";
import { TypeAnimation } from "react-type-animation";
import profile from "../assets/siva-profile.webp";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useInView } from "../hooks/useInView";

const Hero = () => {
  const { ref, isVisible } = useInView();
  return (
    <section
      id="home"
      ref={ref}
      className="py-10 sm:py-20 md:py-24 scroll-mt-24"
    >
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12">
          
          {/* Left Content */}
          <div
            className={`max-w-xl text-center md:text-left transition-fade ${
              isVisible ? "animate-slide-left" : "opacity-0"
            }`}
          >
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-2 sm:mb-3">
              Frontend Developer
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
              Hi, I'm <span className="text-blue-500">Siva Nakka</span>
            </h1>

            <p className="text-lg sm:text-xl mt-3 sm:mt-4 text-gray-600 dark:text-gray-300">
              <TypeAnimation
                sequence={[
                  "Frontend Engineer",
                  2000,
                  "React Developer",
                  2000,
                  "UI Engineer",
                  2000,
                ]}
                speed={70}
                cursor={true}
                repeat={Infinity}
              />
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3 mt-5 sm:mt-6">
              {["React", "Redux", "JavaScript", "TypeScript", "Tailwind"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-2 sm:px-3 py-1 rounded text-xs sm:text-sm"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 sm:gap-4 mt-6 sm:mt-8">
              <a
                href="#projects"
                className="px-5 sm:px-6 py-2.5 sm:py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm sm:text-base"
              >
                View Projects
              </a>

              <a
                href="Resume.pdf"
                download
                className="px-5 sm:px-6 py-2.5 sm:py-3 border rounded-lg hover:bg-gray-100 text-sm sm:text-base"
              >
                Download Resume
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-4 mt-5 sm:mt-6 text-lg sm:text-xl">
              <a
                href="https://github.com/nakkasiva039"
                target="_blank"
                className="hover:text-blue-500"
                aria-label="GitHub Profile"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/siva-nakka-44a57328a"
                target="_blank"
                className="hover:text-blue-500"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div
            className={`flex justify-center ${
              isVisible ? "animate-slide-right" : "opacity-0"
            }`}
          >
            <img
              src={profile}
              alt="Siva Nakka profile"
              fetchPriority="high"
              className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 object-cover rounded-full shadow-lg"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
