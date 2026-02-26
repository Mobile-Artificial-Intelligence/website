import Link from "next/link";
import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Maid — Local AI Chat for Android | Mobile Artificial Intelligence",
  description: "Maid is a free, open-source Android app for chatting with AI models locally on your device via llama.cpp, or remotely via Ollama, OpenAI, Anthropic, Mistral, and DeepSeek. No subscription required.",
  keywords: [
    "local AI chat",
    "Android AI app",
    "llama.cpp Android",
    "offline AI chatbot",
    "GGUF model runner",
    "private AI assistant",
    "on-device LLM",
    "open source AI chat",
    "Ollama Android",
    "local language model",
    "AI without internet",
    "Maid AI app",
  ],
  openGraph: {
    title: "Maid — Local AI Chat for Android",
    description: "Run AI models privately on your Android device. Chat locally with GGUF models via llama.cpp, or connect to remote providers. Free and open source.",
    url: "https://mobile-artificial-intelligence.com/maid",
    siteName: "Mobile Artificial Intelligence",
    type: "website",
  },
};

const features = [
  {
    title: "Local & Remote Models",
    description: "Run GGUF models on-device via llama.cpp, or connect to Ollama, OpenAI, Anthropic, Mistral, and DeepSeek with your own API key.",
  },
  {
    title: "One-Tap Downloads",
    description: "Browse and download curated Hugging Face models directly within the app — no manual file management needed.",
  },
  {
    title: "Custom Model Support",
    description: "Load any GGUF file from local storage. Full control over which model you run.",
  },
  {
    title: "Configurable Parameters",
    description: "Adjust temperature, top-p, top-k, context length, and other generation settings per session.",
  },
  {
    title: "Chat Management",
    description: "Create, rename, delete, export, and import conversations as JSON files.",
  },
  {
    title: "Voice Integration",
    description: "Pairs with Maise for on-device text-to-speech. Hear your AI respond without sending audio to the cloud.",
  },
];

const techDetails = [
  { label: "Platform", value: "Android" },
  { label: "Language", value: "TypeScript / React Native" },
  { label: "Inference", value: "llama.cpp (GGUF)" },
  { label: "License", value: "MIT" },
  { label: "Stars", value: "2.4k+" },
];

export default function MaidPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <h1>Maid</h1>
        <p className={styles.tagline}>Local AI Chat for Android</p>
        <p className={styles.description}>
          A free, open-source Android app that lets you chat with AI models
          entirely on your device — no subscription, no cloud, no data leaving
          your phone.
        </p>
        <div className={styles.heroCta}>
          <Link
            href="https://github.com/Mobile-Artificial-Intelligence/maid"
            className={styles.ctaButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </Link>
          <Link
            href="https://github.com/Mobile-Artificial-Intelligence/maid/releases"
            className={styles.ctaButtonSecondary}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download APK
          </Link>
        </div>
      </section>

      <section className={styles.features}>
        <h2>Features</h2>
        <div className={styles.featureGrid}>
          {features.map((f) => (
            <div key={f.title} className={styles.featureCard}>
              <h3>{f.title}</h3>
              <p>{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.tech}>
        <h2>Technical Details</h2>
        <dl className={styles.techList}>
          {techDetails.map((t) => (
            <div key={t.label} className={styles.techRow}>
              <dt>{t.label}</dt>
              <dd>{t.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className={styles.cta}>
        <p>
          Maid is MIT licensed and built by contributors around the world.
        </p>
        <Link
          href="https://github.com/Mobile-Artificial-Intelligence/maid"
          className={styles.ctaButton}
          target="_blank"
          rel="noopener noreferrer"
        >
          Contribute on GitHub →
        </Link>
      </section>
    </main>
  );
}
