import { motion } from 'framer-motion';

const stats = [
  { value: '5000+', label: 'Messages Daily' },
  { value: '200+', label: 'Voice Hours Weekly' },
  { value: '1000+', label: 'Members' },
  { value: '50+', label: 'Events Hosted' },
];

export default function Stats() {
  return (
    <section className="py-12">
      <div className="liquid-glass rounded-[3rem] p-12 lg:p-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent pointer-events-none" />
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
          {stats.map((stat, idx) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="font-heading text-5xl md:text-7xl mb-2">{stat.value}</div>
              <div className="text-sm md:text-base uppercase tracking-widest text-white/50">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
