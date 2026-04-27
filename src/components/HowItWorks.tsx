import { motion } from 'framer-motion';

const steps = [
  { step: '01', title: 'Join Server', desc: 'Click the link and enter the world of FITOOR.' },
  { step: '02', title: 'Pick Roles', desc: 'Customize your profile and choose your interests.' },
  { step: '03', title: 'Meet Your People', desc: 'Jump into an active chat or voice lounge.' },
];

export default function HowItWorks() {
  return (
    <section className="relative py-24 rounded-[3rem] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/bg.png" 
          alt="Cinematic Background" 
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-5xl md:text-7xl mb-4"
        >
          Enter. Connect. Belong.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/60 text-lg md:text-xl max-w-2xl mb-20 font-light"
        >
          Within minutes, you'll feel like you've been here forever.
        </motion.p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 w-full max-w-5xl mb-16">
          {steps.map((s, idx) => (
            <motion.div 
              key={s.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="flex-1 flex flex-col items-center text-center relative w-full"
            >
              <div className="w-20 h-20 rounded-full liquid-glass flex items-center justify-center font-heading text-3xl mb-6 shadow-2xl">
                {s.step}
              </div>
              <h3 className="text-2xl font-heading mb-3">{s.title}</h3>
              <p className="text-white/60 text-base font-light">
                {s.desc}
              </p>
              
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-full h-[1px] bg-gradient-to-r from-white/20 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.a 
          href="https://discord.gg/fitoor"
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="liquid-glass-strong px-10 py-4 rounded-full text-lg font-semibold uppercase tracking-wider hover:scale-105 transition-transform duration-300"
        >
          Join Free Now
        </motion.a>
      </div>
    </section>
  );
}
