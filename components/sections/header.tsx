/**
 * Application header component with title and tagline
 */
export function Header() {
  return (
    <>
      <h1 className="text-6xl font-bold mb-2">
        <span className="text-purple-300">Mystic</span>
        <span className="text-pink-400">Meow</span>
      </h1>
      
      <p className="text-center mb-8">
        Seek the wisdom of the cosmic feline through the crystal ball
      </p>
    </>
  );
}