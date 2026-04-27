import { motion } from 'framer-motion';
import { ArrowUpRight, Play, Clock, Globe } from 'lucide-react';
import FadingVideo from './FadingVideo';
import BlurText from './BlurText';

const entrance = {
  initial: { filter: 'blur(10px)', opacity: 0, y: 20 },
  animate: { filter: 'blur(0px)', opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

export default function SpaceHero() {
  return (
    <section className="relative h-screen bg-black overflow-hidden flex flex-col">
      {/* Background Video */}
      <FadingVideo
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4"
        className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top z-0"
        style={{ width: "120%", height: "120%" }}
      />

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center text-center pt-24 px-4">
        {/* Badge */}
        <motion.div
          {...entrance}
          transition={{ ...entrance.transition, delay: 0.4 }}
          className="liquid-glass rounded-full flex items-center p-1 mb-8"
        >
          <span className="bg-white text-black px-3 py-1 text-xs font-semibold rounded-full mr-3">New</span>
          <span className="text-sm text-white/90 pr-3 font-body">Maiden Crewed Voyage to Mars Arrives 2026</span>
        </motion.div>

        {/* Headline */}
        <BlurText 
          text="Venture Past Our Sky Across the Universe"
          className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.8] max-w-2xl justify-center tracking-[-4px]"
        />

        {/* Subheading */}
        <motion.p
          {...entrance}
          transition={{ ...entrance.transition, delay: 0.8 }}
          className="mt-6 text-sm md:text-base text-white max-w-2xl font-body font-light leading-tight"
        >
          Discover the universe in ways once unimaginable. Our pioneering vessels and breakthrough engineering bring deep-space exploration within reach—secure and extraordinary.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...entrance}
          transition={{ ...entrance.transition, delay: 1.1 }}
          className="flex items-center gap-6 mt-10"
        >
          <button className="liquid-glass-strong rounded-full px-8 py-3 text-sm font-medium text-white flex items-center gap-2 hover:scale-105 transition-transform">
            Start Your Voyage <ArrowUpRight className="h-5 w-5" />
          </button>
          <button className="flex items-center gap-2 text-sm font-medium text-white group">
            View Liftoff <Play className="h-4 w-4 fill-current group-hover:scale-110 transition-transform" />
          </button>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          {...entrance}
          transition={{ ...entrance.transition, delay: 1.3 }}
          className="flex items-stretch gap-4 mt-12"
        >
          <div className="liquid-glass p-5 w-[220px] rounded-[1.25rem] text-left">
            <Clock className="w-[28px] h-[28px] text-white stroke-[1.5]" />
            <div className="mt-4 font-heading italic text-white text-4xl tracking-[-1px] leading-none">34.5 Min</div>
            <div className="text-xs text-white font-body font-light mt-2 uppercase tracking-wider">Average Videos Watch Time</div>
          </div>
          <div className="liquid-glass p-5 w-[220px] rounded-[1.25rem] text-left">
            <Globe className="w-[28px] h-[28px] text-white stroke-[1.5]" />
            <div className="mt-4 font-heading italic text-white text-4xl tracking-[-1px] leading-none">2.8B+</div>
            <div className="text-xs text-white font-body font-light mt-2 uppercase tracking-wider">Users Across the Globe</div>
          </div>
        </motion.div>
      </div>

      {/* Partners */}
      <motion.div
        {...entrance}
        transition={{ ...entrance.transition, delay: 1.4 }}
        className="relative z-10 flex flex-col items-center gap-6 pb-12"
      >
        <div className="liquid-glass rounded-full px-4 py-1.5 text-[10px] font-medium text-white/60 uppercase tracking-[0.2em]">
          Collaborating with top aerospace pioneers globally
        </div>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20">
          {['Aeon', 'Vela', 'Apex', 'Orbit', 'Zeno'].map(name => (
            <span key={name} className="font-heading italic text-white text-2xl md:text-3xl tracking-tight opacity-80 hover:opacity-100 transition-opacity">
              {name}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
