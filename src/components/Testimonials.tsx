import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    emoji: '🤖',
    quote: "Before support, I rationed tokens like water in a desert. Now I prompt freely.",
    author: 'Jay Dinesh Deshmukh',
    role: 'Gen AI Developer',
  },
  {
    emoji: '🧑‍💼',
    quote: "I watched Jay demo an agent that actually worked. Turns out, coffee and API credits help.",
    author: 'Product Manager',
    role: 'AI Product Team',
  },
  {
    emoji: '😂',
    quote: "My family finally understands what I do. 'He talks to robots' is close enough.",
    author: 'Jay Dinesh Deshmukh',
    role: 'Gen AI Developer',
  },
  {
    emoji: '👴',
    quote: "I've built software for 10 years. Gen AI is the hardest and most exciting thing I've done.",
    author: 'Jay Dinesh Deshmukh',
    role: 'Gen AI Developer',
  },
  {
    emoji: '👩‍💻',
    quote: "I used to panic at rate limit errors. Now I just ship another agent.",
    author: 'Fellow AI Builder',
    role: 'ML Engineer',
  },
  {
    emoji: '🧙',
    quote: "People think Jay's a wizard. Little do they know, it's just good prompts and your donations.",
    author: 'Tech Lead',
    role: 'AI Platform Team',
  },
];

export function Testimonials() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-purple-950/10 to-gray-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(6,182,212,0.1),transparent_50%)]" />

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
              Real Stories
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            From the Gen AI trenches — real stories from building with LLMs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateY: 10 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group perspective"
    >
      <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 h-full transform-style-3d transition-all duration-300 hover:border-purple-500/30">
        {/* Quote icon */}
        <Quote className="absolute top-4 right-4 w-8 h-8 text-purple-500/20 group-hover:text-purple-500/40 transition-colors" />

        {/* Emoji */}
        <motion.div
          whileHover={{ scale: 1.2, rotate: 10 }}
          className="text-4xl mb-4"
        >
          {testimonial.emoji}
        </motion.div>

        {/* Quote */}
        <p className="text-gray-200 text-lg mb-6 leading-relaxed italic">
          "{testimonial.quote}"
        </p>

        {/* Author */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-white font-bold">
            {testimonial.author[0]}
          </div>
          <div>
            <p className="text-white font-medium">{testimonial.author}</p>
            <p className="text-gray-500 text-sm">{testimonial.role}</p>
          </div>
        </div>

        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </div>
    </motion.div>
  );
}
