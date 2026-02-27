import React, { Suspense } from 'react';
import { getSortedPostsData } from '../../lib/posts';
import LexiconGrid from '../../components/ui/LexiconGrid';

export const metadata = {
  title: 'The Lexicon | Goldsmith Growth',
  description: 'Methodology, telemetry, and insights on Automation and Marketing.',
};

export default function LexiconPage() {
  const posts = getSortedPostsData();
  return (
    <div className="w-full pt-48 pb-32 px-6 md:px-24">
      <Suspense fallback={<div className="font-mono text-center text-[#1A1A1A]/50">Loading Telemetry...</div>}>
        <LexiconGrid initialPosts={posts} />
      </Suspense>
    </div>
  );
}