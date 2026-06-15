import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

interface FloatingDonateButtonProps {
  onDonateClick: () => void;
}

export function FloatingDonateButton({ onDonateClick }: FloatingDonateButtonProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToDonate = () => {
    const donateSection = document.getElementById('donate');
    if (donateSection) {
      donateSection.scrollIntoView({ behavior: 'smooth' });
    }
    onDonateClick();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2 }}
      className="fixed bottom-6 right-6 z-50 flex flex-col gap-3"
    >
      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors shadow-lg"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Main donate button */}
      <motion.button
        whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(168, 85, 247, 0.5)' }}
        whileTap={{ scale: 0.95 }}
        onClick={scrollToDonate}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative px-6 py-4 bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 rounded-full font-semibold text-white shadow-lg shadow-purple-500/30 flex items-center gap-2 overflow-hidden"
      >
        {/* Animated background */}
        <motion.div
          animate={{
            background: isHovered
              ? 'linear-gradient(90deg, #c026d3, #9333ea, #ec4899)'
              : 'linear-gradient(90deg, #9333ea, #a855f7, #ec4899)',
          }}
          className="absolute inset-0"
        />

        {/* Pulse animation */}
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 bg-white/20 rounded-full"
        />

        {/* Content */}
        <span className="relative z-10 flex items-center gap-2">
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <Heart className="w-5 h-5" fill="currentColor" />
          </motion.div>
          <span className="hidden sm:inline">Donate Now</span>
        </span>
      </motion.button>

      {/* Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-2 bg-gray-800 rounded-lg text-sm text-white whitespace-nowrap pointer-events-none"
          >
            Fuel the Gen AI build! 🤖
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 border-4 border-transparent border-l-gray-800" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
