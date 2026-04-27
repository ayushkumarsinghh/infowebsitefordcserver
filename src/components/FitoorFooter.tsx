import { motion } from 'framer-motion';
import FadingVideo from './FadingVideo';

export default function FitoorFooter() {
  return (
    <footer id="join" className="relative pt-40 pb-12 overflow-hidden bg-black">
      {/* Background Video */}
      <FadingVideo
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-30 rotate-180"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-[1]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mb-40">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading italic text-white text-7xl md:text-9xl mb-8 tracking-[-5px] leading-[0.8]"
        >
          Ready To Join<br />FITOOR?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/60 text-xl md:text-2xl max-w-2xl mx-auto mb-16 font-body font-light"
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
            className="liquid-glass-strong rounded-full px-12 py-5 text-xl font-semibold text-white hover:scale-105 transition-transform w-full sm:w-auto"
          >
            Join Discord
          </a>
          <button className="px-12 py-5 rounded-full text-xl font-medium text-white hover:bg-white/5 transition-colors border border-white/10 w-full sm:w-auto">
            Explore Server
          </button>
        </motion.div>
        
        <div className="mt-16 text-white/30 tracking-[0.4em] uppercase text-[10px] font-medium">
          https://discord.gg/fitoor
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 border-t border-white/5 pt-12 flex flex-col md:flex-row items-center justify-between text-[11px] text-white/30 uppercase tracking-[0.3em] font-medium">
        <div>© 2026 FITOOR. ALL RIGHTS RESERVED.</div>
        <div className="flex gap-10 mt-8 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Discord</a>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
