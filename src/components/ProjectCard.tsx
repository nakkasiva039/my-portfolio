import { useState } from "react";
import ProjectModal from "./ProjectModal";
import { Project } from "../types/project";

const ProjectCard = (props: Project) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="
               border border-gray-200 dark:border-gray-700
               bg-white dark:bg-gray-800
               rounded-xl
               p-6
               shadow-md
               transition-all duration-300
               hover:-translate-y-2
               hover:shadow-xl
               hover:scale-[1.02]
               cursor-pointer
      "
      >
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
        {props.title}
      </h3>

         <p className="text-gray-600 dark:text-gray-300 mb-4">{props.description}</p>

        <div className="flex flex-wrap gap-2 mb-3">
          {props.tech.map((item) => (
            <span
              key={item}
              className="text-sm bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded"
            >
              {item}
            </span>
          ))}
        </div>

        {/* View More Button */}
        {props.details && (
          <div className="flex justify-end">
            <button
              onClick={() => setOpen(true)}
              className="text-blue-500 text-sm font-medium"
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
