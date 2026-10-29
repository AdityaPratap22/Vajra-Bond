export interface CityData {
  slug: string;
  name: string;
  state: string;
  tier: 'Tier 1' | 'Tier 2';
  region: 'North India' | 'West India' | 'South India' | 'East India' | 'Central India';
  heroTitle: string;
  heroDescription: string;
  constructionFocus: string;
  climateChallenge: string;
  keyLocalities: string[];
  recommendedProducts: string[];
  dispatchTime: string;
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const citiesData: CityData[] = [
  // ================= TIER 1 CITIES =================
  {
    slug: 'delhi-ncr',
    name: 'Delhi NCR',
    state: 'Delhi / Haryana / Uttar Pradesh',
    tier: 'Tier 1',
    region: 'North India',
    heroTitle: 'Tile Adhesive Manufacturer & Direct Supplier in Delhi NCR',
    heroDescription: 'High-performance polymer-modified tile adhesives conforming to IS 15477:2019 Type 1T, Type 2T, Type 3T & Type 4S. Direct dispatch from our Faridabad manufacturing plant with same-day or 24-hour on-site delivery across Delhi, Gurgaon, Noida, Faridabad, and Ghaziabad.',
    constructionFocus: 'Luxury high-rise residential apartments, corporate IT campuses, commercial shopping malls, and premium tile-on-tile renovations.',
    climateChallenge: 'Extreme seasonal thermal fluctuations ranging from 4°C in winter to 47°C in peak summer. Requires high-polymer flexible adhesives (C2TES1/S2) to resist thermal shear stresses.',
    keyLocalities: ['Faridabad (Sector 14, 15, 28, Neharpar)', 'Gurgaon (Golf Course Road, Cyber City, Sohna Road)', 'South Delhi (Vasant Kunj, Greater Kailash, Saket)', 'Noida (Sector 62, Expressway, Sector 150)', 'Ghaziabad (Indirapuram, Raj Nagar Extension)'],
    recommendedProducts: ['vb-2002', 'vb-2004', 'vb-3003', 'vb-1001'],
    dispatchTime: 'Same-Day / 24 Hours',
    faqs: [
      {
        question: 'Where is Vajra Bond manufactured for Delhi NCR delivery?',
        answer: 'Vajra Bond is manufactured at our modern automated production plant in Faridabad, Haryana, enabling rapid direct-to-site dispatch across all sectors of Delhi, Gurgaon, Noida, Faridabad, and Greater Noida within 12–24 hours.'
      },
      {
        question: 'Which tile adhesive is recommended for tile-on-tile renovation in Delhi NCR apartments?',
        answer: 'For fixing new vitrified tiles or slim porcelain slabs directly over old flooring without demolition, we recommend Vajra Bond VB-2004 (Type 2T High Polymer). It delivers superior chemical adhesion without creating dust or structural floor load.'
      },
      {
        question: 'Can contractors and builders get direct factory bulk pricing in Delhi NCR?',
        answer: 'Yes. We supply direct factory truckloads and palletized orders to developers, civil contractors, and tiling professionals with complete test certificates and IS 15477 compliance reports.'
      }
    ]
  },
  {
    slug: 'mumbai',
    name: 'Mumbai',
    state: 'Maharashtra',
    tier: 'Tier 1',
    region: 'West India',
    heroTitle: 'Premium Tile Adhesive & Stone Bonding Solutions in Mumbai',
    heroDescription: 'Specialized water-resistant, polymer-reinforced tile adhesives engineered for Mumbai high-rise towers, luxury sea-facing residences, and coastal infrastructure projects across MMR.',
    constructionFocus: 'Super high-rise residential skyscrapers, sea-facing luxury penthouses, transit metro stations, and large-scale commercial retrofits.',
    climateChallenge: 'High ambient humidity, heavy monsoon downpours, and saline coastal air. Requires zero-slip, moisture-barrier polymer adhesives that prevent efflorescence and debonding.',
    keyLocalities: ['South Mumbai (Worli, Lower Parel, Colaba)', 'Western Suburbs (Bandra, Andheri, Juhu, Borivali)', 'Thane (Ghubunder Road, Majiwada)', 'Navi Mumbai (Vashi, Kharghar, Panvel)', 'Central Suburbs (Powai, Chembur, Ghatkopar)'],
    recommendedProducts: ['vb-2004', 'vb-3003', 'vb-2002', 'vb-1001'],
    dispatchTime: '24 to 48 Hours',
    faqs: [
      {
        question: 'How does Vajra Bond adhesive handle Mumbai coastal humidity and monsoons?',
        answer: 'Vajra Bond adhesives are enriched with imported redispersible polymer powders (RDP) that create an impermeable, hydrolytically stable polymer matrix, preventing water seepage and tile hollow sounds.'
      },
      {
        question: 'Which adhesive should be used for large format vitrified tiles (1200x2400mm) in Mumbai towers?',
        answer: 'We recommend Vajra Bond VB-3003 (Type 3T / 4S Heavy Duty Stone & Slab Adhesive), designed to absorb dynamic wind sway and structural vibrations in high-rise buildings.'
      },
      {
        question: 'What is the bulk delivery lead time to construction sites in Mumbai & Thane?',
        answer: 'We maintain regional distribution stockpoints to deliver palletized batches to MMR project sites within 24–48 hours of dispatch.'
      }
    ]
  },
  {
    slug: 'bengaluru',
    name: 'Bengaluru',
    state: 'Karnataka',
    tier: 'Tier 1',
    region: 'South India',
    heroTitle: 'Engineered Tile Adhesives & Polymer Mortars in Bengaluru',
    heroDescription: 'Architect-grade polymer tile adhesives designed for Silicon Valley tech parks, luxury gated villas, and modern residential high-rises across Bengaluru and Electronic City.',
    constructionFocus: 'IT park campus architecture, expansive granite/vitrified lobby flooring, premium apartment towers, and precast concrete substrate tiling.',
    climateChallenge: 'Moderate climate with seasonal monsoon dampness and dynamic temperature changes between day and night, requiring consistent open time and high early tensile bond strength.',
    keyLocalities: ['Whitefield & ITPL Corridor', 'Electronic City (Phase 1 & 2)', 'Indiranagar & Koramangala', 'Sarjapur Road & Bellandur', 'Hebbal & North Bengaluru International Airport Corridor'],
    recommendedProducts: ['vb-2002', 'vb-2004', 'vb-3003', 'vb-1001'],
    dispatchTime: '48 Hours',
    faqs: [
      {
        question: 'Is Vajra Bond suitable for tiling over lightweight AAC blocks in Bengaluru?',
        answer: 'Yes, Vajra Bond VB-2002 and VB-2004 contain high water-retention cellulose ethers that prevent AAC blocks from sucking water away from the adhesive bed, guaranteeing full mechanical lock.'
      },
      {
        question: 'Do you provide on-site technical support for large builders in Bengaluru?',
        answer: 'Our technical engineering desk provides pull-off tensile testing, substrate inspection, and notch trowel recommendation visits for projects in Bengaluru.'
      },
      {
        question: 'Which adhesive is best for exterior tile cladding in Bengaluru villas?',
        answer: 'VB-3003 (Type 3T C2TES2) is specifically formulated for outdoor cladding and vertical stone fixing, providing zero vertical slip and superior UV/weathering resistance.'
      }
    ]
  },
  {
    slug: 'hyderabad',
    name: 'Hyderabad',
    state: 'Telangana',
    tier: 'Tier 1',
    region: 'South India',
    heroTitle: 'Tile Adhesive Manufacturer & Supplier in Hyderabad',
    heroDescription: 'Heavy-duty polymer tile adhesives and stone fixing chemicals for high-rise gated communities, HITEC City commercial complexes, and luxury villa developments across Hyderabad.',
    constructionFocus: 'Ultra-tall 40+ floor residential towers, IT corridors, international convention centers, and sprawling luxury farmhouses in Financial District & Kokapet.',
    climateChallenge: 'Semi-arid climate with intense dry summer heat (up to 44°C). Requires adhesives with extended open time (≥ 30 mins) to prevent dry-skinning during installation.',
    keyLocalities: ['Gachibowli & Financial District', 'HITEC City & Madhapur', 'Kokapet & Gandipet', 'Jubilee Hills & Banjara Hills', 'Kukatpally & Miyapur'],
    recommendedProducts: ['vb-2004', 'vb-3003', 'vb-2002', 'vb-1001'],
    dispatchTime: '48 Hours',
    faqs: [
      {
        question: 'How does Vajra Bond prevent adhesive drying too quickly in Hyderabad summer heat?',
        answer: 'Vajra Bond adhesives use advanced modified methyl hydroxyethyl cellulose (MHEC) polymers that retain water in the adhesive paste even under 40°C+ ambient temperatures.'
      },
      {
        question: 'Are Vajra Bond adhesives compatible with Italian marble and artificial quartz in Hyderabad villas?',
        answer: 'Yes, VB-3003 White and Grey variants are formulated with non-staining hydraulic binders that protect natural white marble and engineered quartz against discoloration.'
      },
      {
        question: 'Can dealers in Telangana partner with Vajra Bond for distributorship?',
        answer: 'We are actively expanding our distributor and dealer network across Hyderabad, Secunderabad, and Warangal with competitive dealer margins and brand marketing.'
      }
    ]
  },
  {
    slug: 'chennai',
    name: 'Chennai',
    state: 'Tamil Nadu',
    tier: 'Tier 1',
    region: 'South India',
    heroTitle: 'Corrosion-Resistant Tile Adhesives & Grouts in Chennai',
    heroDescription: 'Polymer adhesives formulated for coastal marine environments, IT corridors on OMR, industrial facilities in Sriperumbudur, and modern residential high-rises in Chennai.',
    constructionFocus: 'Coastal residential complexes, institutional campuses, industrial manufacturing plants, and heritage residential renovations.',
    climateChallenge: 'High ambient heat combined with coastal salinity and intense northeast monsoons. Requires chloride-free, sulfate-resistant polymer cementitious mortars.',
    keyLocalities: ['OMR (Old Mahabalipuram Road) IT Corridor', 'Anna Nagar & Kilpauk', 'Adyar, Besant Nagar & ECR', 'Velachery & Tambaram', 'Porur & Sriperumbudur Industrial Hub'],
    recommendedProducts: ['vb-2004', 'vb-3003', 'vb-2002', 'vb-1001'],
    dispatchTime: '48 to 72 Hours',
    faqs: [
      {
        question: 'Does Vajra Bond tile adhesive resist salt weathering along ECR and OMR in Chennai?',
        answer: 'Yes. Vajra Bond polymer-modified mortars provide low porosity and chloride-ion resistance, shielding the bond line from coastal atmospheric attack.'
      },
      {
        question: 'Which adhesive is recommended for large floor vitrified tiles in Chennai?',
        answer: 'Vajra Bond VB-2002 (Type 2T) and VB-2004 (Type 2T High Polymer) are ideal for double-charged and glazed vitrified tiles in residential and commercial floors.'
      },
      {
        question: 'What pack sizes are available for commercial construction in Chennai?',
        answer: 'All Vajra Bond adhesives are packed in heavy-duty 20 kg moisture-proof HDPE laminated sacks suitable for humid coastal storage.'
      }
    ]
  },
  {
    slug: 'kolkata',
    name: 'Kolkata',
    state: 'West Bengal',
    tier: 'Tier 1',
    region: 'East India',
    heroTitle: 'High-Performance Tile Adhesive Supplier in Kolkata',
    heroDescription: 'Engineered polymer adhesives for New Town Rajarhat smart city towers, Salt Lake tech sectors, and heritage building restorations across Greater Kolkata.',
    constructionFocus: 'Modern residential high-rises in Rajarhat, commercial IT parks in Sector V, and traditional residential building upgrades.',
    climateChallenge: 'Humid subtropical climate with heavy monsoon moisture and high alluvial soil moisture migration, necessitating damp-tolerant bonding mortars.',
    keyLocalities: ['New Town & Rajarhat', 'Salt Lake (Sector V & Action Areas)', 'South Kolkata (Ballygunge, Alipore, Gariahat)', 'EM Bypass Corridor', 'Howrah & North Kolkata'],
    recommendedProducts: ['vb-2002', 'vb-2004', 'vb-1001', 'vb-3003'],
    dispatchTime: '48 to 72 Hours',
    faqs: [
      {
        question: 'Can Vajra Bond be used on plastered damp walls in Kolkata?',
        answer: 'Vajra Bond adhesives have hydraulic curing properties that cure securely even in damp ambient conditions once the substrate has attained basic cure.'
      },
      {
        question: 'What is the price of tile adhesive in Kolkata compared to traditional sand-cement mortar?',
        answer: 'While traditional sand-cement has hidden costs in thick beds (25-40mm) and debonding failures, Vajra Bond thin-set adhesive uses only a 3-6mm bed, saving weight, labor, and lifetime repairs.'
      },
      {
        question: 'Do you deliver to projects in Durgapur, Siliguri, and Asansol as well?',
        answer: 'Yes, we supply project dispatches throughout West Bengal via organized logistics channels.'
      }
    ]
  },
  {
    slug: 'pune',
    name: 'Pune',
    state: 'Maharashtra',
    tier: 'Tier 1',
    region: 'West India',
    heroTitle: 'Engineered Tile Adhesives & Polymer Grouts in Pune',
    heroDescription: 'Fast-setting, crack-bridging polymer adhesives for Pune luxury township towers, Hinjewadi IT parks, automobile manufacturing facilities, and PCMC infrastructure.',
    constructionFocus: 'Sprawling integrated townships, automobile and engineering plants, IT SEZ parks, and hillside luxury villas in Baner and Bavdhan.',
    climateChallenge: 'Moderate plateau climate with intense monsoons and dry winters. Temperature variations cause differential movement between tiles and concrete slabs.',
    keyLocalities: ['Hinjewadi & Wakad (IT Corridor)', 'Baner, Balewadi & Aundh', 'Kharadi, Viman Nagar & Kalyani Nagar', 'PCMC (Pimpri-Chinchwad, Moshi, Ravet)', 'Kothrud & Bavdhan'],
    recommendedProducts: ['vb-2004', 'vb-2002', 'vb-3003', 'vb-1001'],
    dispatchTime: '24 to 48 Hours',
    faqs: [
      {
        question: 'Which adhesive is best suited for Mivan shuttering concrete walls in Pune?',
        answer: 'For smooth Mivan / aluminum formwork concrete surfaces common in Pune townships, we recommend Vajra Bond VB-2004 with high-polymer shear strength after mechanical keying.'
      },
      {
        question: 'Is Vajra Bond certified for IS 15477 standards required by Pune builders?',
        answer: 'Yes, all Vajra Bond grades are tested and certified to BIS IS 15477:2019 standards with official laboratory tensile and shear test certificates.'
      },
      {
        question: 'How can Pune dealers get a direct dealership?',
        answer: 'Tile dealers and building material stockists can apply directly through our Become a Dealer page or WhatsApp our sales desk at +91 63950 14392.'
      }
    ]
  },
  {
    slug: 'ahmedabad',
    name: 'Ahmedabad',
    state: 'Gujarat',
    tier: 'Tier 1',
    region: 'West India',
    heroTitle: 'Industrial & Architectural Tile Adhesives in Ahmedabad',
    heroDescription: 'High-strength polymer tile adhesives for GIFT City smart towers, SG Highway commercial developments, textile mills, and residential societies across Ahmedabad & Gandhinagar.',
    constructionFocus: 'GIFT City high-rise financial buildings, wide-span commercial showrooms on SG Highway, and luxury bungalow schemes in Bopal and Shela.',
    climateChallenge: 'Extremely hot and arid summers (temperatures crossing 46°C) causing rapid moisture loss in conventional cement mortar. Vajra Bond polymer adhesives provide exceptional water retention.',
    keyLocalities: ['SG Highway (Bodakdev, Prahlad Nagar, Thaltej)', 'GIFT City & Gandhinagar Corridor', 'Bopal, South Bopal & Shela', 'Sindhu Bhavan Road', 'Sanand & Changodar Industrial Area'],
    recommendedProducts: ['vb-2004', 'vb-2002', 'vb-3003', 'vb-1001'],
    dispatchTime: '24 to 48 Hours',
    faqs: [
      {
        question: 'Why is thin-set adhesive preferred over traditional cement in Ahmedabad summer heat?',
        answer: 'Traditional cement mortar dries out before curing in Ahmedabad dry heat, resulting in hollow tiles that crack. Vajra Bond advanced cellulose polymer formulation holds water to ensure complete hydration.'
      },
      {
        question: 'Which tile adhesive is recommended for large vitrified floor tiles in Gujarat homes?',
        answer: 'Vajra Bond VB-2002 (Type 2T) is the most popular choice for fixing 600x1200mm and 800x1600mm vitrified tiles on floor screeds.'
      },
      {
        question: 'Can contractors in Surat and Vadodara also receive dispatches from Ahmedabad?',
        answer: 'Yes, our Gujarat logistics network delivers across Ahmedabad, Gandhinagar, Vadodara, and Surat with rapid turnaround.'
      }
    ]
  },

  // ================= TIER 2 CITIES =================
  {
    slug: 'jaipur',
    name: 'Jaipur',
    state: 'Rajasthan',
    tier: 'Tier 2',
    region: 'North India',
    heroTitle: 'Tile Adhesive & Marble Bonding Chemical in Jaipur',
    heroDescription: 'Specialized polymer tile adhesives for Rajasthan sandstone, marble palaces, luxury resort hotels, and modern residential developments in Jaipur.',
    constructionFocus: 'Heritage hotel restorations, luxury resorts on Delhi-Jaipur highway, natural marble flooring, and modern residential towers in Jagatpura and Mansarovar.',
    climateChallenge: 'Harsh desert climate with scorching summer temperatures (up to 48°C) and cold winter nights. High thermal stress demands flexible S1/S2 polymer adhesives.',
    keyLocalities: ['Vaishali Nagar & Chitrakoot', 'Jagatpura & Malviya Nagar', 'Mansarovar & Ajmer Road', 'C-Scheme & Civil Lines', 'Sitapura Industrial Area'],
    recommendedProducts: ['vb-3003', 'vb-2004', 'vb-2002', 'vb-1001'],
    dispatchTime: '24 to 48 Hours',
    faqs: [
      {
        question: 'Is Vajra Bond suitable for fixing Makrana marble and Rajasthan sandstone in Jaipur?',
        answer: 'Yes. Vajra Bond VB-3003 White is specially engineered for translucent natural marble and sandstone to prevent yellowing, oil-bleed, and hollow dislodgement.'
      },
      {
        question: 'What is the dispatch time to Jaipur from Faridabad plant?',
        answer: 'Because our factory is in Faridabad (Delhi NCR), dispatches to Jaipur take only 18–24 hours via the Delhi-Mumbai Expressway corridor.'
      },
      {
        question: 'Can we use Vajra Bond for swimming pools in Jaipur luxury resorts?',
        answer: 'VB-3003 C2TES2 adhesive is completely submersible and withstands continuous water pressure and pool chemicals.'
      }
    ]
  },
  {
    slug: 'lucknow',
    name: 'Lucknow',
    state: 'Uttar Pradesh',
    tier: 'Tier 2',
    region: 'North India',
    heroTitle: 'Tile Adhesive Manufacturer & Supplier in Lucknow',
    heroDescription: 'Premium IS 15477 tile adhesives for Lucknow fast-growing real estate corridors, Shaheed Path townships, government infrastructure, and residential renovations.',
    constructionFocus: 'Shaheed Path multi-storey apartment complexes, hospital and institutional campuses, retail malls in Gomti Nagar, and residential homes in Alambagh.',
    climateChallenge: 'Subtropical climate with humid monsoons and high temperature variations. Requires non-shrink, water-resistant polymer tile mortar.',
    keyLocalities: ['Gomti Nagar & Gomti Nagar Extension', 'Shaheed Path & Sushant Golf City', 'Hazratganj & Mahanagar', 'Alambagh & Kanpur Road', 'Vikas Nagar & Indira Nagar'],
    recommendedProducts: ['vb-2002', 'vb-2004', 'vb-1001', 'vb-3003'],
    dispatchTime: '24 to 48 Hours',
    faqs: [
      {
        question: 'How fast can a full truckload of tile adhesive be delivered to Lucknow?',
        answer: 'We supply direct from our NCR plant to Lucknow via the Agra-Lucknow Expressway within 24 to 36 hours of booking.'
      },
      {
        question: 'Which adhesive is recommended for vitrified tiles in Lucknow residences?',
        answer: 'VB-2002 (Type 2T Vitrified Adhesive) is ideal for standard 2x2 and 2x4 ft vitrified flooring, while VB-2004 is recommended for tile-on-tile work.'
      },
      {
        question: 'Are dealership opportunities open for Lucknow building material shops?',
        answer: 'Yes, we are onboarding authorized stockists across Lucknow, Barabanki, and Unnao with marketing support and strong margins.'
      }
    ]
  },
  {
    slug: 'chandigarh',
    name: 'Chandigarh',
    state: 'Chandigarh / Punjab / Haryana',
    tier: 'Tier 2',
    region: 'North India',
    heroTitle: 'Architect-Grade Tile Adhesives in Chandigarh Tricity',
    heroDescription: 'Engineered adhesives conforming to Corbusian architectural specifications for luxury villas, IT city towers, and commercial complexes across Chandigarh, Mohali, and Panchkula.',
    constructionFocus: 'Modernist concrete villas in Chandigarh sectors, high-rise luxury towers in Mohali, IT corridors, and institutional projects in New Chandigarh.',
    climateChallenge: 'Cold North Indian winters and intense dry summers with heavy monsoon showers. Requires polymer adhesives with excellent frost and thermal cycling tolerance.',
    keyLocalities: ['Chandigarh Sectors (Sectors 8, 9, 10, 35, 43)', 'Mohali (Sector 82 IT City, Sector 68, 70, Aerocity)', 'Panchkula (Sector 20, MDC Sector 4, 6)', 'New Chandigarh (Mullanpur Media City)', 'Zirakpur & VIP Road'],
    recommendedProducts: ['vb-2004', 'vb-3003', 'vb-2002', 'vb-1001'],
    dispatchTime: '24 Hours',
    faqs: [
      {
        question: 'How does Vajra Bond deliver to Chandigarh, Mohali, and Panchkula?',
        answer: 'We deliver directly from our Haryana manufacturing plant via NH-44, reaching Tricity sites within 18–24 hours.'
      },
      {
        question: 'Which adhesive is best for heavy granite and exterior tile cladding in Chandigarh villas?',
        answer: 'Vajra Bond VB-3003 (Type 3T C2TES2) provides heavy load-bearing adhesion and zero vertical sag, ideal for exterior facades.'
      },
      {
        question: 'Are technical test certificates provided for government projects in Punjab & Haryana?',
        answer: 'Yes, all Vajra Bond shipments are accompanied by BIS IS 15477:2019 batch test certificates.'
      }
    ]
  },
  {
    slug: 'surat',
    name: 'Surat',
    state: 'Gujarat',
    tier: 'Tier 2',
    region: 'West India',
    heroTitle: 'High-Strength Tile Adhesive & Industrial Mortar in Surat',
    heroDescription: 'Heavy-duty polymer tile adhesives for diamond bourses, textile manufacturing complexes, luxury riverside apartments, and infrastructure projects in Surat.',
    constructionFocus: 'Diamond Research and Mercantile (DREAM) City, luxury high-rises on Dumas Road and Vesu, and large-scale industrial floorings.',
    climateChallenge: 'Coastal humidity and high thermal expansion. High-traffic commercial areas require superior compressive and shear adhesion.',
    keyLocalities: ['Vesu & VIP Road', 'Dumas Road & Piplod', 'Adajan & Pal', 'Katargam & Varachha', 'Sachin & Hazira Industrial Zones'],
    recommendedProducts: ['vb-2004', 'vb-3003', 'vb-2002', 'vb-1001'],
    dispatchTime: '24 to 48 Hours',
    faqs: [
      {
        question: 'Can Vajra Bond adhesives withstand heavy footfall in Surat commercial complexes?',
        answer: 'Yes, VB-2004 and VB-3003 are engineered for high-traffic public areas, shopping malls, and corporate lobbies.'
      },
      {
        question: 'What is the recommended adhesive for tile-on-tile renovation in Surat residences?',
        answer: 'VB-2004 provides high shear bond strength (≥ 1.25 N/mm²) to fix new vitrified tiles directly on existing old ceramic floors without chipping.'
      },
      {
        question: 'Is dealership available in Surat and South Gujarat?',
        answer: 'Yes, we are actively looking for distributors in Surat, Navsari, and Valsad.'
      }
    ]
  },
  {
    slug: 'indore',
    name: 'Indore',
    state: 'Madhya Pradesh',
    tier: 'Tier 2',
    region: 'Central India',
    heroTitle: 'Polymer Tile Adhesives & Construction Chemicals in Indore',
    heroDescription: 'India Cleanest City demands durable, zero-defect construction. Premium polymer-modified tile adhesives for Indore residential townships, Super Corridor IT parks, and commercial hubs.',
    constructionFocus: 'Super Corridor IT developments, AB Road luxury apartments, medical campuses, and independent residential bungalows in Vijay Nagar.',
    climateChallenge: 'Semi-arid climate with intense summer temperatures and rapid changes in moisture. Demands adhesives with high water retention and no shrinkage cracks.',
    keyLocalities: ['Vijay Nagar & Scheme 54', 'Super Corridor & Ujjain Road', 'AB Road & Palasia', 'Bicholi Mardana & Bypass Corridor', 'Rau & Pithampur Industrial Belt'],
    recommendedProducts: ['vb-2002', 'vb-2004', 'vb-3003', 'vb-1001'],
    dispatchTime: '24 to 48 Hours',
    faqs: [
      {
        question: 'How fast can building projects in Indore receive bulk orders?',
        answer: 'Orders are dispatched via express freight routes, reaching Indore within 24 to 48 hours.'
      },
      {
        question: 'Which adhesive should be used for vitrified tiles in Indore apartments?',
        answer: 'Vajra Bond VB-2002 (Type 2T) is specifically designed for low-porosity vitrified tiles on internal floors and walls.'
      },
      {
        question: 'How can civil contractors in Indore connect for direct site deliveries?',
        answer: 'You can contact our direct factory desk at +91 63950 14392 for project pricing and batch test reports.'
      }
    ]
  },
  {
    slug: 'kochi',
    name: 'Kochi',
    state: 'Kerala',
    tier: 'Tier 2',
    region: 'South India',
    heroTitle: 'Waterproof Tile Adhesive & Stone Chemical in Kochi',
    heroDescription: 'Specially engineered moisture-resistant polymer adhesives for Kerala intense monsoons, waterfront villas, luxury resorts, and Metro infrastructure across Kochi.',
    constructionFocus: 'Marine Drive waterfront apartments, luxury backwater resorts, Kakkanad Infopark high-rises, and traditional Kerala residential homes.',
    climateChallenge: 'Very heavy tropical monsoon rainfall (over 3000mm/year) and humid saline air. Requires hydrolytically stable adhesives that never soften under water exposure.',
    keyLocalities: ['Marine Drive & Panampilly Nagar', 'Kakkanad & Infopark SEZ', 'Edappally & Aluva', 'Kadavanthra & Vyttila', 'Fort Kochi & Mattancherry'],
    recommendedProducts: ['vb-3003', 'vb-2004', 'vb-2002', 'vb-1001'],
    dispatchTime: '48 to 72 Hours',
    faqs: [
      {
        question: 'How does Vajra Bond adhesive prevent moisture debonding during Kerala monsoons?',
        answer: 'Vajra Bond uses hydrophobic synthetic polymers that form an elastomeric cross-linked bond resistant to water degradation and efflorescence.'
      },
      {
        question: 'Which product is recommended for exterior facade tiles in Kochi?',
        answer: 'Vajra Bond VB-3003 (Type 3T C2TES2) provides flexible grip against wind-driven rains and thermal variations.'
      },
      {
        question: 'Do you supply to Ernakulam, Thrissur, and Kottayam builders?',
        answer: 'Yes, we supply project dispatches across Central and South Kerala.'
      }
    ]
  },
  {
    slug: 'coimbatore',
    name: 'Coimbatore',
    state: 'Tamil Nadu',
    tier: 'Tier 2',
    region: 'South India',
    heroTitle: 'Industrial-Strength Tile Adhesives in Coimbatore',
    heroDescription: 'Heavy-duty polymer-modified tile adhesives and grouts for textile mills, engineering foundries, residential gated communities, and educational campuses in Coimbatore.',
    constructionFocus: 'Textile and engineering factories, luxury gated communities in Avinashi Road and Race Course, and large university infrastructure.',
    climateChallenge: 'Moderate tropical wet and dry climate with high industrial floor impact and vibration loads, needing polymer adhesives with high compressive strength.',
    keyLocalities: ['Race Course & RS Puram', 'Avinashi Road & Peelamedu', 'Saravanampatti (IT Corridor)', 'Gandhipuram & Saibaba Colony', 'Kurichi & Malumichampatti Industrial Areas'],
    recommendedProducts: ['vb-2004', 'vb-3003', 'vb-2002', 'vb-1001'],
    dispatchTime: '48 Hours',
    faqs: [
      {
        question: 'Can Vajra Bond adhesive be used in industrial factories with heavy machinery?',
        answer: 'Yes, VB-2004 and VB-3003 provide high compressive strength and vibration resistance suited for industrial floors and loading bays.'
      },
      {
        question: 'What is the compliance standard of Vajra Bond products in Tamil Nadu?',
        answer: 'All products conform to BIS IS 15477:2019 and EN 12004 European standards.'
      },
      {
        question: 'How to apply for an authorized dealership in Coimbatore?',
        answer: 'Submit your firm details on our Become a Dealer page or WhatsApp us at +91 63950 14392.'
      }
    ]
  },
  {
    slug: 'nagpur',
    name: 'Nagpur',
    state: 'Maharashtra',
    tier: 'Tier 2',
    region: 'Central India',
    heroTitle: 'Engineered Tile Adhesives in Nagpur (Zero Mile City)',
    heroDescription: 'High-performance tile bonding solutions for MIHAN SEZ projects, metro rail stations, commercial logistics parks, and modern residential societies in Nagpur.',
    constructionFocus: 'MIHAN SEZ high-tech facilities, Wardha Road residential high-rises, logistics warehouses, and healthcare institutions.',
    climateChallenge: 'Extreme summer temperatures reaching 47°C–48°C. Adhesives must feature extended open time and thermal expansion compatibility.',
    keyLocalities: ['Wardha Road & MIHAN', 'Dharampeth & Ramdaspeth', 'Manish Nagar & Besa', 'Civil Lines & Sadar', 'Hingna Industrial Area'],
    recommendedProducts: ['vb-2002', 'vb-2004', 'vb-3003', 'vb-1001'],
    dispatchTime: '24 to 48 Hours',
    faqs: [
      {
        question: 'How does Vajra Bond adhesive perform under Nagpur 48°C summer heat?',
        answer: 'Our specialized cellulose ether and polymer formulation maintains moisture retention, preventing rapid drying or dry-joint failure.'
      },
      {
        question: 'Is direct delivery available to MIHAN and Wardha Road construction sites?',
        answer: 'Yes, we provide direct door-to-site truckload deliveries to project sites across Nagpur.'
      },
      {
        question: 'Which adhesive should be used for ceramic wall tiles in bathrooms?',
        answer: 'Vajra Bond VB-1001 (Type 1T) provides non-slip, high-grab fixing for ceramic tiles on plastered walls.'
      }
    ]
  },
  {
    slug: 'patna',
    name: 'Patna',
    state: 'Bihar',
    tier: 'Tier 2',
    region: 'East India',
    heroTitle: 'Tile Adhesive Manufacturer & Direct Supplier in Patna',
    heroDescription: 'Engineered polymer tile adhesives for Bihar booming real estate developments, AIIMS and PMCH medical infrastructure, and residential townships across Patna.',
    constructionFocus: 'Bailey Road residential towers, Bihta industrial and educational corridor, Patliputra commercial centers, and home renovations.',
    climateChallenge: 'Humid subtropical climate with heavy monsoons and high water tables causing damp subfloors. Needs moisture-impermeable tile bonding.',
    keyLocalities: ['Bailey Road & Saguna More', 'Kankarbagh & Rajendra Nagar', 'Boring Road & Patliputra Colony', 'Bihta & Danapur Corridor', 'Gola Road & RPS More'],
    recommendedProducts: ['vb-2002', 'vb-2004', 'vb-1001', 'vb-3003'],
    dispatchTime: '36 to 48 Hours',
    faqs: [
      {
        question: 'How to order Vajra Bond tile adhesive in Patna and Bihar districts?',
        answer: 'Builders, contractors, and stockists can place bulk orders directly with our factory sales team with direct site delivery.'
      },
      {
        question: 'Why should Patna builders switch from cement mortar to Vajra Bond adhesive?',
        answer: 'Vajra Bond eliminates hollow tile sounds, prevents debonding from dampness, and cuts application time by more than 50%.'
      },
      {
        question: 'Is VB-2002 suitable for vitrified tiles in Patna homes?',
        answer: 'Yes, VB-2002 (Type 2T) is specifically designed for 600x600mm and 600x1200mm vitrified tiles.'
      }
    ]
  },
  {
    slug: 'bhopal',
    name: 'Bhopal',
    state: 'Madhya Pradesh',
    tier: 'Tier 2',
    region: 'Central India',
    heroTitle: 'Tile Adhesive & Construction Chemicals in Bhopal',
    heroDescription: 'Polymer tile adhesives for Bhopal lakefront residences, Hoshangabad Road residential townships, and institutional infrastructure projects across Madhya Pradesh.',
    constructionFocus: 'Hoshangabad Road high-rises, Kolar Road residential developments, government secretariat buildings, and educational institutes.',
    climateChallenge: 'Humid subtropical climate with hot dry summers and wet monsoons. High-polymer adhesives prevent tile lifting and water seepage.',
    keyLocalities: ['Arera Colony & MP Nagar', 'Hoshangabad Road & Misrod', 'Kolar Road Corridor', 'Ayodhya Bypass Road', 'Bawadiya Kalan'],
    recommendedProducts: ['vb-2002', 'vb-2004', 'vb-3003', 'vb-1001'],
    dispatchTime: '24 to 48 Hours',
    faqs: [
      {
        question: 'What is the delivery time for site shipments in Bhopal?',
        answer: 'Direct dispatches reach Bhopal within 24–48 hours of dispatch from our automated manufacturing unit.'
      },
      {
        question: 'Which adhesive is recommended for exterior tiles on Bhopal balconies?',
        answer: 'VB-2004 and VB-3003 are engineered for outdoor weather resistance and thermal flexibility.'
      },
      {
        question: 'Are dealership franchises available in Bhopal and Sehore?',
        answer: 'Yes, we are actively appointing dealers across Bhopal and nearby MP districts.'
      }
    ]
  },
  {
    slug: 'vadodara',
    name: 'Vadodara',
    state: 'Gujarat',
    tier: 'Tier 2',
    region: 'West India',
    heroTitle: 'Polymer Tile Adhesives in Vadodara (Baroda)',
    heroDescription: 'Architectural-grade tile adhesives and stone chemicals for Vadodara petrochemical corridors, Alkapuri luxury bungalows, and modern residential projects.',
    constructionFocus: 'Alkapuri and Vasna-Bhayli luxury residences, petrochemical industrial buildings in Nandesari and Makarpura, and highway commercial hubs.',
    climateChallenge: 'Intense dry summer heat and semi-arid conditions requiring superior water retention to avoid mortar crumbling.',
    keyLocalities: ['Alkapuri & Old Padra Road', 'Vasna-Bhayli Road', 'Gotri & Sevasi', 'Manjalpur & Makarpura', 'Waghodia Road'],
    recommendedProducts: ['vb-2002', 'vb-2004', 'vb-3003', 'vb-1001'],
    dispatchTime: '24 to 48 Hours',
    faqs: [
      {
        question: 'Which adhesive is recommended for large vitrified floor tiles in Vadodara?',
        answer: 'Vajra Bond VB-2002 and VB-2004 provide maximum grab and zero slip for vitrified tiles.'
      },
      {
        question: 'Can chemical plants in Vadodara use Vajra Bond for acid-resistant tiling?',
        answer: 'Vajra Bond adhesives provide high chemical stability and can be combined with epoxy grouts for chemical resistance.'
      },
      {
        question: 'How to contact for wholesale supply in Baroda?',
        answer: 'Connect with our team via WhatsApp at +91 63950 14392 for distributor pricing.'
      }
    ]
  },
  {
    slug: 'ludhiana',
    name: 'Ludhiana',
    state: 'Punjab',
    tier: 'Tier 2',
    region: 'North India',
    heroTitle: 'Heavy-Duty Tile Adhesive in Ludhiana (Manchester of India)',
    heroDescription: 'High-strength polymer adhesives for luxury Punjab kothis, industrial manufacturing complexes, and modern retail malls in Ludhiana.',
    constructionFocus: 'Sprawling luxury kothis along Ferozepur Road, industrial textile manufacturing facilities, and commercial shopping centers.',
    climateChallenge: 'Extreme seasonal variations from near 0°C in winter to 46°C in summer. Requires high-flexibility polymer binders that prevent shearing.',
    keyLocalities: ['Ferozepur Road & South City', 'Model Town & Sarabha Nagar', 'Civil Lines & Pakhowal Road', 'Focal Point Industrial Area', 'Chandigarh Road'],
    recommendedProducts: ['vb-2004', 'vb-3003', 'vb-2002', 'vb-1001'],
    dispatchTime: '24 Hours',
    faqs: [
      {
        question: 'How fast can Ludhiana construction sites receive deliveries?',
        answer: 'Deliveries from our NCR plant arrive in Ludhiana within 18–24 hours via NH-44.'
      },
      {
        question: 'Which adhesive is best for heavy Italian marble in luxury Ludhiana kothis?',
        answer: 'Vajra Bond VB-3003 White is formulated to bond heavy marble without stains or debonding.'
      },
      {
        question: 'Do you offer direct dealership in Ludhiana and Jalandhar?',
        answer: 'Yes, dealership inquiries are welcome from established building material merchants in Punjab.'
      }
    ]
  },
  {
    slug: 'agra',
    name: 'Agra',
    state: 'Uttar Pradesh',
    tier: 'Tier 2',
    region: 'North India',
    heroTitle: 'Tile Adhesive & Marble Bonding Chemical in Agra',
    heroDescription: 'Heritage stone and modern polymer tile adhesives for Agra hospitality hotels, residential towers on Fatehabad Road, and commercial centers across Taj City.',
    constructionFocus: 'Luxury 5-star hotels on Fatehabad Road, marble handicraft architectural renovations, and residential projects along Delhi-Agra Highway.',
    climateChallenge: 'Severe temperature swings between summer heat and winter cold. Requires polymer modified mortars with high shear bond strength.',
    keyLocalities: ['Fatehabad Road (Hotel Corridor)', 'Sanjay Place Commercial Hub', 'Kamla Nagar & Dayal Bagh', 'Shastripuram & Sikandra', 'Delhi-Agra Expressway Corridor'],
    recommendedProducts: ['vb-3003', 'vb-2002', 'vb-2004', 'vb-1001'],
    dispatchTime: 'Same-Day / 12 to 24 Hours',
    faqs: [
      {
        question: 'What is the delivery time from Faridabad plant to Agra sites?',
        answer: 'Agra is just 150 km from our plant via the Yamuna Expressway, enabling same-day or 12–24 hour direct site delivery.'
      },
      {
        question: 'Can Vajra Bond be used for natural stone cladding on Agra hotels?',
        answer: 'VB-3003 Type 3T is specifically engineered for exterior stone cladding with zero vertical slippage.'
      },
      {
        question: 'How can Agra tile showrooms register as authorized dealers?',
        answer: 'Contact our dealer desk on WhatsApp at +91 63950 14392 for sample kits and wholesale terms.'
      }
    ]
  },
  {
    slug: 'varanasi',
    name: 'Varanasi',
    state: 'Uttar Pradesh',
    tier: 'Tier 2',
    region: 'North India',
    heroTitle: 'Engineered Tile Adhesives in Varanasi (Kashi)',
    heroDescription: 'High-performance tile adhesives for Varanasi urban renewal projects, luxury ghatside heritage hotels, hospital complexes, and modern residential developments.',
    constructionFocus: 'Smart city urban infrastructure, tourism and hotel projects, BHU medical expansions, and residential colonies in Shivpur and Rohania.',
    climateChallenge: 'High humidity along the Ganges river and intense summer temperatures. Adhesives require hydrolytic resistance and non-slump properties.',
    keyLocalities: ['Shivpur & Babatpur Airport Road', 'Sigra & Cantt', 'Bhelupur & Lanka (BHU)', 'Rohania & GT Road', 'Pandeypur & Sarnath Corridor'],
    recommendedProducts: ['vb-2002', 'vb-2004', 'vb-3003', 'vb-1001'],
    dispatchTime: '36 to 48 Hours',
    faqs: [
      {
        question: 'How are bulk deliveries dispatched to Varanasi?',
        answer: 'Dispatches are routed via Purvanchal and National Highways directly to your site in 36–48 hours.'
      },
      {
        question: 'Which adhesive is recommended for vitrified tiles in Varanasi homes?',
        answer: 'Vajra Bond VB-2002 (Type 2T) provides strong polymer grip on concrete floors and plastered walls.'
      },
      {
        question: 'Can contractors get on-site testing for large projects in Varanasi?',
        answer: 'Yes, our technical team provides test reports, coverage calculations, and application training.'
      }
    ]
  },
  {
    slug: 'bhubaneswar',
    name: 'Bhubaneswar',
    state: 'Odisha',
    tier: 'Tier 2',
    region: 'East India',
    heroTitle: 'High-Performance Tile Adhesive in Bhubaneswar',
    heroDescription: 'Engineered polymer adhesives for Odisha Smart City residential towers, IT corridors in Infocity, and coastal commercial developments in Bhubaneswar & Cuttack.',
    constructionFocus: 'Infocity IT campuses, Patia high-rise apartment towers, hospital institutions, and modern residential villas.',
    climateChallenge: 'High tropical humidity, heavy monsoon downpours, and cyclone weather. Adhesives must provide moisture barrier and high tensile bond.',
    keyLocalities: ['Patia & Infocity Corridor', 'Jayadev Vihar & Nayapalli', 'Khandagiri & Kalinga Nagar', 'Saheed Nagar & Rasulgarh', 'Pahal & Cuttack Twin-City Highway'],
    recommendedProducts: ['vb-2004', 'vb-2002', 'vb-3003', 'vb-1001'],
    dispatchTime: '48 to 72 Hours',
    faqs: [
      {
        question: 'How does Vajra Bond adhesive withstand tropical rains in Bhubaneswar?',
        answer: 'Our adhesives are enriched with synthetic polymers that prevent water permeability and debonding.'
      },
      {
        question: 'Which adhesive should be used for vitrified tiles in Bhubaneswar apartments?',
        answer: 'VB-2002 (Type 2T) and VB-2004 (Type 2T High Polymer) are ideal for internal floor and wall vitrified tiles.'
      },
      {
        question: 'Are dealership opportunities open in Odisha?',
        answer: 'Yes, we are actively appointing distributors in Bhubaneswar, Cuttack, Rourkela, and Sambalpur.'
      }
    ]
  },
  {
    slug: 'dehradun',
    name: 'Dehradun',
    state: 'Uttarakhand',
    tier: 'Tier 2',
    region: 'North India',
    heroTitle: 'Frost & Thermal-Resistant Tile Adhesives in Dehradun',
    heroDescription: 'Specialized polymer adhesives for mountain valley climates, luxury Mussoorie foothill villas, educational institutions, and residential townships across Dehradun.',
    constructionFocus: 'Luxury foothill villas along Rajpur Road, boarding school and university campuses, and residential apartments in Sahastradhara Road.',
    climateChallenge: 'Sub-zero winter chill, frost cycles, heavy monsoon downpours, and seismic zone considerations. Demands flexible, freeze-thaw resistant adhesives.',
    keyLocalities: ['Rajpur Road & Mussoorie Diversion', 'Sahastradhara Road Corridor', 'Chakrata Road & Prem Nagar', 'Haridwar Bypass & Rispana', 'Subhash Nagar & Clement Town'],
    recommendedProducts: ['vb-3003', 'vb-2004', 'vb-2002', 'vb-1001'],
    dispatchTime: '24 Hours',
    faqs: [
      {
        question: 'How do Vajra Bond adhesives perform in Dehradun cold winters and frost?',
        answer: 'Vajra Bond polymer adhesives maintain flexibility through freeze-thaw cycles without cracking or delamination.'
      },
      {
        question: 'What is the delivery time to Dehradun from Faridabad?',
        answer: 'Dispatches reach Dehradun in 18 to 24 hours via the Delhi-Dehradun Expressway corridor.'
      },
      {
        question: 'Which adhesive is recommended for outdoor stone cladding on hill villas?',
        answer: 'VB-3003 (Type 3T C2TES2) provides heavy-duty anti-slip adhesion for stone and tiles on exterior walls.'
      }
    ]
  },
  {
    slug: 'visakhapatnam',
    name: 'Visakhapatnam',
    state: 'Andhra Pradesh',
    tier: 'Tier 2',
    region: 'South India',
    heroTitle: 'Corrosion-Resistant Tile Adhesives in Visakhapatnam (Vizag)',
    heroDescription: 'Marine-grade polymer tile adhesives for steel plant townships, naval and port infrastructure, beach-facing luxury high-rises, and IT corridors in Vizag.',
    constructionFocus: 'Beach Road luxury apartment towers, Rushikonda IT SEZ developments, port and industrial facilities, and residential colonies in Madhurawada.',
    climateChallenge: 'Intense coastal salinity, high humidity, and cyclone monsoons. Demands salt-resistant and moisture-impermeable tile bonding.',
    keyLocalities: ['Madhurawada & Rushikonda IT SEZ', 'Beach Road & Waltair Uplands', 'Siripuram & MVP Colony', 'Gajuwaka & Steel Plant Township', 'Pendurthi & Anandapuram'],
    recommendedProducts: ['vb-2004', 'vb-3003', 'vb-2002', 'vb-1001'],
    dispatchTime: '48 to 72 Hours',
    faqs: [
      {
        question: 'How does Vajra Bond protect tiles in coastal Vizag environments?',
        answer: 'Our adhesives create a dense, low-porosity polymer matrix that resists salt intrusion and moisture degradation.'
      },
      {
        question: 'What adhesive is best for large vitrified floor tiles in Vizag homes?',
        answer: 'VB-2002 and VB-2004 are recommended for 600x1200mm and larger vitrified tiles.'
      },
      {
        question: 'How can dealers in Andhra Pradesh partner with Vajra Bond?',
        answer: 'Apply on our Become a Dealer page or WhatsApp our sales desk directly at +91 63950 14392.'
      }
    ]
  },
  {
    slug: 'raipur',
    name: 'Raipur',
    state: 'Chhattisgarh',
    tier: 'Tier 2',
    region: 'Central India',
    heroTitle: 'Heavy-Duty Tile Adhesive & Grout in Raipur (Nava Raipur)',
    heroDescription: 'Industrial-strength polymer tile adhesives for Nava Raipur smart city complexes, steel and power industrial plants, and luxury residential townships in Raipur.',
    constructionFocus: 'Nava Raipur government administrative towers, VIP Road residential complexes, hospital institutes, and commercial malls.',
    climateChallenge: 'Extreme summer heat (up to 46°C) and heavy monsoon rainfall. Demands adhesives with long open time and high shear strength.',
    keyLocalities: ['Nava Raipur (Atal Nagar)', 'VIP Road & Shankar Nagar', 'Devendra Nagar & Pandri', 'Telibandha & Magneto Mall Corridor', 'Urla & Bhanpuri Industrial Areas'],
    recommendedProducts: ['vb-2002', 'vb-2004', 'vb-3003', 'vb-1001'],
    dispatchTime: '36 to 48 Hours',
    faqs: [
      {
        question: 'What is the lead time for site deliveries in Raipur?',
        answer: 'Full truckload and palletized deliveries arrive in Raipur within 36 to 48 hours of dispatch.'
      },
      {
        question: 'Which adhesive should be used for industrial flooring in Chhattisgarh?',
        answer: 'VB-2004 and VB-3003 provide high compressive strength and vibration resistance suited for industrial floors.'
      },
      {
        question: 'Can civil contractors get sample bags and test certificates in Raipur?',
        answer: 'Yes, we provide sample bags and IS 15477 test reports upon request.'
      }
    ]
  },
  {
    slug: 'kanpur',
    name: 'Kanpur',
    state: 'Uttar Pradesh',
    tier: 'Tier 2',
    region: 'North India',
    heroTitle: 'Industrial & Residential Tile Adhesive in Kanpur',
    heroDescription: 'High-strength polymer tile adhesives for Kanpur leather tanneries, textile industrial belts, luxury Civil Lines residences, and real estate townships.',
    constructionFocus: 'Civil Lines luxury residences, Swaroop Nagar commercial centers, industrial plants in Fazalganj and Panki, and residential expansions on GT Road.',
    climateChallenge: 'Extreme summer heat, dusty arid winds, and cold winters. Requires high-polymer mortar that prevents shrinkage cracking and tile hollow sounds.',
    keyLocalities: ['Civil Lines & Swaroop Nagar', 'Kakadeo & Sarvodaya Nagar', 'Panki & Fazalganj Industrial Areas', 'Kalyanpur & IIT Kanpur Corridor', 'Kidwai Nagar & Barra'],
    recommendedProducts: ['vb-2002', 'vb-2004', 'vb-3003', 'vb-1001'],
    dispatchTime: '24 Hours',
    faqs: [
      {
        question: 'How fast can tile adhesive reach Kanpur from the NCR factory?',
        answer: 'Via the Yamuna and Agra-Lucknow Expressway link, deliveries reach Kanpur sites within 20 to 24 hours.'
      },
      {
        question: 'Which adhesive is recommended for tile-on-tile renovation in Kanpur?',
        answer: 'VB-2004 (Type 2T High Polymer) enables dust-free fixing of new tiles directly over old ceramic or mosaic flooring.'
      },
      {
        question: 'Are bulk project discounts offered for Kanpur builders?',
        answer: 'Yes, we offer direct factory rates for commercial developers and contractors.'
      }
    ]
  },
  {
    slug: 'ranchi',
    name: 'Ranchi',
    state: 'Jharkhand',
    tier: 'Tier 2',
    region: 'East India',
    heroTitle: 'High-Performance Tile Adhesive in Ranchi',
    heroDescription: 'Engineered polymer adhesives for Jharkhand capital city infrastructure, Ring Road residential townships, institutional campuses, and smart commercial spaces in Ranchi.',
    constructionFocus: 'Kanke Road and Morabadi luxury residences, Ring Road commercial townships, institutional healthcare campuses, and retail malls.',
    climateChallenge: 'Subtropical plateau climate with heavy seasonal monsoon rainfall and cool winters. Adhesives require moisture-tolerant polymer cross-linking.',
    keyLocalities: ['Kanke Road & Morabadi', 'Bariatu & Booty Road', 'Doranda & Hinoo', 'Harmu Housing Colony & Argora', 'Ranchi Ring Road Corridor'],
    recommendedProducts: ['vb-2002', 'vb-2004', 'vb-3003', 'vb-1001'],
    dispatchTime: '36 to 48 Hours',
    faqs: [
      {
        question: 'How to order Vajra Bond adhesives for projects in Ranchi?',
        answer: 'Call or WhatsApp our sales desk at +91 63950 14392 for instant quotation and dispatch schedule.'
      },
      {
        question: 'Which adhesive is recommended for vitrified floor tiles in Ranchi?',
        answer: 'Vajra Bond VB-2002 (Type 2T) provides strong polymer grip and zero hollow sounds for vitrified flooring.'
      },
      {
        question: 'Are dealership franchises open for Ranchi and Jamshedpur?',
        answer: 'Yes, we welcome authorized dealer applications from building material retailers in Jharkhand.'
      }
    ]
  }
];

export function getCityBySlug(slug: string): CityData | undefined {
  return citiesData.find((c) => c.slug === slug);
}

export function getAllCitySlugs(): string[] {
  return citiesData.map((c) => c.slug);
}
