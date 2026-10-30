'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  TrendingUp, 
  Percent, 
  Megaphone, 
  CheckCircle2, 
  MapPin, 
  Truck, 
  ShieldCheck 
} from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export default function BecomeADealerClient() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    state: 'Delhi-NCR',
    businessName: '',
    businessType: 'Tile & Sanitaryware Showroom',
    turnover: '₹50 Lakhs - ₹1 Crore',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [whatsappLink, setWhatsappLink] = useState('');

  const buildWhatsappUrl = () => {
    const text =
      `*New Dealership Application - Vajra Bond*\n\n` +
      `• *Contact Person:* ${formData.name || 'Not provided'}\n` +
      `• *Mobile / WhatsApp:* ${formData.phone || 'Not provided'}\n` +
      `• *Firm / Business Name:* ${formData.businessName || 'Not provided'}\n` +
      `• *City / District:* ${formData.city || 'Not provided'}\n` +
      `• *State / Territory:* ${formData.state}\n` +
      `• *Business Type:* ${formData.businessType}\n` +
      `• *Annual Turnover:* ${formData.turnover}\n` +
      (formData.message ? `• *Warehouse/Notes:* ${formData.message}\n` : '');

    return `https://wa.me/916395014392?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = buildWhatsappUrl();
    setWhatsappLink(url);
    setSubmitted(true);
    if (typeof window !== 'undefined') {
      window.open(url, '_blank');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-stone-50/30">
      
      {/* HEADER BANNER */}
      <section className="bg-stone-900 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center sm:text-left">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Become a Dealer
          </h1>
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mt-3 leading-relaxed">
            Join hands with Vajra Bond and be part of our fast-growing network across India. Deliver premium polymer tile adhesives with superior margins and comprehensive brand support.
          </p>
        </div>
      </section>

      {/* 3 VALUE PILLARS MATCHING TEMPLATE */}
      <section className="py-10 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl bg-amber-50/50 border border-amber-200 flex items-start gap-4 reveal delay-100">
              <div className="w-12 h-12 rounded-xl bg-amber-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-stone-900">High Product Demand</h3>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  Rapidly expanding market as contractors shift from conventional cement to IS: 15477 certified tile adhesives.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-amber-50/50 border border-amber-200 flex items-start gap-4 reveal delay-200">
              <div className="w-12 h-12 rounded-xl bg-amber-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                <Percent className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-stone-900">Attractive Profit Margins</h3>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  High gross margins on both standard and specialized large-format adhesives, plus annual volume incentives.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-amber-50/50 border border-amber-200 flex items-start gap-4 reveal delay-300">
              <div className="w-12 h-12 rounded-xl bg-amber-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                <Megaphone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-stone-900">Marketing & Sales Support</h3>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  Store display racks, branded banners, product brochures, contractor training meets, and lead referrals.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FORM & NETWORK GRID MATCHING TEMPLATE */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Dealership Application Form */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-stone-200 p-6 sm:p-10 shadow-xs reveal-left">
            <div className="flex items-center gap-2 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Direct WhatsApp Partnership Desk
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-1">
              Apply for Dealership via WhatsApp
            </h3>
            <p className="text-xs text-stone-500 mb-6">
              Complete the enquiry below to initiate a direct dealership dialogue on WhatsApp (+91 63950 14392) with our regional sales leadership.
            </p>

            {submitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-bold text-stone-900">Connecting to WhatsApp...</h4>
                <p className="text-stone-600 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. If WhatsApp did not open automatically, click below to send your dealership application directly to <strong>+91 63950 14392</strong>.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all text-sm"
                  >
                    <WhatsAppIcon className="w-5 h-5" variant="official" />
                    <span>Open WhatsApp Chat</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-3 border border-stone-300 rounded-xl text-stone-700 hover:bg-stone-50 font-medium text-xs sm:text-sm"
                  >
                    Submit Another Application
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                      Contact Person Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Aggarwal"
                      className="w-full px-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs sm:text-sm text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-amber-500 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                      WhatsApp / Mobile *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs sm:text-sm text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-amber-500 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                      Firm / Business Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="e.g. Aggarwal Tiles & Sanitary"
                      className="w-full px-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs sm:text-sm text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-amber-500 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                      City / District *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. Jaipur / Lucknow / Surat"
                      className="w-full px-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs sm:text-sm text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-amber-500 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                      Business Type
                    </label>
                    <select
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                      className="w-full px-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs sm:text-sm text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-amber-500 focus:bg-white"
                    >
                      <option value="Tile & Sanitaryware Showroom">Tile & Sanitaryware Showroom</option>
                      <option value="Hardware & Paint Store">Hardware & Paint Store</option>
                      <option value="Building Materials Distributor">Building Materials Distributor</option>
                      <option value="Contractor / Construction Firm">Contractor / Construction Firm</option>
                      <option value="New Entrepreneur">New Entrepreneur</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                      Approx Annual Turnover
                    </label>
                    <select
                      value={formData.turnover}
                      onChange={(e) => setFormData({ ...formData, turnover: e.target.value })}
                      className="w-full px-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs sm:text-sm text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-amber-500 focus:bg-white"
                    >
                      <option value="Up to ₹25 Lakhs">Up to ₹25 Lakhs</option>
                      <option value="₹25 Lakhs - ₹50 Lakhs">₹25 Lakhs - ₹50 Lakhs</option>
                      <option value="₹50 Lakhs - ₹1 Crore">₹50 Lakhs - ₹1 Crore</option>
                      <option value="Above ₹1 Crore">Above ₹1 Crore</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Warehouse / Shop Space & Additional Message
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Mention shop/godown carpet area in sq. ft., current tile brands sold, target territory, etc."
                    className="w-full px-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs sm:text-sm text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-amber-500 focus:bg-white resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl text-sm shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2.5"
                  >
                    <WhatsAppIcon className="w-5 h-5" variant="official" />
                    <span>Submit Application via WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Dealer Network Map & Highlights */}
          <div className="lg:col-span-6 space-y-6 reveal-right delay-100">
            
            <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
              <h3 className="text-xl font-bold text-stone-900 mb-2 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-amber-600" />
                Our Dealer Network Across India
              </h3>
              <p className="text-xs text-stone-500 mb-6">
                We are actively appointing authorized stockists and regional dealers across key tier-1, tier-2 and tier-3 markets.
              </p>

              {/* Graphic map highlight container */}
              <div className="p-6 rounded-2xl bg-stone-900 text-white relative overflow-hidden mb-6">
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                    <span className="text-amber-400 font-bold text-xs uppercase tracking-wider">
                      Active Supply Corridors
                    </span>
                    <span className="text-[11px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded font-bold">
                      Direct Plant Dispatch
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-2.5 rounded-lg bg-stone-800/80 border border-stone-700">
                      <p className="font-bold text-amber-300">Delhi-NCR & Haryana</p>
                      <p className="text-[11px] text-stone-400 mt-0.5">Faridabad, Gurugram, Noida, Panipat</p>
                    </div>
                    <div className="p-2.5 rounded-lg bg-stone-800/80 border border-stone-700">
                      <p className="font-bold text-amber-300">Uttar Pradesh</p>
                      <p className="text-[11px] text-stone-400 mt-0.5">Lucknow, Kanpur, Agra, Varanasi</p>
                    </div>
                    <div className="p-2.5 rounded-lg bg-stone-800/80 border border-stone-700">
                      <p className="font-bold text-amber-300">Rajasthan</p>
                      <p className="text-[11px] text-stone-400 mt-0.5">Jaipur, Jodhpur, Kota, Udaipur</p>
                    </div>
                    <div className="p-2.5 rounded-lg bg-stone-800/80 border border-stone-700">
                      <p className="font-bold text-amber-300">Western & South Hubs</p>
                      <p className="text-[11px] text-stone-400 mt-0.5">Mumbai, Pune, Ahmedabad, Bangalore</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dealer Benefits List */}
              <div className="space-y-3 text-xs sm:text-sm text-stone-700">
                <h4 className="font-bold text-stone-900 uppercase text-xs tracking-wider">
                  What We Provide to Every Partner:
                </h4>
                <div className="space-y-2">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Free sample kits and branded tile adhesive testing blocks</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Full truckload (FTL) and part truckload (PTL) subsidized logistics</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Contractor and mason loyalty coupon scheme & training seminars</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Dedicated Relationship Manager for billing, tenders and site queries</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
