"use client";
import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const PrivacyPage = () => {
  return (
    <div className="relative min-h-screen bg-black text-white pt-32 pb-24 px-6 md:px-12 overflow-hidden selection:bg-emerald-500/30">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none fixed">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-3xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-16">
          <div className="inline-block px-3 py-1 mb-6 border border-white/10 bg-white/5 rounded-full font-mono text-[10px] tracking-widest text-emerald-400">
            SYS_DOC // PRIVACY_POLICY
          </div>
          <h1 className="font-bold text-5xl md:text-6xl tracking-tighter mb-4">Privacy Policy</h1>
          <p className="text-zinc-500 font-mono text-sm uppercase tracking-wider">Last updated: February 2026</p>
        </motion.div>
        
        <div className="space-y-16">
          <motion.section variants={itemVariants}>
            <h2 className="text-2xl font-bold text-zinc-100 mb-4 tracking-tight">The Short Version</h2>
            <p className="text-zinc-400 leading-relaxed font-light">
              We collect only what we need to deliver working systems. We don't sell your data. We don't spam you. We keep things secure. If you want your data deleted, just ask.
            </p>
          </motion.section>

          <motion.section variants={itemVariants}>
            <h2 className="text-2xl font-bold text-zinc-100 mb-4 tracking-tight">What We Collect</h2>
            <p className="text-zinc-400 mb-6 font-light">When you work with us, we collect:</p>
            <ul className="space-y-4 text-zinc-400 font-light">
              <li className="flex items-start gap-4 p-4 border border-white/5 bg-white/[0.02] rounded-lg">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-sm mt-2 shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                Contact info (name, email, phone) — so we can actually talk to you
              </li>
              <li className="flex items-start gap-4 p-4 border border-white/5 bg-white/[0.02] rounded-lg">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-sm mt-2 shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                Business information — so we understand what we're automating
              </li>
              <li className="flex items-start gap-4 p-4 border border-white/5 bg-white/[0.02] rounded-lg">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-sm mt-2 shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                Usage data — so we know which automations are working
              </li>
              <li className="flex items-start gap-4 p-4 border border-white/5 bg-white/[0.02] rounded-lg">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-sm mt-2 shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                Payment information — processed securely via Stripe
              </li>
            </ul>
          </motion.section>

          <motion.section variants={itemVariants}>
            <h2 className="text-2xl font-bold text-zinc-100 mb-4 tracking-tight">How We Use It</h2>
            <p className="text-zinc-400 mb-6 font-light">We use your data for exactly three things:</p>
            <ul className="space-y-4 text-zinc-400 font-light">
              <li className="flex items-start gap-4">
                <span className="w-1.5 h-1.5 bg-zinc-600 rounded-sm mt-2 shrink-0" />
                Building and maintaining your systems
              </li>
              <li className="flex items-start gap-4">
                <span className="w-1.5 h-1.5 bg-zinc-600 rounded-sm mt-2 shrink-0" />
                Communicating with you about your project
              </li>
              <li className="flex items-start gap-4">
                <span className="w-1.5 h-1.5 bg-zinc-600 rounded-sm mt-2 shrink-0" />
                Improving our services (anonymized where possible)
              </li>
            </ul>
          </motion.section>

          <motion.section variants={itemVariants}>
            <h2 className="text-2xl font-bold text-zinc-100 mb-4 tracking-tight">What We Don't Do</h2>
            <p className="text-zinc-400 leading-relaxed font-light">
              We don't sell your data to third parties. We don't use your information for advertising. We don't share your business details with other clients. We don't keep your data longer than necessary.
            </p>
          </motion.section>

          <motion.section variants={itemVariants}>
            <h2 className="text-2xl font-bold text-zinc-100 mb-4 tracking-tight">Security</h2>
            <p className="text-zinc-400 leading-relaxed font-light">
              We take security seriously — it's literally part of what we sell (AI with guardrails). We use industry-standard encryption, secure cloud infrastructure, and access controls. If we ever have a breach, we'll tell you immediately and fix it fast.
            </p>
          </motion.section>

          <motion.section variants={itemVariants}>
            <h2 className="text-2xl font-bold text-zinc-100 mb-4 tracking-tight">Cookies & Tracking</h2>
            <p className="text-zinc-400 leading-relaxed font-light">
              We use Google Analytics to understand how people use our site. We use Google Tag Manager to measure what marketing actually works. You can block these with your browser settings.
            </p>
          </motion.section>

          <motion.section variants={itemVariants}>
            <h2 className="text-2xl font-bold text-zinc-100 mb-4 tracking-tight">Your Rights</h2>
            <p className="text-zinc-400 mb-6 font-light">Depending on where you live, you have rights to:</p>
            <ul className="space-y-4 text-zinc-400 font-light mb-8">
              <li className="flex items-start gap-4">
                <span className="w-1.5 h-1.5 bg-zinc-600 rounded-sm mt-2 shrink-0" />
                See what data we have about you
              </li>
              <li className="flex items-start gap-4">
                <span className="w-1.5 h-1.5 bg-zinc-600 rounded-sm mt-2 shrink-0" />
                Correct inaccurate information
              </li>
              <li className="flex items-start gap-4">
                <span className="w-1.5 h-1.5 bg-zinc-600 rounded-sm mt-2 shrink-0" />
                Delete your data
              </li>
              <li className="flex items-start gap-4">
                <span className="w-1.5 h-1.5 bg-zinc-600 rounded-sm mt-2 shrink-0" />
                Opt out of marketing communications
              </li>
            </ul>
            <p className="text-zinc-400 font-light">
              Just email us at <a href="mailto:privacy@goldsmithgrowth.com" className="text-emerald-400 hover:text-emerald-300 underline decoration-emerald-500/30 underline-offset-4 transition-colors">privacy@goldsmithgrowth.com</a> and we'll handle it. No complicated forms.
            </p>
          </motion.section>

          <motion.section variants={itemVariants}>
            <h2 className="text-2xl font-bold text-zinc-100 mb-4 tracking-tight">Questions?</h2>
            <p className="text-zinc-400 font-light">
              Privacy can be complicated. If you have questions, just ask: <a href="mailto:privacy@goldsmithgrowth.com" className="text-emerald-400 hover:text-emerald-300 underline decoration-emerald-500/30 underline-offset-4 transition-colors">privacy@goldsmithgrowth.com</a>
            </p>
          </motion.section>
        </div>
      </motion.div>
    </div>
  );
};

export default PrivacyPage;
