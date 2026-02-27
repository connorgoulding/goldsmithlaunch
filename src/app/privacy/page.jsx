import React from 'react';

export const metadata = {
  title: 'Privacy Policy | Goldsmith Growth',
};

export default function PrivacyPage() {
  return (
    <div className="w-full pt-48 pb-32 px-6 md:px-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-outfit text-5xl font-bold mb-12">Privacy Lexicon</h1>
        <div className="prose prose-lg prose-headings:font-outfit prose-headings:font-normal prose-a:text-[#CC5833] prose-p:text-[#1A1A1A]/70">
          <p><strong>Effective Date:</strong> October 2024</p>

          <h2>1. Data Architecture & Collection</h2>
          <p>At Goldsmith Growth, we construct automated workflows and CRM integrations. As part of our auditing process, we may access telemetry regarding your current operational stack. This data is strictly utilized for structural analysis.</p>

          <h2>2. Third-Party Webhooks</h2>
          <p>Because we architect Make and Zapier integrations, data routed through our custom endpoints adheres to strict enterprise encryption standards. We do not store, sell, or leverage your client data outside of the explicit scope of the active build phase.</p>

          <p><em>[Note: Ensure your OpenClaw agent or you paste the remaining specific legal copy from your existing site here.]</em></p>
        </div>
      </div>
    </div>
  );
}