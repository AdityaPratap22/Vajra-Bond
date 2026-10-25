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
    slug: 'vb-1001-standard-tile-adhesive',
    name: 'VB-1001 Standard Tile Adhesive',
    code: 'VB-1001',
    subtitle: 'Tile Adhesive for Floor & Wall Tiles',
    category: 'Standard',
    standardType: 'IS: 15477:2019 TYPE 1T',
    enCode: 'EN 12004 C1TE',
    packSize: '20 kg',
    image: '/images/products/vb-1001.jpg',
    badge: 'Popular Choice',
    colorTone: '#b91c1c',
    description: 'Polymer blended, cement-based tile adhesive for fixing high porosity ceramic and clay tiles up to 300x300mm on floors and walls.',
    fullDescription: 'VB-1001 is a premium factory-prepared polymer-modified cementitious tile adhesive engineered specifically for fixing porous ceramic tiles and clay tiles over cementitious floors and walls in interior dry areas. Conforming rigorously to IS 15477:2019 Type 1T and EN 12004 C1TE standards, VB-1001 provides superior tensile adhesion, non-shrink formulation, and hassle-free workability compared to conventional sand-cement mortars.',
    keyFeatures: [
      'High Bond Strength & non-shrink formulation',
      'Easy application with smooth trowel glide',
      'Fibre reinforced for crack-free durability',
      'Excellent slip resistance on vertical surfaces',
      'Water resistant indoor performance',
      'Certified under ISO 9001, ISO 14001, ISO 45001'
    ],
    suitableFor: [
      'Ceramic tiles (porosity > 3%)',
      'Clay tiles and terracotta floor tiles',
      'Small to medium format tiles up to 300 x 300 mm',
      'Internal floor and wall cement plaster substrates'
    ],
    applicationAreas: [
      'Living rooms & bedrooms',
      'Hallways and indoor common passages',
      'Kitchen flooring and utility dry walls',
      'Residential housing and apartment projects'
    ],
    technicalData: {
      productType: 'Cement based polymer-modified adhesive',
      conformance: 'IS: 15477:2019 Type 1T & EN 12004 C1TE',
      bedThickness: '3 mm to 6 mm',
      potLife: '2 - 3 hours at 27°C',
      openTime: '15 - 20 minutes',
      adjustabilityTime: '15 minutes',
      waterDemand: 'Approx. 5.0 to 5.5 Litres per 20 kg bag (Ratio 3.5:1)',
      curingTime: '24 hours for light foot traffic; 14 days for full cure',
      tensileAdhesion: '≥ 0.5 N/mm² at 28 days',
      shearStrength: '≥ 1.0 N/mm²',
      temperatureRange: '+5°C to +50°C',
      coverage: 'Approx. 55 - 60 sq.ft per 20 kg bag at 3 mm bed thickness',
      shelfLife: '12 months in original unopened packaging kept dry'
    },
    howToUse: [
      {
        step: '01',
        title: 'Surface Preparation',
        instruction: 'Ensure the substrate is flat, clean, structurally sound and free from dust, oil, grease, curing compounds or loose mortar. Dry surfaces should be dampened with clean water prior to application.'
      },
      {
        step: '02',
        title: 'Mixing',
        instruction: 'Gradually add 20 kg of VB-1001 powder into 5.0 - 5.5 litres of clean potable water in a clean mixing bucket. Mix thoroughly with a slow speed mechanical stirrer (300-500 RPM) for 3-5 minutes until a uniform lump-free paste is achieved. Allow slake time of 5 minutes, then remix briefly.'
      },
      {
        step: '03',
        title: 'Application & Troweling',
        instruction: 'Apply the mixed adhesive paste to the substrate using the flat side of a notch trowel, then comb with the notched side (6mm x 6mm trowel for regular tiles). Maintain a uniform bed thickness of 3 to 6 mm.'
      },
      {
        step: '04',
        title: 'Tile Fixing & Grouting',
        instruction: 'Firmly press tiles into the wet adhesive with a slight twisting motion within 15-20 minutes of spreading. Tap lightly with a rubber mallet to achieve 100% adhesive contact. Leave for 24 hours before filling tile joints with Vajra Bond Tile Grout.'
      }
    ]
  },
  {
    id: 'vb-2002',
    slug: 'vb-2002-flexi-tile-adhesive',
    name: 'VB-2002 Flexi Tile Adhesive',
    code: 'VB-2002',
    subtitle: 'Tile Adhesive for Ceramic and Vitrified Tiles',
    category: 'Flexible',
    standardType: 'IS: 15477:2019 TYPE 2T',
    enCode: 'EN 12004 C1TE',
    packSize: '20 kg',
    image: '/images/products/vb-2002.jpg',
    badge: 'Contractor Favorite',
    colorTone: '#c88319',
    description: 'High-performance polymer blended adhesive engineered for ceramic and vitrified tiles on vertical and horizontal interior surfaces.',
    fullDescription: 'VB-2002 is a premium high-strength polymer-modified tile adhesive formulated specifically for fixing vitrified, porcelain, and ceramic tiles in indoor spaces. Especially engineered and recommended for 2x4 ft vitrified tiles up to 10 feet height on vertical walls without slipping or sagging. Conforms strictly to IS 15477:2019 Type 2T and EN 12004 C1TE.',
    keyFeatures: [
      'Engineered for 2x4 ft vitrified tiles up to 10 ft vertical height',
      'Enhanced flexibility to accommodate structural vibration',
      'Zero vertical slip with immediate high grab tack',
      'Extended open time of 30-35 minutes for convenient leveling',
      'Fibre reinforced matrix with non-shrink technology',
      'CE & ISI certified with international grade assurance'
    ],
    suitableFor: [
      'Vitrified and semi-vitrified tiles',
      'Porcelain and glazed vitrified tiles (GVT / PGVT)',
      'Ceramic wall and floor tiles of medium to large sizes',
      'Cement mortar beds, concrete screeds, plaster'
    ],
    applicationAreas: [
      'High-traffic residential living and dining zones',
      'Internal wall cladding up to 10 feet height',
      'Commercial office spaces and corridors',
      'Bathrooms, kitchens, and interior wash zones'
    ],
    technicalData: {
      productType: 'Polymer-modified cementitious vitrified adhesive',
      conformance: 'IS: 15477:2019 Type 2T & EN 12004 C1TE',
      bedThickness: '3 mm to 6 mm',
      potLife: '2 - 3 hours at 27°C',
      openTime: '30 - 35 minutes',
      adjustabilityTime: '20 minutes',
      waterDemand: 'Approx. 5.2 to 5.7 Litres per 20 kg bag (Ratio 3.5:1)',
      curingTime: '24 hours for foot traffic; grouting after 24 hours',
      tensileAdhesion: '≥ 1.0 N/mm² at 28 days',
      shearStrength: '≥ 1.25 N/mm²',
      temperatureRange: '+5°C to +60°C',
      coverage: 'Approx. 50 - 55 sq.ft per 20 kg bag at 3 mm bed thickness',
      shelfLife: '12 months in cool dry environment'
    },
    howToUse: [
      {
        step: '01',
        title: 'Substrate Check',
        instruction: 'Inspect the wall or floor surface. Plumb and level must be true to within 6 mm in 10 ft (3m). Remove any grease, efflorescence, paint or laitance. Dampen dry surfaces lightly.'
      },
      {
        step: '02',
        title: 'Mixing with Water',
        instruction: 'Mix 20 kg VB-2002 powder with 5.2 - 5.7 litres clean water. Use a mechanical drill mixer for 3 to 5 minutes until creamy lump-free consistency is achieved. Leave for 5 minutes and remix before using.'
      },
      {
        step: '03',
        title: 'Comb & Buttering',
        instruction: 'Comb adhesive with a 6x6 mm or 8x8 mm notched trowel on the substrate. For 2x4 ft vitrified tiles, apply a thin butter-coat of adhesive on the back of the tile as well to guarantee 100% solid contact.'
      },
      {
        step: '04',
        title: 'Fixing & Grouting',
        instruction: 'Position tile within 30-35 minutes. Press firmly and beat gently with a rubber mallet. Use tile leveling clips for flush joints. Grout after 24 hours with Vajra Bond Epoxy or Polymer Grout.'
      }
    ]
  },
  {
    id: 'vb-2004',
    slug: 'vb-2004-ultra-tile-adhesive',
    name: 'VB-2004 Ultra Tile-on-Tile Adhesive',
    code: 'VB-2004',
    subtitle: 'Tile Adhesive for Floor, Wall & Tile on Tile',
    category: 'Flexible',
    standardType: 'IS: 15477:2019 TYPE 2T',
    enCode: 'EN 12004 C2TE',
    packSize: '20 kg',
    image: '/images/products/vb-2004.jpg',
    badge: 'Heavy Duty',
    colorTone: '#c2410c',
    description: 'High polymer modified adhesive ideal for Tile-on-Tile renovation, large format tiles, and interior/exterior flooring.',
    fullDescription: 'VB-2004 is a cutting-edge C2TE class high polymer blended cementitious adhesive designed specifically for fixing vitrified, porcelain, and natural stone tiles over existing ceramic or terrazzo flooring (Tile-on-Tile) without having to break the old tiles. It eliminates tedious demolitions, produces zero dust nuisance, and forms an unbreakable chemical bond. Highly recommended for demanding floor and wall applications both indoors and outdoors.',
    keyFeatures: [
      'Perfect for Tile-on-Tile renovation without chipping old floors',
      'Advanced C2TE European standard polymer bonding strength',
      'Supports large format tiles and heavy porcelain slabs',
      'Exceptional thermal shock and moisture resistance',
      'Suitable for interior & exterior floor applications',
      'Conforms to IS 15477:2019 Type 2T and EN 12004 C2TE'
    ],
    suitableFor: [
      'Tile-on-Tile over existing glazed or ceramic tiles',
      'Large format vitrified tiles (up to 4x2 ft, 4x4 ft)',
      'Natural stones of regular size (granite, marble, kota stone)',
      'Concrete slabs, screeds, cement terrazzo and exterior patios'
    ],
    applicationAreas: [
      'Home renovations & quick remodeling projects',
      'Malls, retail showrooms, luxury hotel lobbies',
      'Commercial food courts and busy corporate corridors',
      'Exterior balconies, verandahs, and covered terraces'
    ],
    technicalData: {
      productType: 'High-Polymer modified C2TE adhesive',
      conformance: 'IS: 15477:2019 Type 2T & EN 12004 C2TE',
      bedThickness: '3 mm to 8 mm',
      potLife: '2 - 3 hours at 27°C',
      openTime: '30 - 35 minutes',
      adjustabilityTime: '25 minutes',
      waterDemand: 'Approx. 5.2 to 5.6 Litres per 20 kg bag (Ratio 3.5:1)',
      curingTime: '24 hours for foot traffic; full mechanical strength 14 days',
      tensileAdhesion: '≥ 1.2 N/mm² at 28 days',
      shearStrength: '≥ 1.5 N/mm²',
      temperatureRange: '-10°C to +80°C',
      coverage: 'Approx. 50 - 55 sq.ft per 20 kg bag at 3 mm bed thickness',
      shelfLife: '12 months from manufacturing date'
    },
    howToUse: [
      {
        step: '01',
        title: 'Surface Preparation for Tile-on-Tile',
        instruction: 'For Tile-on-Tile, thoroughly clean existing tiles with degreaser and water to remove wax, polish, or oil. Abrade glossy surfaces with coarse sandpaper or diamond cup wheel for optimal mechanical keying.'
      },
      {
        step: '02',
        title: 'Water Ratio & Mixing',
        instruction: 'Add 20 kg VB-2004 into 5.2 - 5.6 L clean water. Mix thoroughly with a slow speed paddle mixer for 3 to 5 minutes until homogenous paste is obtained. Rest 5 minutes, remix before trowel application.'
      },
      {
        step: '03',
        title: 'Application',
        instruction: 'Apply adhesive to substrate using flat edge first, then notch with 8mm to 10mm trowel. For large format tiles or stones, back-butter the tile reverse side to ensure zero voids and solid support.'
      },
      {
        step: '04',
        title: 'Installation & Finishing',
        instruction: 'Install tiles within 30-35 minutes. Press firmly with twist and tap with rubber mallet. Maintain minimum 2-3mm joints using tile spacers. Grout after 24 hours.'
      }
    ]
  },
  {
    id: 'vb-3003',
    slug: 'vb-3003-large-format-tile-adhesive',
    name: 'VB-3003 Large Format Tile & Stone Adhesive',
    code: 'VB-3003',
    subtitle: 'Tile Adhesive for Large Format Tile & Stone',
    category: 'Large Format',
    standardType: 'IS: 15477:2019 TYPE 3 T',
    enCode: 'EN 12004 C2TES2',
    packSize: '20 kg',
    image: '/images/products/vb-3003.jpg',
    badge: 'High Strength',
    colorTone: '#ea580c',
    description: 'High-strength polymer blended cementitious adhesive conforming to Type 3 T / C2TES2 for large format tiles and stones even greater than 600x600mm.',
    fullDescription: 'VB-3003 is a premium high-strength polymer blended, cement-based tile adhesive engineered for large format tiles and natural stones. Conforming strictly to IS: 15477:2019 Type 3 T and EN 12004 C2TES2 standards, it delivers superior deformability, slip resistance, and bond strength on interior and exterior walls and floors. Suitable for all types of tiles and stones even greater than 600mm x 600mm, including dry wallboard substrates.',
    keyFeatures: [
      'High Strength fibre-reinforced formulation',
      'Conforms to IS: 15477:2019 Type 3 T & EN 12004 C2TES2',
      'Suitable for all types of tiles & stones > 600mm x 600mm',
      'Excellent adhesion with substrate & strong bond',
      'Interior & exterior floor and wall applications',
      'Certified CE, ISI Mark, ISO 9001, ISO 14001, ISO 45001'
    ],
    suitableFor: [
      'Large format vitrified tiles (800x800mm, 1200x600mm, 1600x800mm, 1200x2400mm)',
      'Natural stone tiles, granite, marble and heavy stone slabs',
      'Dry wallboard substrates, cement backer boards, concrete and plaster',
      'High traffic commercial areas and exterior facades'
    ],
    applicationAreas: [
      'Large commercial floors & exterior facades',
      'High-traffic public corridors and retail atriums',
      'Dry wallboard partitions, drywall systems and cement boards',
      'Luxury residential living areas, patios, and terrace walls'
    ],
    technicalData: {
      productType: 'Polymer blended cement-based Type 3 T adhesive',
      conformance: 'IS: 15477:2019 Type 3 T & EN 12004 C2TES2',
      bedThickness: '3 mm to 12 mm',
      potLife: '3 - 4 hours at 27°C',
      openTime: '30 - 40 minutes',
      adjustabilityTime: '25 - 30 minutes',
      waterDemand: 'Ratio 3.5:1 (approx. 5.7 Litres per 20 kg bag)',
      curingTime: 'Foot traffic after 24 hours; full mechanical strength 14 days',
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
        instruction: 'Ensure that the surface to be tiled is levelled, cleaned, and free from dust, oil, grease, or curing compounds. Dry surface should be dampened with water. All surfaces must be plumb and true to within 6 mm in 10 ft (3m).'
      },
      {
        step: '02',
        title: 'Mixing (3.5:1 Ratio)',
        instruction: 'Mix VB-3003 with water in the ratio of 3.5:1. Mix with a suitable mechanical stirrer or slow speed drills for 3 to 5 minutes until a lump-free homogeneous paste is obtained. Leave mixture for 5 minutes before use.'
      },
      {
        step: '03',
        title: 'Application & Combing',
        instruction: 'Apply adhesive to the substrate and comb the surface using a Notch Trowel with the flat side first, then notched side. Tiles must be fixed within 15-40 minutes of adhesive application depending on porosity and weather.'
      },
      {
        step: '04',
        title: 'Fixing & Grouting',
        instruction: 'Press tiles firmly into position with a slight twisting action to leave no voids behind tiles. Use suitable support for vertical walls with longer holding time. Protect from rainfall / foot traffic and start Tile Grout filling only after 24 hours.'
      }
    ]
  },
  {
    id: 'vb-stonefix',
    slug: 'vb-stonefix-premium-adhesive',
    name: 'VB-StoneFix Marble & Granite Adhesive',
    code: 'VB-STONEFIX',
    subtitle: 'Heavy-Duty Adhesive for Natural Stone, Marble & Granite',
    category: 'Stone & Marble',
    standardType: 'IS: 15477:2019 TYPE 3T',
    enCode: 'EN 12004 C2TES1',
    packSize: '20 kg',
    image: '/images/products/vb-2002.jpg',
    badge: 'Stone Specialist',
    colorTone: '#9a3412',
    description: 'High polymer elastomeric adhesive specifically formulated for heavy natural stones, Italian marble, granite slabs and elevation cladding.',
    fullDescription: 'VB-StoneFix is a polymer-dense, high-strength adhesive engineered for bonding heavy natural stones like Italian marble, granite, sandstone, and limestone on floors and vertical facades. Its elastomeric polymer formula provides exceptional shear bond strength and absorbs substrate deflections and thermal expansion.',
    keyFeatures: [
      'Engineered for heavy Italian marble, granite and stone slabs',
      'High shear strength prevents heavy stone slide on vertical walls',
      'Flexible S1 deformation capability absorbs structural stress',
      'Non-sagging formulation for facade elevation cladding',
      'Waterproof formulation prevents moisture stain penetration'
    ],
    suitableFor: [
      'Italian marble & translucent quartz',
      'Granite slabs & natural sandstone',
      'Heavy elevation wall stones and pavers',
      'Concrete substrates, brick masonry, cement plaster'
    ],
    applicationAreas: [
      'Luxury residential living areas & elevation facades',
      'Hotel lobbies, temple architecture, entrance portals',
      'Commercial building reception atriums',
      'External boundary walls and landscaped stone features'
    ],
    technicalData: {
      productType: 'High polymer elastomeric stone adhesive',
      conformance: 'IS: 15477:2019 Type 3T & EN 12004 C2TES1',
      bedThickness: '4 mm to 12 mm',
      potLife: '2 hours at 27°C',
      openTime: '30 minutes',
      adjustabilityTime: '20 minutes',
      waterDemand: 'Approx. 5.0 to 5.4 Litres per 20 kg bag',
      curingTime: '24 hours for light traffic; 7 days full bond',
      tensileAdhesion: '≥ 1.5 N/mm²',
      shearStrength: '≥ 1.8 N/mm²',
      temperatureRange: '-15°C to +90°C',
      coverage: 'Approx. 40 - 45 sq.ft per 20 kg bag at 4 mm thickness',
      shelfLife: '12 months in dry storage'
    },
    howToUse: [
      {
        step: '01',
        title: 'Stone Inspection & Cleaning',
        instruction: 'Inspect marble or granite slabs. Ensure backs of stones are clean and free of resin mesh powders or dust. Ensure substrate is plumb and solid.'
      },
      {
        step: '02',
        title: 'Mixing',
        instruction: 'Gradually mix 20 kg VB-StoneFix into 5.2 litres water using a high-torque mechanical mixer until uniform consistency is achieved.'
      },
      {
        step: '03',
        title: 'Double Spreading (Back-Butter)',
        instruction: 'Notch adhesive onto substrate with 10mm trowel and apply 1-2mm layer directly to the back of each stone slab to ensure 100% solid coverage with no hollow pockets.'
      },
      {
        step: '04',
        title: 'Alignment & Grout',
        instruction: 'Press slab into place, check plumb with spirit level, and support with mechanical brackets if fixing at elevation. Grout joints after 24-48 hours.'
      }
    ]
  },
  {
    id: 'vb-exterior',
    slug: 'vb-exterior-tile-adhesive',
    name: 'VB-Exterior Weather-Proof Adhesive',
    code: 'VB-EXTERIOR',
    subtitle: 'For Outdoor, Facades & Harsh Weather Conditions',
    category: 'Exterior',
    standardType: 'IS: 15477:2019 TYPE 4',
    enCode: 'EN 12004 C2TES2',
    packSize: '20 kg',
    image: '/images/products/vb-2004.jpg',
    badge: 'Weather Proof',
    colorTone: '#1e3a8a',
    description: 'Deformable S2 class adhesive built to withstand extreme monsoon rains, summer thermal expansion, UV exposure, and freeze-thaw cycles.',
    fullDescription: 'VB-Exterior is our flagship high-elasticity tile adhesive designed specifically for demanding outdoor installations including building facades, balconies, rooftop terraces, swimming pools, and external walkways. Formulated with flexible elastomeric polymers, it handles severe temperature fluctuations from blistering summer heat to winter chills without bond failure.',
    keyFeatures: [
      'High elasticity S2 deformable class absorbs thermal shock',
      '100% water resistant, ideal for swimming pools and wet areas',
      'UV resistant and impervious to severe monsoon rains',
      'Tested for building facade cladding up to elevated heights',
      'Prevents efflorescence and debonding over time'
    ],
    suitableFor: [
      'Vitrified and porcelain tiles for outdoor cladding',
      'Swimming pool glass mosaic tiles and coping stones',
      'Terrace roof tiles and balcony flooring',
      'External facades, concrete pillars and building exteriors'
    ],
    applicationAreas: [
      'High-rise building facades & external elevations',
      'Balconies, terraces and open-to-sky courtyards',
      'Swimming pools, water bodies, and fountains',
      'Driveways, patios and outdoor dining areas'
    ],
    technicalData: {
      productType: 'Highly deformable elastomeric cementitious adhesive',
      conformance: 'IS: 15477:2019 Type 4 & EN 12004 C2TES2',
      bedThickness: '3 mm to 10 mm',
      potLife: '2.5 hours',
      openTime: '30 minutes',
      adjustabilityTime: '25 minutes',
      waterDemand: 'Approx. 5.4 to 5.8 Litres per 20 kg bag',
      curingTime: '24-48 hours before exposure; 21 days for swimming pools',
      tensileAdhesion: '≥ 1.8 N/mm²',
      shearStrength: '≥ 2.0 N/mm²',
      temperatureRange: '-25°C to +100°C',
      coverage: 'Approx. 45 - 50 sq.ft per 20 kg bag at 3 mm thickness',
      shelfLife: '12 months in unopened bag'
    },
    howToUse: [
      {
        step: '01',
        title: 'Exterior Substrate Prep',
        instruction: 'Ensure exterior concrete or plaster is fully cured (at least 28 days old) with proper drainage slope. Substrate should be structurally sound and free from moss, algae, and release agents.'
      },
      {
        step: '02',
        title: 'Mixing Procedure',
        instruction: 'Add 20kg VB-Exterior powder to 5.5L water. Mechanical mix for 3-5 mins until uniform. Allow 5 min rest time, then remix.'
      },
      {
        step: '03',
        title: 'Application & Expansion Joints',
        instruction: 'Trowel with 8x8mm or 10x10mm notch. Back-butter all tiles to guarantee 100% coverage. Install movement/expansion joints every 3 to 4 meters as per building standards.'
      },
      {
        step: '04',
        title: 'Weather Protection',
        instruction: 'Protect freshly installed tiles from direct rainfall and hot direct sun for at least 24 hours. Grout with waterproof epoxy grout.'
      }
    ]
  },
  {
    id: 'vb-white',
    slug: 'vb-white-tile-adhesive',
    name: 'VB-White Translucent & Glass Tile Adhesive',
    code: 'VB-WHITE',
    subtitle: 'For Light Colored Stones, Onyx & Glass Mosaics',
    category: 'Stone & Marble',
    standardType: 'IS: 15477:2019 TYPE 2T (White)',
    enCode: 'EN 12004 C1TE',
    packSize: '20 kg',
    image: '/images/products/vb-1001.jpg',
    badge: 'Premium White',
    colorTone: '#475569',
    description: 'Pure white cement-based polymer adhesive designed to preserve the luminous aesthetics of white marble, glass mosaics, and translucent quartz.',
    fullDescription: 'VB-White is engineered using ultra-pure white Portland cement and premium polymers to prevent shadowing, discoloration, and bleed-through when installing white or translucent tiles. Perfect for Italian Carrara marble, Thassos marble, glass mosaic tiles, and high-end bathroom spas.',
    keyFeatures: [
      'Pure bright white base prevents shadow or dark tile bleed',
      'Safe for translucent marble, onyx, and glass mosaics',
      'Superior tack and vertical hold with non-slip technology',
      'Water and moisture resistant for luxury spas & showers',
      'Non-yellowing formulation with anti-staining agents'
    ],
    suitableFor: [
      'Glass mosaic tiles and translucent glass blocks',
      'White Italian marble (Statuario, Carrara, Thassos)',
      'Onyx, mother-of-pearl, and translucent composite quartz',
      'Luxury designer wall and floor tiles'
    ],
    applicationAreas: [
      'Designer bathrooms, walk-in showers & spa zones',
      'Swimming pools and luxury jacuzzi mosaic cladding',
      'Kitchen backsplashes with glass mosaics',
      'Accent feature walls and backlit onyx installations'
    ],
    technicalData: {
      productType: 'White cement polymer-modified adhesive',
      conformance: 'IS: 15477:2019 Type 2T (White) & EN 12004 C1TE',
      bedThickness: '2 mm to 5 mm',
      potLife: '2 hours at 27°C',
      openTime: '25 minutes',
      adjustabilityTime: '15 minutes',
      waterDemand: 'Approx. 5.2 to 5.6 Litres per 20 kg bag',
      curingTime: '24 hours for foot traffic',
      tensileAdhesion: '≥ 1.0 N/mm²',
      shearStrength: '≥ 1.25 N/mm²',
      temperatureRange: '+5°C to +60°C',
      coverage: 'Approx. 55 - 60 sq.ft per 20 kg bag at 3 mm thickness',
      shelfLife: '12 months in dry storage'
    },
    howToUse: [
      {
        step: '01',
        title: 'Clean Bed Preparation',
        instruction: 'Substrate must be completely dry, flat, and spotless. Any dust or rust spots will show through translucent stones or glass tiles.'
      },
      {
        step: '02',
        title: 'Mixing with Clean Water',
        instruction: 'Use strictly clean potable water in a spotless bucket to preserve pure white color. Mix 20 kg with 5.4 litres water for 3-5 mins.'
      },
      {
        step: '03',
        title: 'Mosaic Application',
        instruction: 'Use a 3mm to 4mm notch trowel for glass mosaic sheets. Flatten the ridges lightly with trowel back to prevent ridges showing through clear glass.'
      },
      {
        step: '04',
        title: 'Setting & Grout',
        instruction: 'Tap mosaic sheets into place with a wooden float. Clean excess adhesive off tile face before setting. Grout with epoxy grout after 24 hours.'
      }
    ]
  }
];
