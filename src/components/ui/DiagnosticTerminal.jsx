'use client';

import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import MagneticButton from './MagneticButton';

const formConfig = {
  consulting: {
    title: "Enterprise Systems Audit",
    questions: [
      {
        text: "What is the primary friction point in your current operations?",
        options: ["Data Silos", "Manual Repetition", "Lack of AI Strategy", "Unclear ROI"]
      },
      {
        text: "How integrated is your current CRM with your delivery pipeline?",
        options: ["Disconnected", "Partial Integrations", "Custom Webhooks", "Fully Autonomous"]
      },
      {
        text: "What is your current deployment status of State-of-the-Art LLMs?",
        options: ["None", "Employee Experimentation", "Internal Tooling", "Client-Facing"]
      }
    ]
  },
  automation: {
    title: "Workflow Telemetry Scan",
    questions: [
      {
        text: "How many hours per week are lost to manual data entry?",
        options: ["40+ Hours", "20-40 Hours", "10-20 Hours", "Fully Automated"]
      },
      {
        text: "What is the complexity of your current automation architecture?",
        options: ["Zapier Only", "Make Scenarios", "Custom API", "No Automations"]
      },
      {
        text: "Are your core SOPs documented well enough for an AI to execute?",
        options: ["No Documentation", "Vague Outlines", "Strict Step-by-Step", "AI-Ready"]
      }
    ]
  },
  marketing: {
    title: "Pipeline Optimization Audit",
    questions: [
      {
        text: "Where is the largest leak in your revenue pipeline?",
        options: ["Lead Capture", "Speed to Lead", "Nurture Sequences", "Post-Sale"]
      },
      {
        text: "How personalized is your current outreach automation?",
        options: ["Mass Blasts", "Basic Merge Tags", "Segmented", "Hyper-Personalized AI"]
      },
      {
        text: "Do you have real-time, unified attribution tracking?",
        options: ["No", "Ad Platform Data", "Basic GA4", "Multi-Touch Attribution"]
      }
    ]
  }
};

export default function DiagnosticTerminal({ type = 'consulting' }) {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const config = formConfig[type];
  const containerRef = useRef(null);
  const textRef = useRef(null);

  const handleAnswer = () => {
    gsap.to(containerRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.3,
      onComplete: () => {
        if (step < 2) {
          setStep(step + 1);
          gsap.fromTo(containerRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" });
        } else {
          startCalculation();
        }
      }
    });
  };

  const startCalculation = () => {
    setStep(3);
    gsap.fromTo(containerRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 });
    setScore(Math.floor(Math.random() * 30) + 45);
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 20);
      if (textRef.current) textRef.current.innerText = `[SYS_PROCESS] Analyzing Telemetry... ${Math.min(progress, 100)}%`;
      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setStep(4);
          gsap.fromTo(containerRef.current, { scale: 0.95, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.2)" });
        }, 500);
      }
    }, 150);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-[#1A1A1A] rounded-[2.5rem] p-8 md:p-12 border border-[#F2F0E9]/10 shadow-2xl relative overflow-hidden text-[#F2F0E9]">
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#CC5833]/10 blur-3xl rounded-full pointer-events-none" />
      <div className="flex items-center gap-3 mb-8">
        <div className="w-2 h-2 rounded-full bg-[#CC5833] animate-pulse"></div>
        <span className="font-mono text-xs tracking-widest uppercase text-[#F2F0E9]/50">{config.title}</span>
      </div>
      <div ref={containerRef} className="min-h-[250px] flex flex-col justify-center">
        {step < 3 && (
          <>
            <h3 className="font-outfit text-2xl md:text-3xl mb-8 leading-tight">{config.questions[step].text}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {config.questions[step].options.map((opt, i) => (
                <button key={i} onClick={handleAnswer} className="text-left px-6 py-4 rounded-2xl border border-[#F2F0E9]/20 hover:bg-[#2E4036] hover:border-[#2E4036] transition-all duration-300 font-sans text-sm">
                  {opt}
                </button>
              ))}
            </div>
          </>
        )}
        {step === 3 && (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="w-12 h-12 border-2 border-[#CC5833] border-t-transparent rounded-full animate-spin mb-6" />
            <span ref={textRef} className="font-mono text-[#CC5833] text-sm" />
          </div>
        )}
        {step === 4 && (
          <div className="text-center py-4">
            <span className="font-mono text-sm text-[#F2F0E9]/50 uppercase tracking-widest">System Readiness Score</span>
            <h2 className="font-outfit text-7xl font-bold text-[#CC5833] my-4">{score}<span className="text-3xl text-[#F2F0E9]/30">/100</span></h2>
            <p className="font-sans text-lg text-[#F2F0E9]/80 mb-8 max-w-md mx-auto">Diagnostic complete. Sub-optimal workflow architectures detected. Significant latency in data pipelines.</p>
            <MagneticButton theme="clay" onClick={() => window.location.href = 'https://calendly.com/your-link'}> Schedule System Audit </MagneticButton>
          </div>
        )}
      </div>
    </div>
  );
}