import type { Metadata } from 'next';
import ProjectsClient from './ProjectsClient';

export const metadata: Metadata = {
  title: 'Our Projects & Landmark Installations Across India | Vajra Bond',
  description:
    'Discover landmark infrastructure, luxury high-rise towers, commercial atriums, and hospitality projects bonded with Vajra Bond polymer adhesives.',
  keywords: 'tile adhesive projects, landmark installations, civil construction portfolio, vajra bond case studies, commercial tiling references',
  alternates: {
    canonical: 'https://vajrabond.com/projects',
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
