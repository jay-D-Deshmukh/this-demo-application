import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    emoji: '👨‍💻',
    quote: "Before Cursor, I wrote nested loops. Now I write prompts.",
    author: 'Anonymous Fresher',
    role: 'Junior Developer',
  },
  {
    emoji: '🧑‍💼',
    quote: "I reviewed 47 fewer PRs this week after buying Cursor for my team.",
    author: 'Team Lead',
    role: 'Frontend Lead',
  },
  {
    emoji: '😂',
    quote: "My mom finally thinks I'm good at coding.",
    author: 'Junior Developer',
    role: 'Full Stack Intern',
  },
  {
    emoji: '👴',
    quote: "I've been coding for 10 years. Cursor made me feel like a junior again, but in a good way.",
    author: 'Senior Developer',
    role: 'Staff Engineer',
  },
  {
    emoji: '👩‍💻',
    quote: "I used to cry during code reviews. Now I just smile and press Tab.",
    author: 'SDE-1',
    role: 'Backend Developer',
  },
  {
    emoji: '🧙',
    quote: "My team thinks I'm a wizard. Little do they know, it's just Cursor.",
    author: 'Tech Lead',
    role: 'Solutions Architect',
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
            From developers who've been saved by Cursor AI
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
