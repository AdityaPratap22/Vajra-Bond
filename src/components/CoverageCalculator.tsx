'use client';

import React, { useState } from 'react';
import { Calculator, Check, ArrowRight } from 'lucide-react';

interface CoverageCalculatorProps {
  onOpenQuoteModal?: (productName?: string) => void;
  defaultProduct?: string;
}

export default function CoverageCalculator({ onOpenQuoteModal, defaultProduct }: CoverageCalculatorProps) {
  const [unit, setUnit] = useState<'sqft' | 'sqm'>('sqft');
  const [area, setArea] = useState<number>(500);
  const [trowelNotch, setTrowelNotch] = useState<'6mm' | '8mm' | '10mm' | '12mm'>('6mm');
  const [applicationType, setApplicationType] = useState<string>('vitrified');

  // Coverage rates per 20kg bag:
  // 6mm notch (~3mm bed): ~55 sqft (5.1 sqm)
  // 8mm notch (~4.5mm bed): ~45 sqft (4.2 sqm)
  // 10mm notch (~6mm bed): ~35 sqft (3.2 sqm)
  // 12mm notch (~8mm bed / back buttered): ~28 sqft (2.6 sqm)
  const coverageRates = {
    '6mm': { sqft: 55, sqm: 5.1, bedThickness: '3 mm' },
    '8mm': { sqft: 45, sqm: 4.2, bedThickness: '4.5 mm' },
    '10mm': { sqft: 35, sqm: 3.2, bedThickness: '6 mm' },
    '12mm': { sqft: 28, sqm: 2.6, bedThickness: '8 mm' },
  };

  const currentRate = unit === 'sqft' ? coverageRates[trowelNotch].sqft : coverageRates[trowelNotch].sqm;
  const rawBags = area > 0 ? area / currentRate : 0;
  // include 10% wastage buffer
  const bagsWithWastage = Math.ceil(rawBags * 1.1);
  const totalWeightKg = bagsWithWastage * 20;
  const estimatedWaterLiters = Math.round(bagsWithWastage * 5.4);

  return (
    <div className="bg-white rounded-2xl border border-amber-200/80 shadow-md p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-gray-100 gap-4">
        <div>
          <div className="flex items-center gap-2 text-amber-700 text-xs font-bold uppercase tracking-wider mb-1">
            <Calculator className="w-4 h-4" />
            Precise Project Estimator
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Tile Adhesive Coverage Calculator</h3>
          <p className="text-gray-500 text-sm mt-0.5">
            Calculate exact 20 kg bags and water requirements based on your surface area and trowel notch depth.
          </p>
        </div>

        {/* Unit Toggle */}
        <div className="flex items-center bg-gray-100 p-1 rounded-xl self-start sm:self-auto">
          <button
            type="button"
            onClick={() => {
              if (unit === 'sqm') {
                setUnit('sqft');
                setArea(Math.round(area * 10.764));
              }
            }}
            className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              unit === 'sqft'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Square Feet (Sq. Ft)
          </button>
          <button
            type="button"
            onClick={() => {
              if (unit === 'sqft') {
                setUnit('sqm');
                setArea(Math.round(area / 10.764));
              }
            }}
            className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              unit === 'sqm'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Square Meters (m²)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
        {/* Input Parameters */}
        <div className="lg:col-span-7 space-y-6">
          {/* Area Input */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-semibold text-gray-800">
                Total Area to Tile ({unit === 'sqft' ? 'Sq. Ft.' : 'm²'})
              </label>
              <span className="text-sm font-bold text-amber-700">
                {area} {unit === 'sqft' ? 'sq ft' : 'm²'}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="50"
                max={unit === 'sqft' ? 10000 : 1000}
                step={unit === 'sqft' ? 50 : 5}
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full accent-amber-600 h-2 bg-gray-200 rounded-lg cursor-pointer"
              />
              <input
                type="number"
                min="1"
                value={area}
                onChange={(e) => setArea(Math.max(0, Number(e.target.value)))}
                className="w-28 px-3 py-1.5 border border-gray-300 rounded-lg text-sm text-gray-900 font-semibold text-center focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
              />
            </div>
          </div>

          {/* Application Tile Type */}
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              Tile Type & Surface
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {[
                { id: 'ceramic', label: 'Ceramic / Porous', notch: '6mm', desc: 'Standard tiles' },
                { id: 'vitrified', label: 'Vitrified (2x2 / 2x4)', notch: '8mm', desc: 'Floors & walls' },
                { id: 'large-format', label: 'Large Format / Tile-on-Tile', notch: '10mm', desc: 'Renovations' },
                { id: 'stone', label: 'Marble & Granite', notch: '12mm', desc: 'Heavy slabs' },
                { id: 'exterior', label: 'Exterior / Facade', notch: '10mm', desc: 'Weatherproof' },
                { id: 'pool', label: 'Glass Mosaic / Pool', notch: '6mm', desc: 'Submerged zones' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setApplicationType(item.id);
                    setTrowelNotch(item.notch as any);
                  }}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    applicationType === item.id
                      ? 'border-amber-600 bg-amber-50/70 ring-1 ring-amber-600 text-amber-900'
                      : 'border-gray-200 hover:border-amber-300 text-gray-700 bg-white'
                  }`}
                >
                  <p className="text-xs font-bold">{item.label}</p>
                  <p className="text-[11px] text-gray-500 mt-0.5">{item.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Trowel Notch Depth */}
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              Trowel Notch Size (Bed Thickness)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { size: '6mm', bed: '3 mm bed', coverage: '~55 sqft/bag' },
                { size: '8mm', bed: '4.5 mm bed', coverage: '~45 sqft/bag' },
                { size: '10mm', bed: '6 mm bed', coverage: '~35 sqft/bag' },
                { size: '12mm', bed: '8 mm bed', coverage: '~28 sqft/bag' },
              ].map((item) => (
                <button
                  key={item.size}
                  type="button"
                  onClick={() => setTrowelNotch(item.size as any)}
                  className={`p-2.5 rounded-lg border text-center transition-all ${
                    trowelNotch === item.size
                      ? 'border-amber-600 bg-amber-600 text-white font-bold shadow-xs'
                      : 'border-gray-200 hover:border-gray-300 text-gray-700 bg-gray-50'
                  }`}
                >
                  <div className="text-xs font-semibold">{item.size} Notch</div>
                  <div className={`text-[10px] ${trowelNotch === item.size ? 'text-amber-100' : 'text-gray-500'}`}>
                    {item.bed}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Calculation Result Summary Card */}
        <div className="lg:col-span-5 bg-gradient-to-br from-amber-900 via-amber-800 to-stone-900 text-white rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-xl">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-amber-500/30">
              Estimated Materials Breakdown
            </div>

            <div className="mb-6">
              <span className="text-4xl sm:text-5xl font-black text-amber-400 tracking-tight">
                {bagsWithWastage}
              </span>
              <span className="text-lg font-medium text-amber-100 ml-2">Bags (20 kg each)</span>
              <p className="text-xs text-amber-200/80 mt-1">
                *Includes 10% standard construction contingency & cutting wastage.
              </p>
            </div>

            <div className="space-y-3.5 text-xs text-amber-100 border-t border-amber-700/60 pt-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Total Net Adhesive Weight:</span>
                <span className="font-bold text-white text-sm">{totalWeightKg} kg</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Clean Potable Water Needed:</span>
                <span className="font-bold text-white text-sm">~{estimatedWaterLiters} Litres</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Selected Bed Thickness:</span>
                <span className="font-bold text-white text-sm">{coverageRates[trowelNotch].bedThickness}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Recommended Vajra Bond Grade:</span>
                <span className="font-bold text-amber-300 text-xs">
                  {applicationType === 'ceramic' ? 'VB-1001 Standard' :
                   applicationType === 'vitrified' ? 'VB-2002 Flexi' :
                   applicationType === 'large-format' ? 'VB-2004 Ultra' :
                   applicationType === 'stone' ? 'VB-StoneFix' :
                   applicationType === 'pool' ? 'VB-White / Exterior' : 'VB-Exterior High Flex'}
                </span>
              </div>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-amber-700/60">
            <button
              type="button"
              onClick={() => onOpenQuoteModal && onOpenQuoteModal(defaultProduct || 'VB-2002 Flexi Tile Adhesive')}
              className="w-full py-3 px-4 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-xl text-sm transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-amber-500/25"
            >
              <span>Get Wholesale Quote for {bagsWithWastage} Bags</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-[11px] text-amber-300/80 text-center mt-2.5 flex items-center justify-center gap-1">
              <Check className="w-3.5 h-3.5 text-amber-400" />
              Guaranteed factory dispatched batch directly to site
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
