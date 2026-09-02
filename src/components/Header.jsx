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
          className="w-32 h-16 bg-black rounded-lg cursor-pointer relative z-20"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        />

        {/* Mobile Menu Button */}
        <div className="md:hidden text-2xl cursor-pointer relative z-20" onClick={toggleMenu}>
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'} text-gray-400`}></i>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex md:items-center md:static bg-transparent w-auto">
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

        {/* Mobile Navigation Menu */}
        <motion.div
          className="md:hidden absolute top-full right-0 w-64 bg-black bg-opacity-95 backdrop-blur-md rounded-lg shadow-2xl overflow-hidden z-30"
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{
            opacity: menuOpen ? 1 : 0,
            scale: menuOpen ? 1 : 0.95,
            y: menuOpen ? 0 : -20
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          style={{ pointerEvents: menuOpen ? 'auto' : 'none' }}
        >
          <ul className="py-4">
            {navItems.map((item, index) => (
              <motion.li
                key={item.id}
                className="border-b border-gray-700 last:border-b-0"
                initial={{ opacity: 0, x: 20 }}
                animate={{
                  opacity: menuOpen ? 1 : 0,
                  x: menuOpen ? 0 : 20
                }}
                transition={{ delay: index * 0.1, duration: 0.2 }}
              >
                <button
                  onClick={() => {
                    scrollToSection(item.id);
                    closeMenu();
                  }}
                  className={`w-full text-left px-6 py-4 text-lg font-medium transition-all duration-300 hover:bg-gray-800 ${
                    activeSection === item.id ? 'text-primary bg-gray-800' : 'text-gray-300 hover:text-primary'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="block w-full h-0.5 bg-primary mt-1"></span>
                  )}
                </button>
              </motion.li>
            ))}
          </ul>
        </motion.div>
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
