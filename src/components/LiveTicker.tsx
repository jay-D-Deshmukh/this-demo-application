import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Radio } from 'lucide-react';

const donationMessages = [
  'An ML Engineer just donated ₹499 to fuel Jay\'s next agent build.',
  'A Product Manager contributed ₹999. "Ship that RAG pipeline!" they said.',
  'An anonymous AI researcher donated ₹299. "Keep experimenting!"',
  'A kind-hearted founder gave ₹1,999 for API credits!',
  'DevOps Engineer pitched in ₹199. "Save them from rate limits!"',
  'A wise Staff Engineer donated ₹500 in memory of a hallucinated response.',
  'Full Stack Developer gave ₹449 to fund embedding jobs.',
  'QA Engineer generously donated ₹350. "Fewer broken agents to test!"',
];

export function LiveTicker() {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentMessage((prev) => (prev + 1) % donationMessages.length);
        setIsVisible(true);
      }, 500);
    }, 6000);

    return () => clearInterval(messageInterval);
  }, []);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900 via-purple-900/20 to-gray-900 border-b border-purple-500/20 py-3 px-4"
    >
      <div className="max-w-7xl mx-auto flex items-center gap-3">
        <div className="flex items-center gap-2 shrink-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <Radio className="w-4 h-4 text-red-500" fill="#ef4444" />
          </motion.div>
          <span className="text-red-500 font-semibold text-sm">LIVE</span>
        </div>

        <AnimatePresence mode="wait">
          {isVisible && (
            <motion.p
              key={currentMessage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="text-gray-300 text-sm md:text-base truncate"
            >
              {donationMessages[currentMessage]}
            </motion.p>
          )}
        </AnimatePresence>

        <motion.span
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="hidden sm:inline-block text-2xl ml-auto shrink-0"
        >
          ✨
        </motion.span>
      </div>
    </motion.div>
  );
}
