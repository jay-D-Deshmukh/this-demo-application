import { motion } from 'framer-motion';
import { Heart, Coffee, Code, Bug, AlertTriangle, Terminal } from 'lucide-react';

interface HeroProps {
  onDonateClick: () => void;
}

const floatingCodeSnippets = [
  'temperature=0.7',
  'pip install langchain',
  'embeddings.encode()',
  'agent.run(prompt)',
  'max_tokens=4096',
  'RAG pipeline failed',
];

export function Hero({ onDonateClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-purple-950/30 to-gray-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(120,119,198,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(6,182,212,0.1),transparent_50%)]" />

      {/* Floating code snippets */}
      {floatingCodeSnippets.map((snippet, index) => (
        <motion.div
          key={index}
          className="absolute text-cyan-500/20 font-mono text-sm pointer-events-none select-none hidden md:block"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            y: [0, -20, 0],
            x: [0, Math.sin(index) * 10, 0],
          }}
          transition={{
            duration: 5 + index,
            repeat: Infinity,
            delay: index * 0.5,
          }}
          style={{
            left: `${15 + index * 15}%`,
            top: `${20 + (index % 3) * 25}%`,
          }}
        >
          <Terminal className="inline w-4 h-4 mr-1" />
          {snippet}
        </motion.div>
      ))}

      {/* Animated circles */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        style={{ top: '10%', left: '10%' }}
      />
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 6, repeat: Infinity }}
        style={{ bottom: '20%', right: '15%' }}
      />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Alert badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-full px-4 py-2 mb-8"
        >
          <AlertTriangle className="w-4 h-4 text-red-400" />
          <span className="text-red-400 text-sm font-medium">URGENT: API Credits Running Low</span>
          <motion.span
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="w-2 h-2 bg-red-500 rounded-full"
          />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Support a Gen AI Developer
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          "Every day, Gen AI developers burn through tokens building agents, fine-tuning models, and debugging hallucinations.
          Jay Dinesh Deshmukh is building the future — one prompt at a time. Help keep the GPUs warm."
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(168, 85, 247, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            onClick={onDonateClick}
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 rounded-xl font-semibold text-white shadow-lg shadow-purple-500/25 overflow-hidden flex items-center gap-2"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Heart className="w-5 h-5" fill="currentColor" />
              Donate API Credits
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(6, 182, 212, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-cyan-600/20 to-cyan-500/20 border border-cyan-500/30 rounded-xl font-semibold text-cyan-400 backdrop-blur-sm flex items-center gap-2 hover:border-cyan-400/50 transition-colors"
          >
            <Coffee className="w-5 h-5" />
            Fuel the Next Agent
          </motion.button>
        </motion.div>

        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 relative"
        >
          <GlassmorphismCard className="p-8 max-w-2xl mx-auto">
            <div className="relative flex justify-center items-center">
              {/* Gen AI dev illustration */}
              <div className="relative text-center">
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-6xl md:text-8xl mb-4"
                >
                  🤖
                </motion.div>
                <p className="text-2xl font-bold text-gray-200 mb-2">"Why is the model hallucinating again?!"</p>

                {/* Floating bugs */}
                <div className="absolute -top-4 left-0 text-3xl">
                  <motion.span animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}>🐛</motion.span>
                </div>
                <div className="absolute -top-2 right-0 text-2xl">
                  <motion.span animate={{ rotate: -360 }} transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}>🐛</motion.span>
                </div>
                <div className="absolute top-0 -right-8 text-xl">
                  <motion.span animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity }}>❌</motion.span>
                </div>
                <div className="absolute top-4 -left-8 text-xl">
                  <motion.span animate={{ y: [0, -5, 0] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}>⚠️</motion.span>
                </div>
              </div>
            </div>

            {/* Error messages */}
            <div className="mt-6 space-y-2 text-left font-mono text-sm">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
                className="flex items-center gap-2 text-red-400"
              >
                <Bug className="w-4 h-4" />
                <span>RateLimitError: You exceeded your current quota</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4 }}
                className="flex items-center gap-2 text-yellow-400"
              >
                <Code className="w-4 h-4" />
                <span>Warning: Context window exceeded (128k tokens)</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.6 }}
                className="flex items-center gap-2 text-orange-400"
              >
                <AlertTriangle className="w-4 h-4" />
                <span>Error: RAG retrieval returned irrelevant chunks</span>
              </motion.div>
            </div>
          </GlassmorphismCard>
        </motion.div>
      </div>
    </section>
  );
}

function GlassmorphismCard({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={`relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-xl ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
