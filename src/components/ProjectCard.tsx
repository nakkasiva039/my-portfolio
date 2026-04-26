import { useState } from "react";
import ProjectModal from "./ProjectModal";
import { Project } from "../types/project";

const ProjectCard = (props: Project) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="
        h-full
        flex flex-col justify-between
        border border-gray-200 dark:border-gray-700
        bg-white dark:bg-gray-800
        rounded-xl
        p-4 sm:p-5 md:p-6
        shadow-md
        transition-all duration-300
        hover:-translate-y-2
        hover:shadow-xl
        hover:scale-[1.02]
        cursor-pointer
      "
      >
        {/* Top Content */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-1 text-gray-900 dark:text-white">
            {props.title}
          </h3>

          <span className="inline-block mt-1 mb-2 text-[10px] sm:text-xs px-2 py-1 rounded bg-green-100 text-green-700 font-medium">
            Work Project
          </span>

          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
            {props.description}
          </p>

          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3">
            {props.tech.map((item) => (
              <span
                key={item}
                className="text-[10px] sm:text-xs bg-gray-100 dark:bg-gray-700 px-2 sm:px-3 py-1 rounded"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Button */}
        {props.details && (
          <div className="flex justify-end mt-4">
            <button
              onClick={() => setOpen(true)}
              className="text-blue-500 text-xs sm:text-sm font-medium"
            >
              View More
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      <ProjectModal
        open={open}
        onClose={() => setOpen(false)}
        project={props}
      />
    </>
  );
};

export default ProjectCard;
