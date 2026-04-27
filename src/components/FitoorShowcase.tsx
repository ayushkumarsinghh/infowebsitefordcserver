import { motion } from 'framer-motion';
import { useState } from 'react';

function ShowcaseImage({ item }: { item: any }) {
  const [hasError, setHasError] = useState(false);

  if (item.image && !hasError) {
    return (
      <img 
        src={item.image} 
        alt={item.title} 
        onError={() => setHasError(true)}
        className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700"
      />
    );
  }

  return (
    <div className="w-[120px] h-[120px] rounded-full liquid-glass-strong flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-700 overflow-hidden">
      <img src="/logo.gif" alt="f" className="w-full h-full object-cover" />
    </div>
  );
}

const items = [
  {
    title: 'Always Active. Never Dead.',
    text: 'Someone is always online for chats, games, memes, or voice calls. Random chaos is the standard.',
    image: '/showcase-1.png'
  },
  {
    title: 'Built For Real Connections',
    text: 'Meet genuine people and become part of the community. Make friends, not just usernames.',
    image: '/showcase-2.png'
  },
  {
    title: 'Events That Keep You Hooked',
    text: 'Movie nights, tournaments, giveaways, and surprise drops. There is always something happening.',
    image: '/showcase-3.png'
  }
];

export default function FitoorShowcase() {
  return (
    <section id="community" className="py-32 px-8 lg:px-20 space-y-40 bg-black">
      {items.map((item, idx) => {
        const isEven = idx % 2 === 0;
        return (
          <div key={idx} className={`flex flex-col gap-16 items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
            <motion.div 
              initial={{ opacity: 0, x: isEven ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="flex-1 space-y-8 text-center lg:text-left"
            >
              <h2 className="font-heading italic text-white text-5xl md:text-7xl leading-[0.9] tracking-[-3px]">
                {item.title}
              </h2>
              <p className="text-white/50 text-lg md:text-xl font-body font-light max-w-xl">
                {item.text}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: isEven ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="flex-1 w-full"
            >
              <div className="aspect-[16/9] w-full liquid-glass rounded-[2rem] relative overflow-hidden group flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <ShowcaseImage item={item} />
              </div>
            </motion.div>
          </div>
        );
      })}
    </section>
  );
}
