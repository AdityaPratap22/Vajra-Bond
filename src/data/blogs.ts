import rawBlogMeta from './blog-meta.json';

export interface BlogPostMeta {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: 'Installation Guide' | 'Technical Guide' | 'Tips & Tricks' | 'Industry Insights';
  date: string;
  readTime: string;
  wordCount?: number;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  coverImage: string;
  tags: string[];
  featured?: boolean;
  recommendedProducts?: string[];
}

export interface BlogPost extends BlogPostMeta {
  content: {
    heading?: string;
    text: string;
    list?: string[];
  }[];
}

// 5 Core Handcrafted Pillar Articles
export const pillarPosts: BlogPost[] = [
  {
    slug: 'is-15477-2019-tile-adhesive-classification-guide',
    title: 'Understanding IS 15477:2019 — Type 1, Type 2 & Type 3 Tile Adhesives Explained',
    subtitle: 'A structural guide for architects and contractors on selecting the right adhesive class.',
    excerpt: 'Demystifying the Bureau of Indian Standards (BIS) specifications for tile adhesives: from Type 1T ceramic bonding to Type 3T C2TES2 heavy stone applications.',
    category: 'Technical Guide',
    date: 'Oct 24, 2026',
    readTime: '6 min read',
    wordCount: 1250,
    author: {
      name: 'Er. Rajesh Sharma',
      role: 'Chief Technical Advisor',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    },
    coverImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop',
    tags: ['IS 15477', 'Specifications', 'Type 2T', 'Type 3T', 'Engineering'],
    featured: true,
    content: [
      {
        heading: 'Why Standard Classification Matters',
        text: 'In contemporary construction, tile failure is almost never due to the tile itself—it is usually due to improper adhesive selection or surface preparation. The Bureau of Indian Standards updated IS 15477 in 2019 to harmonize Indian codes with European EN 12004 norms, categorizing adhesives into distinct functional tiers.',
      },
      {
        heading: 'Type 1 / Type 1T (C1TE): Porous Tiles & Masonry Substrates',
        text: 'Type 1 adhesives are formulated for traditional ceramic, terracotta, and clay tiles with water absorption > 3%. They provide mechanical keying on cement-sand plaster and concrete floors. The "T" designation denotes slip resistance, preventing tiles from sliding during vertical wall installations.',
        list: [
          'Best for: Standard ceramic wall and floor tiles up to 300x300mm',
          'Key product: Vajra Bond VB-1001',
          'Not recommended for: Vitrified porcelain tiles or exterior facades',
        ],
      },
      {
        heading: 'Type 2 / Type 2T (C1TE / C2TE): Vitrified & Low Porosity Tiles',
        text: 'Vitrified and porcelain tiles have water absorption less than 0.5%, making mechanical interlock impossible. Type 2 adhesives contain specialized redispersible polymer powders that form chemical bonds with dense vitreous bodies. Type 2T offers enhanced open time and thixotropic non-slip behavior.',
        list: [
          'Best for: Vitrified tiles up to 800x800mm, floor and internal wall cladding',
          'Substrates: Cement plaster, concrete, and existing tile surfaces',
          'Key products: Vajra Bond VB-2002 & VB-2004',
        ],
      },
      {
        heading: 'Type 3 / Type 3T (C2TES2): Large Format Slabs & Exterior Cladding',
        text: 'Large format porcelain slabs (1200x1800mm and above), granite, and natural stones subject the adhesive bed to thermal expansion and wind loads. Type 3 adhesives offer S1/S2 high lateral deformability, absorbing shear stress without debonding.',
        list: [
          'Best for: Slabs over 1200mm, exterior facades, heated floors, and swimming pools',
          'Key product: Vajra Bond VB-3003 Large Format Tile & Stone Adhesive',
        ],
      },
    ],
    recommendedProducts: ['vb-1001', 'vb-2002', 'vb-3003'],
  },
  {
    slug: 'tile-on-tile-renovation-guide-without-demolition',
    title: 'Tile-on-Tile Fixing: How to Renovate Floors & Walls Without Messy Demolition',
    subtitle: 'Save up to 60% on project time and eliminate debris with polymer-modified adhesive.',
    excerpt: 'Step-by-step methodology to bond new tiles over existing terrazzo, mosaic, or ceramic surfaces cleanly, quickly, and with permanent bond strength.',
    category: 'Installation Guide',
    date: 'Oct 18, 2026',
    readTime: '5 min read',
    wordCount: 1100,
    author: {
      name: 'Vikas Patel',
      role: 'Site Application Specialist',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    },
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    tags: ['Renovation', 'Tile on Tile', 'Interiors', 'VB-2004'],
    featured: false,
    content: [
      {
        heading: 'The Old Demolition Dilemma',
        text: 'Hacking away old tiles generates clouds of dust, disruptive noise, debris disposal headaches, and the risk of puncturing concealed plumbing lines or damp-proof membranes. Tile-on-tile fixing provides a clean, fast alternative when executed with polymer-engineered adhesives.',
      },
      {
        heading: 'Phase 1: Assessing the Existing Floor',
        text: 'Before laying a single tile, inspect the existing surface. Tap every existing tile with a wooden mallet or screwdriver handle. Any hollow-sounding or loose tiles must be removed and patched with rapid-setting cement mortar.',
      },
      {
        heading: 'Phase 2: Degreasing and Surface Etching',
        text: 'Existing tiles often carry years of wax, detergent films, or cooking grease. Scrub thoroughly with an alkaline cleaner or dilute acid wash, then rinse and let completely dry. For glazed tiles, mechanical scarification with a diamond grinding cup ensures superior grip.',
      },
      {
        heading: 'Phase 3: Notched Trowel Application',
        text: 'Use Vajra Bond VB-2004 formulated specifically with elastic polymers for tile-on-tile applications. Spread adhesive with the flat edge of a trowel to key into the substrate, then comb with a 6mm to 8mm square-notched trowel in straight parallel ridges.',
      },
    ],
    recommendedProducts: ['vb-2004'],
  },
  {
    slug: 'common-tile-installation-mistakes-hollow-sounds',
    title: '5 Costly Tile Installation Mistakes and How to Prevent Hollow Sounds & Cracks',
    subtitle: 'Why tiles debond and crack prematurely—and the site practices that ensure 100% bed coverage.',
    excerpt: 'Hollow sounds underfoot and hairline cracks in expensive tiles are completely preventable. Learn the 5 most common tiler pitfalls and how proper tooling avoids them.',
    category: 'Tips & Tricks',
    date: 'Oct 11, 2026',
    readTime: '4 min read',
    wordCount: 1050,
    author: {
      name: 'Sunil Verma',
      role: 'Quality Assurance Lead',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    },
    coverImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop',
    tags: ['Quality', 'Troubleshooting', 'Hollow Sound', 'Best Practices'],
    featured: false,
    content: [
      {
        heading: 'Mistake #1: Swirl Troweling (Circular Ridges)',
        text: 'Tilers often trowel adhesive in swirling circular patterns out of habit. Circular ridges trap pockets of air underneath the tile when pressed down. Instead, always comb in straight parallel lines perpendicular to the short edge of the tile so air escapes effortlessly.',
      },
      {
        heading: 'Mistake #2: Spot Bonding / Dot-and-Dab',
        text: 'Placing four or five blobs of adhesive at the tile corners leaves over 50% void space beneath the tile. A point load from high heels or furniture legs will snap the tile. Full bed contact (minimum 85% for interiors, 95% for wet areas and exteriors) is mandatory.',
      },
      {
        heading: 'Mistake #3: Exceeding Open Time',
        text: 'Spreading adhesive over too large an area before placing tiles leads to "skinning"—a thin dry film forming on the ridge tops. Always test by touching the ridges; if adhesive does not transfer to your finger, scrape it off and re-apply fresh mix.',
      },
      {
        heading: 'Mistake #4: Skipping Back-Buttering on Large Tiles',
        text: 'For any tile larger than 600x600mm, back-buttering (spreading a flat skim coat of adhesive on the back of the tile) is essential to fill microscopic voids and ensure 100% bond.',
      },
    ],
    recommendedProducts: ['vb-2002', 'vb-3003'],
  },
  {
    slug: 'waterproofing-and-tile-adhesive-in-bathrooms-swimming-pools',
    title: 'Waterproofing & Tile Fixing in Wet Areas: Zero-Leakage Bathroom & Pool Construction',
    subtitle: 'Systemic waterproofing and moisture-resistant polymer adhesives for long-lasting wet areas.',
    excerpt: 'Water pressure, steam, and chemical cleaners demand a continuous waterproofing membrane paired with C2TE water-impermeable tile adhesives.',
    category: 'Installation Guide',
    date: 'Sep 29, 2026',
    readTime: '6 min read',
    wordCount: 1200,
    author: {
      name: 'Er. Rajesh Sharma',
      role: 'Chief Technical Advisor',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    },
    coverImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
    tags: ['Bathrooms', 'Swimming Pools', 'Waterproofing', 'Wet Areas'],
    featured: false,
    content: [
      {
        heading: 'The Anatomy of a Wet Area Failure',
        text: 'In wet areas like walk-in showers, commercial restrooms, and swimming pools, water that penetrates tile grout joints must never compromise the structural slab or escape into adjacent rooms.',
      },
      {
        heading: 'The Critical Rule: Grout is Not Waterproof',
        text: 'Cementitious tile grout is water-resistant, not 100% waterproof. Over time, microscopic hairline movements allow moisture ingress. The real barrier is the elastomeric membrane under the adhesive bed.',
      },
      {
        heading: 'Adhesive Selection for Wet Zones',
        text: 'Adhesives in wet areas must exhibit continuous bond strength even under total water immersion. Vajra Bond Type 2T and Type 3T adhesives feature synthetic resins that do not soften or hydrolyze when exposed to constant moisture.',
      },
    ],
    recommendedProducts: ['vb-2002', 'vb-3003'],
  },
  {
    slug: 'traditional-sand-cement-vs-modern-tile-adhesive',
    title: 'Traditional Sand-Cement Mortar vs. Ready-Mix Polymer Tile Adhesive: The Definitive Comparison',
    subtitle: 'Why modern architecture has permanently retired thick-bed sand-cement mortar for tile fixing.',
    excerpt: 'Compare bond strength, bed thickness, curing time, dead load reduction, and total lifecycle costs between traditional sand-cement and ready-mix polymer tile adhesives.',
    category: 'Industry Insights',
    date: 'Sep 15, 2026',
    readTime: '5 min read',
    wordCount: 1150,
    author: {
      name: 'Vikas Patel',
      role: 'Site Application Specialist',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    },
    coverImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop',
    tags: ['Comparison', 'Efficiency', 'Economics', 'Sustainable Building'],
    featured: false,
    content: [
      {
        heading: 'The Shift in Tile Manufacturing',
        text: 'Decades ago, ceramic tiles were thick, porous, and small. Traditional cement slurry soaked into their open pores. Today, vitrified and porcelain tiles have almost zero porosity. Thick sand-cement mortar simply cannot adhere to them.',
      },
      {
        heading: 'Thin-Bed vs. Thick-Bed Economy',
        text: 'Sand-cement mortar requires a 20mm to 30mm thick bed, adding hundreds of kilograms of unnecessary dead load per room. Polymer tile adhesive requires only 3mm to 5mm, saving floor height, reducing structural dead load, and speeding up project completion threefold.',
      },
      {
        heading: 'Consistency and Quality Control',
        text: 'Site-mixed sand and cement suffers from inconsistent sand quality, silt contamination, and uneven water ratios. Vajra Bond ready-mix adhesives are manufactured under strict automated laboratory batch controls with graded quartz and polymers.',
      },
    ],
    recommendedProducts: ['vb-1001', 'vb-2002', 'vb-2004', 'vb-3003'],
  },
];

// Combined metadata list for all 525 blog posts (Pure JSON data, client-safe)
export const blogPosts: BlogPostMeta[] = [
  ...pillarPosts.map(({ content, ...meta }) => meta),
  ...(rawBlogMeta as BlogPostMeta[]),
];
