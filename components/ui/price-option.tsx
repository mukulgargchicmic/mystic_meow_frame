interface PriceOptionProps {
  price: string;
  onClick?: () => void;
  isSelected?: boolean;
}

/**
 * Price option button component for premium features
 */
export function PriceOption({ price, onClick, isSelected = false }: PriceOptionProps) {
  return (
    <button 
      className={`w-16 h-16 rounded-lg ${isSelected ? 'bg-purple-500 ring-2 ring-white' : 'bg-purple-700'} 
        flex items-center justify-center text-xl font-bold transition-all hover:bg-purple-600`}
      onClick={onClick}
    >
      {price}
    </button>
  );
}