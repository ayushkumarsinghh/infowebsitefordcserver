import { motion } from 'framer-motion';

const stats = [
  { value: '5000+', label: 'Messages Daily' },
  { value: '200+', label: 'Voice Hours Weekly' },
  { value: '1000+', label: 'Members' },
  { value: '50+', label: 'Events Hosted' },
];

export default function FitoorStats() {
  return (
    <section className="py-24 px-8">
      <div className="max-w-7xl mx-auto liquid-glass rounded-[3rem] p-16 lg:p-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/[0.03] to-transparent pointer-events-none" />
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 relative z-10">
          {stats.map((stat, idx) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="font-heading italic text-white text-5xl md:text-7xl mb-4 tracking-[-2px]">{stat.value}</div>
              <div className="text-xs md:text-sm uppercase tracking-[0.3em] text-white/40 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
