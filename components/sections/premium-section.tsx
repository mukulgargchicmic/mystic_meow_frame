"use client";

import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { PriceOption } from '@/components/ui/price-option';
import { PREMIUM_OPTIONS } from '@/lib/constants';

/**
 * Premium features section with pricing options
 */
export function PremiumSection() {
  const [selectedPrice, setSelectedPrice] = useState<number | null>(null);

  const handlePriceSelect = (price: number) => {
    setSelectedPrice(price);
  };

  const handlePurchase = () => {
    if (selectedPrice) {
      // In a real app, this would handle payment processing
      console.log(`Processing payment for $${selectedPrice}`);
    } else {
      // Prompt user to select a price
      console.log('Please select a price option');
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold mb-4 text-center">Unlock Purr-emium Predictions</h2>
      
      <p className="text-center mb-6">
        Feed the mystical cat with a treat and receive a detailed
        paw-sonalized prediction!
      </p>
      
      <div className="flex justify-center gap-6 mb-6">
        {PREMIUM_OPTIONS.map((option) => (
          <PriceOption 
            key={option.value}
            price={option.price} 
            isSelected={selectedPrice === option.value}
            onClick={() => handlePriceSelect(option.value)}
          />
        ))}
      </div>
      
      <button 
        className="w-full py-3 bg-purple-600 rounded-lg flex items-center justify-center gap-2 
          hover:bg-purple-500 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
        onClick={handlePurchase}
      >
        <Sparkles size={20} />
        <span className="font-semibold">Unlock Purr-emium Prediction</span>
      </button>
    </div>
  );
}