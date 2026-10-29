'use client';

import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles,
  ExternalLink 
} from 'lucide-react';
import { products } from '@/data/products';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    enquiryType: 'Quotation Request',
    product: 'General Product Enquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="flex flex-col min-h-screen bg-stone-50/30">
      
      {/* HEADER BANNER */}
      <section className="bg-stone-900 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4" />
            Direct Factory & Engineering Desk
          </div>
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
          
          {/* Left Column: Office info & Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs space-y-6">
              
              <div>
                <h3 className="text-lg font-bold text-stone-900 mb-4 pb-2 border-b border-stone-100 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-amber-600" />
                  Our Registered Office & Plant
                </h3>
                <div className="text-xs sm:text-sm text-stone-700 space-y-1">
                  <p className="font-bold text-stone-900">Vajra Bond Pvt. Ltd.</p>
                  <p className="pt-2 text-stone-600 leading-relaxed">
                    67, Tirkha Colony, Sector 2, Faridabad, Haryana 121004
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100 space-y-4">
                <div className="flex items-start gap-3 text-xs sm:text-sm">
                  <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-stone-500 text-xs block">Phone & WhatsApp</span>
                    <a href="tel:+918130099534" className="font-bold text-stone-900 hover:text-amber-700 block">
                      +91 81300 99534
                    </a>
                    <a href="tel:+916395014392" className="font-bold text-stone-900 hover:text-amber-700 block mt-0.5">
                      +91 63950 14392
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs sm:text-sm">
                  <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-stone-500 text-xs block">Email Support</span>
                    <a href="mailto:Support@vajrabond.com" className="font-bold text-stone-900 hover:text-amber-700 block">
                      Support@vajrabond.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs sm:text-sm">
                  <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200">
                    <svg className="w-4 h-4 fill-current text-amber-700" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
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

            {/* Stylized Map Card matching template */}
            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs">
              <div className="p-4 bg-stone-50 border-b border-stone-200 flex items-center justify-between">
                <span className="text-xs font-bold text-stone-800 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-amber-600" />
                  Location Map: Ballabgarh, Faridabad Plant
                </span>
                <span className="text-[11px] text-amber-700 font-semibold">Delhi NCR Hub</span>
              </div>
              <div className="relative h-48 w-full bg-stone-200 flex items-center justify-center">
                {/* Visual Map Representation */}
                <iframe
                  title="Vajra Bond Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14044.87102607997!2d77.3198!3d28.3375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdb69f64923e5%3A0x6b6cfa4c99778216!2sBallabhgarh%2C%20Faridabad%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="opacity-90"
                ></iframe>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-10 shadow-xs">
              <h3 className="text-xl font-bold text-stone-900 mb-1">
                Send Us a Message
              </h3>
              <p className="text-xs text-stone-500 mb-6">
                Fill in your enquiry details and our technical sales engineers will contact you shortly.
              </p>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-stone-900">Message Delivered Successfully!</h4>
                  <p className="text-stone-600 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Your enquiry regarding <strong>{formData.product}</strong> has been logged. An executive will follow up on <strong>{formData.phone}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        enquiryType: 'Quotation Request',
                        product: 'General Product Enquiry',
                        message: ''
                      });
                    }}
                    className="mt-4 px-6 py-2.5 bg-amber-600 text-white font-bold rounded-xl text-xs"
                  >
                    Send Another Message
                  </button>
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
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="amit@example.com"
                        className="w-full px-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs sm:text-sm text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-amber-500 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 81300 99534"
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
                          <option key={p.id} value={p.name}>
                            {p.code} - {p.name}
                          </option>
                        ))}
                        <option value="Entire Product Range">Entire Product Range (Dealership)</option>
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
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-8 py-3.5 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
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
