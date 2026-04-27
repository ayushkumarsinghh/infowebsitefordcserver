import { motion } from 'framer-motion';
import FadingVideo from './FadingVideo';

const cards = [
  {
    title: 'AI Scenery',
    desc: 'AI analyzes your product to create indistinguishable natural environments — from Icelandic cliffs to misty forests.',
    icon: "M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21H5Zm1-4h12l-3.75-5-3 4L9 13l-3 4Z",
    tags: ['Natural Context', 'Photo Realism', 'Infinite Settings', 'Eco-Vibe']
  },
  {
    title: 'Batch Production',
    desc: 'Style your entire product line in minutes. Create a unified visual identity for catalogues and social media without weeks of retouching.',
    icon: "M4 6.47 5.76 10H20v8H4V6.47M22 4h-4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.89-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4Z",
    tags: ['Scale Fast', 'Visual Consistency', 'Time Saver', 'Ready to Post']
  },
  {
    title: 'Smart Lighting',
    desc: 'Automatic lighting and material adjustment. Achieve flawless integration with realistic shadows and sunlight.',
    icon: "M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1Zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7Z",
    tags: ['Ray Tracing', 'Physical Shadows', 'Studio Quality', 'Sunlight Sync']
  }
];

export default function Capabilities() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex flex-col">
      {/* Background Video */}
      <FadingVideo
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_094631_d30ab262-45ee-4b7d-99f3-5d5848c8ef13.mp4"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Content */}
      <div className="relative z-10 px-8 md:px-16 lg:px-20 pt-32 pb-20 flex flex-col min-h-screen">
        {/* Header */}
        <div className="mb-auto">
          <div className="text-sm font-body text-white/80 mb-6 uppercase tracking-[0.2em]">// Capabilities</div>
          <h2 className="font-heading italic text-white text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-3px]">
            Production<br />evolved
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {cards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="liquid-glass rounded-[1.25rem] p-8 min-h-[400px] flex flex-col hover:bg-white/[0.03] transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="w-[44px] h-[44px] liquid-glass rounded-[0.75rem] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d={card.icon} />
                  </svg>
                </div>
                <div className="flex flex-wrap justify-end gap-1.5 max-w-[75%]">
                  {card.tags.map(tag => (
                    <span key={tag} className="liquid-glass rounded-full px-2.5 py-1 text-[10px] text-white/70 font-body whitespace-nowrap">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-auto">
                <h3 className="font-heading italic text-white text-3xl md:text-4xl tracking-[-1px] leading-none">
                  {card.title}
                </h3>
                <p className="mt-4 text-sm text-white/80 font-body font-light leading-relaxed max-w-[32ch]">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
