import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hero } from './components/Hero';
import { LiveTicker } from './components/LiveTicker';
import { Stats } from './components/Stats';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { DonationProgress } from './components/DonationProgress';
import { QRDonationCard } from './components/QRDonationCard';
import { Footer } from './components/Footer';
import { FloatingDonateButton } from './components/FloatingDonateButton';
import { useConfetti } from './hooks/useConfetti';

const loadingMessages = [
  'Generating AI empathy...',
  'Calculating fresher suffering index...',
  'Searching for unused L&D budget...',
  'Loading developer tears analytics...',
  'Optimizing caffeine distribution...',
  'Analyzing Stack Overflow addiction rates...',
  'Preparing emotional damage assessment...',
];

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingMessage, setLoadingMessage] = useState(loadingMessages[0]);
  const [hasDonated, setHasDonated] = useState(false);
  const { fireConfetti } = useConfetti();

  useEffect(() => {
    // Cycle through loading messages
    const messageInterval = setInterval(() => {
      setLoadingMessage(loadingMessages[Math.floor(Math.random() * loadingMessages.length)]);
    }, 1500);

    // Simulate loading
    const loadTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearInterval(messageInterval);
      clearTimeout(loadTimer);
    };
  }, []);

  const handleDonateClick = () => {
    if (!hasDonated) {
      fireConfetti();
      setHasDonated(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden">
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && <LoadingScreen message={loadingMessage} />}
      </AnimatePresence>

      {/* Main Content */}
      {!isLoading && (
        <>
          <LiveTicker />
          <main>
            <Hero onDonateClick={handleDonateClick} />
            <Stats />
            <Features />
            <Testimonials />
            <DonationProgress />
            <QRDonationCard onDonateClick={handleDonateClick} />
          </main>
          <Footer />
          <FloatingDonateButton onDonateClick={handleDonateClick} />
        </>
      )}
    </div>
  );
}

function LoadingScreen({ message }: { message: string }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gray-950"
    >
      {/* Animated logo */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{
          scale: { duration: 2, repeat: Infinity },
          rotate: { duration: 3, repeat: Infinity, ease: 'linear' },
        }}
        className="text-6xl mb-8"
      >
        🚀
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-4"
      >
        Save Our Freshers
      </motion.h1>

      {/* Loading message */}
      <motion.p
        key={message}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="text-gray-400 text-sm md:text-base font-mono"
      >
        {message}
      </motion.p>

      {/* Loading bar */}
      <div className="w-48 h-1 mt-8 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 3, ease: 'easeInOut' }}
          className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full"
        />
      </div>
    </motion.div>
  );
}

export default App;
