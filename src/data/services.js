// List of booking and fabrication request services with titles, descriptions, and Google Form URLs.
// Add a new object to this array to automatically display a new service card in the Services section.

export const services = [
  {
    id: '3d-printing',
    number: '01',
    title: '3D Printing Request Form',
    category: 'Additive Manufacturing · Rapid Prototyping',
    description:
      'Request 3D printing for academic projects, research, competitions, and innovation activities.',
    highlights: [
      'Design file upload optional during initial request',
      'Supports PLA, PETG, ABS, ASA, Nylon, Flex, and composite filaments',
      'Dedicated technical support before printing begins',
    ],
    url: 'https://forms.gle/Z3jTu7X8iLkpADsJA',
    icon: 'Printer',
  },
  {
    id: 'space-booking',
    number: '02',
    title: 'Thinking Corner & Fab Lab Booking Form',
    category: 'Ideation Workspace · Workshop Access',
    description:
      'Reserve the Design Thinking Space for brainstorming, project discussions, hackathon preparation, or book the Fab Lab Workshop for project work and prototype development.',
    highlights: [
      'Collaborative ideation tables and whiteboards for team sprints',
      'Direct access to Fab Lab Workshop tools and prototype benches',
      'Scheduled slots for coursework, hackathons, and faculty research',
    ],
    url: 'https://forms.gle/8H4uQ6FYqfZRHucUA',
    icon: 'Calendar',
  },
];
