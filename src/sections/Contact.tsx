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
    <section id="contact" className="py-24 scroll-mt-24">
      <Container>
        <SectionTitle
          title="Contact"
          subtitle="Let's connect and work together"
        />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <p className="text-gray-600 mb-6">
              Feel free to reach out if you want to collaborate on a project or
              just want to connect.
            </p>

            <div className="space-y-4">
              {/* Email */}
              <a
                href="mailto:siva4039.des@gmail.com"
                className="flex items-center gap-4 border border-gray-200 dark:border-gray-700 p-4 rounded-lg hover:shadow-md hover:-translate-y-1 transition"
              >
                <FaEnvelope className="text-blue-500 text-xl" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-600 text-sm">
                    siva4039.des@gmail.com
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/siva-nakka-44a57328a"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 border border-gray-200 dark:border-gray-700 p-4 rounded-lg hover:shadow-md hover:-translate-y-1 transition"
              >
                <FaLinkedin className="text-blue-600 text-xl" />
                <div>
                  <p className="font-semibold">LinkedIn</p>
                  <p className="text-gray-600 text-sm">
                    linkedin.com/in/myprofile
                  </p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/nakkasiva039"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 border border-gray-200 dark:border-gray-700 p-4 rounded-lg hover:shadow-md hover:-translate-y-1 transition"
              >
                <FaGithub className="text-gray-800 text-xl" />
                <div>
                  <p className="font-semibold">GitHub</p>
                  <p className="text-gray-600 text-sm">
                    github.com/yourusername
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="w-full border rounded-lg px-4 py-3"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="w-full border rounded-lg px-4 py-3"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              className="w-full border rounded-lg px-4 py-3"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 disabled:opacity-60"
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
