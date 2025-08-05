import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Import your testimonial images
import jhankarImg from '../assets/photo.png';
import emilyImg from '../assets/photo.png';
import alexImg from '../assets/photo.png';
import saraImg from '../assets/photo.png';
import michaelImg from '../assets/photo.png';
import nadiaImg from '../assets/photo.png';

const testimonialsData = [
  {
    id: 1,
    quote: 'Md Jamil is one of the most dedicated learners I have seen in my community. His progress and commitment in the Programming Hero course have been phenomenal.',
    author: 'Jhanker Mahbub',
    title: 'CEO, Programming Hero',
    image: jhankarImg
  },
  {
    id: 2,
    quote: "Jamil's ability to work through complex UI challenges with React.js impressed our team. Highly reliable and detail-oriented.",
    author: 'Emily Carter',
    title: 'Product Manager, DevSpark',
    image: emilyImg
  },
  {
    id: 3,
    quote: 'He consistently delivered clean and efficient code during our collaboration. A valuable MERN developer with excellent communication skills.',
    author: 'Alex Thompson',
    title: 'Team Lead, CodeX Agency',
    image: alexImg
  },
  {
    id: 4,
    quote: 'We needed a quick turnaround on a MERN project, and Jamil delivered beyond expectations. His responsiveness and clarity stood out.',
    author: 'Sara Bennett',
    title: 'CTO, StartupLane',
    image: saraImg
  },
  {
    id: 5,
    quote: 'His Tailwind + React integration is seamless and pixel-perfect. Great eye for design and frontend performance.',
    author: 'Michael Lee',
    title: 'Senior Developer, UIPath Labs',
    image: michaelImg
  },
  {
    id: 6,
    quote: "Jamil was a pleasure to work with. He's driven, quick to adapt, and always looking to improve. Would definitely recommend him for future projects.",
    author: 'Nadia Rahman',
    title: 'Freelance Designer',
    image: nadiaImg
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

const Quotes = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 lg:py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={headerVariants}
        >
          <div className="inline-block px-4 py-1 mb-4 rounded-full text-sm font-semibold bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            What people are saying about me:
          </h2>
        </motion.div>

        <div className="relative pb-16 mt-16"> {/* Increased mt and pb for better spacing */}
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ 
              clickable: true,
              el: '.custom-pagination',
              type: 'bullets',
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonialsData.map(({ id, quote, author, title, image }) => (
              <SwiperSlide key={id}>
                <motion.div
                  className="h-full p-8 rounded-xl flex flex-col items-center text-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  style={{ minHeight: '400px' }} 
                >
                  <div className="w-24 h-24 rounded-full flex items-center justify-center mb-6 overflow-hidden border-2 border-gray-300 dark:border-gray-600">
                    <img 
                      src={image} 
                      alt={author} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <p className="mb-6 font-light italic text-gray-600 dark:text-gray-300 text-lg"> {/* Larger text */}
                    "{quote}"
                  </p>
                  <div className="mt-auto">
                    <p className="font-bold text-xl text-gray-900 dark:text-white"> {/* Larger text */}
                      {author}
                    </p>
                    <p className="text-md font-medium text-blue-600 dark:text-blue-400 mt-1"> {/* Larger text */}
                      {title}
                    </p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Pagination Container - Positioned lower */}
          <div className="custom-pagination absolute bottom-4 left-0 right-0 flex justify-center space-x-2" />
        </div>
      </div>

      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #9CA3AF;
          opacity: 1;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background: #3B82F6;
        }
        .dark .custom-pagination .swiper-pagination-bullet {
          background: #6B7280;
        }
        .dark .custom-pagination .swiper-pagination-bullet-active {
          background: #2563EB;
        }
      `}</style>
    </section>
  );
};

export default Quotes;