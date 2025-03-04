"use client";

import { usePrediction } from '@/hooks/usePrediction';
import { CrystalBallButton } from '@/components/ui/crystal-ball-button';
import { PredictionDisplay } from '@/components/ui/prediction-display';
import { CAT_IMAGE_URL } from '@/lib/constants';

/**
 * Main fortune telling section with cat image, crystal ball, and prediction
 */
export function FortuneTeller() {
  const { prediction, isRevealing, getRandomPrediction } = usePrediction();

  return (
    <div className="w-full flex flex-col items-center mb-10">
      <div className="relative mb-6">
        <img 
          src={CAT_IMAGE_URL}
          alt="Cosmic Cat"
          className="w-48 h-48 object-cover rounded-full border-4 border-purple-300"
          style={{ 
            clipPath: "circle(50% at 50% 50%)",
            filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))"
          }}
        />
        
        <CrystalBallButton 
          onClick={getRandomPrediction} 
          isRevealing={isRevealing} 
        />
      </div>
      
      <div className="text-center mb-6 w-full">
        <p className="mb-6">Click the crystal ball for your daily fur-tune</p>
        
        <PredictionDisplay prediction={prediction} />
      </div>
    </div>
  );
}