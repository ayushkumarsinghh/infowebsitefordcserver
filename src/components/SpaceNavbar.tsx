import { ArrowUpRight } from 'lucide-react';

export default function SpaceNavbar() {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-8 lg:px-16 flex items-center justify-between pointer-events-none">
      {/* Left Logo */}
      <div className="w-[48px] h-[48px] liquid-glass rounded-full flex items-center justify-center pointer-events-auto">
        <span className="font-heading italic text-white text-2xl lowercase">a</span>
      </div>

      {/* Center Links */}
      <div className="hidden md:flex items-center gap-1.5 liquid-glass rounded-full px-1.5 py-1.5 pointer-events-auto">
        {['Home', 'Voyages', 'Worlds', 'Innovation', 'Plan Launch'].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-white transition-colors"
          >
            {link}
          </a>
        ))}
        <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold font-body flex items-center gap-1.5 whitespace-nowrap hover:bg-white/90 transition-colors ml-1">
          Claim a Spot <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

      {/* Right Spacer */}
      <div className="w-[48px] h-[48px]" />
    </nav>
  );
}
