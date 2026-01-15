import React, { useState } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const tabs = [
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' }
  ];

  const skills = [
    { name: 'Web Design', description: 'Building clean and responsive websites' },
    { name: 'HTML/CSS/JavaScript', description: 'Proficient in HTML5 and CSS3' },
    { name: 'UI/UX Design', description: 'Creating user-friendly interfaces' },
    { name: 'Online presence for businesses', description: 'Ensuring businesses get the ultimate online presence' },
    { name: 'Blogging', description: 'Ensuring SEO in web pages' },
    { name: 'Communication and Problem Solving', description: 'Excellent communication and problem solving skills' },
    { name: 'Chess Instructor', description: 'Chess coaching sessions' }
  ];

  const experience = [
    { period: '2024 - Current', description: 'Consistently learning about tech and keeping up with AI' },
    { period: '2021 - 2023', description: 'Managed chess tournament systems for Kenyan Universities, Nairobi region' },
    { period: '2022 - 2023', description: 'Freelance IT projects' }
  ];

  const education = [
    { period: '2019-2023', description: 'BSc IT Kenyatta University' },
    { period: '2015-2018', description: 'Alliance High School' },
    { period: '2007-2014', description: 'Ekerubo CCF Primary School' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'skills':
        return (
          <ul className="space-y-4">
            {skills.map((skill, index) => (
              <motion.li
                key={index}
                className="text-gray-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="font-semibold text-primary">{skill.name}:</span> {skill.description}
              </motion.li>
            ))}
          </ul>
        );
      case 'experience':
        return (
          <ul className="space-y-4">
            {experience.map((exp, index) => (
              <motion.li
                key={index}
                className="text-gray-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="font-semibold text-primary">{exp.period}:</span> {exp.description}
              </motion.li>
            ))}
          </ul>
        );
      case 'education':
        return (
          <ul className="space-y-4">
            {education.map((edu, index) => (
              <motion.li
                key={index}
                className="text-gray-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="font-semibold text-primary">{edu.period}:</span> {edu.description}
              </motion.li>
            ))}
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <motion.section
      id="about"
      className="py-20 px-4 md:px-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="about-image"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src="/AboutMe.png"
              alt="About Me"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </motion.div>

          <motion.div
            className="about-content"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-primary">About Me</h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              I am a passionate web designer with a love for creating beautiful and functional websites.
              I also have a deep interest in chess, both as a player and a coach.
            </p>

            <div className="tab-container">
              <div className="flex mb-8 border-b border-gray-700">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-3 font-medium transition-all duration-300 relative ${
                      activeTab === tab.id
                        ? 'text-primary border-b-2 border-primary'
                        : 'text-gray-400 hover:text-primary'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="tab-content"
              >
                {renderTabContent()}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
