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
        <div className={styles.projectsGrid}>
          <Link href="/maid" className={styles.imageCard}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/maid-graphic.png"
                alt="Maid AI Chat App"
                fill
                className={styles.image}
              />
            </div>
            <div className={styles.imageContent}>
              <h3 className={styles.imageTitle}>Mobile Artificial Intelligence Distribution</h3>
              <p className={shared.cardBody}>A fully-featured Android AI chat app. Run GGUF models locally via llama.cpp, or connect to Ollama, OpenAI, Anthropic, and more.</p>
            </div>
          </Link>
          <div className={styles.projectsSide}>
            <Link href="/maise" className={styles.imageCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/images/maise-graphic.png"
                  alt="Maise On-Device Speech"
                  fill
                  className={styles.image}
                />
              </div>
              <div className={styles.imageContent}>
                <h3 className={styles.imageTitle}>On-Device Android Speech Engine</h3>
                <p className={shared.cardBody}>40+ Kokoro voices, 9 languages, Whisper ASR — all running locally via ONNX Runtime. No internet required.</p>
              </div>
            </Link>
            <Link href="/babylon" className={styles.imageCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/images/babylon-graphic.png"
                  alt="Babylon.cpp TTS Library"
                  fill
                  className={styles.image}
                />
              </div>
              <div className={styles.imageContent}>
                <h3 className={styles.imageTitle}>Local G2P and Neural TTS Library</h3>
                <p className={shared.cardBody}>A cross-platform C/C++ library for local G2P and neural TTS. Kokoro (54+ voices), VITS/Piper, REST API, and Python bindings.</p>
              </div>
            </Link>
          </div>
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
