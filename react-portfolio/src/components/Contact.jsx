import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaPhone, FaTwitter, FaInstagram, FaLinkedin, FaArrowUp, FaDownload } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const formRef = useRef(null);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbycCnvKLYBlXgTlcRmoK4gb2uoVFN_eBQ5mrj0FT8gQcL9aZr_c6szcfadTFxrQhwcYlw/exec', {
        method: 'POST',
        body: new FormData(e.target)
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('Error sending message. Please try again.');
      console.error('Error:', error);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section
      id="contact"
      className="py-20 px-4 md:px-10 bg-gray-900 relative"
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
          Contact Me
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="contact-left"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4 text-lg">
                <FaPaperPlane className="text-primary text-xl" />
                <span className="text-gray-300">nyangateshem22@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-lg">
                <FaPhone className="text-primary text-xl" />
                <span className="text-gray-300">Phone: +254 791692009</span>
              </div>
            </div>

            <div className="social-icons flex gap-6 mb-8">
              <motion.a
                href="https://x.com/sirbery"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-400 hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTwitter />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/laflame_aberi?igsh=a3RhaXRxOGt6OHc2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-400 hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/nyangate-shem-b94735374/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-400 hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin />
              </motion.a>
            </div>

            <motion.a
              href="/Shem_Aberi_CV.pdf"
              download="Shem_Aberi_CV.pdf"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-red-600 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(255, 0, 79, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload />
              Download CV
            </motion.a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="contact-right"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <form
              ref={formRef}
              name="submit-to-google-sheet"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
              >
                <input
                  type="text"
                  name="Name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                viewport={{ once: true }}
              >
                <input
                  type="email"
                  name="Email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                viewport={{ once: true }}
              >
                <textarea
                  name="Message"
                  rows="6"
                  placeholder="Your Message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 resize-none"
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                className="w-full px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-red-600 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(255, 0, 79, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                viewport={{ once: true }}
              >
                Submit
              </motion.button>
            </form>

            {status && (
              <motion.p
                className={`mt-4 text-center font-medium ${
                  status.includes('successfully') ? 'text-green-400' : 'text-red-400'
                }`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                {status}
              </motion.p>
            )}
          </motion.div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-4 bg-primary text-white rounded-full shadow-lg transition-all duration-300 ${
          showBackToTop ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaArrowUp />
      </motion.button>

      {/* Footer */}
      <div className="text-center mt-16 pt-8 border-t border-gray-700">
        <p className="text-gray-400">&copy; 2025 Shem Aberi. All rights reserved.</p>
        <p className="text-gray-500 text-sm mt-2">Designed by Aberi.</p>
      </div>
    </motion.section>
  );
};

export default Contact;
