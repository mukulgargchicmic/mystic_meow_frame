import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface ShareUrlProps {
  url: string;
}

/**
 * Component for displaying and copying a share URL
 */
export function ShareUrl({ url }: ShareUrlProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="flex items-center gap-2 bg-purple-800 bg-opacity-50 px-4 py-2 rounded-lg">
      <span className="text-sm truncate">{url}</span>
      <button 
        className="text-white hover:text-purple-300 transition-colors"
        onClick={copyToClipboard}
        aria-label="Copy link"
      >
        {copied ? <Check size={20} /> : <Copy size={20} />}
      </button>
    </div>
  );
}