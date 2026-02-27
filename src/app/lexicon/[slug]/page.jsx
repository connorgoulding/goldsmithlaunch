import React from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostData } from '../../../lib/posts';
import Link from 'next/link';

export default async function PostPage({ params }) {
  // Await params per Next.js App Router requirements
  const { slug } = await params;
  const postData = getPostData(slug);

  return (
    <article className="w-full pt-48 pb-32 px-6 md:px-24">
      <div className="max-w-[800px] mx-auto z-10 relative">
        <div className="mb-12">
          <Link href="/lexicon" className="font-mono text-xs text-[#1A1A1A]/50 tracking-widest uppercase hover:text-[#CC5833] transition-colors" data-cursor="hide">
            ← Return to Lexicon
          </Link>
        </div>

        <header className="mb-16">
          <div className="flex flex-wrap gap-2 mb-6">
            {(postData.tags || []).map(t => (
              <span key={t} className="font-sans text-[10px] font-bold uppercase tracking-wider text-[#CC5833] bg-[#CC5833]/10 px-3 py-1 rounded-full">
                {t}
              </span>
            ))}
          </div>
          <h1 className="font-outfit text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight text-[#1A1A1A]">
            {postData.title}
          </h1>
          <span className="font-mono text-[#1A1A1A]/50 text-sm tracking-widest uppercase block">{postData.date}</span>
          <div className="w-full h-[1px] bg-[#1A1A1A]/10 mt-12" />
        </header>

        {/* Tailwind Typography Plugin Configuration */}
        <div className="prose prose-lg md:prose-xl mx-auto prose-headings:font-outfit prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-[#1A1A1A] prose-p:font-sans prose-p:text-[#1A1A1A]/80 prose-p:leading-relaxed prose-a:text-[#CC5833] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#1A1A1A] prose-strong:font-bold prose-blockquote:font-serif prose-blockquote:italic prose-blockquote:text-3xl prose-blockquote:text-[#2E4036] prose-blockquote:border-l-4 prose-blockquote:border-[#CC5833] prose-blockquote:bg-[#2E4036]/5 prose-blockquote:py-2 prose-blockquote:pr-4 prose-code:font-mono prose-code:text-[#CC5833] prose-code:bg-[#1A1A1A]/5 prose-code:px-1 prose-code:rounded prose-img:rounded-[2rem] prose-img:shadow-xl ">
          <MDXRemote source={postData.content} />
        </div>
      </div>
    </article>
  );
}