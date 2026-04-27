import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image / Video wrapper */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/bg.png" 
          alt="Cinematic Background" 
          className="w-full h-full object-cover opacity-60"
        />
        {/* Gradients & Blurs */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/50 to-black/90" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="liquid-glass px-4 py-1.5 rounded-full mb-8 flex items-center gap-3"
        >
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span className="text-xs uppercase tracking-[0.2em] font-medium text-white/80">
            New • The Ultimate Discord Experience
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-6xl md:text-8xl lg:text-9xl mb-6 text-glow leading-[0.9]"
        >
          Where Chilling<br />Becomes A Habit
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-xl text-white/60 max-w-2xl mb-12 font-light"
        >
          Join FITOOR — a premium Discord server for voice chats, gaming, fun events, late-night talks, friendships, and nonstop vibes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <a 
            href="https://discord.gg/fitoor"
            target="_blank"
            rel="noreferrer"
            className="liquid-glass-strong px-8 py-4 rounded-full text-base font-semibold uppercase tracking-wider hover:scale-105 transition-transform duration-300 w-full sm:w-auto text-center"
          >
            Join Discord
          </a>
          <button className="flex items-center gap-3 px-8 py-4 rounded-full text-base font-medium uppercase tracking-wider hover:bg-white/5 transition-colors duration-300 group w-full sm:w-auto justify-center">
            <span className="w-10 h-10 rounded-full liquid-glass flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Play className="w-4 h-4 ml-1" />
            </span>
            Watch Trailer
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 flex items-center gap-4"
        >
          <div className="flex -space-x-4">
            {[1,2,3,4].map(i => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-white/10 backdrop-blur-md flex items-center justify-center text-xs">
                {i}
              </div>
            ))}
          </div>
          <p className="text-sm text-white/50 uppercase tracking-widest">
            1000+ members already inside
          </p>
        </motion.div>
      </div>
    </section>
  );
}
