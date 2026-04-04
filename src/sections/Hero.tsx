import Container from "../layout/Container";
import { TypeAnimation } from "react-type-animation";
import profile from "../assets/siva-profile.webp";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useInView } from "../hooks/useInView";

const Hero = () => {
  const { ref, isVisible } = useInView();
  return (
    <section id="home" ref={ref} className="py-24 scroll-mt-24">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div
            className={`max-w-xl transition-fade ${isVisible ? "animate-slide-left" : "opacity-0"}`}
          >
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
              Frontend Developer
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
              Hi, I'm <span className="text-blue-500">Siva Nakka</span>
            </h1>

            <p className="text-xl mt-4 text-gray-600 dark:text-gray-300">
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

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-3 mt-6">
              <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-1 rounded text-sm">
                React
              </span>

              <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-1 rounded text-sm">
                Redux
              </span>

              <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-1 rounded text-sm">
                JavaScript
              </span>

              <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-1 rounded text-sm">
                TypeScript
              </span>

              <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-1 rounded text-sm">
                Tailwind
              </span>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-8">
              <a
                href="#projects"
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                View Projects
              </a>

              <a
                href="Resume.pdf"
                download
                className="px-6 py-3 border rounded-lg hover:bg-gray-100"
              >
                Download Resume
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6 text-xl">
              <a
                href="https://github.com/yourusername"
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
          <div className={`${isVisible ? "animate-slide-right" : "opacity-0"}`}>
            <img
              src={profile}
              alt="Siva Nakka profile"
              width="256"
              height="256"
              fetchPriority="high"
              className="w-64 h-64 object-cover rounded-full shadow-lg"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
