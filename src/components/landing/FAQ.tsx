"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "What are meta tags and why do they matter?",
    answer:
      "Meta tags are HTML tags that provide information about your web page to social media platforms and search engines. They control how your content appears when shared on Twitter, Facebook, LinkedIn, and shown in Google search results. Well-crafted meta tags significantly improve click-through rates.",
  },
  {
    question: "Is MetaTag Preview free to use?",
    answer:
      "Yes! The core features are completely free with no sign-up required. You can generate unlimited meta tags, preview across all platforms, and save up to 5 configurations. The Pro plan adds unlimited saves, bulk analysis, and API access.",
  },
  {
    question: "Do I need to create an account?",
    answer:
      "No. MetaTag Preview works entirely in your browser. Your saved configurations are stored in your browser's localStorage, so they persist between sessions without any account needed.",
  },
  {
    question: "Which platforms are supported for preview?",
    answer:
      "We support live previews for Twitter/X (both summary and large image cards), Facebook and LinkedIn (Open Graph), Google Search results, and Slack link unfurls. All previews update in real-time as you type.",
  },
  {
    question: "What image size should I use for OG images?",
    answer:
      "The recommended size for Open Graph images is 1200x630 pixels with a minimum of 600x315. For Twitter large image cards, use 1200x600. Keep file sizes under 5MB for best performance. PNG or JPG formats work best.",
  },
  {
    question: "Can I use this for client projects?",
    answer:
      "Absolutely! Many agencies and freelancers use MetaTag Preview to craft meta tags for their clients' websites. The Pro plan is especially useful for agencies managing multiple client projects.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      style={{
        padding: "100px 24px",
      }}
    >
      <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
        <div
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: "var(--primary)",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            marginBottom: 12,
          }}
        >
          FAQ
        </div>
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 40px)",
            fontWeight: 800,
            color: "var(--heading)",
            marginBottom: 60,
            letterSpacing: "-0.02em",
          }}
        >
          Frequently Asked Questions
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            textAlign: "left",
          }}
        >
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                borderRadius: 12,
                border: "1px solid var(--border)",
                background: "var(--card)",
                overflow: "hidden",
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                style={{
                  width: "100%",
                  padding: "18px 20px",
                  border: "none",
                  background: "transparent",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                  color: "var(--heading)",
                  fontSize: 16,
                  fontWeight: 600,
                  textAlign: "left",
                }}
              >
                {faq.question}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  style={{
                    transform:
                      openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s",
                    flexShrink: 0,
                    marginLeft: 12,
                  }}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {openIndex === i && (
                <div
                  style={{
                    padding: "0 20px 18px",
                    color: "var(--body)",
                    fontSize: 15,
                    lineHeight: 1.7,
                  }}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
