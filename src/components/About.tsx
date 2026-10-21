import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import profileImage from '../assets/profile.webp';
import graduationPhoto from '../assets/graduation.webp';

const photos = [
  { src: profileImage, alt: 'Ahamad Afif – profile photo' },
  { src: graduationPhoto, alt: 'Ahamad Afif at graduation ceremony holding BE degree' },
];

export function About() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const touchStartX = useRef<number | null>(null);

  const goTo = (idx: number) => {
    setDirection(idx > activeIndex ? 1 : -1);
    setActiveIndex(idx);
  };

  const prev = () => goTo((activeIndex - 1 + photos.length) % photos.length);
  const next = () => goTo((activeIndex + 1) % photos.length);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    touchStartX.current = null;
  };

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0 }),
  };

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
          {/* Swipable photo carousel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div
              className="relative select-none"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div className="absolute inset-0 bg-blue-600 rounded-2xl transform rotate-3 pointer-events-none"></div>

              <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[3/4]">
                <AnimatePresence custom={direction} initial={false} mode="wait">
                  <motion.img
                    key={activeIndex}
                    src={photos[activeIndex].src}
                    alt={photos[activeIndex].alt}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                </AnimatePresence>
              </div>

              {/* Prev / Next buttons */}
              <button
                onClick={prev}
                aria-label="Previous photo"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-1.5 rounded-full bg-white/80 dark:bg-gray-900/80 shadow hover:bg-white dark:hover:bg-gray-800 transition-colors"
              >
                <ChevronLeft size={20} className="text-gray-800 dark:text-white" />
              </button>
              <button
                onClick={next}
                aria-label="Next photo"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-1.5 rounded-full bg-white/80 dark:bg-gray-900/80 shadow hover:bg-white dark:hover:bg-gray-800 transition-colors"
              >
                <ChevronRight size={20} className="text-gray-800 dark:text-white" />
              </button>

              {/* Dot indicators */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {photos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Photo ${i + 1}`}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === activeIndex
                        ? 'bg-blue-600 w-5'
                        : 'bg-white/70 dark:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
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
              I'm a passionate Computer Science & Engineering graduate specializing in Data Science
              from Sahyadri College of Engineering. With a strong foundation in full-stack
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
                <p className="text-gray-500 dark:text-gray-400 text-sm">Graduated</p>
                <p className="text-gray-900 dark:text-white">June 2026</p>
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
