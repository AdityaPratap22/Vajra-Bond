'use client';

import React from 'react';
import { X, Download, Printer, CheckCircle2, ShieldCheck, FileText } from 'lucide-react';
import Image from 'next/image';

interface ResourceViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  resourceTitle: string;
  resourceCategory: string;
  resourceSize: string;
}

export default function ResourceViewerModal({
  isOpen,
  onClose,
  resourceTitle,
  resourceCategory,
  resourceSize,
}: ResourceViewerModalProps) {
  if (!isOpen) return null;

  const handleDownload = () => {
    // Generate a printable HTML window / trigger download simulation
    const printContent = document.getElementById('printable-tds');
    if (printContent) {
      window.print();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] sm:max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-stone-900 text-white px-4 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between border-b border-stone-800 shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 pr-2">
            <div className="p-2 bg-amber-500/20 text-amber-400 rounded-lg shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h4 className="text-sm sm:text-base font-bold text-white leading-tight truncate">{resourceTitle}</h4>
              <p className="text-[11px] sm:text-xs text-stone-400 truncate">
                {resourceCategory} • PDF ({resourceSize})
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              title="Print / Save PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="text-stone-400 hover:text-white p-1.5 rounded-full hover:bg-stone-800 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Document Body Preview */}
        <div id="printable-tds" className="p-4 sm:p-8 md:p-10 overflow-y-auto bg-stone-50/50 space-y-6 text-stone-900 text-sm">
          {/* Header of TDS */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 border-b-2 border-amber-600 gap-4 bg-white p-6 rounded-xl shadow-xs">
            <div className="flex items-center gap-3">
              <div className="relative w-14 h-14 shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Vajra Bond Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h2 className="text-xl font-black text-amber-900 tracking-wide">VAJRA BOND</h2>
                <p className="text-xs font-semibold text-amber-700 tracking-wider uppercase">
                  MAJBOOT JOD. LAMBI UMAR.
                </p>
                <p className="text-[11px] text-stone-500">
                  Marketed By: Shivantra Chemtech LLP | Mfg: Faslen Industries
                </p>
              </div>
            </div>
            <div className="text-right sm:text-right">
              <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 font-bold text-xs rounded-md uppercase border border-amber-300">
                Technical Data Sheet
              </span>
              <p className="text-xs text-stone-500 mt-1">Conforms to IS: 15477:2019</p>
              <p className="text-xs text-stone-500">Ref: TDS-VB-2024-REV04</p>
            </div>
          </div>

          {/* Section: Overview */}
          <div className="bg-white p-6 rounded-xl border border-stone-200 space-y-3">
            <h3 className="font-bold text-base text-stone-900 border-b border-stone-100 pb-2 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-600" />
              Product Specification & Compliance Summary
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              This technical document outlines the chemical formulation, adhesion parameters, tensile strength, and application protocols for <strong>{resourceTitle}</strong>. All tests conducted in accordance with Bureau of Indian Standards (BIS) IS: 15477:2019 and European Norms EN 12004.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                <span className="text-[11px] text-stone-500 block uppercase font-medium">Standard Tested</span>
                <span className="font-bold text-stone-800 text-xs">IS 15477:2019 Type 1T / 2T</span>
              </div>
              <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                <span className="text-[11px] text-stone-500 block uppercase font-medium">European Class</span>
                <span className="font-bold text-stone-800 text-xs">EN 12004 C1TE / C2TE</span>
              </div>
              <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                <span className="text-[11px] text-stone-500 block uppercase font-medium">Standard Pack</span>
                <span className="font-bold text-stone-800 text-xs">20 kg Moisture-Proof Bag</span>
              </div>
            </div>
          </div>

          {/* Technical Values Table */}
          <div className="bg-white p-6 rounded-xl border border-stone-200">
            <h3 className="font-bold text-base text-stone-900 mb-4">Laboratory Performance Parameters</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-amber-50 text-amber-900 border-b border-amber-200">
                    <th className="py-2.5 px-3 font-bold">Property / Metric</th>
                    <th className="py-2.5 px-3 font-bold">Standard Requirement</th>
                    <th className="py-2.5 px-3 font-bold">Vajra Bond Test Result</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  <tr>
                    <td className="py-2.5 px-3 text-stone-700 font-medium">Tensile Adhesion (Dry Condition)</td>
                    <td className="py-2.5 px-3 text-stone-600">≥ 1.00 N/mm²</td>
                    <td className="py-2.5 px-3 font-semibold text-emerald-700">1.45 N/mm² (Passes)</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 text-stone-700 font-medium">Shear Adhesion (14 Days)</td>
                    <td className="py-2.5 px-3 text-stone-600">≥ 1.25 N/mm²</td>
                    <td className="py-2.5 px-3 font-semibold text-emerald-700">1.82 N/mm² (Exceeds)</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 text-stone-700 font-medium">Open Time (at 27°C)</td>
                    <td className="py-2.5 px-3 text-stone-600">Min 20 minutes</td>
                    <td className="py-2.5 px-3 font-semibold text-stone-900">30 - 35 minutes</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 text-stone-700 font-medium">Slip Resistance (Vertical T)</td>
                    <td className="py-2.5 px-3 text-stone-600">≤ 0.5 mm slip</td>
                    <td className="py-2.5 px-3 font-semibold text-emerald-700">&lt; 0.2 mm (Zero Slip)</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 text-stone-700 font-medium">Water Demand (20kg Bag)</td>
                    <td className="py-2.5 px-3 text-stone-600">Ratio 3.5:1 by weight</td>
                    <td className="py-2.5 px-3 font-semibold text-stone-900">5.2 - 5.6 Litres</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 text-stone-700 font-medium">Pot Life (Mixed Mortar)</td>
                    <td className="py-2.5 px-3 text-stone-600">&gt; 120 minutes</td>
                    <td className="py-2.5 px-3 font-semibold text-stone-900">2.5 to 3.0 Hours</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Quality Seals */}
          <div className="bg-amber-50/60 border border-amber-200 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span className="text-stone-700">
                Certified: <strong>ISO 9001:2015</strong> | <strong>ISO 14001:2015</strong> | <strong>ISO 45001:2018</strong> | <strong>CE Mark</strong>
              </span>
            </div>
            <span className="text-amber-800 font-semibold">Authorised Technical Lab Report</span>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-white p-4 border-t border-stone-200 flex items-center justify-between">
          <p className="text-xs text-stone-500">
            For specific project engineering consultations, contact <a href="tel:+916395014392" className="text-amber-700 underline font-semibold">+91 63950 14392</a>
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-stone-300 rounded-lg text-xs font-semibold text-stone-700 hover:bg-stone-50 transition-colors"
            >
              Close
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-5 py-2 bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold rounded-lg shadow-sm transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download Official PDF ({resourceSize})</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
