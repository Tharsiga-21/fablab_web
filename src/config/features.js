// Feature registry: adding a new section only requires creating a component in src/features/
// and adding one entry ({ id, label, component, showInNav }) to the array below.

import Hero from '../features/Hero';
import Overview from '../features/Overview';
import Notices from '../features/Notices';
import Services from '../features/Services';
import Equipment from '../features/Equipment';
import Gallery from '../features/Gallery';
import Contact from '../features/Contact';

export const features = [
  { id: 'hero', label: 'Home', component: Hero, showInNav: false },
  { id: 'overview', label: 'Overview', component: Overview, showInNav: true },
  { id: 'notices', label: 'Notices', component: Notices, showInNav: true },
  { id: 'services', label: 'Services', component: Services, showInNav: true },
  { id: 'equipment', label: 'Equipment', component: Equipment, showInNav: true },
  { id: 'gallery', label: 'Gallery', component: Gallery, showInNav: true },
  { id: 'contact', label: 'Contact', component: Contact, showInNav: true },
];
