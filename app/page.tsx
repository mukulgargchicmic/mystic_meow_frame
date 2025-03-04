"use client";

import { Header } from '@/components/sections/header';
import { FortuneTeller } from '@/components/sections/fortune-teller';
import { SocialSharing } from '@/components/sections/social-sharing';
import { PremiumSection } from '@/components/sections/premium-section';
import { useEffect, useState } from 'react';
import frameSdk, { Context } from '@farcaster/frame-sdk'
/**
 * MysticMeow - Feline Fortune Telling Application
 * 
 * A whimsical fortune telling app featuring a cosmic cat that provides
 * random positive predictions when users interact with the crystal ball.
 * 
 * Features:
 * - Random fortune generation
 * - Social sharing capabilities
 * - Premium prediction options
 */
function Home({ context }: { context: Context.FrameContext }) {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 text-white">
      <main className="max-w-md w-full px-4 py-8 flex flex-col items-center">
        <Header />
        <FortuneTeller />
        <SocialSharing />
        <PremiumSection />
      </main>
    </div>
  );
}

export default function App() {
  const [context, setContext] = useState<Context.FrameContext | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function getContext() {
      try {
        const fetchedContext = await frameSdk.context
        setContext(fetchedContext)
      } catch (error) {
        setError(error instanceof Error ? error.message : `${error}`)
      } finally {
        return frameSdk.actions.ready({})
      }
    }
    void getContext()
  }, [])

  return (
    <div className="container prose mx-auto max-w-prose p-10">
      {error === null ? (
        context === null ? (
          <div>Loading frame context...</div>
        ) : (
          <Home context={context} />
        )
      ) : (
        <div>{error}</div>
      )}
    </div>
  )
}