// Technical specifications for LICET FabLab fabrication machines and electronics workstations.

export const equipment = [
  {
    id: 'prusa-mk3',
    name: '3D Printer (Prusa MK3)',
    category: 'FFF / FDM Additive Manufacturing',
    icon: 'Layers',
    description:
      'Industrial-grade fused filament fabrication printer engineered for high-precision mechanical prototypes, enclosures, and functional academic builds.',
    specs: [
      { label: 'Build Volume', value: '25 × 21 × 21 cm' },
      { label: 'Layer Height', value: '0.05 – 0.35 mm' },
      { label: 'Nozzle Diameter', value: '0.4 mm default' },
      { label: 'Filament Diameter', value: '1.75 mm' },
      {
        label: 'Supported Materials',
        value: 'PLA, PETG, ABS, ASA, Nylon, Flex, PC, PP, Woodfill, carbon-filled',
      },
      { label: 'Max Nozzle Temp', value: '300 °C' },
      { label: 'Max Heated Bed Temp', value: '120 °C' },
      { label: 'Max Travel Speed', value: '200+ mm/s' },
    ],
  },
  {
    id: 'co2-laser-cutter',
    name: 'CO2 Laser Cutter',
    category: 'Large-Format Subtractive Fabrication',
    icon: 'Zap',
    description:
      'High-speed 100W CO2 laser system for precision 2D profile cutting and surface engraving across structural non-metallic sheet materials.',
    specs: [
      { label: 'Working Area', value: '1300 × 900 mm' },
      { label: 'Laser Source', value: '100W CO2 Tube' },
      { label: 'Positioning Resolution', value: '±0.05 mm' },
      { label: 'Cutting & Engraving Speed', value: 'Up to 1000 mm/s' },
      { label: 'Compatible Materials', value: 'Wood, Acrylic, Fabric' },
      { label: 'Supported File Formats', value: 'BMP, PLT, DST, AI, DXF' },
      { label: 'Compatible Software', value: 'CorelDraw, AutoCAD, Photoshop' },
    ],
  },
  {
    id: 'electronics-workstations',
    name: 'Electronics Workstations',
    category: 'Circuit Prototyping & Embedded Systems',
    icon: 'Cpu',
    description:
      'Dedicated workstations for circuit building, soldering, and prototyping.',
    specs: [
      { label: 'Primary Function', value: 'Circuit building, soldering, and prototyping' },
      { label: 'Bench Configuration', value: 'ESD-safe mats with regulated DC power' },
      { label: 'Instrumentation', value: 'Digital oscilloscopes, multimeters & logic analyzers' },
      { label: 'Soldering Suite', value: 'Temperature-controlled irons & hot-air rework' },
      { label: 'Supported Platforms', value: 'Arduino, ESP32, Raspberry Pi, STM32 & custom PCBs' },
    ],
  },
];
