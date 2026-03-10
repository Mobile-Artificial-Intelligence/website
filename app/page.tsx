import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import styles from "@/app/page.module.css";
import shared from "@/app/shared.module.css";
import Card from "@/components/Card";
import GuideCard from "@/components/GuideCard";

export const metadata: Metadata = {
  title: "Mobile Artificial Intelligence | Run AI on the Edge",
  description: "Mobile Artificial Intelligence builds open-source Android apps for running AI models entirely on-device — private, offline, and fast. No cloud required.",
  keywords: [
    "edge AI",
    "on-device AI",
    "local AI inference",
    "offline AI",
    "private AI",
    "mobile AI",
    "local LLM",
    "llama.cpp",
    "GGUF models",
    "on-device TTS",
    "open source AI",
    "Android AI",
    "run AI locally",
    "AI without cloud",
  ],
};

export default function Home() {
  return (
    <main>
      <section className={styles.hero}>
        <h1>Mobile + AI</h1>
        <p className={styles.tagline}>Artificial Intelligence on the Edge</p>
        <p className={styles.tagline}>Brisbane, Australia</p>
      </section>

      <section className={shared.section}>
        <h2 className={shared.sectionTitle}>Our Projects</h2>
        <Link href="/maid" className={styles.maidCard}>
          <div className={styles.maidImageWrapper}>
            <Image
              src="/images/maid-graphic.png"
              alt="Maid AI Chat App"
              fill
              className={styles.maidImage}
            />
          </div>
          <div className={styles.maidCardContent}>
            <h3 className={styles.maidCardTitle}>Mobile Artificial Intelligence Distribution</h3>
            <p className={shared.cardBody}>A fully-featured Android AI chat app. Run GGUF models locally via llama.cpp, or connect to Ollama, OpenAI, Anthropic, and more.</p>
          </div>
        </Link>
        <div className={shared.grid2} style={{ marginTop: "1.5rem" }}>
          <GuideCard href="/maise" title="Maise" description="An on-device Android text-to-speech engine with 40+ voices across 9 languages, powered by ONNX Runtime. No internet required." linkText="Learn more →" />
          <GuideCard href="/babylon" title="Babylon.cpp" description="A cross-platform C/C++ library for local G2P and neural TTS. Kokoro (54+ voices), VITS/Piper, REST API, and Python bindings." linkText="Learn more →" />
        </div>
      </section>

      <section className={shared.section}>
        <h2 className={shared.sectionTitle}>Why Edge AI?</h2>
        <p className={styles.introText}>
          Cloud AI is powerful, but it comes with trade-offs: latency, cost,
          and your data leaving your device. We build tools that bring modern
          AI models to mobile hardware, so your conversations and voice stay
          entirely yours — no subscription, no server, no compromise.
        </p>
        <div className={shared.grid3}>
          <Card title="Private">Your data never leaves your device. No telemetry, no ads, no tracking.</Card>
          <Card title="Offline">Works anywhere — on a plane, in the bush, wherever you are.</Card>
          <Card title="Open Source">MIT licensed. Inspect the code, fork it, contribute to it.</Card>
        </div>
      </section>

      <section className={shared.section}>
        <h2 className={shared.sectionTitle}>Guides</h2>
        <div className={shared.grid2}>
          <GuideCard href="/maid/guides/llama-cpp" title="Run AI Locally on Android" description="Run GGUF models entirely on your phone using Maid and llama.cpp — no internet, no API key." linkText="Read guide →" />
          <GuideCard href="/maid/guides/ollama" title="Connect to Ollama" description="Run large models on your desktop and use Maid on your phone as the chat interface." linkText="Read guide →" />
          <GuideCard href="/maise/guides/tts-setup" title="Set Up On-Device TTS" description="Make Maise the default voice engine for your entire Android device in a few taps." linkText="Read guide →" />
          <GuideCard href="/maise/guides/maid-integration" title="Fully Offline AI Voice" description="Combine Maid and Maise for local inference, local voice, and local transcription — end to end." linkText="Read guide →" />
        </div>
      </section>
    </main>
  );
}
