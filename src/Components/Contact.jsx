import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Github, Linkedin, MapPin, MessageSquare } from 'lucide-react';

const contactInfo = [
  {
    id: 1,
    icon: <Phone className="h-6 w-6" />,
    title: 'Phone',
    value: '01878142110',
    link: 'tel:+8801878142110',
  },
  {
    id: 2,
    icon: <Mail className="h-6 w-6" />,
    title: 'Email',
    value: 'jamiluddinjishan@gmail.com',
    link: 'mailto:jamiluddinjishan@gmail.com',
  },
  {
    id: 3,
    icon: <Github className="h-6 w-6" />,
    title: 'GitHub',
    value: 'jamilWebdesign2024',
    link: 'https://github.com/jamilWebdesign2024',
  },
  {
    id: 4,
    icon: <MessageSquare className="h-6 w-6" />,
    title: 'WhatsApp',
    value: '01878142110',
    link: 'https://wa.me/+8801878142110',
  },
  {
    id: 5,
    icon: <MapPin className="h-6 w-6" />,
    title: 'Address',
    value: 'firozshah housing estate, Khulshi, Chattogram',
    link: 'https://maps.google.com/?q=firozshah+housing+estate,+Khulshi,+Chattogram', // Example map link
  },
];

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },
};

const formVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
      delay: 0.2, // Delay for form to appear after contact info
    },
  },
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-28 lg:py-32" style={{ backgroundColor: 'var(--primary-bg)' }}>
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={headerVariants}
        >
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            style={{ color: 'var(--heading-color)' }}
          >
            Let's Connect
          </h2>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto"
            style={{ color: 'var(--text-color)' }}
          >
            Have a project in mind or want to discuss opportunities? Reach out through any of these channels.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Contact Information */}
          <motion.div
            className="flex-1 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={itemVariants}
          >
            {contactInfo.map((item, index) => (
              <motion.a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card flex items-center gap-4 p-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl group"
                style={{
                  backgroundColor: 'var(--secondary-bg)',
                  border: '1px solid var(--shadow-color)',
                  boxShadow: `0 4px 6px -1px rgba(var(--accent-color-rgb), 0.1), 0 2px 4px -1px rgba(var(--accent-color-rgb), 0.06)`,
                }}
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
              >
                <div
                  className="flex-shrink-0 p-3 rounded-full"
                  style={{
                    backgroundColor: 'var(--primary-bg)',
                    color: 'var(--accent-color)',
                    border: '1px solid var(--shadow-color)',
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold" style={{ color: 'var(--heading-color)' }}>
                    {item.title}
                  </h3>
                  <p className="text-base" style={{ color: 'var(--text-color)' }}>
                    {item.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="flex-1 p-8 rounded-xl"
            style={{
              backgroundColor: 'var(--secondary-bg)',
              border: '1px solid var(--shadow-color)',
              boxShadow: `0 4px 6px -1px rgba(var(--accent-color-rgb), 0.1), 0 2px 4px -1px rgba(var(--accent-color-rgb), 0.06)`,
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={formVariants}
          >
            <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--heading-color)' }}>
              Send Me a Message
            </h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-color)' }}>
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 rounded-md focus:ring-2 focus:ring-[var(--accent-color)] outline-none"
                  style={{
                    backgroundColor: 'var(--primary-bg)',
                    border: '1px solid var(--shadow-color)',
                    color: 'var(--text-color)',
                  }}
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-color)' }}>
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 rounded-md focus:ring-2 focus:ring-[var(--accent-color)] outline-none"
                  style={{
                    backgroundColor: 'var(--primary-bg)',
                    border: '1px solid var(--shadow-color)',
                    color: 'var(--text-color)',
                  }}
                  placeholder="john.doe@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-color)' }}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full p-3 rounded-md focus:ring-2 focus:ring-[var(--accent-color)] outline-none"
                  style={{
                    backgroundColor: 'var(--primary-bg)',
                    border: '1px solid var(--shadow-color)',
                    color: 'var(--text-color)',
                  }}
                  placeholder="Regarding a project..."
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-color)' }}>
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full p-3 rounded-md focus:ring-2 focus:ring-[var(--accent-color)] outline-none resize-y"
                  style={{
                    backgroundColor: 'var(--primary-bg)',
                    border: '1px solid var(--shadow-color)',
                    color: 'var(--text-color)',
                  }}
                  placeholder="Hello, I'd like to discuss..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                style={{
                  backgroundColor: 'var(--accent-color)',
                  color: 'var(--link-hover)', // Assuming link-hover is for text on accent background
                }}
              >
                Send Message <Mail className="ml-2 h-5 w-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;