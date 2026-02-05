import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Services from './sections/Services';
import WorkVisuals from './sections/WorkVisuals';
import HowItWorks from './sections/HowItWorks';
import Testimonials from './sections/Testimonials';
import Footer from './sections/Footer';
import { Toaster } from '@/components/ui/sonner';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <WorkVisuals />
        <HowItWorks />
        <Testimonials />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
