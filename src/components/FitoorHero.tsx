import { motion } from 'framer-motion';
import { ArrowUpRight, Play } from 'lucide-react';
import FadingVideo from './FadingVideo';
import BlurText from './BlurText';

const entrance = {
  initial: { filter: 'blur(10px)', opacity: 0, y: 20 },
  animate: { filter: 'blur(0px)', opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
};

export default function FitoorHero() {
  return (
    <section id="home" className="relative h-screen bg-black overflow-hidden flex flex-col">
      {/* Cinematic Background Video */}
      <FadingVideo
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4"
        className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top z-0 opacity-60"
        style={{ width: "120%", height: "120%" }}
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black z-[1]" />

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center text-center pt-32 px-4">
        {/* Badge */}
        <motion.div
          {...entrance}
          transition={{ ...entrance.transition, delay: 0.4 }}
          className="liquid-glass rounded-full flex items-center p-1 mb-10"
        >
          <span className="bg-white text-black px-3 py-1 text-xs font-semibold rounded-full mr-3">New</span>
          <span className="text-sm text-white/90 pr-3 font-body">The Ultimate Discord Experience</span>
        </motion.div>

        {/* Headline */}
        <BlurText 
          text="Where Chilling Becomes A Habit"
          className="text-6xl md:text-8xl lg:text-[7rem] font-heading italic text-white leading-[0.85] max-w-4xl justify-center tracking-[-4px]"
        />

        {/* Subheading */}
        <motion.p
          {...entrance}
          transition={{ ...entrance.transition, delay: 0.8 }}
          className="mt-8 text-base md:text-xl text-white/70 max-w-2xl font-body font-light leading-snug"
        >
          Join FITOOR, a premium Discord community for gaming, voice chats, friendships, fun events, and nonstop vibes.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...entrance}
          transition={{ ...entrance.transition, delay: 1.1 }}
          className="flex items-center gap-6 mt-12"
        >
          <a 
            href="https://discord.gg/fitoor"
            target="_blank"
            className="liquid-glass-strong rounded-full px-10 py-4 text-base font-semibold text-white flex items-center gap-2 hover:scale-105 transition-transform"
          >
            Join Discord <ArrowUpRight className="h-5 w-5" />
          </a>
          <button className="flex items-center gap-2 text-base font-medium text-white group">
            Explore Community <Play className="h-4 w-4 fill-current group-hover:scale-110 transition-transform" />
          </button>
        </motion.div>

        {/* Trust Line */}
        <motion.div
          {...entrance}
          transition={{ ...entrance.transition, delay: 1.3 }}
          className="mt-16 flex items-center gap-4"
        >
          <div className="flex -space-x-4">
            {[1,2,3,4].map(i => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-white/10 backdrop-blur-md flex items-center justify-center text-[10px] font-bold">
                {i}
              </div>
            ))}
          </div>
          <p className="text-xs text-white/40 uppercase tracking-[0.2em] font-medium">
            1000+ members already inside
          </p>
        </motion.div>
      </div>
    </section>
  );
}
