import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Header = ({ activeSection, scrollToSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <motion.div
      id="home"
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/back.jfif')"
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <nav className="relative z-10 flex justify-between items-center flex-wrap px-4 py-6 md:px-10">
        <motion.img
          src="/IT guru.png"
          alt="logo"
          className="w-32 h-16 bg-black rounded-lg cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        />

        <ul className={`md:flex md:items-center md:static absolute bg-black md:bg-transparent w-full md:w-auto left-0 md:left-auto transition-all duration-300 ease-in ${menuOpen ? 'top-16' : 'top-[-400px]'} md:top-auto`}>
          {navItems.map((item) => (
            <li key={item.id} className="md:inline-block md:mx-5 my-2 md:my-0">
              <button
                onClick={() => {
                  scrollToSection(item.id);
                  closeMenu();
                }}
                className={`text-lg font-medium transition-all duration-300 relative group ${
                  activeSection === item.id ? 'text-primary' : 'text-gray-400 hover:text-primary'
                }`}
              >
                {item.label}
                <span className={`absolute bottom-[-6px] left-0 h-0.5 bg-primary transition-all duration-300 ${
                  activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </button>
            </li>
          ))}
        </ul>

        <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'} text-gray-400`}></i>
        </div>
      </nav>

      <motion.div
        className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          Certified Web Developer
        </motion.p>
        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Information Systems Guru
        </motion.p>
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white leading-tight"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8, type: "spring" }}
        >
          Hi, i'm <span className="text-primary">Shem Aberi</span> <br />
          from Nairobi, Kenya
        </motion.h1>
      </motion.div>
    </motion.div>
  );
};

export default Header;
