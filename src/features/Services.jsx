// Services section rendering booking and request cards from data/services.js that open Google Forms in a new tab.

import { ArrowUpRight, Calendar, Printer, CheckCircle2 } from 'lucide-react';
import { services } from '../data/services';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import Button from '../components/Button';

const iconMap = {
  Printer,
  Calendar,
};

export default function Services() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Services & Online Booking"
          subtitle="Submit your 3D printing request or reserve the Thinking Corner and Fab Lab Workshop using our official online forms."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon] || Printer;

            return (
              <Card
                key={service.id}
                className="p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-b from-white to-[#F4F7FF]/60"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#4169E1] text-white shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-[#1A1F36]/60">
                      {service.number} · {service.category}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#1A1F36] mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#1A1F36]/80 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {service.highlights && service.highlights.length > 0 && (
                    <ul className="space-y-2.5 mb-8 text-sm text-[#1A1F36]/75">
                      {service.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#4169E1] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="pt-5 border-t border-[#4169E1]/12 flex items-center justify-between gap-4">
                  <span className="text-xs text-[#1A1F36]/60">
                    Opens Google Form in a new tab
                  </span>
                  <Button href={service.url} variant="primary" external>
                    <span>Open Form</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
