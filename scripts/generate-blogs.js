const fs = require('fs');
const path = require('path');

const POSTS_DIR = path.join(__dirname, '../src/data/posts');
const META_FILE = path.join(__dirname, '../src/data/blog-meta.json');

if (!fs.existsSync(POSTS_DIR)) {
  fs.mkdirSync(POSTS_DIR, { recursive: true });
}

// 1. DIMENSIONS FOR TOPIC GENERATION
const TILES = [
  { name: 'Glazed Vitrified Tiles (GVT/PGVT)', code: 'Type 2T / Type 3T', porosity: '< 0.05%', recommendedProduct: 'vb-2002', altProduct: 'vb-3003', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Large Format Porcelain Slabs (1200x2400mm)', code: 'Type 3T C2TES1', porosity: '< 0.02%', recommendedProduct: 'vb-3003', altProduct: 'vb-2004', img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Italian White Marble (Statuario & Carrara)', code: 'Type 3T White Adhesive', porosity: '0.2 - 0.5%', recommendedProduct: 'vb-3003', altProduct: 'vb-2004', img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Heavy Granite Slabs', code: 'Type 3T C2TES2', porosity: '0.1 - 0.4%', recommendedProduct: 'vb-3003', altProduct: 'vb-2002', img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Glass Mosaic Tiles', code: 'Type 2T Non-Slip', porosity: '0.00%', recommendedProduct: 'vb-2002', altProduct: 'vb-3003', img: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Ceramic Wall & Subway Tiles', code: 'Type 1T C1TE', porosity: '10 - 15%', recommendedProduct: 'vb-1001', altProduct: 'vb-2002', img: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Natural Kota Stone & Slate', code: 'Type 2T C2TE', porosity: '0.8 - 2.0%', recommendedProduct: 'vb-2002', altProduct: 'vb-1001', img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Engineered Quartz & Terrazzo', code: 'Type 2T Flexible', porosity: '< 0.1%', recommendedProduct: 'vb-2004', altProduct: 'vb-2002', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Slim Porcelain Tiles (3mm-5mm)', code: 'Type 3T Highly Deformable', porosity: '< 0.05%', recommendedProduct: 'vb-3003', altProduct: 'vb-2004', img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Outdoor Paver & Rustic Floor Tiles', code: 'Type 2T High Shear', porosity: '1 - 3%', recommendedProduct: 'vb-2004', altProduct: 'vb-1001', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop' },
];

const APPLICATIONS = [
  { name: 'Bathroom Shower & Wet Walls', challenge: 'continuous water immersion and steam vapor transmission', category: 'Installation Guide' },
  { name: 'Swimming Pools & Jacuzzis', challenge: 'hydrostatic pressure, submerged conditions, and chlorine chemicals', category: 'Technical Guide' },
  { name: 'Exterior Building Facades & Cladding', challenge: 'extreme thermal cycling, wind shear loads, and seismic vibration', category: 'Technical Guide' },
  { name: 'Commercial High-Traffic Malls & Atriums', challenge: 'heavy continuous footfall, rolling pallet loads, and point stress', category: 'Industry Insights' },
  { name: 'Kitchen Countertops & Backsplashes', challenge: 'oil spills, hot cookware contact, and grease exposure', category: 'Tips & Tricks' },
  { name: 'Exposed Balconies & Open Terraces', challenge: 'direct solar thermal shock, monsoon rains, and structural deflection', category: 'Installation Guide' },
  { name: 'Industrial Warehouses & Workshops', challenge: 'heavy forklift movement, chemical drops, and dynamic impact', category: 'Industry Insights' },
  { name: 'Hospital Cleanrooms & Diagnostic Labs', challenge: 'sterile sanitization, non-porous hygiene, and anti-bacterial grouting', category: 'Technical Guide' },
  { name: 'Tile-on-Tile Residential Renovations', challenge: 'bonding over glazed non-porous existing surfaces without chipping', category: 'Installation Guide' },
  { name: 'Underfloor Heating Screed Installations', challenge: 'continuous expansion and contraction under thermal stress', category: 'Technical Guide' },
  { name: 'Basement Walls Subject to Rising Damp', challenge: 'negative side moisture pressure and salt efflorescence attack', category: 'Installation Guide' },
  { name: 'Airport Terminals & Transit Hubs', challenge: 'luggage trolley rolling friction and 24/7 high vibration', category: 'Industry Insights' },
];

const SUBSTRATES = [
  { name: 'Cured Cement-Sand Plaster', prep: 'Ensure 28 days curing, mechanical soundness, and moisture content below 4%.' },
  { name: 'Smooth Concrete Slab & Screed', prep: 'Remove all laitance, curing compounds, and perform mechanical scarification.' },
  { name: 'Existing Ceramic / Vitrified Tiles', prep: 'Degrease with alkaline wash and ensure existing tiles are 100% solid and sound.' },
  { name: 'Autoclaved Aerated Concrete (AAC) Lightweight Blocks', prep: 'Apply high-penetration acrylic primer to mitigate severe suction and dryness.' },
  { name: 'Drywall Gypsum Plasterboards & Calcium Silicate', prep: 'Verify structural framing rigidity at 400mm centers and prime the surface.' },
  { name: 'Elastomeric Waterproofing Membrane', prep: 'Allow membrane full vulcanization and verify adhesive chemical compatibility.' },
  { name: 'Marine Plywood & Wood Composite Boards', prep: 'Ensure twin-layer staggered boards, no deflection, and use elastic polymer bonding.' },
  { name: 'Cement Fiber Board (CFB)', prep: 'Check fastening torque, expansion perimeter joints, and seal edge interfaces.' },
];

const PROBLEMS_OR_TOPICS = [
  {
    topic: 'Preventing Hollow Sounds and Debonding',
    rootCause: 'inadequate bed coverage, swirl troweling, or dried adhesive skinning during placement',
    solution: 'directional notched troweling with full back-buttering to ensure >95% void-free mortar contact'
  },
  {
    topic: 'Eliminating Efflorescence and Salt Leaching',
    rootCause: 'unbound free calcium hydroxide migrating through porous sand-cement mortar beds',
    solution: 'dense polymer-modified adhesives with rapid hydraulic binding that lock free lime internally'
  },
  {
    topic: 'Mitigating Thermal Shock & Tile Buckling (Tenting)',
    rootCause: 'differential thermal expansion coefficients between tile body and substrate without perimeter expansion joints',
    solution: 'highly deformable S1/S2 classification polymer adhesive combined with 6mm perimeter movement joints'
  },
  {
    topic: 'Overcoming Tile Lippage on Warped Large Slabs',
    rootCause: 'curved tile manufacturing tolerances and inconsistent trowel notch angle during spreading',
    solution: 'calibrated reusable tile leveling clips (T-locks) combined with an 8mm-10mm square notched trowel'
  },
  {
    topic: 'Preventing Cracks Over Cold Construction Joints',
    rootCause: 'structural micro-movement and substrate settling telegraphing directly into brittle tile beds',
    solution: 'un为其decoupling isolation membranes coupled with high-elastic polymer adhesive layers'
  },
];

const AUTHORS = [
  { name: 'Er. Rajesh Sharma', role: 'Chief Technical Advisor & Materials Scientist', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop' },
  { name: 'Vikas Patel', role: 'Site Application Director & Senior Consultant', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop' },
  { name: 'Sunil Verma', role: 'Quality Assurance Lead & BIS Standards Auditor', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop' },
  { name: 'Ananya Deshmukh', role: 'Architectural Technical Liaison', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop' },
  { name: 'Manish Chawla', role: 'Chief Structural Engineer', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop' },
];

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

console.log('Generating 520 comprehensive, high-depth technical blog posts (1,000-1,500 words each)...');

const allMeta = [];
let postCount = 0;
const TARGET_COUNT = 520;

// Generate combinatorial matrix of articles
for (let t = 0; t < TILES.length; t++) {
  for (let a = 0; a < APPLICATIONS.length; a++) {
    for (let s = 0; s < SUBSTRATES.length; s++) {
      if (postCount >= TARGET_COUNT) break;

      const tile = TILES[t];
      const app = APPLICATIONS[a];
      const sub = SUBSTRATES[s];
      const prob = PROBLEMS_OR_TOPICS[(t + a + s) % PROBLEMS_OR_TOPICS.length];
      const author = AUTHORS[(t + a + s) % AUTHORS.length];

      // Alternate title angles for realistic diversity
      let title = '';
      let subtitle = '';
      const styleAngle = (t * 7 + a * 3 + s) % 4;

      if (styleAngle === 0) {
        title = `How to Install ${tile.name} on ${sub.name} in ${app.name}`;
        subtitle = `Comprehensive technical specification, substrate engineering, and ${prob.topic.toLowerCase()} protocol.`;
      } else if (styleAngle === 1) {
        title = `${tile.name} Fixing Guide: Overcoming ${prob.topic} Across ${app.name}`;
        subtitle = `A masterclass on substrate preparation for ${sub.name} using ${tile.code} compliant polymer adhesives.`;
      } else if (styleAngle === 2) {
        title = `Architectural Specifications: Fixing ${tile.name} over ${sub.name} in ${app.name}`;
        subtitle = `Engineering benchmarks, tensile adhesion values, and site execution guidelines conforming to IS 15477:2019.`;
      } else {
        title = `${app.name} Tile Installation: Best Practices for ${tile.name} on ${sub.name}`;
        subtitle = `Zero-failure installation method: addressing ${app.challenge} with advanced polymer-modified mortars.`;
      }

      const slug = slugify(title) + `-${postCount + 1}`;
      const dateDaysAgo = (postCount * 1.5).toFixed(0);
      const postDate = new Date(Date.now() - dateDaysAgo * 86400000).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      });

      // BUILD LONG-FORM CONTENT (Target: 1,100 to 1,450 words)
      const content = [
        {
          heading: `1. Engineering Context & Project Scope`,
          text: `Installing ${tile.name} in ${app.name} environments represents one of the most demanding tasks in modern tile contracting. Traditional cement-sand mortar fails catastrophically under these circumstances because ${tile.name} exhibits an exceptionally low water absorption rate (${tile.porosity}), preventing classical hydraulic mechanical interlock. Furthermore, ${app.name} is subject to ${app.challenge}. When applying these tiles over ${sub.name}, structural designers, project managers, and specifiers must account for differential elastic moduli, chemical compatibility, and thermal transmission coefficients. Utilizing an engineered polymer-modified tile adhesive conforming to ${tile.code} (such as Vajra Bond ${tile.recommendedProduct.toUpperCase()}) ensures an elastic, durable bond that withstands both static loads and dynamic cyclic movements.`
        },
        {
          heading: `2. Critical Substrate Assessment: Preparing ${sub.name}`,
          text: `Over 85% of premature tile debonding and cracking originates not from defective tiles or flawed adhesive, but from deficient substrate preparation. When working over ${sub.name}, strict site protocols must be adhered to before applying any mortar:
          
${sub.prep}

In addition to baseline cleanliness, the substrate must satisfy stringent flatness tolerances. For ${tile.name}, maximum permissible deviation across any 2-meter straightedge is 2mm. Where high spots exist, diamond cup grinding is required; low depressions must be leveled using polymer-modified fairing mortars at least 24 hours prior to tile fixing. Test for moisture content using an electronic impedance meter or calcium chloride dome test; relative humidity within the substrate must register below 75% to prevent osmotic moisture entrapment. Any active structural cracks in ${sub.name} must be bridge-reinforced with alkali-resistant glass fiber mesh and polyurethane elastomeric joint sealants.`
        },
        {
          heading: `3. Adhesive Selection & Mechanical Standards Compliance`,
          text: `For ${tile.name} placed within ${app.name}, selecting an adhesive meeting IS 15477:2019 and EN 12004 standards is mandatory. The adhesive bed must deliver high early tensile adhesion (>1.0 N/mm² under standard laboratory conditions) and sustain minimum 1.0 N/mm² after heat aging, water immersion, and freeze-thaw thermal cycling.
          
Vajra Bond ${tile.recommendedProduct.toUpperCase()} has been specifically formulated for this rigorous service class. It incorporates high-grade redispersible ethylene-vinyl-acetate (EVA) copolymers, graded silica quartz aggregates (0.1mm - 0.4mm), and cellulosics that preserve water retention even when ambient temperatures exceed 40°C. This prevents premature water loss to ${sub.name}, guaranteeing complete hydration of hydraulic binders and maximum chemical cross-linking against vitreous back surfaces.`
        },
        {
          heading: `4. Trowel Selection, Mortar Bed Combing & Back-Buttering Protocol`,
          text: `To definitively eliminate ${prob.topic.toLowerCase()}, the application technique must guarantee at least 95% continuous bed coverage without air voids:
          
1. Trowel Geometry: Use a 10mm x 10mm square-notched stainless steel trowel for floors, or an 8mm x 8mm trowel for vertical surfaces.
2. Wetting the Substrate (Keying Coat): Apply a thin, tight skim coat using the flat side of the trowel firmly into ${sub.name}. This mechanically keys polymers into microscopic surface pores.
3. Directional Combing: Comb the mortar bed in straight, parallel ridges. NEVER use circular, swirling, or fan strokes. Straight ridges allow trapped air to evacuate cleanly when the tile is pressed down.
4. Back-Buttering (Butter-Floating): For all installations of ${tile.name}, spread a flat 1mm skim coat of adhesive directly onto the back face of every single tile before setting. This eliminates dead air pockets behind ribs and guarantees 100% monolithic adhesive transfer.`
        },
        {
          heading: `5. Mitigating ${prob.topic} & Movement Joints`,
          text: `The primary failure mechanism in this configuration involves ${prob.rootCause}. To permanently overcome this risk, execution must combine ${prob.solution}.
          
Equally crucial is the integration of movement and expansion joints. In ${app.name}, tiles expand during thermal peaks and contract during cold cycles. Perimeter joints of 6mm minimum width must be preserved along all floor-to-wall junctions, columns, and curbs. These perimeter joints must remain completely free of rigid mortar and be sealed with permanently flexible neutral-cure silicone or polyurethane sealants. For large continuous floor plates, intermediate expansion joints must be installed every 4 meters x 4 meters outdoors, or every 6 meters x 6 meters indoors.`
        },
        {
          heading: `6. Step-by-Step Site Execution Checklist`,
          text: `Execute the following verified sequence to achieve guaranteed long-term bonding strength:`,
          list: [
            `Verify substrate sound: tap ${sub.name} to confirm zero hollow pockets or loose plaster areas.`,
            `Clean the tile back face: wipe ${tile.name} with a damp sponge to remove manufacturing silica dust or wax coatings.`,
            `Mix the mortar: mechanically blend Vajra Bond ${tile.recommendedProduct.toUpperCase()} with 5.5 to 6.0 liters of clean potable water per 20kg sack using a paddle mixer at 400 RPM for 3-5 minutes.`,
            `Allow slake time: let the wet mix stand undisturbed for 3-5 minutes to allow chemical additives to activate fully, then remix for 60 seconds without adding extra water.`,
            `Check open time: never spread more adhesive than can be tiled within 20 minutes; test ridges with your fingertip regularly to confirm tackiness.`,
            `Bed the tile: press ${tile.name} firmly into wet ridges and slide perpendicular to ridge direction by 5mm, then back into place to collapse all mortar ribs.`,
            `Leveling clamps: apply reusable leveling clips along edges to prevent lippage while the adhesive cures.`,
            `Grouting timeline: allow 24 hours of undisturbed curing before walking on tiles or applying polymer-modified tile grout.`
          ]
        },
        {
          heading: `7. Frequently Asked Questions (Technical Desk)`,
          text: `Q1: Can I soak ${tile.name} in water before laying with Vajra Bond adhesive?
No! Modern polymer tile adhesives rely on controlled hydration. Soaking tiles saturates microscopic pores with free water, preventing polymer adhesion and causing mortar dilution.

Q2: How soon can traffic be allowed on ${tile.name} in ${app.name}?
Light foot traffic is permitted after 24 hours at 25°C. Heavy furniture, commercial rolling traffic, or water filling must be deferred until full cure at 7 to 14 days.

Q3: What happens if sand-cement mortar is used instead of polymer adhesive?
Due to low porosity (${tile.porosity}), traditional mortar will fail to grip the tile. Within 6 to 18 months, thermal expansion or moisture variations will cause hollow sounds, grout cracking, and complete detachment from ${sub.name}.`
        }
      ];

      // Calculate approximate word count
      const totalWords = content.reduce((acc, c) => acc + (c.heading ? c.heading.split(' ').length : 0) + c.text.split(/\s+/).length + (c.list ? c.list.join(' ').split(/\s+/).length : 0), 0);

      const postData = {
        slug,
        title,
        subtitle,
        excerpt: `Complete technical installation and specification guide for laying ${tile.name} over ${sub.name} in ${app.name}. Learn adhesive classification, trowel selection, and void-free bonding protocols.`,
        category: app.category,
        date: postDate,
        readTime: `${Math.ceil(totalWords / 200)} min read`,
        wordCount: totalWords,
        author,
        coverImage: tile.img,
        tags: [tile.name.split(' ')[0], app.name.split(' ')[0], 'IS 15477', 'Adhesive', 'Engineering'],
        featured: postCount === 0,
        content,
        recommendedProducts: [tile.recommendedProduct, tile.altProduct],
      };

      // Write full post to individual JSON file
      fs.writeFileSync(path.join(POSTS_DIR, `${slug}.json`), JSON.stringify(postData, null, 2), 'utf8');

      // Add to metadata array
      allMeta.push({
        slug: postData.slug,
        title: postData.title,
        subtitle: postData.subtitle,
        excerpt: postData.excerpt,
        category: postData.category,
        date: postData.date,
        readTime: postData.readTime,
        wordCount: postData.wordCount,
        author: postData.author,
        coverImage: postData.coverImage,
        tags: postData.tags,
        featured: postData.featured,
        recommendedProducts: postData.recommendedProducts,
      });

      postCount++;
    }
  }
}

// Write the lightweight metadata index for fast loading, pagination & search
fs.writeFileSync(META_FILE, JSON.stringify(allMeta, null, 2), 'utf8');

console.log(`Successfully generated ${postCount} comprehensive blog posts!`);
console.log(`Average word count: ~${Math.round(allMeta.reduce((a, b) => a + b.wordCount, 0) / postCount)} words per blog.`);
console.log(`Individual post files saved in: src/data/posts/`);
console.log(`Metadata index saved in: src/data/blog-meta.json`);
