export interface Application {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  shortDesc: string;
  detailedDesc: string;
  recommendedProducts: {
    name: string;
    code: string;
    slug: string;
    reason: string;
  }[];
  keyBenefits: string[];
  bestPractices: string[];
}

export const applications: Application[] = [
  {
    id: 'residential',
    slug: 'residential-spaces',
    title: 'Residential Spaces',
    subtitle: 'Living rooms, kitchens, bedrooms, bathrooms & villas',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    shortDesc: 'Perfect for homes, apartments and villas offering long-lasting luxury, dust-free installation, and zero tile hollow sounds.',
    detailedDesc: 'Modern residences demand flawless aesthetics, durable bonds, and fast, clean installation. Vajra Bond adhesives ensure your high-end vitrified tiles, wooden-look planks, and ceramic floorings stay bonded forever without shrinkage cracks, hollow sounding pockets, or popped tiles.',
    recommendedProducts: [
      {
        name: 'VB-1001 Standard Tile Adhesive',
        code: 'VB-1001',
        slug: 'vb-1001-standard-tile-adhesive',
        reason: 'Ideal for indoor ceramic and clay tiles in bedrooms and living rooms.'
      },
      {
        name: 'VB-2002 Flexi Tile Adhesive',
        code: 'VB-2002',
        slug: 'vb-2002-flexi-tile-adhesive',
        reason: 'Recommended for 2x4 ft vitrified tiles and bathroom wall cladding up to 10 ft.'
      },
      {
        name: 'VB-2004 Ultra Tile Adhesive',
        code: 'VB-2004',
        slug: 'vb-2004-ultra-tile-adhesive',
        reason: 'Unmatched for Tile-on-Tile renovation without demolishing existing floors.'
      }
    ],
    keyBenefits: [
      'Zero tile hollow sound guaranteed with 100% bed contact',
      'No messy sand-cement mortar curing needed with water pipes',
      'Accommodates household floor heating and ambient temperature shifts',
      'Resistant to household cleaning agents and spills'
    ],
    bestPractices: [
      'Ensure 24 hours of curing before moving heavy furniture',
      'Use rubber mallets and level spacers to maintain flush joints',
      'Clean spills and grouts within 2 hours of installation'
    ]
  },
  {
    id: 'commercial',
    slug: 'commercial-buildings',
    title: 'Commercial Buildings',
    subtitle: 'Offices, malls, retail stores, hotels & airports',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
    shortDesc: 'Engineered for high-traffic and heavy-duty spaces with fast curing times to minimize business downtime.',
    detailedDesc: 'Commercial environments face relentless pedestrian traffic, rolling luggage carts, shopping trolleys, and automated cleaning machinery. Vajra Bond high-strength adhesives provide heavy shear and tensile resistance to prevent edge chipping, tile debonding, and structural movement cracks.',
    recommendedProducts: [
      {
        name: 'VB-2002 Flexi Tile Adhesive',
        code: 'VB-2002',
        slug: 'vb-2002-flexi-tile-adhesive',
        reason: 'High bond flexibility for busy office floorings and corporate corridors.'
      },
      {
        name: 'VB-2004 Ultra Tile Adhesive',
        code: 'VB-2004',
        slug: 'vb-2004-ultra-tile-adhesive',
        reason: 'High polymer C2TE grade built to absorb heavy mall and airport footfalls.'
      }
    ],
    keyBenefits: [
      'Heavy dynamic load capacity resisting rolling wheeled loads',
      'Rapid open-for-traffic capability to meet tight project handovers',
      'Non-slip vertical hold for grand lobby wall features',
      'Low VOC formulation safe for indoor air quality certification'
    ],
    bestPractices: [
      'Include perimeter movement joints and division joints every 5 meters',
      'Use 8mm or 10mm notched trowels for continuous adhesive thickness',
      'Employ mechanical mixer to maintain uniform mortar consistency'
    ]
  },
  {
    id: 'industrial',
    slug: 'industrial-spaces',
    title: 'Industrial Spaces',
    subtitle: 'Warehouses, factories, chemical plants & workshops',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
    shortDesc: 'Heavy-duty bonding solutions resisting forklift traffic, chemical exposure, vibration, and thermal shocks.',
    detailedDesc: 'Industrial floors demand supreme shear resistance capable of withstanding heavy pallet jacks, forklifts, machinery vibration, and chemical detergents. Vajra Bond industrial grade tile bonding solutions deliver uninterrupted structural integrity under high compressive and impact forces.',
    recommendedProducts: [
      {
        name: 'VB-2004 Ultra Tile Adhesive',
        code: 'VB-2004',
        slug: 'vb-2004-ultra-tile-adhesive',
        reason: 'High polymer matrix resists forklift vibrations and heavy impact loads.'
      },
      {
        name: 'VB-Exterior High Flex Adhesive',
        code: 'VB-EXTERIOR',
        slug: 'vb-exterior-tile-adhesive',
        reason: 'Type 4 deformable polymer grade for loading bays and external ramps.'
      }
    ],
    keyBenefits: [
      'Supreme compressive and shear strength exceeding IS 15477 criteria',
      'Resistant to industrial washing detergents and machine oils',
      'Maintains bond integrity under severe cyclic equipment vibration',
      'Excellent thermal endurance from -10°C to +80°C'
    ],
    bestPractices: [
      'Ensure concrete base is cured for minimum 28 days with zero moisture pressure',
      'Back-butter all heavy-duty industrial tiles to eliminate voids completely',
      'Pair with Vajra Bond industrial epoxy grout for chemical resistance'
    ]
  },
  {
    id: 'wet-areas',
    slug: 'wet-areas',
    title: 'Wet Areas & Swimming Pools',
    subtitle: 'Bathrooms, swimming pools, spas, water tanks & fountains',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop',
    shortDesc: 'Reliable performance in bathrooms, kitchens and swimming pools with 100% water and moisture resistance.',
    detailedDesc: 'Wet zones such as swimming pools, submerged fountains, and luxury rain showers are subject to constant hydraulic pressure, chlorine, and dampness. Vajra Bond waterproof polymer adhesives create an impenetrable barrier that prevents water penetration behind tiles and eliminates mold, efflorescence, and tile delamination.',
    recommendedProducts: [
      {
        name: 'VB-Exterior High Flex Adhesive',
        code: 'VB-EXTERIOR',
        slug: 'vb-exterior-tile-adhesive',
        reason: 'Fully waterproof Type 4 adhesive built for continuous water immersion.'
      },
      {
        name: 'VB-White Tile Adhesive',
        code: 'VB-WHITE',
        slug: 'vb-white-tile-adhesive',
        reason: 'Pure white non-staining adhesive for pool glass mosaic tiles and spas.'
      }
    ],
    keyBenefits: [
      'Withstands continuous hydrostatic water immersion',
      'Resistant to pool chemicals, chlorine, and algae growth',
      'Prevents efflorescence and unsightly white salt marks',
      'Exceptional grab preventing mosaic sheets from sagging'
    ],
    bestPractices: [
      'Apply waterproofing membrane prior to adhesive application',
      'Allow pool adhesives to cure for minimum 21 days before filling with water',
      'Use 100% waterproof epoxy tile grout in submerged areas'
    ]
  },
  {
    id: 'exterior',
    slug: 'exterior-applications',
    title: 'Exterior Applications',
    subtitle: 'Balconies, building facades, terraces & patios',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop',
    shortDesc: 'Built to withstand outdoor conditions, UV radiation, heavy monsoons, and extreme weather changes.',
    detailedDesc: 'External building facades and open terraces endure extreme temperature swings between scorching afternoon sun and cold nights, causing severe tile expansion and contraction. Vajra Bond elastomeric adhesives feature S1 and S2 deformable ratings that flex with thermal movements, preventing dangerous facade tile falls.',
    recommendedProducts: [
      {
        name: 'VB-Exterior High Flex Adhesive',
        code: 'VB-EXTERIOR',
        slug: 'vb-exterior-tile-adhesive',
        reason: 'S2 deformable elastomeric formulation for building elevations and terraces.'
      },
      {
        name: 'VB-StoneFix Marble & Granite',
        code: 'VB-STONEFIX',
        slug: 'vb-stonefix-premium-adhesive',
        reason: 'Maximum vertical shear strength for external natural stone elevation cladding.'
      }
    ],
    keyBenefits: [
      'High flexibility absorbs expansion without shearing tile bond',
      'Zero degradation under harsh ultraviolet sun exposure',
      'Impervious to heavy seasonal monsoon rainfall',
      'Engineered for high-rise facade safety compliance'
    ],
    bestPractices: [
      'Incorporate expansion joints at 3m to 4m intervals in outdoor installations',
      'Provide mechanical tie-backs/clamps for tiles installed above 3 meters height',
      'Avoid tiling during rain or direct blistering midday sun'
    ]
  },
  {
    id: 'large-format',
    slug: 'large-format-tiles',
    title: 'Large Format Tiles & Slabs',
    subtitle: 'Porcelain slabs up to 1200x2400mm & slim tiles',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop',
    shortDesc: 'Strong bonding for large and heavy tiles, ensuring 100% bed coverage and zero lippage or sagging.',
    detailedDesc: 'Large format porcelain slabs (such as 800x1600mm and 1200x2400mm) have virtually zero porosity and require specialized polymer-rich adhesives with long open times and thixotropic non-slump properties. Vajra Bond adhesives provide effortless workability, instant suction grip, and flat lippage-free surfaces.',
    recommendedProducts: [
      {
        name: 'VB-2004 Ultra Tile Adhesive',
        code: 'VB-2004',
        slug: 'vb-2004-ultra-tile-adhesive',
        reason: 'C2TE polymer rating provides strong suction grip for large porcelain slabs.'
      },
      {
        name: 'VB-StoneFix Premium Adhesive',
        code: 'VB-STONEFIX',
        slug: 'vb-stonefix-premium-adhesive',
        reason: 'Heavy-duty shear strength for thick 15mm-20mm stone slabs.'
      }
    ],
    keyBenefits: [
      'Extended 35-minute open time allows ample time for slab handling and alignment',
      'High initial suction prevents heavy slab slide on walls',
      'Thixotropic bed supports heavy slabs without sinking or uneven lippage',
      'Reduces risk of hollow spots under delicate slab centers'
    ],
    bestPractices: [
      'Always use double spreading method (notch substrate + flat back of slab)',
      'Use suction cups, slab carrying frames, and mechanical vibration tools',
      'Maintain leveling clip system until adhesive reaches full initial set'
    ]
  }
];
