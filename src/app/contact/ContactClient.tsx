'use client';

import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  ExternalLink 
} from 'lucide-react';
import { products } from '@/data/products';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import InstagramIcon from '@/components/InstagramIcon';

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    enquiryType: 'Quotation Request',
    product: `${products[0]?.code} - ${products[0]?.name}`,
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [whatsappLink, setWhatsappLink] = useState('');

  const buildWhatsappUrl = () => {
    const text =
      `*New Website Inquiry - Vajra Bond*\n\n` +
      `• *Name:* ${formData.name || 'Not provided'}\n` +
      `• *WhatsApp / Phone:* ${formData.phone || 'Not provided'}\n` +
      `• *City / Location:* ${formData.city || 'Not provided'}\n` +
      `• *Enquiry Type:* ${formData.enquiryType}\n` +
      `• *Product:* ${formData.product}\n` +
      (formData.message ? `• *Message:* ${formData.message}\n` : '');

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
            Contact Us
          </h1>
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mt-3 leading-relaxed">
            Get in touch with our team for enquiries, project quotations, technical submittals, or dealership / distributor opportunities across India.
          </p>
        </div>
      </section>

      {/* CONTACT BODY MATCHING TEMPLATE */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Office & Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs space-y-6">
              
              <div>
                <h3 className="text-lg font-bold text-stone-900 mb-3 pb-2 border-b border-stone-100 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-amber-600" />
                  Our Registered Office & Plant
                </h3>
                <div className="text-xs sm:text-sm text-stone-700 space-y-1">
                  <p className="font-bold text-stone-900">Vajra Bond Pvt. Ltd.</p>
                  <p className="pt-1 text-stone-600 leading-relaxed">
                    67, Tirkha Colony, Sector 2, Faridabad, Haryana 121004
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100 space-y-4">
                {/* Phone */}
                <div className="flex items-start gap-3 text-xs sm:text-sm">
                  <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-stone-500 text-xs block">Phone Support</span>
                    <a href="tel:+918130099534" className="font-bold text-stone-900 hover:text-amber-700 block">
                      +91 81300 99534
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3 text-xs sm:text-sm">
                  <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200">
                    <WhatsAppIcon className="w-4 h-4 fill-current text-amber-700" variant="monochrome" />
                  </div>
                  <div>
                    <span className="text-stone-500 text-xs block">WhatsApp Helpline</span>
                    <a 
                      href="https://wa.me/916395014392?text=Hello%20Vajra%20Bond%2C%20I%20would%20like%20to%20enquire%20about%20tile%20adhesives." 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="font-bold text-stone-900 hover:text-amber-700 block"
                    >
                      +91 63950 14392
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-3 text-xs sm:text-sm">
                  <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200">
                    <InstagramIcon className="w-4 h-4 fill-current text-amber-700" variant="glyph" />
                  </div>
                  <div>
                    <span className="text-stone-500 text-xs block">Instagram</span>
                    <a 
                      href="https://www.instagram.com/vajra.bond" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="font-bold text-stone-900 hover:text-amber-700 block"
                    >
                      @vajra.bond
                    </a>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start gap-3 text-xs sm:text-sm">
                  <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-stone-500 text-xs block">Website</span>
                    <a 
                      href="https://vajrabond.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="font-bold text-stone-900 hover:text-amber-700 block"
                    >
                      vajrabond.com
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3 text-xs sm:text-sm">
                  <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-stone-500 text-xs block">Working Hours</span>
                    <p className="font-semibold text-stone-900">Mon - Sat: 9:00 AM - 6:00 PM</p>
                    <p className="text-stone-500 text-xs">Sunday: Closed</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 reveal-right delay-100">
            <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-10 shadow-xs">
              <div className="flex items-center gap-2 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Instant WhatsApp Enquiry Desk
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-1">
                Send Us a Message on WhatsApp
              </h3>
              <p className="text-xs text-stone-500 mb-6">
                Fill in your project requirements and connect directly with our engineering team on WhatsApp (+91 63950 14392).
              </p>

              {submitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-stone-900">Connecting to WhatsApp...</h4>
                  <p className="text-stone-600 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. If WhatsApp did not open automatically, click below to send your enquiry directly to <strong>+91 63950 14392</strong>.
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
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          phone: '',
                          city: '',
                          enquiryType: 'Quotation Request',
                          product: `${products[0]?.code} - ${products[0]?.name}`,
                          message: ''
                        });
                      }}
                      className="px-5 py-3 border border-stone-300 rounded-xl text-stone-700 hover:bg-stone-50 font-medium text-xs sm:text-sm"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Amit Sharma"
                      className="w-full px-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs sm:text-sm text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-amber-500 focus:bg-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                        WhatsApp / Phone Number *
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
                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                        City / Location *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="e.g. Delhi NCR, Mumbai, Bengaluru, Lucknow..."
                        className="w-full px-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs sm:text-sm text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-amber-500 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                        Enquiry Type
                      </label>
                      <select
                        value={formData.enquiryType}
                        onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                        className="w-full px-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs sm:text-sm text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-amber-500 focus:bg-white"
                      >
                        <option value="Quotation Request">Quotation Request</option>
                        <option value="Dealership & Distribution">Dealership & Distribution</option>
                        <option value="Technical Site Guidance">Technical Site Guidance</option>
                        <option value="Architectural Specification">Architectural Specification</option>
                        <option value="General Enquiry">General Enquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                        Select Product
                      </label>
                      <select
                        value={formData.product}
                        onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                        className="w-full px-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs sm:text-sm text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-amber-500 focus:bg-white"
                      >
                        {products.map((p) => (
                          <option key={p.id} value={`${p.code} - ${p.name}`}>
                            {p.code} - {p.name}
                          </option>
                        ))}
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                      Message / Project Details
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify your estimated tile square footage, tile material, delivery city, or any technical queries..."
                      className="w-full px-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs sm:text-sm text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-amber-500 focus:bg-white resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3.5 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                    >
                      <WhatsAppIcon className="w-5 h-5" variant="official" />
                      <span>Send Enquiry via WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
