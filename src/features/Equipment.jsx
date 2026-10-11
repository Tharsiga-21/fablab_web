// Equipment section rendering machine cards and technical specification tables from data/equipment.js.

import { Layers, Zap, Cpu } from 'lucide-react';
import { equipment } from '../data/equipment';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';

const iconMap = {
  Layers,
  Zap,
  Cpu,
};

export default function Equipment() {
  return (
    <section id="equipment" className="py-16 lg:py-24 bg-[#F4F7FF]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Lab Equipment & Specifications"
          subtitle="Explore our industrial 3D printing, laser cutting, and electronics prototyping systems available for student and faculty builds."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {equipment.map((item) => {
            const IconComponent = iconMap[item.icon] || Layers;

            return (
              <Card
                key={item.id}
                className="p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#4169E1]/10 text-[#4169E1]">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-[#2A4BB8]">
                        {item.category}
                      </p>
                      <h3 className="text-xl font-bold text-[#1A1F36] mt-0.5">
                        {item.name}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-[#1A1F36]/75 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Technical Specification Table */}
                  <div className="overflow-hidden rounded-xl border border-[#4169E1]/12">
                    <table className="w-full text-left border-collapse">
                      <tbody className="divide-y divide-[#4169E1]/10 text-xs sm:text-sm">
                        {item.specs.map((spec) => (
                          <tr
                            key={spec.label}
                            className="hover:bg-[#F4F7FF]/70 transition-colors"
                          >
                            <th
                              scope="row"
                              className="py-2.5 px-3.5 font-medium text-[#1A1F36]/70 w-2/5 align-top bg-[#F4F7FF]/40"
                            >
                              {spec.label}
                            </th>
                            <td className="py-2.5 px-3.5 font-mono text-[#1A1F36] tabular-nums">
                              {spec.value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
