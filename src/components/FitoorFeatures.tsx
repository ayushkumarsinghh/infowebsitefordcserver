import { motion } from 'framer-motion';
import { MessageSquare, Gamepad2, Mic, Gift, Smile, Shield } from 'lucide-react';

const features = [
  { title: 'Active Chats 24/7', desc: 'Nonstop conversations on any topic.', icon: MessageSquare },
  { title: 'Gaming Squads', desc: 'Find teammates instantly for any game.', icon: Gamepad2 },
  { title: 'Voice Lounges', desc: 'Drop in, chill, and vibe with members.', icon: Mic },
  { title: 'Giveaways', desc: 'Nitro, games, and exclusive perks.', icon: Gift },
  { title: 'Meme Zones', desc: 'The most unhinged and curated memes.', icon: Smile },
  { title: 'Private Roles', desc: 'Climb the ranks and earn your status.', icon: Shield },
];

export default function FitoorFeatures() {
  return (
    <section id="features" className="relative py-32 bg-black px-8 lg:px-20">
      <div className="flex flex-col items-center text-center mb-20">
        <div className="text-sm font-body text-white/50 mb-6 uppercase tracking-[0.2em]">// Features</div>
        <h2 className="font-heading italic text-white text-6xl md:text-8xl leading-[0.9] tracking-[-3px]">
          Digital Home.<br />Evolved.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {features.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            className="liquid-glass rounded-[1.5rem] p-10 flex flex-col hover:bg-white/[0.03] transition-all group"
          >
            <div className="w-[56px] h-[56px] liquid-glass rounded-[1rem] flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
              <item.icon className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-heading italic text-white text-3xl tracking-[-1px] mb-4">
              {item.title}
            </h3>
            <p className="text-white/60 font-body font-light leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
