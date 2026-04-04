interface Props {
  title: string;
  subtitle?: string;
}

const SectionTitle = ({ title, subtitle }: Props) => {
  return (
    <div className="mb-8">

      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
        {title}
      </h2>

      {subtitle && (
       <p className="text-gray-500 dark:text-gray-400 mt-2">
          {subtitle}
        </p>
      )}

    </div>
  );
};

export default SectionTitle;