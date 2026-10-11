// src/data/gallery.js
// Each item is one gallery card. Photos are imported from src/assets/images.
// Category must be one of: 'Thinking Corner', 'FabLab Workshop', 'Equipment in Action'.
// To add a photo: import it at the top, then add an entry below.

import thinkCorner1 from '../assets/images/thinkcorner.png';
import thinkCorner2 from '../assets/images/thinkcorner2.png';
import thinkCorner3 from '../assets/images/thinkcorner3.png';
import fablabTable from '../assets/images/fablab_table.png';
import toolSpace from '../assets/images/tool_space.png';
import toolTable from '../assets/images/tool_table.png';
import workSpace from '../assets/images/work_space.png';
import slideDoor from '../assets/images/slidedoor.png';
import laserCutter from '../assets/images/lasercutter.png';
import prusa from '../assets/images/prusa.png';
import printingSpace from '../assets/images/printing_space.png';

export const gallery = [
  {
    id: 1,
    category: 'Thinking Corner',
    caption: 'Thinking Corner',
    subtitle: 'Design thinking and brainstorming space',
    zone: 'Zone 01',
    icon: 'Lightbulb',
    imageUrl: thinkCorner1,
    bgClass: 'from-[#2A4BB8] to-[#4169E1]',
  },
  {
    id: 2,
    category: 'Thinking Corner',
    caption: 'Thinking Corner',
    subtitle: 'Project discussion area',
    zone: 'Zone 01',
    icon: 'Lightbulb',
    imageUrl: thinkCorner2,
    bgClass: 'from-[#2A4BB8] to-[#4169E1]',
  },
  {
    id: 3,
    category: 'Thinking Corner',
    caption: 'Thinking Corner',
    subtitle: 'Collaborative workspace',
    zone: 'Zone 01',
    icon: 'Lightbulb',
    imageUrl: thinkCorner3,
    bgClass: 'from-[#2A4BB8] to-[#4169E1]',
  },
  {
    id: 4,
    category: 'FabLab Workshop',
    caption: 'Fabrication Workshop',
    subtitle: 'Main fabrication floor',
    zone: 'Zone 02',
    icon: 'Wrench',
    imageUrl: workSpace,
    bgClass: 'from-[#4169E1] to-[#2A4BB8]',
  },
  {
    id: 5,
    category: 'FabLab Workshop',
    caption: 'Fabrication Workshop',
    subtitle: 'Electronics and prototyping benches',
    zone: 'Zone 02',
    icon: 'Cpu',
    imageUrl: fablabTable,
    bgClass: 'from-[#4169E1] to-[#2A4BB8]',
  },
  {
    id: 6,
    category: 'FabLab Workshop',
    caption: 'Fabrication Workshop',
    subtitle: 'Tools and hand equipment',
    zone: 'Zone 02',
    icon: 'Wrench',
    imageUrl: toolTable,
    bgClass: 'from-[#4169E1] to-[#2A4BB8]',
  },
  {
    id: 7,
    category: 'FabLab Workshop',
    caption: 'Fabrication Workshop',
    subtitle: 'Tool storage area',
    zone: 'Zone 02',
    icon: 'Wrench',
    imageUrl: toolSpace,
    bgClass: 'from-[#4169E1] to-[#2A4BB8]',
  },
  {
    id: 8,
    category: 'FabLab Workshop',
    caption: 'Fabrication Workshop',
    subtitle: 'Entrance',
    zone: 'Zone 02',
    icon: 'Layers',
    imageUrl: slideDoor,
    bgClass: 'from-[#4169E1] to-[#2A4BB8]',
  },
  {
    id: 9,
    category: 'Equipment in Action',
    caption: '3D Printing',
    subtitle: 'Prusa MK3 printing bay',
    zone: 'Zone 03',
    icon: 'Printer',
    imageUrl: prusa,
    bgClass: 'from-[#FF8C00] to-[#E67E00]',
  },
  {
    id: 10,
    category: 'Equipment in Action',
    caption: '3D Printing',
    subtitle: 'Printing space',
    zone: 'Zone 03',
    icon: 'Printer',
    imageUrl: printingSpace,
    bgClass: 'from-[#FF8C00] to-[#E67E00]',
  },
  {
    id: 11,
    category: 'Equipment in Action',
    caption: 'Laser Cutting',
    subtitle: '100W CO2 laser cutter',
    zone: 'Zone 04',
    icon: 'Zap',
    imageUrl: laserCutter,
    bgClass: 'from-[#4169E1] to-[#2A4BB8]',
  },
];