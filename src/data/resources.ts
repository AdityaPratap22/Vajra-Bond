export interface ResourceItem {
  id: string;
  title: string;
  category: 'Technical Data Sheets' | 'Brochures' | 'Installation Guides';
  format: 'PDF';
  size: string;
  description: string;
  dateAdded: string;
  downloadUrl: string;
}

export const resources: ResourceItem[] = [
  {
    id: 'res-cat-1',
    title: 'Vajra Bond Master Product Catalogue 2024-2025',
    category: 'Brochures',
    format: 'PDF',
    size: '4.8 MB',
    description: 'Comprehensive catalogue of all Vajra Bond tile adhesives, grouts, primers, and surface preparation chemicals.',
    dateAdded: 'Jan 2024',
    downloadUrl: '#'
  },
  {
    id: 'res-tds-1001',
    title: 'Standard Tile Adhesive (VB-1001) - Technical Data Sheet',
    category: 'Technical Data Sheets',
    format: 'PDF',
    size: '820 KB',
    description: 'Complete technical specifications, conformance values, tensile adhesion data, and pot life metrics for VB-1001.',
    dateAdded: 'Feb 2024',
    downloadUrl: '#'
  },
  {
    id: 'res-tds-2002',
    title: 'Flexi Tile Adhesive (VB-2002) - Technical Data Sheet',
    category: 'Technical Data Sheets',
    format: 'PDF',
    size: '890 KB',
    description: 'Detailed TDS for VB-2002 covering 2x4 ft vitrified tile vertical wall application criteria and test certifications.',
    dateAdded: 'Feb 2024',
    downloadUrl: '#'
  },
  {
    id: 'res-tds-2004',
    title: 'Ultra Tile Adhesive (VB-2004) - Technical Data Sheet',
    category: 'Technical Data Sheets',
    format: 'PDF',
    size: '940 KB',
    description: 'Technical data and application protocol for Tile-on-Tile renovation and heavy floor slab installations with VB-2004.',
    dateAdded: 'Mar 2024',
    downloadUrl: '#'
  },
  {
    id: 'res-tds-stonefix',
    title: 'StoneFix Adhesive (VB-StoneFix) - Technical Data Sheet',
    category: 'Technical Data Sheets',
    format: 'PDF',
    size: '910 KB',
    description: 'Engineering data for natural stone, Italian marble, and granite vertical wall facade cladding.',
    dateAdded: 'Mar 2024',
    downloadUrl: '#'
  },
  {
    id: 'res-tds-exterior',
    title: 'Exterior Tile Adhesive (VB-Exterior) - Technical Data Sheet',
    category: 'Technical Data Sheets',
    format: 'PDF',
    size: '880 KB',
    description: 'High-flexibility S2 class outdoor adhesive technical specifications and waterproofing ratings.',
    dateAdded: 'Apr 2024',
    downloadUrl: '#'
  },
  {
    id: 'res-guide-install',
    title: 'Step-by-Step Tile Adhesive Installation Guide',
    category: 'Installation Guides',
    format: 'PDF',
    size: '2.4 MB',
    description: 'Illustrated contractor handbook on substrate checking, notch trowel selection, back-buttering, and joint grouting.',
    dateAdded: 'Jan 2024',
    downloadUrl: '#'
  },
  {
    id: 'res-guide-calc',
    title: 'Tile Adhesive Coverage Calculator & Trowel Selection Guide',
    category: 'Installation Guides',
    format: 'PDF',
    size: '1.2 MB',
    description: 'Reference tables showing exact bag requirements based on tile dimensions, substrate roughness, and trowel notch profiles.',
    dateAdded: 'Apr 2024',
    downloadUrl: '#'
  },
  {
    id: 'res-guide-is15477',
    title: 'IS: 15477:2019 Standard Compliance Guide for Architects',
    category: 'Technical Data Sheets',
    format: 'PDF',
    size: '1.6 MB',
    description: 'Detailed breakdown of Indian Standards (Type 1T, Type 2T, Type 3, Type 4) to help architects specify the right adhesive grade.',
    dateAdded: 'May 2024',
    downloadUrl: '#'
  }
];
