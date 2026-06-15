import { motion } from 'framer-motion';
import { Heart, Sparkles, Github, Twitter, Linkedin } from 'lucide-react';

const hashtags = [
  '#SupportGenAI',
  '#FuelTheTokens',
  '#BuildWithAI',
];

export function Footer() {
  return (
    <footer className="py-16 px-4 relative overflow-hidden border-t border-gray-800">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-gray-950" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {/* Animated heart */}
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="inline-block text-4xl mb-4"
          >
            <Heart className="w-10 h-10 text-red-500 mx-auto" fill="#ef4444" />
          </motion.div>

          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Made with <span className="text-red-400">❤️</span>, <span className="text-amber-400">☕</span>, and a lot of tokens.
          </h3>
          <p className="text-gray-400 text-lg">
            Support Gen AI developers building the future.
          </p>
        </motion.div>

        {/* Hashtag badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {hashtags.map((tag, index) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-full text-sm font-medium text-purple-300 cursor-default"
            >
              <Sparkles className="w-3 h-3 inline mr-1" />
              {tag}
            </motion.span>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2024 Gen AI Developer Fund
          </p>

          {/* Social links placeholder */}
          <div className="flex items-center gap-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-gray-700 transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
          </div>
        </div>

        {/* Easter egg */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="text-center mt-8 text-gray-600 text-xs"
        >
          {/* Hidden message that appears after scrolling */}
          <span className="font-mono">{'/* Built with LLMs, funded by you */'}</span>
        </motion.p>
      </div>
    </footer>
  );
}
