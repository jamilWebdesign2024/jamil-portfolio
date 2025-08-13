import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsLoading(false);
    }, 2000);
  };

  return (
    <section className="py-20 bg-base-300">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-pulse">Get In Touch</h2>
          <p className="mt-2 text-base-content/70">
            Have a project in mind or want to collaborate? Feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold">Let's Build Your Business Together</h3>
              <p className="mt-2 text-base-content/70">
                I’m always open to new ideas, collaborations, and exciting projects. Whether you have a clear plan or just a spark of an idea, let’s connect and turn it into something impactful!
              </p>
            </div>

            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-center gap-4 p-4 rounded-lg bg-base-100 shadow">
                <div className="p-3 rounded-lg bg-primary text-primary-content">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p>Pahartali, Chattogram, Bangladesh</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 p-4 rounded-lg bg-base-100 shadow">
                <div className="p-3 rounded-lg bg-primary text-primary-content">
                  <FaPhone size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p>+880 1878142110</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 p-4 rounded-lg bg-base-100 shadow">
                <div className="p-3 rounded-lg bg-primary text-primary-content">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p>jamiluddinjishan@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-4">
              <a href="#" className="btn btn-circle btn-ghost text-xl">
                <FaGithub />
              </a>
              <a href="#" className="btn btn-circle btn-ghost text-xl">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Right Form */}
          <div className="card bg-base-100/20 border-1 border-gray-100 shadow-xl p-8">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="input input-bordered w-full"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  className="input input-bordered w-full"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="What's this about?"
                className="input input-bordered w-full"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your message here..."
                className="textarea textarea-bordered w-full"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <button
                type="submit"
                className={`btn btn-primary bg-gradient-to-r from-primary to-secondary text-white border-0 w-full ${isLoading ? "loading" : ""}`}
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
