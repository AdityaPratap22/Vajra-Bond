'use client';

import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, PhoneCall } from 'lucide-react';
import { products } from '@/data/products';
import WhatsAppIcon from './WhatsAppIcon';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: string;
}

export default function QuoteModal({ isOpen, onClose, defaultProduct }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    product: defaultProduct || 'Need Technical Recommendation',
    projectType: 'Residential',
    estimatedArea: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [whatsappLink, setWhatsappLink] = useState('');

  if (!isOpen) return null;

  const buildWhatsappUrl = () => {
    const text =
      `*New Quotation Request - Vajra Bond*\n\n` +
      `• *Name:* ${formData.name || 'Not provided'}\n` +
      `• *Phone / WhatsApp:* ${formData.phone || 'Not provided'}\n` +
      `• *City / Location:* ${formData.city || 'Not provided'}\n` +
      `• *Product:* ${formData.product}\n` +
      `• *Project Type:* ${formData.projectType}\n` +
      (formData.estimatedArea ? `• *Area / Quantity:* ${formData.estimatedArea}\n` : '') +
      (formData.message ? `• *Notes:* ${formData.message}\n` : '');

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

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-amber-100 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header - Old Amber Brand Theme */}
        <div className="relative bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-white p-5 sm:p-7 shrink-0">
          <button 
            onClick={onClose}
            className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 text-white/80 hover:text-white bg-black/10 hover:bg-black/20 p-2 rounded-full transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight">Request a Quote</h3>
          <p className="text-amber-100 text-xs sm:text-sm mt-1 leading-relaxed">
            Fill out your details below to directly connect with our technical sales team via WhatsApp (+91 63950 14392).
          </p>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-8 overflow-y-auto">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900">Connecting to WhatsApp...</h4>
              <p className="text-gray-600 max-w-md mx-auto text-sm leading-relaxed">
                Thank you <strong className="text-gray-900">{formData.name}</strong>. If WhatsApp did not open automatically, click the button below to send your quotation details directly to our team.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all text-sm"
                >
                  <WhatsAppIcon className="w-5 h-5" variant="official" />
                  <span>Open WhatsApp Chat</span>
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-5 py-3 border border-stone-300 rounded-xl text-stone-700 hover:bg-stone-50 font-medium text-sm transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>

              <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 text-amber-950 text-xs text-left max-w-md mx-auto mt-4">
                <p className="font-semibold mb-1 flex items-center gap-1.5 text-amber-800">
                  <PhoneCall className="w-4 h-4 text-amber-600" /> Direct WhatsApp Support:
                </p>
                <p>Chat or call directly at <a href="tel:+916395014392" className="underline font-bold text-amber-900">+91 63950 14392</a>.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rajesh Kumar"
                    className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-hidden focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1">
                    Your WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-hidden focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1">
                    City / Project Location *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. Faridabad / Delhi NCR / Jaipur"
                    className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-hidden focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1">
                    Project Type
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 bg-white focus:outline-hidden focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  >
                    <option value="Residential">Residential House / Villa</option>
                    <option value="Commercial">Commercial / Office Complex</option>
                    <option value="Industrial">Industrial Factory / Warehouse</option>
                    <option value="Hospitality">Hotel / Resort / Spa</option>
                    <option value="Dealer / Hardware Store">Dealer / Hardware Store Stock</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1">
                  Select Product *
                </label>
                <select
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 bg-white focus:outline-hidden focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                >
                  {products.map((p) => (
                    <option key={p.id} value={p.name}>
                      {p.code} - {p.name}
                    </option>
                  ))}
                  <option value="Complete Range / Bulk Dealership">Complete Product Range (Bulk/Dealer)</option>
                  <option value="Need Technical Recommendation">Need Technical Recommendation</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1">
                  Estimated Tiling Area (Sq. Ft.) or Quantity
                </label>
                <input
                  type="text"
                  value={formData.estimatedArea}
                  onChange={(e) => setFormData({ ...formData, estimatedArea: e.target.value })}
                  placeholder="e.g. 5,000 sq ft or 100 bags (20kg)"
                  className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-hidden focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1">
                  Additional Notes / Specific Requirements
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Mention tile size (e.g., 2x4 ft vitrified, Italian marble, exterior facade), delivery timeline, etc."
                  className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-hidden focus:ring-2 focus:ring-amber-500 focus:border-amber-500 resize-none"
                />
              </div>

              <div className="flex items-center gap-2 text-xs text-gray-500 pt-1">
                <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Genuine IS: 15477:2019 Certified manufacturer. Factory direct logistics across India.</span>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 text-sm font-medium transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white text-sm font-bold rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
                >
                  <WhatsAppIcon className="w-5 h-5" variant="official" />
                  <span>Send Request via WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
