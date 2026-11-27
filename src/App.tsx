import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import StudyProgram from './components/StudyProgram';
import WhyUs from './components/WhyUs';
import Info from './components/Info';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-offwhite">
      <Navbar />
      <main>
        <Hero />
        <About />
        <StudyProgram />
        <WhyUs />
        <Info />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
