import type { Metadata } from 'next';
import BecomeADealerClient from './BecomeADealerClient';

export const metadata: Metadata = {
  title: 'Become an Authorized Dealer & Distributor | Vajra Bond',
  description:
    'Join Vajra Bond dealer network across Delhi NCR, Haryana, Punjab, and Rajasthan. High distributor margins, dedicated territory rights, marketing collaterals, and fast factory dispatch.',
  keywords: 'tile adhesive dealership, become a distributor, construction chemicals franchise, tile adhesive business India, vajra bond partner',
  alternates: {
    canonical: 'https://vajrabond.com/become-a-dealer',
  },
};

export default function BecomeADealerPage() {
  return <BecomeADealerClient />;
}
