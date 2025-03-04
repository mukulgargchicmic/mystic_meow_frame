"use client";

import { Twitter, Facebook, Instagram } from 'lucide-react';
import { SocialButton } from '@/components/ui/social-button';
import { ShareUrl } from '@/components/ui/share-url';
import { SHARE_URL } from '@/lib/constants';

/**
 * Social sharing section with social media buttons and shareable link
 */
export function SocialSharing() {
  const handleShare = (platform: string) => {
    // In a real app, this would implement platform-specific sharing
    console.log(`Sharing to ${platform}`);
  };

  return (
    <div className="w-full mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-center">Share Your Feline Fortune</h2>
      
      <p className="text-center mb-6">
        Share with your fur-iends to unlock more detailed paw-dictions!
      </p>
      
      <div className="flex justify-center gap-4 mb-6">
        <SocialButton 
          color="bg-blue-500" 
          label="Twitter" 
          icon={<Twitter size={24} />} 
          onClick={() => handleShare('twitter')}
        />
        <SocialButton 
          color="bg-blue-700" 
          label="Facebook" 
          icon={<Facebook size={24} />}
          onClick={() => handleShare('facebook')}
        />
        <SocialButton 
          color="bg-pink-600" 
          label="Instagram" 
          icon={<Instagram size={24} />}
          onClick={() => handleShare('instagram')}
        />
      </div>
      
      <ShareUrl url={SHARE_URL} />
    </div>
  );
}