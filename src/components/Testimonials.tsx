import { motion } from 'framer-motion';

const testimonials = [
  { quote: "Joined for fun, stayed for the people.", author: "Aryan" },
  { quote: "Best late-night VC community online.", author: "Sana" },
  { quote: "Honestly addictive in the best way.", author: "Kian" },
];

export default function Testimonials() {
  return (
    <section className="py-20 text-center">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-5xl md:text-7xl mb-16"
      >
        What Members Say
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="liquid-glass p-10 rounded-[2rem] hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="text-4xl font-heading text-white/20 mb-6">"</div>
            <p className="text-xl font-light mb-8 leading-relaxed">
              {t.quote}
            </p>
            <div className="flex items-center gap-4 mt-auto">
              <div className="w-10 h-10 rounded-full bg-white/10" />
              <div className="font-medium uppercase tracking-wider text-sm">
                — {t.author}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
