import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl liquid-glass rounded-full px-6 py-4 flex items-center justify-between"
    >
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black font-heading font-bold text-xl">
          F
        </div>
        <span className="font-heading text-2xl tracking-wide uppercase">Fitoor</span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-widest text-white/70 uppercase">
        <a href="#home" className="hover:text-white transition-colors duration-300">Home</a>
        <a href="#features" className="hover:text-white transition-colors duration-300">Features</a>
        <a href="#community" className="hover:text-white transition-colors duration-300">Community</a>
        <a href="#events" className="hover:text-white transition-colors duration-300">Events</a>
      </div>

      <a 
        href="https://discord.gg/fitoor" 
        target="_blank" 
        rel="noreferrer"
        className="liquid-glass-strong px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider hover:scale-105 transition-transform duration-300"
      >
        Join Now
      </a>
    </motion.nav>
  );
}
