import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import styles from "./page.module.css";
import shared from "@/app/shared.module.css";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import GuideCard from "@/components/GuideCard";

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
    "offline AI warzone",
    "AI first responders",
    "AI no connectivity",
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

export default function MaidPage() {
  return (
    <main className={shared.page}>
      <Hero
        title="Maid"
        tagline="Local AI Chat for Android"
        description="A free, open-source Android app that lets you chat with AI models entirely on your device — no subscription, no cloud, no data leaving your phone."
      >
        <Link
          href="https://play.google.com/store/apps/details?id=com.danemadsen.maid"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
            alt="Get it on Google Play"
            width={200}
            height={77}
            className={styles.badge}
          />
        </Link>
        <Link
          href="https://github.com/Mobile-Artificial-Intelligence/maid/releases/latest"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="https://raw.githubusercontent.com/NeoApplications/Neo-Backup/refs/heads/main/badge_github.png"
            alt="Download from GitHub"
            width={200}
            height={77}
            className={styles.badge}
          />
        </Link>
      </Hero>

      <section className={shared.section}>
        <h2 className={shared.sectionTitle}>Features</h2>
        <div className={shared.grid3}>
          {features.map((f) => (
            <Card key={f.title} title={f.title}>{f.description}</Card>
          ))}
        </div>
      </section>

      <section className={shared.section}>
        <h2 className={shared.sectionTitle}>See It in Action</h2>
        <div className={styles.screenshotGallery}>
          <div className={styles.screenshotItem}>
            <Image
              src="/images/maid-screenshot-8.png"
              alt="Maid chat interface on Android"
              width={180}
              height={400}
              className={styles.screenshotFrame}
            />
            <span className={styles.screenshotCaption}>Chat interface</span>
          </div>
          <div className={styles.screenshotItem}>
            <Image
              src="/images/maid-screenshot-1.png"
              alt="Maid showing extended AI response with reasoning"
              width={180}
              height={400}
              className={styles.screenshotFrame}
            />
            <span className={styles.screenshotCaption}>Reasoning models</span>
          </div>
          <div className={styles.screenshotItem}>
            <Image
              src="/images/maid-screenshot-3.png"
              alt="Maid model download screen"
              width={180}
              height={400}
              className={styles.screenshotFrame}
            />
            <span className={styles.screenshotCaption}>One-tap downloads</span>
          </div>
          <div className={styles.screenshotItem}>
            <Image
              src="/images/maid-screenshot-4.png"
              alt="Maid settings screen"
              width={180}
              height={400}
              className={styles.screenshotFrame}
            />
            <span className={styles.screenshotCaption}>Configurable settings</span>
          </div>
        </div>
      </section>

      <section className={shared.section}>
        <h2 className={shared.sectionTitle}>Used Around the World</h2>
        <p className={shared.sectionIntro}>
          When the internet goes down — or when going online isn&apos;t safe —
          Maid keeps working. Because everything runs on the device, users
          in the most difficult circumstances in the world have come to rely on it.
        </p>
        <div className={shared.grid3}>
          <div className={styles.realWorldCard}>
            <h3 className={shared.cardTitle}>Active Conflict Zones</h3>
            <p className={shared.cardBody}>
              People in Ukraine and Gaza have used Maid to access AI
              assistance when internet infrastructure is destroyed, unreliable,
              or actively monitored. No connection means no exposure — the
              model runs entirely on the phone.
            </p>
          </div>
          <div className={styles.realWorldCard}>
            <h3 className={shared.cardTitle}>First Responders</h3>
            <p className={shared.cardBody}>
              Emergency services and first responders operating in remote or
              disaster-affected areas use Maid as an AI reference tool when
              mobile data is unavailable or too slow to be useful.
            </p>
          </div>
          <div className={styles.realWorldCard}>
            <h3 className={shared.cardTitle}>Off-Grid &amp; Remote</h3>
            <p className={shared.cardBody}>
              From rural communities to offshore vessels, Maid works anywhere
              an Android phone works — no Wi-Fi, no cell signal, no problem.
            </p>
          </div>
        </div>
      </section>

      <section className={shared.section}>
        <h2 className={shared.sectionTitle}>Guides</h2>
        <p className={shared.sectionIntro}>
          Step-by-step setup guides for every supported AI provider.
        </p>
        <div className={shared.grid2}>
          <GuideCard href="/maid/guides/llama-cpp" title="Run AI Locally with llama.cpp" description="No internet, no API key. Run GGUF models entirely on your Android device." linkText="Read guide →" />
          <GuideCard href="/maid/guides/ollama" title="Connect to Ollama" description="Run a large model on your desktop and use Maid as the mobile chat interface." linkText="Read guide →" />
          <GuideCard href="/maid/guides/openai" title="OpenAI & Compatible APIs" description="Connect to GPT-4o or any OpenAI-compatible endpoint including LM Studio and OpenRouter." linkText="Read guide →" />
          <GuideCard href="/maid/guides/anthropic" title="Claude via Anthropic API" description="Access Claude Opus, Sonnet, and Haiku on Android with your own API key." linkText="Read guide →" />
        </div>
        <div style={{ marginTop: "4rem" }}>
          <Link href="/maid/guides" className={shared.ctaButtonSecondary}>View all guides →</Link>
        </div>
      </section>

      <section className={shared.section}>
        <div className={shared.ctaWrapper}>
          <p className={shared.sectionIntro}>
            Maid is MIT licensed and built by contributors around the world.
          </p>
          <Link
            href="https://github.com/Mobile-Artificial-Intelligence/maid"
            className={shared.ctaButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            Contribute on GitHub →
          </Link>
          <div className={shared.heroCta} style={{ justifyContent: 'flex-start', marginTop: 0 }}>
            <Link href="/maid/privacy" className={shared.ctaButtonSecondary}>Privacy Policy</Link>
            <Link href="/maid/terms" className={shared.ctaButtonSecondary}>Terms &amp; Conditions</Link>
            <Link href="/docs/maid-manual.pdf" className={shared.ctaButtonSecondary} target="_blank" rel="noopener noreferrer">User Manual (PDF)</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
