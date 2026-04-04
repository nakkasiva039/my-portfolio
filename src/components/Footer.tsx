const Footer = () => {
  return (
    <footer className="py-8 border-t mt-16">

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">

        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Siva Nakka. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm">

          <a
            href="https://github.com/nakkasiva039"
            target="_blank"
            className="hover:text-blue-500"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/siva-nakka-44a57328a"
            target="_blank"
            className="hover:text-blue-500"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

        </div>

      </div>

    </footer>
  );
};

export default Footer;