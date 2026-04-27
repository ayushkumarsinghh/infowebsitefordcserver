import { motion } from 'framer-motion';
import { MessageCircle, Gamepad2, Mic, Gift, Sparkles, Shield } from 'lucide-react';

const cards = [
  { icon: MessageCircle, title: 'Active Chats 24/7', desc: 'Nonstop conversations on any topic.' },
  { icon: Gamepad2, title: 'Gaming Squads', desc: 'Find teammates instantly for any game.' },
  { icon: Mic, title: 'Voice Lounges', desc: 'Drop in, chill, and vibe with members.' },
  { icon: Gift, title: 'Giveaways', desc: 'Nitro, games, and exclusive perks.' },
  { icon: Sparkles, title: 'Meme Zones', desc: 'The most unhinged and curated memes.' },
  { icon: Shield, title: 'Private Roles', desc: 'Climb the ranks and earn your status.' },
];

export default function PreviewGrid() {
  return (
    <section id="community" className="pt-20">
      <div className="flex flex-col items-center text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="liquid-glass px-4 py-1.5 rounded-full mb-6"
        >
          <span className="text-xs uppercase tracking-[0.2em] font-medium text-white/80">
            Inside FITOOR
          </span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-heading text-5xl md:text-7xl mb-6 leading-tight"
        >
          More than a server.<br />A digital home.
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, idx) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ y: -5 }}
            className="liquid-glass p-8 rounded-[2rem] group"
          >
            <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
              <card.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-heading mb-3">{card.title}</h3>
            <p className="text-white/60 text-lg leading-relaxed font-light">
              {card.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
