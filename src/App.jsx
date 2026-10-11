// Root application component that renders Navbar, all registered feature sections from config/features.js, and Footer.

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { features } from './config/features';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1A1F36]">
      <Navbar />
      <main className="flex-1">
        {features.map((feature) => {
          const SectionComponent = feature.component;
          return <SectionComponent key={feature.id} />;
        })}
      </main>
      <Footer />
    </div>
  );
}
