import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Services from './sections/Services';
import WorkVisuals from './sections/WorkVisuals';
import HowItWorks from './sections/HowItWorks';
import Testimonials from './sections/Testimonials';
import CTABanner from './sections/CTABanner';
import Footer from './sections/Footer';
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
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}

export default App;
