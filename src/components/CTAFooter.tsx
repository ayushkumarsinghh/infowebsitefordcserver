import { motion } from 'framer-motion';

export default function CTAFooter() {
  return (
    <footer className="relative pt-32 pb-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/bg.png" 
          alt="Cinematic Background" 
          className="w-full h-full object-cover opacity-40 mix-blend-overlay rotate-180"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mb-32">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-6xl md:text-8xl mb-6 text-glow"
        >
          Ready To Join FITOOR?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/60 text-xl max-w-2xl mx-auto mb-12 font-light"
        >
          Your next favorite online community is one click away.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a 
            href="https://discord.gg/fitoor"
            target="_blank"
            rel="noreferrer"
            className="liquid-glass-strong px-10 py-5 rounded-full text-lg font-semibold uppercase tracking-wider hover:scale-105 transition-transform duration-300 w-full sm:w-auto"
          >
            Join Discord
          </a>
          <button className="px-10 py-5 rounded-full text-lg font-medium uppercase tracking-wider hover:bg-white/5 transition-colors duration-300 border border-white/20 w-full sm:w-auto">
            Explore Server
          </button>
        </motion.div>
        
        <div className="mt-12 text-white/40 tracking-widest uppercase text-sm">
          https://discord.gg/fitoor
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-white/40 uppercase tracking-widest">
        <div>© 2026 FITOOR. All rights reserved.</div>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Discord</a>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
