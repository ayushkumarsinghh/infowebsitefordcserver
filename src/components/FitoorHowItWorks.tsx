import { motion } from 'framer-motion';
import FadingVideo from './FadingVideo';

const steps = [
  { id: '01', title: 'Join Server', desc: 'Click the link and enter the world of FITOOR.' },
  { id: '02', title: 'Pick Roles', desc: 'Customize your profile and choose your interests.' },
  { id: '03', title: 'Meet Your People', desc: 'Jump into an active chat or voice lounge.' },
];

export default function FitoorHowItWorks() {
  return (
    <section className="relative min-h-[80vh] bg-black overflow-hidden flex flex-col items-center justify-center py-24 px-8">
      {/* Background Video */}
      <FadingVideo
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_094631_d30ab262-45ee-4b7d-99f3-5d5848c8ef13.mp4"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-40"
      />

      <div className="relative z-10 w-full max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="font-heading italic text-white text-6xl md:text-8xl tracking-[-4px] leading-[0.85] mb-6">
            Enter. Connect. Belong.
          </h2>
          <p className="text-white/60 text-lg font-body font-light">Within minutes, you'll feel like you've been here forever.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 liquid-glass rounded-full flex items-center justify-center font-heading text-4xl italic mb-8 group-hover:scale-110 transition-transform">
                {step.id}
              </div>
              <h3 className="font-heading italic text-white text-3xl mb-4">{step.title}</h3>
              <p className="text-white/50 font-body font-light leading-relaxed max-w-[25ch]">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-20">
          <a 
            href="https://discord.gg/fitoor"
            target="_blank"
            className="liquid-glass-strong rounded-full px-12 py-5 text-lg font-semibold text-white hover:scale-105 transition-transform"
          >
            Join Free Now
          </a>
        </div>
      </div>
    </section>
  );
}
