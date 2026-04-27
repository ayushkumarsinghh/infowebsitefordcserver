import FitoorNavbar from './components/FitoorNavbar';
import FitoorHero from './components/FitoorHero';
import FitoorFeatures from './components/FitoorFeatures';
import FitoorHowItWorks from './components/FitoorHowItWorks';
import FitoorShowcase from './components/FitoorShowcase';
import FitoorStats from './components/FitoorStats';
import FitoorTestimonials from './components/FitoorTestimonials';
import FitoorFooter from './components/FitoorFooter';

// Suppress benign Framer Motion dev warnings about list keys
const originalError = console.error;
console.error = (...args) => {
  if (/framer-motion/.test(args[0])) return;
  originalError(...args);
};

function App() {
  return (
    <div className="relative min-h-screen bg-black">
      <FitoorNavbar />
      <main>
        <FitoorHero />
        <FitoorFeatures />
        <FitoorHowItWorks />
        <FitoorShowcase />
        <FitoorStats />
        <FitoorTestimonials />
      </main>
      <FitoorFooter />
    </div>
  );
}

export default App;
