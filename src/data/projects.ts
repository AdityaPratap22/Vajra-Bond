export interface Project {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Industrial' | 'Exterior' | 'Hospitality';
  location: string;
  image: string;
  area: string;
  productsUsed: string[];
  description: string;
  completionYear: string;
}

export const projects: Project[] = [
  {
    id: 'proj-1',
    title: 'Luxury Villa Residence',
    category: 'Residential',
    location: 'Vasant Vihar, New Delhi',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    area: '18,500 sq. ft.',
    productsUsed: ['VB-2004 Ultra', 'VB-2002 Flexi', 'VB-White'],
    description: 'Ultra-luxury private villa featuring Italian Statuario marble floors and 1200x2400mm Spanish porcelain slabs across 4 levels.',
    completionYear: '2024'
  },
  {
    id: 'proj-2',
    title: 'Cyber City Commercial Complex',
    category: 'Commercial',
    location: 'Cyber City, Gurgaon',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
    area: '145,000 sq. ft.',
    productsUsed: ['VB-2004 Ultra', 'VB-2002 Flexi'],
    description: 'Corporate headquarters campus with heavy daily footfall, featuring vitrified tile flooring across lobbies, atriums, and 12 office floors.',
    completionYear: '2024'
  },
  {
    id: 'proj-3',
    title: 'Precision Industrial Logistics Hub',
    category: 'Industrial',
    location: 'Sector 62, Greater Noida',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
    area: '82,000 sq. ft.',
    productsUsed: ['VB-2004 Ultra', 'VB-Exterior'],
    description: 'High-load warehouse and packaging plant requiring vibration-resistant tile adhesive capable of enduring heavy forklift movement.',
    completionYear: '2023'
  },
  {
    id: 'proj-4',
    title: 'Heritage Palace Resort & Spa',
    category: 'Hospitality',
    location: 'Kukas, Jaipur',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop',
    area: '65,000 sq. ft.',
    productsUsed: ['VB-StoneFix', 'VB-Exterior', 'VB-White'],
    description: '5-star luxury heritage resort utilizing natural sandstone, pool glass mosaic tiles, and decorative courtyard paving.',
    completionYear: '2023'
  },
  {
    id: 'proj-5',
    title: 'Terminal Concourse Expansion',
    category: 'Commercial',
    location: 'Chhatrapati Shivaji Terminal, Mumbai',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb1861564?q=80&w=1200&auto=format&fit=crop',
    area: '210,000 sq. ft.',
    productsUsed: ['VB-2004 Ultra', 'VB-StoneFix'],
    description: 'Major public transit concourse requiring rapid curing and non-shrink heavy shear tile bonding for high-density pedestrian traffic.',
    completionYear: '2024'
  },
  {
    id: 'proj-6',
    title: 'Eco-Tower Exterior Facade',
    category: 'Exterior',
    location: 'Whitefield, Bangalore',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop',
    area: '48,000 sq. ft.',
    productsUsed: ['VB-Exterior High Flex', 'VB-StoneFix'],
    description: '18-storey architectural exterior facade with porcelain and natural stone tile cladding subjected to dynamic wind and thermal stress.',
    completionYear: '2024'
  },
  {
    id: 'proj-7',
    title: 'The Skyview Luxury Residences',
    category: 'Residential',
    location: 'Financial District, Hyderabad',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop',
    area: '95,000 sq. ft.',
    productsUsed: ['VB-2002 Flexi', 'VB-2004 Ultra'],
    description: 'Twin 32-floor premium residential towers featuring floor-to-ceiling bathroom tiles and large vitrified balconies.',
    completionYear: '2023'
  },
  {
    id: 'proj-8',
    title: 'Seaside Azure Infinity Pool & Resort',
    category: 'Hospitality',
    location: 'Candolim, Goa',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop',
    area: '34,000 sq. ft.',
    productsUsed: ['VB-White Adhesive', 'VB-Exterior High Flex'],
    description: 'Olympic-sized infinity pool and coastal spa villas requiring salt-water resistant and 100% waterproof bonding.',
    completionYear: '2024'
  }
];
