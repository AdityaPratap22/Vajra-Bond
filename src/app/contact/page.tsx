import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us | Direct Factory Sales & Technical Desk | Vajra Bond',
  description:
    'Contact Vajra Bond plant in Faridabad. Speak with technical sales, request bulk job-site quotations, or inquire about authorized dealership via WhatsApp or phone.',
  keywords: 'contact vajra bond, tile adhesive factory faridabad, tile chemical supplier phone, bulk quote tile mortar, customer care vajra bond',
  alternates: {
    canonical: 'https://vajrabond.com/contact',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
