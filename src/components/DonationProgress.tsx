import { motion } from 'framer-motion';
import { Target, Coins, Pizza } from 'lucide-react';

const goalAmount = 25000;
const currentAmount = 8500;

export function DonationProgress() {
  const progress = (currentAmount / goalAmount) * 100;
  const remaining = goalAmount - currentAmount;
  const developersNeeded = Math.ceil(remaining / 499);

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.15),transparent_50%)]" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Fundraising Progress
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12"
        >
          {/* Goal Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Target className="w-8 h-8 text-purple-400" />
              <div>
                <p className="text-gray-400 text-sm">Cursor Fund Goal</p>
                <p className="text-2xl md:text-3xl font-bold text-white">₹25,000</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Coins className="w-8 h-8 text-yellow-400" />
              <div className="text-right">
                <p className="text-gray-400 text-sm">Current Raised</p>
                <p className="text-2xl md:text-3xl font-bold text-white">
                  ₹{currentAmount.toLocaleString()} <span className="text-gray-500 text-lg">/ ₹{goalAmount.toLocaleString()}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="relative mb-8">
            <div className="h- md:h-8 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${progress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
                className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full relative"
              >
                {/* Animated shine */}
                <motion.div
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                />

                {/* Percentage label */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2 }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-white font-bold text-xs md:text-sm"
                >
                  {Math.round(progress)}%
                </motion.div>
              </motion.div>
            </div>

            {/* Milestone markers */}
            <div className="relative h-4 mt-2">
              {[25, 50, 75, 100].map((milestone) => (
                <div
                  key={milestone}
                  className="absolute top-0 transform -translate-x-1/2 text-xs text-gray-500"
                  style={{ left: `${milestone}%` }}
                >
                  <div className="w-px h-2 bg-gray-600 mx-auto mb-1" />
                  ₹{((goalAmount * milestone) / 100 / 1000).toFixed(0)}k
                </div>
              ))}
            </div>
          </div>

          {/* Fun Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-3 justify-center p-4 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl"
          >
            <Pizza className="w-6 h-6 text-yellow-400 shrink-0" />
            <p className="text-gray-300 text-sm md:text-base">
              Only <span className="text-yellow-400 font-bold">{developersNeeded}</span> more developers need to skip one weekend pizza order to save a fresher.
            </p>
          </motion.div>

          {/* Decorative elements */}
          <div className="absolute top-4 left-8 text-6xl opacity-5">🎯</div>
          <div className="absolute bottom-4 right-8 text-6xl opacity-5">💰</div>
        </motion.div>
      </div>
    </section>
  );
}
