import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaChessBoard, FaPen } from 'react-icons/fa6';

const Services = () => {
  const services = [
    {
      icon: <FaCode className="text-4xl text-primary mb-4" />,
      title: 'Web Design',
      description: 'I create impressive and responsive websites tailored to your needs.',
      link: '#'
    },
    {
      icon: <FaChessBoard className="text-4xl text-primary mb-4" />,
      title: 'UI/UX Design',
      description: 'I build successful products that are aesthetically pleasing, usable, and enjoyable.',
      link: '#'
    },
    {
      icon: <FaPen className="text-4xl text-primary mb-4" />,
      title: 'Content Creation',
      description: 'I produce engaging content for blogs and social media.',
      link: '#'
    }
  ];

  return (
    <motion.section
      id="services"
      className="py-20 px-4 md:px-10 bg-gray-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          My Services
        </motion.h1>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card bg-gray-800 p-8 rounded-lg text-center hover:bg-gray-700 transition-all duration-300 group"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <motion.div
                className="icon-container"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {service.icon}
              </motion.div>

              <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              <motion.a
                href={service.link}
                className="inline-block px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-red-600 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
