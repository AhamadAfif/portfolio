import { motion } from 'motion/react';
import profileImage from 'figma:asset/268d524a7e53c31a85babf527ce55264d569352e.png';

export function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-2xl transform rotate-3"></div>
              <img
                src={profileImage}
                alt="Ahamad Afif"
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-gray-900 dark:text-white">
              Hello! I'm Ahamad Afif
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400">
              I'm a passionate Computer Science & Engineering student specializing in Data Science 
              at Sahyadri College of Engineering. With a strong foundation in full-stack 
              development and database systems, I thrive on creating innovative solutions that 
              make a real impact.
            </p>

            <p className="text-gray-600 dark:text-gray-400">
              My journey in tech has been driven by a deep interest in digital transformation 
              projects. I believe in the power of technology to enhance efficiency and accessibility, 
              particularly for underserved communities. From digitizing workflows for beedi workers 
              to creating interactive visualizations of India's cultural heritage, my projects 
              reflect my commitment to meaningful innovation.
            </p>

            <p className="text-gray-600 dark:text-gray-400">
              When I'm not coding, I'm exploring new technologies, contributing to open-source 
              projects, and constantly learning about the intersection of data science and 
              real-world applications.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p className="text-gray-500 dark:text-gray-400 text-sm">College</p>
                <p className="text-gray-900 dark:text-white">Sahyadri College of Engineering</p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p className="text-gray-500 dark:text-gray-400 text-sm">Expected Graduation</p>
                <p className="text-gray-900 dark:text-white">2026</p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg col-span-2">
                <p className="text-gray-500 dark:text-gray-400 text-sm">Email</p>
                <a
                  href="mailto:ahamadafifofficial@gmail.com"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  ahamadafifofficial@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
