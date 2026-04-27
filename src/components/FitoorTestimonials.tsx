import { motion } from 'framer-motion';

const reviews = [
  { text: "Joined for fun, stayed for the people.", author: "Aryan" },
  { text: "Best late-night VC community online.", author: "Sana" },
  { text: "Honestly addictive in the best way.", author: "Kian" },
];

export default function FitoorTestimonials() {
  return (
    <section id="events" className="py-32 px-8 lg:px-20 text-center bg-black">
      <div className="text-sm font-body text-white/50 mb-6 uppercase tracking-[0.2em]">// Community Voice</div>
      <h2 className="font-heading italic text-white text-6xl md:text-8xl tracking-[-4px] mb-20 leading-[0.85]">
        What Members Say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto text-left">
        {reviews.map((r, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            className="liquid-glass p-12 rounded-[2.5rem] hover:scale-[1.02] transition-all group"
          >
            <div className="text-5xl font-heading italic text-white/10 mb-8 select-none">"</div>
            <p className="text-xl md:text-2xl font-body font-light text-white/90 leading-relaxed mb-10">
              {r.text}
            </p>
            <div className="flex items-center gap-4 border-t border-white/5 pt-8">
              <div className="w-10 h-10 rounded-full bg-white/5" />
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-white/50">— {r.author}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
