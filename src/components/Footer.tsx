const Footer = () => {
  return (
    <footer className="py-6 sm:py-8 border-t mt-6 sm:mt-8">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-center md:text-left">
        
        <p className="text-xs sm:text-sm text-gray-500">
          © {new Date().getFullYear()} Siva Nakka. All rights reserved.
        </p>

        <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
          
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