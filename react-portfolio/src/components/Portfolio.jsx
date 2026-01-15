import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      image: '/ChessFlame.png',
      title: 'Web Design Project',
      description: 'A responsive chess tournament management website I designed for a local business.',
      link: 'https://github.com/SlyLaFlame/Take_Take',
      category: 'Web Design'
    },
    {
      id: 2,
      image: '/HomePage Admin.png',
      title: 'UI/UX Design',
      description: 'Created an aesthetically pleasing and usable product with modern design principles.',
      link: 'https://github.com/SlyLaFlame/Take_Take',
      category: 'UI/UX Design'
    },
    {
      id: 3,
      image: '/white.jpg',
      title: 'Blogging',
      description: 'Writing articles online for SEO-first companies with engaging content strategies.',
      link: '#',
      category: 'Content Creation'
    }
  ];

  return (
    <motion.section
      id="portfolio"
      className="py-20 px-4 md:px-10"
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
          My Work
        </motion.h1>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="work-item relative overflow-hidden rounded-lg group cursor-pointer"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />

              <motion.div
                className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <h3 className="text-xl font-bold text-white mb-2 text-center">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-center mb-4 text-sm">
                  {project.description}
                </p>
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-red-600 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaExternalLinkAlt />
                  View Project
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://github.com/SlyLaFlame"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-red-600 transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(255, 0, 79, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            See More on GitHub
          </motion.a>
        </motion.div>
      </div>

      {/* Modal for project details */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-gray-800 rounded-lg max-w-2xl w-full p-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-white mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-gray-300 mb-4">
                {selectedProject.description}
              </p>
              <div className="flex gap-4">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-red-600 transition-colors duration-300"
                >
                  View Project
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500 transition-colors duration-300"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Portfolio;
