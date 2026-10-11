// src/App.jsx
// Root component: shows the splash intro first, then the site with the rain background.
import { useCallback, useState } from "react";
import Splash from "./components/Splash";
import RainBackground from "./components/RainBackground";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { features } from "./config/features";

export default function App() {
  const [introDone, setIntroDone] = useState(false);
  const finishIntro = useCallback(() => setIntroDone(true), []);

  if (!introDone) {
    return <Splash onDone={finishIntro} />;
  }

  return (
    <div className="relative z-10 min-h-screen flex flex-col text-[#1A1F36]">
      <RainBackground />
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