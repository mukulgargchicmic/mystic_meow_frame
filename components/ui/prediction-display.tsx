interface PredictionDisplayProps {
  prediction: string | null;
}

/**
 * Component to display the fortune prediction
 */
export function PredictionDisplay({ prediction }: PredictionDisplayProps) {
  return (
    <div className={`min-h-20 p-4 rounded-lg bg-purple-800 bg-opacity-50 max-w-sm mx-auto 
      transition-opacity duration-500 ${prediction ? 'opacity-100' : 'opacity-0'}`}>
      {prediction && (
        <p className="text-lg">{prediction}</p>
      )}
    </div>
  );
}