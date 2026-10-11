// Overview section introducing the mission, resources, and collaborative spirit of the LICET FabLab.

import { Cpu, Lightbulb, Wrench } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';

export default function Overview() {
  const pillars = [
    {
      number: '01',
      title: 'Digital Fabrication Suite',
      description:
        'Equipped with precision 3D printers, large-format CO2 laser cutters, and CNC machines for translating CAD models into physical parts.',
      icon: Wrench,
    },
    {
      number: '02',
      title: 'Electronics Workstations',
      description:
        'Dedicated benches for circuit building, soldering, microcontroller programming, and hardware debugging.',
      icon: Cpu,
    },
    {
      number: '03',
      title: 'Collaborative Ideation Space',
      description:
        'The Thinking Corner brings students and faculty together across engineering disciplines to brainstorm and prototype real-world solutions.',
      icon: Lightbulb,
    },
  ];

  return (
    <section id="overview" className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Main Overview Statement */}
          <div className="lg:col-span-6">
            <SectionTitle
              title="About the LICET FabLab"
              subtitle="A campus ecosystem engineered for hands-on learning, rapid experimentation, and cross-disciplinary product development."
            />

            <div className="rounded-2xl bg-[#F4F7FF] border border-[#4169E1]/15 p-6 sm:p-8">
              <p className="text-base sm:text-lg leading-relaxed text-[#1A1F36]">
                The FabLab at LICET is a dynamic hub for innovation and
                creativity. Equipped with 3D printers, laser cutters, CNC
                machines, and electronics workstations, it gives students and
                faculty the resources to turn ideas into reality. The Ideation
                Space fosters collaboration across disciplines, where people can
                learn, explore, and prototype solutions to real-world
                challenges.
              </p>

              <div className="mt-6 pt-6 border-t border-[#4169E1]/15 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-[#1A1F36]/75">
                <span>Academic Projects</span>
                <span aria-hidden="true">·</span>
                <span>Faculty & Student Research</span>
                <span aria-hidden="true">·</span>
                <span>Hackathons & Competitions</span>
              </div>
            </div>
          </div>

          {/* Right Column: Three Facility Pillars */}
          <div className="lg:col-span-6 space-y-4">
            {pillars.map((pillar) => {
              const IconComponent = pillar.icon;
              return (
                <Card key={pillar.number} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F4F7FF] text-[#4169E1]">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-xs font-mono text-[#2A4BB8]">
                        <span>{pillar.number}.</span>
                        <span>Core Capability</span>
                      </div>
                      <h3 className="text-lg font-bold text-[#1A1F36]">
                        {pillar.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-[#1A1F36]/75">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
