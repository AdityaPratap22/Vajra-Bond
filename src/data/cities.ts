export interface CityData {
  slug: string;
  name: string;
  state: 'Delhi NCR' | 'Haryana' | 'Punjab' | 'Rajasthan';
  tier: 'Tier 1' | 'Tier 2';
  distanceFromNCR: string;
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
  // ================= DELHI NCR =================
  {
    slug: 'delhi-ncr',
    name: 'Delhi NCR',
    state: 'Delhi NCR',
    tier: 'Tier 1',
    distanceFromNCR: 'Factory Location (0–30 km)',
    heroTitle: 'Tile Adhesive Manufacturer & Direct Supplier in Delhi NCR',
    heroDescription: 'Direct factory supply of polymer-modified tile adhesives conforming to IS 15477:2019 Type 1T, Type 2T, Type 3T & Type 4S. Automated manufacturing in Faridabad with same-day and 24-hour delivery across Delhi, Gurgaon, Noida, Faridabad, and Ghaziabad.',
    constructionFocus: 'Luxury high-rise residential apartments, corporate IT corridors, commercial shopping malls, and dust-free tile-on-tile home remodeling.',
    climateChallenge: 'Extreme seasonal thermal swings ranging from 4°C in winter to 47°C in peak summer. High polymer retention (C2TES1/S2) prevents shear debonding.',
    keyLocalities: ['Faridabad (Sector 14, 15, 28, Neharpar, Green Field)', 'Gurgaon (Golf Course Road, Cyber City, Sohna Road, DLF Phase 1-5)', 'South Delhi (Vasant Kunj, Greater Kailash, Saket, Hauz Khas)', 'Noida & Greater Noida (Sector 62, 150, Noida Expressway, Pari Chowk)', 'Ghaziabad (Indirapuram, Raj Nagar Extension, Vaishali)'],
    recommendedProducts: ['vb-2002', 'vb-2004', 'vb-3003', 'vb-1001'],
    dispatchTime: 'Same-Day / 24 Hours',
    faqs: [
      {
        question: 'Where is Vajra Bond manufactured for Delhi NCR delivery?',
        answer: 'Vajra Bond is manufactured at our modern automated production plant in Faridabad, enabling rapid direct-to-site dispatch across all sectors of Delhi, Gurgaon, Noida, Faridabad, and Greater Noida within 12–24 hours.'
      },
      {
        question: 'Which tile adhesive is best for tile-on-tile renovation in Delhi NCR flats?',
        answer: 'For fixing new vitrified tiles or slim porcelain slabs directly over old flooring without demolition, we recommend Vajra Bond VB-2004 (Type 2T High Polymer). It delivers superior chemical adhesion without creating dust or structural floor load.'
      },
      {
        question: 'Can contractors and builders get direct factory bulk pricing in Delhi NCR?',
        answer: 'Yes. We supply direct factory truckloads and palletized orders to developers, civil contractors, and tiling professionals with complete test certificates and IS 15477 compliance reports.'
      }
    ]
  },
  {
    slug: 'gurgaon',
    name: 'Gurgaon (Gurugram)',
    state: 'Haryana',
    tier: 'Tier 1',
    distanceFromNCR: '35 km from Plant',
    heroTitle: 'High-Performance Tile Adhesives in Gurgaon (Gurugram)',
    heroDescription: 'Architect-grade polymer tile adhesives engineered for DLF luxury high-rises, Cyber City corporate offices, Golf Course Extension towers, and premium villas across Gurgaon.',
    constructionFocus: '40+ storey luxury residential towers, corporate headquarters, sprawling luxury villas on Golf Course Road, and large-format porcelain slab installations.',
    climateChallenge: 'Sub-zero wind chills in December/January to scorching 46°C+ dry summers. High-polymer flexible binders absorb structural deflection in ultra-tall towers.',
    keyLocalities: ['Golf Course Road & DLF Phase 5', 'Golf Course Extension Road (Sectors 58-67)', 'Sohna Road & Southern Peripheral Road (SPR)', 'Dwarka Expressway Corridor (Sectors 102-113)', 'Cyber Hub, MG Road & Udyog Vihar'],
    recommendedProducts: ['vb-3003', 'vb-2004', 'vb-2002', 'vb-1001'],
    dispatchTime: 'Same-Day / 12 to 24 Hours',
    faqs: [
      {
        question: 'What is the delivery time for site deliveries in Gurgaon?',
        answer: 'Because our factory is in Faridabad, express site shipments reach Gurgaon project sites within 6 to 18 hours.'
      },
      {
        question: 'Which adhesive is recommended for 1200x2400mm porcelain slabs in Gurgaon luxury apartments?',
        answer: 'We recommend Vajra Bond VB-3003 (Type 3T C2TES2). It provides zero vertical slip, high tensile adhesion (≥ 1.5 N/mm²), and dynamic vibration absorption for large slabs.'
      },
      {
        question: 'Can civil contractors in Gurgaon request on-site pull-off adhesion tests?',
        answer: 'Yes, our technical field engineers provide on-site substrate inspection and pull-off tensile testing with IS 15477 batch certificates.'
      }
    ]
  },
  {
    slug: 'faridabad',
    name: 'Faridabad',
    state: 'Haryana',
    tier: 'Tier 2',
    distanceFromNCR: 'Home City / Plant Location',
    heroTitle: 'Tile Adhesive Factory Direct Supply in Faridabad',
    heroDescription: 'Direct from plant gate supply of BIS certified IS 15477:2019 tile adhesives. Instant same-day site deliveries, dealer wholesale pricing, and contractor support across Greater Faridabad and industrial sectors.',
    constructionFocus: 'Neharpar (Greater Faridabad) high-rise societies, Mathura Road industrial plants, independent luxury floors in Sector 14/15/21, and commercial retail malls.',
    climateChallenge: 'High summer temperatures and dust exposure. Water-retaining cellulose polymers ensure complete hydration even under hot dry outdoor conditions.',
    keyLocalities: ['Greater Faridabad / Neharpar (Sectors 75-89)', 'Sector 14, 15, 16, 21A/21C', 'Green Field Colony & Charmwood Village', 'Mathura Road Industrial Area & Sector 2', 'Ballabgarh & IMT Faridabad'],
    recommendedProducts: ['vb-1001', 'vb-2002', 'vb-2004', 'vb-3003'],
    dispatchTime: 'Same-Day (2 to 4 Hours)',
    faqs: [
      {
        question: 'Can I pick up tile adhesive directly from the Faridabad plant?',
        answer: 'Yes, local contractors, builders, and dealers can collect factory-fresh 20 kg bags directly from our plant at 67, Tirkha Colony, Sector 2, Faridabad or arrange same-day delivery.'
      },
      {
        question: 'Which adhesive is best for vitrified tiles in Faridabad floors?',
        answer: 'Vajra Bond VB-2002 (Type 2T) is specifically designed for 600x600mm and 600x1200mm vitrified tiles with high polymer grip.'
      },
      {
        question: 'Do you offer direct dealer dealerships in Faridabad and Palwal?',
        answer: 'Yes, wholesale dealer inquiries are welcome from hardware and tile showrooms across Faridabad, Palwal, and Hodal.'
      }
    ]
  },
  {
    slug: 'noida',
    name: 'Noida & Greater Noida',
    state: 'Delhi NCR',
    tier: 'Tier 1',
    distanceFromNCR: '25 km from Plant',
    heroTitle: 'Tile Adhesive Direct Site Supply in Noida & Greater Noida',
    heroDescription: 'Certified polymer tile adhesives for Noida Expressway residential towers, Greater Noida West (Noida Extension) townships, and Yamuna Expressway developments.',
    constructionFocus: 'High-density multi-storey housing townships, IT SEZs in Sector 62 and 132, data centers, and commercial retail centers in Pari Chowk.',
    climateChallenge: 'Intense North Indian summers and high thermal expansion in tall concrete structures. Demands polymer mortars that prevent tile hollow sounds.',
    keyLocalities: ['Noida Expressway (Sectors 128, 137, 143, 150)', 'Greater Noida West / Noida Extension (Sectors 1, 4, 16)', 'Central Noida (Sectors 50, 62, 75, 78)', 'Pari Chowk & Alpha/Beta/Gamma Sectors', 'Yamuna Expressway & Jewar Airport Corridor'],
    recommendedProducts: ['vb-2002', 'vb-2004', 'vb-3003', 'vb-1001'],
    dispatchTime: 'Same-Day / 12 to 24 Hours',
    faqs: [
      {
        question: 'How fast can project orders be delivered to Noida sites?',
        answer: 'Via the FNG and Faridabad-Noida highway link, full pallet and truckload orders arrive at Noida and Greater Noida sites within 6 to 18 hours.'
      },
      {
        question: 'Which adhesive should be used for wet areas (bathrooms/balconies) in Noida high-rises?',
        answer: 'We recommend Vajra Bond VB-2004, which provides water-resistant polymer cross-linking that prevents dampness and tile debonding.'
      },
      {
        question: 'Do you supply to large builders in Noida Extension?',
        answer: 'Yes, we supply direct factory consignments to real estate developers, contractors, and building material distributors across Greater Noida.'
      }
    ]
  },

  // ================= HARYANA =================
  {
    slug: 'panipat',
    name: 'Panipat',
    state: 'Haryana',
    tier: 'Tier 2',
    distanceFromNCR: '110 km from Plant',
    heroTitle: 'Industrial & Residential Tile Adhesive in Panipat (Textile City)',
    heroDescription: 'Heavy-duty polymer-modified tile adhesives for Panipat textile manufacturing mills, luxury residential kothis on GT Road, and expanding commercial sectors.',
    constructionFocus: 'Industrial textile export units, luxury independent bungalows in Model Town, and modern housing societies along NH-44.',
    climateChallenge: 'Industrial chemical exposure and wide seasonal temperature swings. High-strength polymer mortars prevent vibration loosening and thermal cracking.',
    keyLocalities: ['Model Town & Ansals Sushant City', 'Sector 11, 12, 13 & 18', 'GT Road & Delhi-Panipat Expressway Corridor', 'Industrial Area Sector 25 & 29', 'Eldeco Estate & Refinery Township'],
    recommendedProducts: ['vb-2002', 'vb-2004', 'vb-3003', 'vb-1001'],
    dispatchTime: '12 to 24 Hours',
    faqs: [
      {
        question: 'How fast is dispatch to Panipat from the NCR factory?',
        answer: 'Located right along the NH-44 corridor, direct truckloads reach Panipat sites within 12 to 24 hours of booking.'
      },
      {
        question: 'Can Panipat textile factories use Vajra Bond for heavy-traffic floor tiling?',
        answer: 'Yes, VB-2004 and VB-3003 are engineered to withstand heavy footfall, forklift movement, and vibration.'
      },
      {
        question: 'Are dealership franchises open for Panipat tile traders?',
        answer: 'Yes, we are actively appointing authorized stockists in Panipat, Samalkha, and Gharaunda.'
      }
    ]
  },
  {
    slug: 'karnal',
    name: 'Karnal',
    state: 'Haryana',
    tier: 'Tier 2',
    distanceFromNCR: '145 km from Plant',
    heroTitle: 'Smart City Tile Adhesive & Construction Chemicals in Karnal',
    heroDescription: 'Engineered polymer adhesives for Karnal Smart City residential townships, luxury GT Road kothis, and modern agricultural/food processing facilities.',
    constructionFocus: 'Smart City modern infrastructure, Sector 6/7 luxury residences, agricultural institution buildings, and high-spec hospital complexes.',
    climateChallenge: 'Dry hot summers and cold winters. Requires flexible polymer adhesives with superior water retention to prevent mortar crumbling.',
    keyLocalities: ['Sector 6, 7, 8 & 9', 'Model Town & Mall Road', 'CHD City & Alpha International City', 'GT Road Bypass & Namaste Chowk Corridor', 'Kunjpura Road & Meerut Road'],
    recommendedProducts: ['vb-2002', 'vb-2004', 'vb-3003', 'vb-1001'],
    dispatchTime: '18 to 24 Hours',
    faqs: [
      {
        question: 'What is the lead time for site deliveries in Karnal?',
        answer: 'Direct shipments from our plant reach Karnal within 18–24 hours via NH-44.'
      },
      {
        question: 'Which adhesive is recommended for vitrified tiles in Karnal bungalows?',
        answer: 'Vajra Bond VB-2002 (Type 2T) provides strong polymer grip for 600x1200mm vitrified floor and wall tiles.'
      },
      {
        question: 'Can Karnal building material shops partner with Vajra Bond?',
        answer: 'Yes, we offer attractive dealer margins, sample boards, and direct marketing support.'
      }
    ]
  },
  {
    slug: 'sonipat',
    name: 'Sonipat',
    state: 'Haryana',
    tier: 'Tier 2',
    distanceFromNCR: '75 km from Plant',
    heroTitle: 'Polymer Tile Adhesives in Sonipat & Kundli (NCR Hub)',
    heroDescription: 'Architectural-grade tile adhesives for Sonipat educational corridor, Kundli-Rai-Murthal industrial zone, and modern residential townships.',
    constructionFocus: 'Rajiv Gandhi Education City campuses, Kundli-Manesar-Palwal (KMP) logistic parks, and multi-storey housing in Sector 8/14.',
    climateChallenge: 'High temperature variations between summer and winter. Polymer-modified adhesive prevents debonding due to thermal contraction/expansion.',
    keyLocalities: ['Kundli & KMP Expressway Junction', 'Rai Industrial Area & Murthal Corridor', 'Sector 8, 14, 15 & Omaxe City', 'TDI City & Parker City', 'Rajiv Gandhi Education City Corridor'],
    recommendedProducts: ['vb-2002', 'vb-2004', 'vb-3003', 'vb-1001'],
    dispatchTime: 'Same-Day / 12 Hours',
    faqs: [
      {
        question: 'How fast can Sonipat projects receive adhesive deliveries?',
        answer: 'Via the Western Peripheral / KMP link, dispatches reach Sonipat and Kundli in 6 to 12 hours.'
      },
      {
        question: 'Which adhesive is recommended for university campuses in Sonipat?',
        answer: 'Vajra Bond VB-2004 and VB-3003 provide high-tensile, high-durability performance for institutional corridors.'
      },
      {
        question: 'Can Sonipat contractors get direct wholesale rates?',
        answer: 'Yes, direct factory rates are available for contractors and developers in Sonipat.'
      }
    ]
  },
  {
    slug: 'rohtak',
    name: 'Rohtak',
    state: 'Haryana',
    tier: 'Tier 2',
    distanceFromNCR: '95 km from Plant',
    heroTitle: 'High-Strength Tile Adhesive & Grout in Rohtak',
    heroDescription: 'Engineered polymer tile adhesives for Rohtak educational campuses, IMT industrial zone, and modern residential sectors across the city.',
    constructionFocus: 'IMT Rohtak automotive and engineering facilities, MDU and medical college expansions, and luxury independent kothis in Sector 1-4.',
    climateChallenge: 'Intense dry summer heat crossing 46°C. High water-retention polymer formulation prevents adhesive drying out prematurely.',
    keyLocalities: ['IMT Rohtak Industrial Corridor', 'Model Town & Delhi Road', 'Sector 1, 2, 3 & 4', 'Sun City & Omaxe City Rohtak', 'Jhajjar Road & Bhiwani Road'],
    recommendedProducts: ['vb-2002', 'vb-2004', 'vb-3003', 'vb-1001'],
    dispatchTime: '12 to 24 Hours',
    faqs: [
      {
        question: 'What is the dispatch schedule for Rohtak sites?',
        answer: 'Dispatches are routed via the Delhi-Rohtak highway, reaching project sites within 12 to 24 hours.'
      },
      {
        question: 'Which adhesive should be used for tile-on-tile renovation in Rohtak?',
        answer: 'Vajra Bond VB-2004 (Type 2T High Polymer) enables dust-free fixing directly over existing tiles.'
      },
      {
        question: 'How can Rohtak tile retailers register as authorized dealers?',
        answer: 'Contact our dealer desk on WhatsApp at +91 63950 14392 for dealer pricing and sample kits.'
      }
    ]
  },
  {
    slug: 'hisar',
    name: 'Hisar',
    state: 'Haryana',
    tier: 'Tier 2',
    distanceFromNCR: '185 km from Plant',
    heroTitle: 'Industrial Tile Adhesive in Hisar (Steel City of Haryana)',
    heroDescription: 'Heavy-duty polymer-modified tile adhesives for Hisar steel manufacturing plants, universities, and residential sectors along Delhi Bypass.',
    constructionFocus: 'Industrial steel rolling mills, agricultural university campuses, and residential developments in Sector 13-17.',
    climateChallenge: 'Severe semi-arid climate with summer temperatures reaching 47°C and cold winter nights. Demands flexible high-polymer mortars.',
    keyLocalities: ['Model Town & Delhi Bypass', 'Sector 13, 14, 15, 16 & 17', 'Industrial Area & Jindal Steel Township', 'Urban Estate II & PLA Area', 'Rajgarh Road & Sirsa Road'],
    recommendedProducts: ['vb-2002', 'vb-2004', 'vb-3003', 'vb-1001'],
    dispatchTime: '24 Hours',
    faqs: [
      {
        question: 'How fast can tile adhesive reach Hisar from the NCR factory?',
        answer: 'Direct truckloads reach Hisar within 18 to 24 hours via NH-9.'
      },
      {
        question: 'Can Hisar steel mills use Vajra Bond for heavy-duty factory floor tiles?',
        answer: 'Yes, VB-2004 and VB-3003 provide high compressive strength and load resistance.'
      },
      {
        question: 'Are dealership opportunities open in Hisar and Fatehabad?',
        answer: 'Yes, we are actively onboarding dealers across Hisar, Hansi, and Fatehabad.'
      }
    ]
  },
  {
    slug: 'ambala',
    name: 'Ambala',
    state: 'Haryana',
    tier: 'Tier 2',
    distanceFromNCR: '220 km from Plant',
    heroTitle: 'Tile Adhesive & Construction Chemicals in Ambala',
    heroDescription: 'High-performance tile adhesives for Ambala scientific instruments hub, military cantt infrastructure, and residential townships along GT Road.',
    constructionFocus: 'Scientific instrument industrial clusters, Cantt defense housing, and modern residential developments in Ambala City.',
    climateChallenge: 'Cold North Indian winters and humid monsoon showers. Moisture-resistant polymer matrix prevents hollow sounds and debonding.',
    keyLocalities: ['Ambala Cantt & Staff Road', 'Ambala City & Model Town', 'Sector 7, 8, 9 & 10', 'GT Road & Chandigarh Highway Corridor', 'Jagadhri Road & Saha Industrial Area'],
    recommendedProducts: ['vb-2002', 'vb-2004', 'vb-3003', 'vb-1001'],
    dispatchTime: '24 Hours',
    faqs: [
      {
        question: 'How does Vajra Bond deliver to Ambala project sites?',
        answer: 'We deliver directly from our factory via NH-44, reaching Ambala in 18 to 24 hours.'
      },
      {
        question: 'Which product is recommended for vitrified tiles in Ambala homes?',
        answer: 'Vajra Bond VB-2002 (Type 2T) provides reliable, non-slip adhesion for vitrified tiles.'
      },
      {
        question: 'Can Ambala dealers get authorized stockist rights?',
        answer: 'Yes, apply through our Become a Dealer page or WhatsApp our sales desk directly.'
      }
    ]
  },

  // ================= PUNJAB & CHANDIGARH TRICITY =================
  {
    slug: 'chandigarh',
    name: 'Chandigarh Tricity (Mohali & Panchkula)',
    state: 'Punjab',
    tier: 'Tier 2',
    distanceFromNCR: '260 km from Plant',
    heroTitle: 'Architect-Grade Tile Adhesives in Chandigarh Tricity',
    heroDescription: 'Engineered polymer adhesives conforming to Corbusian architectural specifications for luxury villas, Mohali IT City towers, and Panchkula modern residences.',
    constructionFocus: 'Modernist concrete villas in Chandigarh sectors, high-rise luxury towers in Mohali, IT corridors, and institutional projects in New Chandigarh.',
    climateChallenge: 'Cold North Indian winters and intense dry summers with heavy monsoon showers. Requires polymer adhesives with excellent thermal cycling tolerance.',
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
    slug: 'ludhiana',
    name: 'Ludhiana',
    state: 'Punjab',
    tier: 'Tier 2',
    distanceFromNCR: '330 km from Plant',
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
    slug: 'amritsar',
    name: 'Amritsar',
    state: 'Punjab',
    tier: 'Tier 2',
    distanceFromNCR: '470 km from Plant',
    heroTitle: 'Tile Adhesive & Marble Bonding Chemical in Amritsar (Holy City)',
    heroDescription: 'Engineered polymer adhesives for Amritsar luxury hospitality hotels, commercial corridors near Golden Temple, and modern residential developments.',
    constructionFocus: 'Heritage hotel renovations, sprawling kothis on Ranjit Avenue and Circular Road, and modern retail malls.',
    climateChallenge: 'Extreme winter chills and high summer heat. Demands flexible S1/S2 polymer adhesives that prevent freeze-thaw and thermal debonding.',
    keyLocalities: ['Ranjit Avenue (Blocks A-E)', 'Mall Road & Circular Road', 'Cantonment Area & Lawrence Road', 'Airport Road & Gumtala', 'GT Road & Golden Temple Corridor'],
    recommendedProducts: ['vb-3003', 'vb-2004', 'vb-2002', 'vb-1001'],
    dispatchTime: '24 to 36 Hours',
    faqs: [
      {
        question: 'How are shipments dispatched to Amritsar?',
        answer: 'Dispatches are routed via NH-44 express corridor directly to Amritsar sites in 24 to 36 hours.'
      },
      {
        question: 'Which adhesive is recommended for natural marble and granites in Amritsar hotels?',
        answer: 'VB-3003 White is ideal for non-staining, heavy stone and marble installation.'
      },
      {
        question: 'Can Amritsar tile showrooms get dealership rights?',
        answer: 'Yes, connect with our sales team via WhatsApp for wholesale terms.'
      }
    ]
  },
  {
    slug: 'jalandhar',
    name: 'Jalandhar',
    state: 'Punjab',
    tier: 'Tier 2',
    distanceFromNCR: '390 km from Plant',
    heroTitle: 'High-Performance Tile Adhesive in Jalandhar',
    heroDescription: 'Polymer tile adhesives for Jalandhar sports goods industrial parks, NRI luxury kothis on Model Town, and commercial complexes across GT Road.',
    constructionFocus: 'Luxury NRI residential villas, sports goods industrial facilities, healthcare hospitals on Mahavir Marg, and retail centers.',
    climateChallenge: 'Extreme temperature variations between summer and winter. High-polymer flexible mortar prevents tile pop-ups.',
    keyLocalities: ['Model Town & PPR Mall Corridor', 'Civil Lines & Mahavir Marg', 'Urban Estate Phase 1 & 2', 'Cantt Road & Rama Mandi', 'Leather Complex & Kapurthala Road'],
    recommendedProducts: ['vb-2004', 'vb-3003', 'vb-2002', 'vb-1001'],
    dispatchTime: '24 Hours',
    faqs: [
      {
        question: 'What is the delivery time for site shipments in Jalandhar?',
        answer: 'Shipments arrive in Jalandhar within 20 to 24 hours of booking.'
      },
      {
        question: 'Which adhesive is recommended for vitrified tiles in Jalandhar kothis?',
        answer: 'Vajra Bond VB-2002 (Type 2T) and VB-2004 are recommended for floor and wall vitrified tiles.'
      },
      {
        question: 'Are dealership franchises open for Jalandhar and Phagwara?',
        answer: 'Yes, we are actively appointing stockists across Doaba region.'
      }
    ]
  },
  {
    slug: 'bathinda',
    name: 'Bathinda',
    state: 'Punjab',
    tier: 'Tier 2',
    distanceFromNCR: '320 km from Plant',
    heroTitle: 'Industrial-Strength Tile Adhesives in Bathinda (Malwa Hub)',
    heroDescription: 'High-strength polymer tile adhesives for Bathinda refinery township, thermal plant complexes, and expanding residential colonies in Malwa region.',
    constructionFocus: 'Industrial petrochemical facilities, AIIMS Bathinda medical campus, and modern residential sectors.',
    climateChallenge: 'Semi-arid climate with extreme heat in summer (up to 47°C) and frost in winter. Requires weather-resistant polymer mortars.',
    keyLocalities: ['Model Town (Phases 1-3)', 'Civil Lines & Mall Road', 'Goniana Road & Dabwali Road', 'AIIMS Township & Barnala Bypass', 'Thermal Colony Area'],
    recommendedProducts: ['vb-2002', 'vb-2004', 'vb-3003', 'vb-1001'],
    dispatchTime: '24 Hours',
    faqs: [
      {
        question: 'How fast can Bathinda sites receive deliveries?',
        answer: 'Deliveries arrive in Bathinda within 24 hours via express highway routes.'
      },
      {
        question: 'Can Bathinda builders get batch test certificates for institutional projects?',
        answer: 'Yes, all shipments come with IS 15477:2019 laboratory test certificates.'
      },
      {
        question: 'How to contact for wholesale supply in Bathinda?',
        answer: 'WhatsApp our team at +91 63950 14392 for instant pricing.'
      }
    ]
  },

  // ================= RAJASTHAN =================
  {
    slug: 'jaipur',
    name: 'Jaipur (Pink City)',
    state: 'Rajasthan',
    tier: 'Tier 2',
    distanceFromNCR: '260 km from Plant',
    heroTitle: 'Tile Adhesive & Marble Bonding Chemical in Jaipur',
    heroDescription: 'Specialized polymer tile adhesives for Rajasthan sandstone, marble palaces, luxury resort hotels, and modern residential developments in Jaipur.',
    constructionFocus: 'Heritage hotel restorations, luxury resorts on Delhi-Jaipur highway, natural marble flooring, and modern residential towers in Jagatpura and Mansarovar.',
    climateChallenge: 'Harsh desert climate with scorching summer temperatures (up to 48°C) and cold winter nights. High thermal stress demands flexible S1/S2 polymer adhesives.',
    keyLocalities: ['Vaishali Nagar & Chitrakoot', 'Jagatpura & Malviya Nagar', 'Mansarovar & Ajmer Road', 'C-Scheme & Civil Lines', 'Sitapura Industrial Area'],
    recommendedProducts: ['vb-3003', 'vb-2004', 'vb-2002', 'vb-1001'],
    dispatchTime: '18 to 24 Hours',
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
    slug: 'alwar',
    name: 'Alwar & Bhiwadi (NCR Industrial Hub)',
    state: 'Rajasthan',
    tier: 'Tier 2',
    distanceFromNCR: '90 km from Plant',
    heroTitle: 'Tile Adhesive Direct Supply in Alwar & Bhiwadi',
    heroDescription: 'Heavy-duty polymer tile adhesives for Bhiwadi-Neemrana industrial corridor, automobile clusters, and modern residential societies in Alwar.',
    constructionFocus: 'RIICO industrial factories, Japanese Zone manufacturing facilities in Neemrana, and residential townships in Bhiwadi and Alwar city.',
    climateChallenge: 'High summer heat and industrial vibration. High-shear polymer mortars prevent loosening on heavy-duty factory floors.',
    keyLocalities: ['Bhiwadi Industrial Areas & Alwar Bypass', 'Neemrana Japanese Zone & RIICO Phase 1-3', 'Alwar City & Hasan Khan Mewati Nagar', 'Tijara Road & Delhi Road', 'Tapukara Industrial Hub'],
    recommendedProducts: ['vb-2002', 'vb-2004', 'vb-3003', 'vb-1001'],
    dispatchTime: 'Same-Day / 12 Hours',
    faqs: [
      {
        question: 'What is the delivery time from Faridabad plant to Bhiwadi/Alwar?',
        answer: 'Bhiwadi is only 60–90 km from our plant, enabling same-day delivery within 6 to 12 hours.'
      },
      {
        question: 'Which adhesive is recommended for industrial factories in Bhiwadi?',
        answer: 'VB-2004 and VB-3003 provide high compressive strength for industrial and commercial floors.'
      },
      {
        question: 'Are dealer inquiries open in Alwar and Bhiwadi?',
        answer: 'Yes, we are actively appointing stockists in Alwar, Bhiwadi, and Neemrana.'
      }
    ]
  },
  {
    slug: 'jodhpur',
    name: 'Jodhpur (Sun City)',
    state: 'Rajasthan',
    tier: 'Tier 2',
    distanceFromNCR: '560 km from Plant',
    heroTitle: 'High-Temperature Tile Adhesive & Stone Chemical in Jodhpur',
    heroDescription: 'Engineered polymer adhesives for Jodhpur sandstone architecture, heritage palace hotels, AIIMS institution buildings, and luxury residential bungalows.',
    constructionFocus: 'Heritage sandstone facade cladding, luxury hospitality resorts, AIIMS and IIT campus infrastructure, and residential colonies in Shastri Nagar.',
    climateChallenge: 'Extreme desert heat crossing 48°C and intense UV radiation. Requires specialized polymer mortars with prolonged open time and high thermal elasticity.',
    keyLocalities: ['Shastri Nagar & Sardarpura', 'Ratanada & Circuit House Road', 'Pal Road & AIIMS Corridor', 'Chopasni Housing Board & Paota', 'Boronada Industrial Area'],
    recommendedProducts: ['vb-3003', 'vb-2004', 'vb-2002', 'vb-1001'],
    dispatchTime: '24 to 36 Hours',
    faqs: [
      {
        question: 'How does Vajra Bond adhesive withstand Jodhpur extreme summer heat?',
        answer: 'Our adhesives are formulated with high-grade cellulose ethers that maintain water in the mix even above 45°C, ensuring complete hydration and zero hollow tiles.'
      },
      {
        question: 'Can Vajra Bond be used for Jodhpur sandstone facade cladding?',
        answer: 'VB-3003 (Type 3T C2TES2) provides heavy load-bearing adhesion and zero vertical sag for natural stone facade cladding.'
      },
      {
        question: 'How fast can Jodhpur builders receive truckload shipments?',
        answer: 'Consignments arrive in Jodhpur within 24 to 36 hours of booking via express freight.'
      }
    ]
  },
  {
    slug: 'kota',
    name: 'Kota',
    state: 'Rajasthan',
    tier: 'Tier 2',
    distanceFromNCR: '460 km from Plant',
    heroTitle: 'Engineered Tile Adhesives & Stone Mortar in Kota',
    heroDescription: 'High-performance tile adhesives for Kota educational coaching townships, riverfront urban renewal developments, and natural stone flooring installations.',
    constructionFocus: 'Multi-storey student hostels in Landmark City, Chambal Riverfront hospitality complexes, and Kota stone fixing.',
    climateChallenge: 'Hot dry summers and rapid moisture loss during tile application. High-water-retention binders guarantee full mechanical bond.',
    keyLocalities: ['Landmark City & Kunhari', 'Vigyan Nagar & Talwandi', 'Rajeev Gandhi Nagar & Jawahar Nagar', 'Chambal Riverfront Corridor', 'Ranpur Industrial Area'],
    recommendedProducts: ['vb-2002', 'vb-2004', 'vb-3003', 'vb-1001'],
    dispatchTime: '24 to 36 Hours',
    faqs: [
      {
        question: 'Is Vajra Bond suitable for fixing Kota stone?',
        answer: 'Yes, VB-2004 and VB-3003 provide high shear bond strength and non-shrink adhesion for Kota stone and vitrified tiles.'
      },
      {
        question: 'What is the delivery time to Kota sites from the NCR plant?',
        answer: 'Dispatches arrive in Kota within 24 to 36 hours via the Delhi-Mumbai Expressway link.'
      },
      {
        question: 'Are dealership opportunities open in Kota?',
        answer: 'Yes, we welcome authorized dealer applications from building material merchants in Kota.'
      }
    ]
  },
  {
    slug: 'udaipur',
    name: 'Udaipur (City of Lakes)',
    state: 'Rajasthan',
    tier: 'Tier 2',
    distanceFromNCR: '590 km from Plant',
    heroTitle: 'Waterproof Tile Adhesive & Marble Chemical in Udaipur',
    heroDescription: 'Architectural polymer adhesives for Udaipur lakefront luxury 5-star palace hotels, marble processing hubs, and luxury hillside residential villas.',
    constructionFocus: 'Luxury 5-star palace hotels along Lake Pichola, natural green/white marble processing facilities, and high-end residential villas.',
    climateChallenge: 'Continuous moisture exposure near water bodies and high temperature fluctuations. Hydrophobic polymer matrix prevents efflorescence and water staining.',
    keyLocalities: ['Lake Pichola & Fatehsagar Waterfront', 'Panchwati & Sukhadia Circle', 'Hiran Magri (Sectors 3-14)', 'Goverdhan Vilas & Shobhagpura', 'Sukher Marble Industrial Area'],
    recommendedProducts: ['vb-3003', 'vb-2004', 'vb-2002', 'vb-1001'],
    dispatchTime: '36 Hours',
    faqs: [
      {
        question: 'Can Vajra Bond be used for white marble in Udaipur luxury hotels?',
        answer: 'Yes. Vajra Bond VB-3003 White is formulated with non-staining hydraulic binders that protect natural white marble against discoloration and oil-bleed.'
      },
      {
        question: 'Is Vajra Bond submersible for luxury resort swimming pools in Udaipur?',
        answer: 'VB-3003 C2TES2 adhesive is tested for permanent water immersion and withstands pool chemicals and continuous water pressure.'
      },
      {
        question: 'How to order bulk shipments for construction projects in Udaipur?',
        answer: 'Connect with our engineering sales desk on WhatsApp at +91 63950 14392 for instant project quotation.'
      }
    ]
  },
  {
    slug: 'ajmer',
    name: 'Ajmer & Pushkar',
    state: 'Rajasthan',
    tier: 'Tier 2',
    distanceFromNCR: '380 km from Plant',
    heroTitle: 'Tile Adhesive & Construction Chemicals in Ajmer & Pushkar',
    heroDescription: 'High-strength polymer tile adhesives for Ajmer Smart City projects, luxury Pushkar resort hotels, and residential colonies.',
    constructionFocus: 'Hospitality hotels and resorts in Pushkar, Smart City urban infrastructure, and residential housing in Panchsheel Nagar.',
    climateChallenge: 'High ambient summer temperatures and dry winds. Advanced cellulose polymer formulation holds water to ensure complete hydration.',
    keyLocalities: ['Panchsheel Nagar & Vaishali Nagar', 'Civil Lines & Ana Sagar Circular Road', 'Pushkar Resort Corridor', 'Adarsh Nagar & Beawar Road', 'Makhupura Industrial Area'],
    recommendedProducts: ['vb-2002', 'vb-2004', 'vb-3003', 'vb-1001'],
    dispatchTime: '24 Hours',
    faqs: [
      {
        question: 'How fast can Ajmer construction sites receive site deliveries?',
        answer: 'Direct shipments arrive in Ajmer within 20 to 24 hours of booking via express highway corridor.'
      },
      {
        question: 'Which adhesive is recommended for vitrified floor tiles in Ajmer homes?',
        answer: 'Vajra Bond VB-2002 (Type 2T) provides strong polymer grip and zero hollow sounds for vitrified flooring.'
      },
      {
        question: 'Are dealer franchises open for Ajmer and Kishangarh?',
        answer: 'Yes, we are actively appointing dealers across Ajmer, Pushkar, and Kishangarh marble market.'
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
