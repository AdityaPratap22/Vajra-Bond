export interface Product {
  id: string;
  slug: string;
  name: string;
  code: string;
  subtitle: string;
  category: 'Standard' | 'Flexible' | 'Large Format' | 'Stone & Marble' | 'Exterior';
  standardType: string;
  enCode: string;
  packSize: string;
  image: string;
  badge: string;
  colorTone: string;
  description: string;
  fullDescription: string;
  keyFeatures: string[];
  suitableFor: string[];
  applicationAreas: string[];
  technicalData: {
    productType: string;
    conformance: string;
    bedThickness: string;
    potLife: string;
    openTime: string;
    adjustabilityTime: string;
    waterDemand: string;
    curingTime: string;
    tensileAdhesion: string;
    shearStrength: string;
    temperatureRange: string;
    coverage: string;
    shelfLife: string;
  };
  howToUse: {
    step: string;
    title: string;
    instruction: string;
  }[];
}

export const products: Product[] = [
  {
    id: 'vb-1001',
    slug: 'vb-1001-floor-wall-tile-adhesive',
    name: 'Tile Adhesive for Floor and Wall Tiles',
    code: 'VB-1001',
    subtitle: 'Polymer modified adhesive for ceramic & clay tiles over floor & wall',
    category: 'Standard',
    standardType: 'IS: 15477:2019 TYPE 1 T',
    enCode: 'EN 12004 C1TE',
    packSize: '20 kg',
    image: '/images/products/vb-1001.jpg',
    badge: 'Type 1T C1TE',
    colorTone: '#b91c1c',
    description: 'Polymer blended, cement-based tile adhesive for fixing high porosity ceramic and clay tiles (size up to 300x300mm) over cementitious substrates in indoor dry areas.',
    fullDescription: 'VB-1001 is a polymer blended, cement based tile adhesive, for fixing high porosity (>3%) tiles like Ceramic and Clay tiles (size up to 300mm x 300mm) over cementitious substrates (floor & wall) and in indoor dry areas. Conforms to IS: 15477:2019 Type 1 T and EN 12004 C1TE standards with fibre-reinforced formulation.',
    keyFeatures: [
      'Polymer blended cement-based formulation',
      'Conforms to IS: 15477:2019 Type 1 T & EN 12004 C1TE',
      'Fibre reinforced for crack-free adhesion & non-shrink formulation',
      'Water resistant & easy to use with smooth trowel glide',
      'For fixing ceramic & clay tiles up to 300x300mm on floors & walls',
      'Certified CE, ISI Mark, ISO 9001:2015, ISO 14001:2015, ISO 45001:2018'
    ],
    suitableFor: [
      'Ceramic tiles & clay tiles (porosity > 3%)',
      'Tiles up to 300mm x 300mm size',
      'Cementitious substrates (floors and walls)',
      'Indoor dry areas and residential installations'
    ],
    applicationAreas: [
      'Living rooms, bedrooms, and dining halls',
      'Indoor kitchen flooring and dry utility areas',
      'Passages, indoor walkways, and residential corridors',
      'New construction and renovation tiling'
    ],
    technicalData: {
      productType: 'Polymer blended cement-based Type 1 T tile adhesive',
      conformance: 'IS: 15477:2019 Type 1 T & EN 12004 C1TE',
      bedThickness: '3 mm to 6 mm',
      potLife: '2 to 3 hours at 27°C',
      openTime: '20 to 25 minutes',
      adjustabilityTime: '15 to 20 minutes',
      waterDemand: 'Ratio 3.5:1 (approx. 5.5 to 5.7 Litres per 20 kg bag)',
      curingTime: '24 hours for foot traffic; grouting after 24 hours',
      tensileAdhesion: '≥ 0.5 N/mm² at 28 days',
      shearStrength: '≥ 1.0 N/mm²',
      temperatureRange: '-10°C to +80°C',
      coverage: 'Approx. 50 - 55 sq.ft per 20 kg bag at 3 mm bed thickness',
      shelfLife: '12 months from manufacturing date'
    },
    howToUse: [
      {
        step: '01',
        title: 'Surface Preparation',
        instruction: 'Ensure that the surface to be tiled is levelled, cleaned and free from dust. Dry surface should be dampened with water.'
      },
      {
        step: '02',
        title: 'Mixing (3.5:1 Ratio)',
        instruction: 'Mix VB-1001 with water in the ratio of 3.5:1. Mix with a suitable mechanical stirrer or slow speed drills for 3 to 5 mins until a lump free homogeneous paste is obtained. Leave the mixture for 5 minutes before use.'
      },
      {
        step: '03',
        title: 'Application',
        instruction: 'Apply adhesive to the substrate and comb the surface using Notch Trowel with the flat side of the trowel first, then notched side. Tiles must be fixed within 15-20 minutes of adhesive being applied, depending on the porosity of the surface and atmospheric conditions.'
      },
      {
        step: '04',
        title: 'Fixing & Grouting',
        instruction: 'Press the tiles firmly into position with a slight twisting action. Leave no voids behind tiles. Use suitable support along with adhesive for fixing tiles on vertical surfaces. Protect from direct rainfall / foot traffic and start Tile Grout filling only after 24 hours.'
      }
    ]
  },
  {
    id: 'vb-2002',
    slug: 'vb-2002-ceramic-vitrified-tile-adhesive',
    name: 'Tile Adhesive for Ceramic and Vitrified Tiles',
    code: 'VB-2002',
    subtitle: 'Polymer blended formulation for ceramic & 2×4 vitrified tiles up to 10ft height',
    category: 'Flexible',
    standardType: 'IS: 15477:2019 TYPE 2 T',
    enCode: 'EN 12004 C1TE',
    packSize: '20 kg',
    image: '/images/products/vb-2002-new.jpg',
    badge: 'Type 2T C1TE',
    colorTone: '#b45309',
    description: 'Polymer blended, cement-based tile adhesive for fixing ceramic and vitrified tiles in indoor areas, on both vertical and horizontal surfaces.',
    fullDescription: 'VB-2002 is a polymer blended, cement based tile adhesive for fixing ceramic and vitrified tiles in indoor areas only. It is suitable for both vertical and horizontal surfaces. Especially recommended for 2*4 vitrified tiles up to 10 feet height. Conforms to IS: 15477:2019 Type 2 T and EN 12004 C1TE standards with fibre-reinforced formulation.',
    keyFeatures: [
      'Polymer blended cement-based formulation',
      'Conforms to IS: 15477:2019 Type 2 T & EN 12004 C1TE',
      'Fibre reinforced for crack-free adhesion & non-shrink formulation',
      'Water resistant & easy to use with smooth trowel glide',
      'Especially recommended for 2*4 vitrified tiles up to 10 feet height',
      'Certified CE, ISI Mark, ISO 9001:2015, ISO 14001:2015, ISO 45001:2018'
    ],
    suitableFor: [
      'Ceramic and vitrified tiles',
      'Especially 2*4 ft (600 x 1200 mm) vitrified tiles up to 10 feet height',
      'Indoor vertical wall surfaces and horizontal floors',
      'Cement plaster, cement screed, and concrete substrates'
    ],
    applicationAreas: [
      'Living rooms, bedrooms, and dining halls',
      'Kitchen flooring and indoor dry wall tiling',
      'Passages, lobbies, and interior corridors',
      'Residential housing and commercial indoor spaces'
    ],
    technicalData: {
      productType: 'Polymer blended cement-based Type 2 T tile adhesive',
      conformance: 'IS: 15477:2019 Type 2 T & EN 12004 C1TE',
      bedThickness: '3 mm to 6 mm',
      potLife: '2 to 3 hours at 27°C',
      openTime: '30 to 35 minutes',
      adjustabilityTime: '20 to 25 minutes',
      waterDemand: 'Ratio 3.5:1 (approx. 5.5 to 5.7 Litres per 20 kg bag)',
      curingTime: '24 hours for foot traffic; grouting after 24 hours',
      tensileAdhesion: '≥ 1.0 N/mm² at 28 days',
      shearStrength: '≥ 1.25 N/mm²',
      temperatureRange: '-10°C to +80°C',
      coverage: 'Approx. 50 - 55 sq.ft per 20 kg bag at 3 mm bed thickness',
      shelfLife: '12 months from manufacturing date'
    },
    howToUse: [
      {
        step: '01',
        title: 'Surface Preparation',
        instruction: 'Ensure that the surface to be tiled is levelled, cleaned and free from dust. Dry surface should be dampened with water. All surfaces must be plumb and true to within 6 mm in 10 ft (3m).'
      },
      {
        step: '02',
        title: 'Mixing (3.5:1 Ratio)',
        instruction: 'Mix VB-2002 with water in the ratio of 3.5:1. Mix with a suitable mechanical stirrer or slow speed drills for 3 to 5 mins until a lump free homogeneous paste is obtained. Leave the mixture for 5 minutes before use.'
      },
      {
        step: '03',
        title: 'Application',
        instruction: 'Apply adhesive to the substrate and comb the surface using Notch Trowel with the flat side of the trowel first, then notched side. Tiles must be fixed within 30-35 minutes of adhesive being applied, depending on the porosity of the surface and atmospheric conditions.'
      },
      {
        step: '04',
        title: 'Fixing & Grouting',
        instruction: 'Press the tiles firmly into position with a slight twisting action. Leave no voids behind tiles. Use suitable support along with adhesive for fixing tiles on vertical surfaces. Protect from direct rainfall / foot traffic and start Tile Grout filling only after 24 hours.'
      }
    ]
  },
  {
    id: 'vb-2004',
    slug: 'vb-2004-floor-wall-tile-on-tile-adhesive',
    name: 'Tile Adhesive for Floor, Wall & Tile on Tile',
    code: 'VB-2004',
    subtitle: 'Ideal for tile-on-tile renovation & vertical wall installations',
    category: 'Flexible',
    standardType: 'IS: 15477:2019 TYPE 2 T',
    enCode: 'EN 12004 C2TE',
    packSize: '20 kg',
    image: '/images/products/vb-2004.jpg',
    badge: 'Type 2T C2TE',
    colorTone: '#9a3412',
    description: 'Polymer blended cementitious adhesive for fixing ceramic, semi-vitreous, vitrified tiles & natural stones of regular size, and ideal for Tile-on-Tile applications.',
    fullDescription: 'VB-2004 is a polymer blended, cement based tile adhesive for fixing ceramic, semi-vitreous, vitrified tiles and natural stones of regular size over cementitious substrates. Suitable for both vertical and horizontal surfaces. An ideal product for Tile-on-Tile applications, recommended for both interior floor and wall applications, and for exterior floor applications. Conforms to IS: 15477:2019 Type 2 T and EN 12004 C2TE standards.',
    keyFeatures: [
      'Polymer blended cement-based formulation',
      'Conforms to IS: 15477:2019 Type 2 T & EN 12004 C2TE',
      'Ideal product for Tile-on-Tile renovation without demolishing old floors',
      'Fibre reinforced for crack-free adhesion & non-shrink formulation',
      'Recommended for interior floor & wall and exterior floor applications',
      'Certified CE, ISI Mark, ISO 9001:2015, ISO 14001:2015, ISO 45001:2018'
    ],
    suitableFor: [
      'Tile-on-Tile over existing glazed or ceramic tiles',
      'Ceramic, semi-vitreous and vitrified tiles',
      'Natural stones of regular size',
      'Vertical and horizontal cementitious substrates'
    ],
    applicationAreas: [
      'Tile-on-Tile renovation for quick remodeling without demolition',
      'Interior floors and walls (living rooms, kitchens, bathrooms)',
      'Exterior floor areas (balconies, verandahs, covered terraces)',
      'Commercial spaces and residential apartments'
    ],
    technicalData: {
      productType: 'Polymer blended cement-based Type 2 T tile adhesive',
      conformance: 'IS: 15477:2019 Type 2 T & EN 12004 C2TE',
      bedThickness: '3 mm to 8 mm',
      potLife: '2 to 3 hours at 27°C',
      openTime: '30 to 35 minutes',
      adjustabilityTime: '20 to 25 minutes',
      waterDemand: 'Ratio 3.5:1 (approx. 5.5 to 5.7 Litres per 20 kg bag)',
      curingTime: '24 hours for foot traffic; grouting after 24 hours',
      tensileAdhesion: '≥ 1.0 N/mm² at 28 days',
      shearStrength: '≥ 1.25 N/mm²',
      temperatureRange: '-10°C to +80°C',
      coverage: 'Approx. 50 - 55 sq.ft per 20 kg bag at 3 mm bed thickness',
      shelfLife: '12 months from manufacturing date'
    },
    howToUse: [
      {
        step: '01',
        title: 'Surface Preparation',
        instruction: 'Ensure that the surface to be tiled is levelled, cleaned and free from dust. Dry surface should be dampened with water. All surfaces must be plumb and true to within 6 mm in 10 ft (3m).'
      },
      {
        step: '02',
        title: 'Mixing (3.5:1 Ratio)',
        instruction: 'Mix VB-2004 with water in the ratio of 3.5:1. Mix with a suitable mechanical stirrer or slow speed drills for 3 to 5 mins until a lump free homogeneous paste is obtained. Leave the mixture for 5 minutes before use.'
      },
      {
        step: '03',
        title: 'Application',
        instruction: 'Apply adhesive to the substrate and comb the surface using Notch Trowel with the flat side of the trowel first, then notched side. Tiles must be fixed within 30-35 minutes of adhesive being applied, depending on the porosity of the surface and atmospheric conditions.'
      },
      {
        step: '04',
        title: 'Fixing & Grouting',
        instruction: 'Press the tiles firmly into position with a slight twisting action. Leave no voids behind tiles. Use suitable support along with adhesive for fixing tiles on vertical surfaces. Protect from direct rainfall / foot traffic and start Tile Grout filling only after 24 hours.'
      }
    ]
  },
  {
    id: 'vb-3003',
    slug: 'vb-3003-large-format-tile-stone-adhesive',
    name: 'Tile Adhesive for Large Format Tile & Stone',
    code: 'VB-3003',
    subtitle: 'Type 3T fibre-reinforced adhesive for large format tiles & natural stones',
    category: 'Large Format',
    standardType: 'IS: 15477:2019 TYPE 3 T',
    enCode: 'EN 12004 C2TES2',
    packSize: '20 kg',
    image: '/images/products/vb-3003.jpg',
    badge: 'Type 3T C2TES2',
    colorTone: '#ea580c',
    description: 'High-strength polymer blended cementitious adhesive conforming to Type 3 T / C2TES2 for large format tiles and stones even greater than 600x600mm.',
    fullDescription: 'VB-3003 is a polymer blended, cement based Tile Adhesive. This adhesive is suitable mainly for tiles and stone tiles which are included in Type 1, Type 2, and intended for installation on dry wallboard substrates. It is suitable for all types of tiles and stones even greater than 600mm x 600mm (except plain tiles & engineered stone tiles). Conforms to IS: 15477:2019 Type 3 T and EN 12004 C2TES2 standards.',
    keyFeatures: [
      'Polymer blended cement-based formulation',
      'Conforms to IS: 15477:2019 Type 3 T & EN 12004 C2TES2',
      'Suitable for all types of tiles & stones > 600mm x 600mm',
      'Fibre reinforced for strong bond with substrate & highly durable',
      'Interior & exterior floor and wall applications',
      'Certified CE, ISI Mark, ISO 9001:2015, ISO 14001:2015, ISO 45001:2018'
    ],
    suitableFor: [
      'All types of tiles and stones even greater than 600mm x 600mm',
      'Large format vitrified tiles and heavy stone tiles',
      'Dry wallboard substrates, concrete and cement plaster',
      'Vertical and horizontal surfaces, interior and exterior'
    ],
    applicationAreas: [
      'Large commercial floors & exterior facades',
      'High-traffic public corridors and retail atriums',
      'Dry wallboard partitions, drywall systems and cement boards',
      'Luxury residential living areas, patios, and terrace walls'
    ],
    technicalData: {
      productType: 'Polymer blended cement-based Type 3 T tile adhesive',
      conformance: 'IS: 15477:2019 Type 3 T & EN 12004 C2TES2',
      bedThickness: '3 mm to 12 mm',
      potLife: '3 to 4 hours at 27°C',
      openTime: '30 to 40 minutes',
      adjustabilityTime: '25 to 30 minutes',
      waterDemand: 'Ratio 3.5:1 (approx. 5.5 to 5.7 Litres per 20 kg bag)',
      curingTime: '24 hours for foot traffic; grouting after 24 hours',
      tensileAdhesion: '≥ 1.5 N/mm² at 28 days',
      shearStrength: '≥ 1.8 N/mm²',
      temperatureRange: '-15°C to +90°C',
      coverage: 'Approx. 50 - 60 sq.ft per 20 kg bag at 3 mm bed thickness',
      shelfLife: '12 months from manufacturing date'
    },
    howToUse: [
      {
        step: '01',
        title: 'Surface Preparation',
        instruction: 'Ensure that the surface to be tiled is levelled, cleaned and free from dust. Dry surface should be dampened with water. All surfaces must be plumb and true to within 6 mm in 10 ft (3m).'
      },
      {
        step: '02',
        title: 'Mixing (3.5:1 Ratio)',
        instruction: 'Mix VB-3003 with water in the ratio of 3.5:1. Mix with a suitable mechanical stirrer or slow speed drills for 3 to 5 mins until a lump free homogeneous paste is obtained. Leave the mixture for 5 minutes before use.'
      },
      {
        step: '03',
        title: 'Application',
        instruction: 'Apply adhesive to the substrate and comb the surface using Notch Trowel with the flat side of the trowel first, then notched side. Tiles must be fixed within 15-40 minutes of adhesive being applied, depending on the porosity of the surface and atmospheric conditions.'
      },
      {
        step: '04',
        title: 'Fixing & Grouting',
        instruction: 'Press the tiles firmly into position with a slight twisting action. Leave no voids behind tiles. Use suitable support along with adhesive for fixing tiles on vertical surfaces, with longer holding time. Protect from direct rainfall / foot traffic and start Tile Grout filling only after 24 hours.'
      }
    ]
  }
];
