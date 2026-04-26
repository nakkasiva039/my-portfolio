import Container from "../layout/Container";
import SectionTitle from "../components/SectionTitle";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;
    setLoading(true);

    try {
      await emailjs.sendForm(
        "service_wyeqh94",
        "template_k7b5s2q",
        form.current,
        "Y9Q1iKuFIU90F7NiK",
      );

      toast.success("Message sent successfully!");
      form.current.reset();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    }

    setLoading(false);
  };
  return (
    <section id="contact" className="py-8 scroll-mt-24">
      <Container>
        <SectionTitle
          title="Contact"
          subtitle="Let's connect and work together"
        />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          
          {/* Contact Info */}
          <div>
            <p className="text-sm sm:text-base text-gray-600 mb-6">
              Feel free to reach out if you want to collaborate on a project or
              just want to connect.
            </p>

            <div className="space-y-3 sm:space-y-4">
              {/* Email */}
              <a
                href="mailto:siva4039.des@gmail.com"
                className="flex items-center gap-3 sm:gap-4 border border-gray-200 dark:border-gray-700 p-3 sm:p-4 rounded-lg hover:shadow-md hover:-translate-y-1 transition"
              >
                <FaEnvelope className="text-blue-500 text-lg sm:text-xl" />
                <div>
                  <p className="text-sm sm:text-base font-semibold">Email</p>
                  <p className="text-xs sm:text-sm text-gray-600">
                    siva4039.des@gmail.com
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/siva-nakka-44a57328a"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 sm:gap-4 border border-gray-200 dark:border-gray-700 p-3 sm:p-4 rounded-lg hover:shadow-md hover:-translate-y-1 transition"
              >
                <FaLinkedin className="text-blue-600 text-lg sm:text-xl" />
                <div>
                  <p className="text-sm sm:text-base font-semibold">LinkedIn</p>
                  <p className="text-xs sm:text-sm text-gray-600">
                    linkedin.com/in/myprofile
                  </p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/nakkasiva039"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 sm:gap-4 border border-gray-200 dark:border-gray-700 p-3 sm:p-4 rounded-lg hover:shadow-md hover:-translate-y-1 transition"
              >
                <FaGithub className="text-gray-800 text-lg sm:text-xl" />
                <div>
                  <p className="text-sm sm:text-base font-semibold">GitHub</p>
                  <p className="text-xs sm:text-sm text-gray-600">
                    github.com/yourusername
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form ref={form} onSubmit={sendEmail} className="space-y-3 sm:space-y-4">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="w-full border rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="w-full border rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              className="w-full border rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto bg-blue-500 text-white px-6 py-2.5 sm:py-3 rounded-lg hover:bg-blue-600 disabled:opacity-60 text-sm sm:text-base"
            >
              {loading ? "Sending message..." : "Send Message"}
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
