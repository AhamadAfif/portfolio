import { motion } from 'motion/react';
import { Download, FileText } from 'lucide-react';
import { Button } from './ui/button';

export function Resume() {
  const resumeUrl = 'https://drive.google.com/file/d/1Br6WvtMwxRApcBTNNILYkGoX0BJVdnPS/view?usp=sharing';
  
  const handleViewResume = () => {
    window.open(resumeUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-gray-900 dark:text-white mb-4">Resume</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-8"></div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-full">
                <FileText className="text-blue-600 dark:text-blue-400" size={48} />
              </div>
            </div>

            <h3 className="text-gray-900 dark:text-white mb-4">
              View My Resume
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Get a comprehensive overview of my education, experience, skills, and projects. 
              Feel free to reach out if you'd like to discuss opportunities or collaborations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleViewResume}
                className="bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2"
              >
                <FileText size={20} />
                View Resume
              </Button>
              
              <Button
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-gray-800"
                asChild
              >
                <a href="#contact" onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  Contact Me
                </a>
              </Button>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-gray-900 dark:text-white mb-1">Education</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">CSE (Data Science)</p>
                </div>
                <div>
                  <p className="text-gray-900 dark:text-white mb-1">Experience</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Full-Stack Development</p>
                </div>
                <div>
                  <p className="text-gray-900 dark:text-white mb-1">Projects</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">3+ Major Projects</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
