export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  details?: string[];
  module?: {
    title: string;
    points: string[];
  };
}