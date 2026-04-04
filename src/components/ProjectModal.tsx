import { Project } from "../types/project";

interface Props {
  open: boolean;
  onClose: () => void;
  project: Project;
}

const ProjectModal = ({ open, onClose, project }: Props) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      {/* Modal Box */}
      <div className="bg-white dark:bg-gray-900 rounded-xl p-6 w-[90%] max-w-2xl relative">

        {/* ❌ Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-xl font-bold"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-3">
          {project.title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>

        {/* Details */}
        {project.details && (
          <ul className="mb-4 space-y-1">
            {project.details.map((point: string, i: number) => (
              <li key={i} className="text-sm">
                • {point}
              </li>
            ))}
          </ul>
        )}

        {/* Module */}
        {project.module && (
          <div className="mb-4">
            <h4 className="font-semibold mb-1">
              {project.module.title}
            </h4>

            {project.module.points.map((point: string, i: number) => (
              <p key={i} className="text-sm">
                • {point}
              </p>
            ))}
          </div>
        )}

        {/* Tech */}
        <div className="flex flex-wrap gap-2 mt-3">
          {project.tech.map((item: string) => (
            <span
              key={item}
              className="text-sm bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;