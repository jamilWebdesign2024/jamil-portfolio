import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

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

    emailjs
      .send(
        "service_2rc9hql",   // EmailJS service ID
        "template_4lak1z9",  // EmailJS template ID
        formData,
        "D_nLhnQpU6Rrkjdyd"    // EmailJS public key
      )
      .then(
        () => {
          setIsLoading(false);
          setFormData({ name: "", email: "", subject: "", message: "" });
          toast.success("Message sent successfully!");
        },
        (error) => {
          setIsLoading(false);
          toast.error("Failed to send message. Try again!");
          console.error(error);
        }
      );
  };

  return (
    <section id="contact" className="py-16 bg-base-200">
      <Toaster position="top-right" />
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-pulse">
            Get In <span className="text-accent">Touch</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-base-content/80 max-w-2xl mx-auto">
            Have a project in mind or just want to connect? Feel free to reach out to me.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Info */}
          <div className="card shadow-lg max-w-lg md:max-w-xl mx-auto w-full rounded-3xl overflow-hidden bg-accent/2">
            <div className="space-y-6 p-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Contact Information</h3>
                <p className="text-base-content/80 text-sm sm:text-base">
                  Feel free to reach out for opportunities, collaborations, or just to say hi!
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-4 bg-accent/3 p-4 rounded-xl">
                  <div className="mt-1 text-primary"><FaEnvelope size={20} /></div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-base-content/80 text-sm sm:text-base">jamiluddinjishan@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-accent/3 p-4 rounded-xl">
                  <div className="mt-1 text-primary"><FaPhone size={20} /></div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-base-content/80 text-sm sm:text-base">+8801878 142110</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-accent/3 p-4 rounded-xl">
                  <div className="mt-1 text-primary"><FaMapMarkerAlt size={20} /></div>
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-base-content/80 text-sm sm:text-base">Pahartali, Chittagong, Bangladesh</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <h4 className="font-semibold mb-3">Connect with me</h4>
                <div className="flex gap-3 sm:gap-4">
                  <a href="#" className="btn btn-ghost btn-circle text-lg sm:text-xl"><FaGithub /></a>
                  <a href="#" className="btn btn-ghost btn-circle text-lg sm:text-xl"><FaLinkedin /></a>
                  <a href="#" className="btn btn-ghost btn-circle text-lg sm:text-xl"><FaTwitter /></a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="card bg-accent/2 shadow-lg p-6 py-10 rounded-2xl max-w-lg md:max-w-xl mx-auto w-full">
            <h3 className="text-xl sm:text-2xl font-bold mb-6">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="label"><span className="label-text">Full Name</span></label>
                  <input type="text" name="name" placeholder="Enter your name" className="input input-bordered w-full" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                  <label className="label"><span className="label-text">Email Address</span></label>
                  <input type="email" name="email" placeholder="Enter your email" className="input input-bordered w-full" value={formData.email} onChange={handleChange} required />
                </div>
              </div>

              <div>
                <label className="label"><span className="label-text">Subject</span></label>
                <input type="text" name="subject" placeholder="Enter subject line" className="input input-bordered w-full" value={formData.subject} onChange={handleChange} required />
              </div>

              <div>
                <label className="label"><span className="label-text">Your Message</span></label>
                <textarea name="message" placeholder="Enter your message" className="textarea textarea-bordered w-full" rows="5" value={formData.message} onChange={handleChange} required></textarea>
              </div>

              <button type="submit" className={`btn btn-primary bg-gradient-to-r from-primary to-secondary text-white w-full mt-4 ${isLoading ? "loading" : ""}`} disabled={isLoading}>
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


// 412Gmail_API: Request had insufficient authentication scopes.