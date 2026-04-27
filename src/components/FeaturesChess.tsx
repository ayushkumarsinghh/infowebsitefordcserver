import { motion } from 'framer-motion';

const features = [
  {
    title: 'Always Active. Never Dead.',
    desc: 'Someone is always online. Voice chats, memes, debates, gaming, random chaos.',
  },
  {
    title: 'Built For Real Connections',
    desc: 'Make genuine friends, not dead usernames. Community energy is unmatched.',
  },
  {
    title: 'Events That Keep You Hooked',
    desc: 'Movie nights, tournaments, giveaways, community battles, surprise drops.',
  }
];

export default function FeaturesChess() {
  return (
    <section id="features" className="py-20 space-y-32">
      {features.map((feature, idx) => {
        const isEven = idx % 2 === 0;
        return (
          <div key={idx} className={`flex flex-col gap-12 items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
            
            <motion.div 
              initial={{ opacity: 0, x: isEven ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1 space-y-6 text-center lg:text-left"
            >
              <h2 className="font-heading text-4xl md:text-6xl leading-tight">
                {feature.title}
              </h2>
              <p className="text-white/60 text-lg md:text-xl font-light">
                {feature.desc}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: isEven ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1 w-full relative"
            >
              <div className="aspect-[4/3] w-full liquid-glass rounded-[2rem] p-6 flex flex-col justify-end overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Mockup UI Elements */}
                <div className="space-y-3 relative z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="h-12 w-3/4 liquid-glass-strong rounded-xl" />
                  <div className="h-12 w-1/2 liquid-glass-strong rounded-xl opacity-80" />
                  <div className="h-12 w-5/6 liquid-glass-strong rounded-xl opacity-60" />
                </div>
              </div>
            </motion.div>

          </div>
        );
      })}
    </section>
  );
}
