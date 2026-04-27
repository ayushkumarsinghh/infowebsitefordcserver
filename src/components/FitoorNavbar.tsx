import { ArrowUpRight } from 'lucide-react';

export default function FitoorNavbar() {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-8 lg:px-16 flex items-center justify-between pointer-events-none">
      {/* Left Logo */}
      <div className="flex items-center gap-4 pointer-events-auto">
        <div className="w-[48px] h-[48px] liquid-glass rounded-full flex items-center justify-center overflow-hidden">
          <img src="/logo.gif" alt="Fitoor" className="w-full h-full object-cover" />
        </div>
        <span className="font-heading italic text-2xl tracking-widest text-white uppercase">Fitoor</span>
      </div>

      {/* Center Links */}
      <div className="hidden md:flex items-center gap-1.5 liquid-glass rounded-full px-1.5 py-1.5 pointer-events-auto">
        {['Home', 'Features', 'Community', 'Events', 'Join'].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-white transition-colors"
          >
            {link}
          </a>
        ))}
        <a 
          href="https://discord.gg/fitoor"
          target="_blank"
          className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold font-body flex items-center gap-1.5 whitespace-nowrap hover:bg-white/90 transition-colors ml-1"
        >
          Join Now <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>

      {/* Right Spacer */}
      <div className="w-[100px] hidden md:block" />
    </nav>
  );
}
