'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';

const AVAILABLE_TAGS = ['Marketing', 'Automation', 'Operations', 'AI'];

export default function LexiconGrid({ initialPosts }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const urlTag = searchParams.get('tag');
  const [activeTags, setActiveTags] = useState(urlTag ? [urlTag] : []);

  const toggleTag = (tag) => {
    let newTags = [];
    if (activeTags.includes(tag)) {
      newTags = activeTags.filter(t => t !== tag);
    } else {
      newTags = [...activeTags, tag];
    }
    setActiveTags(newTags);
    if (newTags.length === 1) {
      router.push(`/lexicon?tag=${newTags[0]}`, { scroll: false });
    } else {
      router.push(`/lexicon`, { scroll: false });
    }
  };

  const filteredPosts = initialPosts.filter(post => {
    if (activeTags.length === 0) return true;
    const postTags = post.tags || [];
    return activeTags.every(activeTag => postTags.includes(activeTag));
  });

  return (
    <div className="max-w-[1200px] mx-auto z-10 relative">
      <span className="font-mono text-[#CC5833] text-sm tracking-widest uppercase mb-6 block">Knowledge Architecture</span>
      <h1 className="font-outfit text-6xl md:text-8xl font-semibold tracking-tighter mb-12">
        The <span className="font-serif italic text-[#2E4036]">Lexicon.</span>
      </h1>

      <div className="flex flex-wrap gap-4 mb-16">
        {AVAILABLE_TAGS.map(tag => {
          const isActive = activeTags.includes(tag);
          return (
            <button
              key={tag}
              data-cursor="hide"
              onClick={() => toggleTag(tag)}
              className={`px-6 py-2 rounded-full border text-sm font-mono tracking-widest uppercase transition-all duration-300 ${
                isActive
                  ? 'bg-[#1A1A1A] text-[#F2F0E9] border-[#1A1A1A]'
                  : 'bg-transparent text-[#1A1A1A]/50 border-[#1A1A1A]/20 hover:border-[#1A1A1A] hover:text-[#1A1A1A]'
              }`}
            >
              {tag}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredPosts.length === 0 ? (
          <p className="font-mono text-[#1A1A1A]/50">No telemetry found for this criteria.</p>
        ) : (
          filteredPosts.map((post) => (
            <Link href={`/lexicon/${post.slug}`} key={post.slug} className="group block h-full" data-cursor="view">
              <div className="h-full p-10 rounded-[2rem] bg-white border border-[#1A1A1A]/5 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-6">
                  {(post.tags || []).map(t => (
                    <span key={t} className="font-sans text-[10px] font-bold uppercase tracking-wider text-[#CC5833] bg-[#CC5833]/10 px-3 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
                <h2 className="font-outfit text-3xl mb-4 group-hover:text-[#CC5833] transition-colors">{post.title}</h2>
                <p className="font-sans text-[#1A1A1A]/70 line-clamp-3 mb-8 flex-grow">{post.excerpt}</p>
                <div className="mt-auto flex items-center justify-between">
                  <span className="font-mono text-xs text-[#1A1A1A]/40">{post.date}</span>
                  <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#1A1A1A] uppercase tracking-widest group-hover:gap-4 transition-all">
                    Read Data <span className="text-[#CC5833]">→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}