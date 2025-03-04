"use client";

import { useState, useCallback } from 'react';
import { PREDICTIONS } from '@/lib/constants';

/**
 * Custom hook for managing fortune predictions
 * Encapsulates prediction state and logic for revealing random predictions
 */
export function usePrediction() {
  const [prediction, setPrediction] = useState<string | null>(null);
  const [isRevealing, setIsRevealing] = useState(false);

  const getRandomPrediction = useCallback(() => {
    if (isRevealing) return;
    
    setIsRevealing(true);
    setPrediction(null);
    
    // Simulate crystal ball "thinking" with a delay
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * PREDICTIONS.length);
      setPrediction(PREDICTIONS[randomIndex]);
      setIsRevealing(false);
    }, 1000);
  }, [isRevealing]);

  return {
    prediction,
    isRevealing,
    getRandomPrediction
  };
}