import { motion } from 'framer-motion';
import { Frown, Smile, Heart, Code, Bug, Clock, Search, Zap, GitBranch, Coffee, ShieldCheck, Brain, TrendingUp } from 'lucide-react';

const features = {
  without: {
    title: 'Without Cursor',
    emoji: '😢',
    color: 'from-red-500/20 to-orange-500/20',
    borderColor: 'border-red-500/20',
    items: [
      { icon: Code, text: 'Writes 200 lines manually' },
      { icon: Bug, text: 'Breaks production accidentally' },
      { icon: Clock, text: 'Spends 3 hours fixing TypeScript errors' },
      { icon: Search, text: 'Googles "how to center a div" every week' },
    ],
  },
  with: {
    title: 'With Cursor',
    emoji: '😎',
    color: 'from-green-500/20 to-cyan-500/20',
    borderColor: 'border-green-500/20',
    items: [
      { icon: Zap, text: 'Generates components instantly' },
      { icon: GitBranch, text: 'Refactors like a senior engineer' },
      { icon: Coffee, text: 'Fixes bugs before lunch' },
      { icon: Clock, text: 'Actually leaves office on time' },
    ],
  },
  contribution: {
    title: 'Your Contribution',
    emoji: '❤️',
    color: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'border-purple-500/20',
    items: [
      { icon: Heart, text: 'Gives a fresher confidence' },
      { icon: ShieldCheck, text: 'Saves countless debugging hours' },
      { icon: Brain, text: 'Prevents unnecessary emotional damage' },
      { icon: TrendingUp, text: 'Helps them become productive developers' },
    ],
  },
};

export function Features() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.1),transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Why We Need Your Help
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            See the dramatic difference your donation can make in a fresher's life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <FeatureCard feature={features.without} index={0} />
          <FeatureCard feature={features.with} index={1} />
          <FeatureCard feature={features.contribution} index={2} />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, index }: { feature: typeof features.without; index: number }) {
  const IconComponent = index === 0 ? Frown : index === 1 ? Smile : Heart;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="group relative h-full"
    >
      {/* Glow effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-500`}
      />

      {/* Card */}
      <div
        className={`relative h-full backdrop-blur-xl bg-white/5 border ${feature.borderColor} rounded-3xl p-8 hover:border-opacity-50 transition-all duration-300`}
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <motion.div
            animate={index === 0 ? { rotate: [0, 5, -5, 0] } : undefined}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <IconComponent
              className={`w-8 h-8 ${
                index === 0 ? 'text-red-400' : index === 1 ? 'text-green-400' : 'text-purple-400'
              }`}
            />
          </motion.div>
          <h3 className="text-2xl font-bold text-white">
            {feature.title} <span>{feature.emoji}</span>
          </h3>
        </div>

        {/* Items */}
        <ul className="space-y-4">
          {feature.items.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              className="flex items-start gap-3"
            >
              <item.icon className="w-5 h-5 text-gray-400 mt-0.5 shrink-0" />
              <span className="text-gray-300 leading-relaxed">{item.text}</span>
            </motion.li>
          ))}
        </ul>

        {/* Decorative corner */}
        <div className="absolute top-4 right-4 text-4xl opacity-10">
          {index === 0 ? <Frown className="w-12 h-12" /> : index === 1 ? <Smile className="w-12 h-12" /> : <Heart className="w-12 h-12" />}
        </div>
      </div>
    </motion.div>
  );
}
