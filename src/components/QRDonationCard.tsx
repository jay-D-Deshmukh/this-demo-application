import { motion } from 'framer-motion';
import { Smartphone, QrCode, Coffee, Info } from 'lucide-react';

interface QRDonationCardProps {
  onDonateClick: () => void;
}

export function QRDonationCard({ onDonateClick }: QRDonationCardProps) {
  return (
    <section id="donate" className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-purple-950/20 to-gray-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.2),transparent_60%)]" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [-5, 5, -5]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block text-5xl mb-4"
          >
            👼
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Become a Fresher's Guardian Angel
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Scan the QR code below. Your contribution could save a junior developer from writing another CRUD API manually.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Main Card */}
          <div className="relative backdrop-blur-xl bg-gradient-to-br from-purple-500/10 via-white/5 to-cyan-500/10 border border-purple-500/20 rounded-3xl p-8 md:p-12 overflow-hidden">
            {/* Decorative top gradient */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500" />

            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* QR Code Section */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative shrink-0"
              >
                <div className="relative p-4 bg-white rounded-2xl shadow-xl shadow-purple-500/20">
                  <div className="w-48 h-48 md:w-56 md:h-56 flex items-center justify-center bg-white">
                    <QRPlaceholder />
                  </div>
                </div>

                {/* Floating emojis around QR */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-4 -left-4 text-2xl"
                >
                  💜
                </motion.div>
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                  className="absolute -bottom-4 -right-4 text-2xl"
                >
                  ✨
                </motion.div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute -top-2 -right-2 text-xl"
                >
                  🚀
                </motion.div>
              </motion.div>

              {/* Details Section */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                  <Smartphone className="w-5 h-5 text-cyan-400" />
                  <span className="text-cyan-400 font-medium">PhonePe / GPay / Paytm</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Scan to Donate
                </h3>

                {/* UPI ID */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg mb-6">
                  <span className="text-gray-400 text-sm">UPI ID:</span>
                  <span className="text-white font-mono">your-upi-id@phonepe</span>
                </div>

                {/* Fun stat */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-xl p-4 mb-6"
                >
                  <p className="text-gray-300">
                    Every <span className="text-purple-400 font-bold">₹99</span> donated equals one less{' '}
                    <code className="bg-gray-800 px-2 py-0.5 rounded text-cyan-400 text-sm">console.log</code> in production.
                  </p>
                </motion.div>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(168, 85, 247, 0.5)' }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onDonateClick}
                  className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold text-white shadow-lg shadow-purple-500/25 flex items-center justify-center gap-2"
                >
                  <Coffee className="w-5 h-5" />
                  I've Donated! 🎉
                </motion.button>
              </div>
            </div>

            {/* Disclaimer */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8 pt-6 border-t border-gray-700/50"
            >
              <div className="flex items-start gap-2 justify-center text-center">
                <Info className="w-4 h-4 text-gray-500 mt-0.5 shrink-0" />
                <p className="text-gray-500 text-sm italic">
                  *100% of donations go directly toward reducing developer suffering. No project managers were harmed during the making of this campaign.
                </p>
              </div>
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute top-16 left-4 text-4xl opacity-10">❤️</div>
            <div className="absolute bottom-16 right-4 text-4xl opacity-10">🙏</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function QRPlaceholder() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <QrCode className="w-32 h-32 text-gray-300" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-gray-400 text-xs text-center mt-20">
          <img
            src="/images/phonepe-qr.png"
            alt="PhonePe QR Code"
            className="w-full h-full object-contain"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </span>
      </div>
    </div>
  );
}
