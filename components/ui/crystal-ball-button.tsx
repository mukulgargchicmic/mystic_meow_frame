interface CrystalBallButtonProps {
  onClick: () => void;
  isRevealing: boolean;
}

/**
 * Interactive crystal ball button component
 */
export function CrystalBallButton({ onClick, isRevealing }: CrystalBallButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4 
        w-24 h-24 rounded-full bg-indigo-600 bg-opacity-80 
        flex flex-col items-center justify-center text-sm text-center 
        transition-all duration-300 hover:bg-indigo-500 hover:scale-110 
        focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50
        ${isRevealing ? 'animate-pulse' : ''}`}
      disabled={isRevealing}
      aria-label="Reveal prediction"
      id="crystal-ball-button"
    >
      <span>Tap to</span>
      <span>reveal</span>
      <span>your purr-</span>
      <span>diction</span>
    </button>
  );
}