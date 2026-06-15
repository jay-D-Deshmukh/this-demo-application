import { motion } from 'framer-motion';
import { useCountUp } from '../hooks/useCountUp';

const stats = [
  { emoji: '😭', label: 'of freshers still use Stack Overflow copy-paste', value: 97, suffix: '%' },
  { emoji: '🐛', label: 'bugs could have been prevented with Cursor', value: 12483, suffix: '' },
  { emoji: '☕', label: 'cups of coffee wasted debugging semicolons', value: 4219, suffix: '' },
  { emoji: '💔', label: 'of junior developers cried after their first merge conflict', value: 73, suffix: '%' },
];

export function Stats() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-purple-950/10 to-gray-950" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              The Suffering is Real
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            These aren't just numbers. They're cries for help from developers who haven't discovered Cursor yet.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const { count, ref } = useCountUp({ end: stat.value, duration: 2500 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 h-full">
        <div className="text-5xl mb-4">{stat.emoji}</div>
        <div className="mb-2">
          <motion.span
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
          >
            {count.toLocaleString()}
          </motion.span>
          <span className="text-3xl font-bold text-purple-400 ml-1">{stat.suffix}</span>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">{stat.label}</p>
      </div>
    </motion.div>
  );
}
