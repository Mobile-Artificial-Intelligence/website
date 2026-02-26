import Link from "next/link";
import type { Metadata } from "next";
import styles from "@/app/page.module.css";

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

      <section className={styles.mission}>
        <h2>Why Edge AI?</h2>
        <p>
          Cloud AI is powerful, but it comes with trade-offs: latency, cost,
          and your data leaving your device. We build tools that bring modern
          AI models to mobile hardware, so your conversations and voice stay
          entirely yours — no subscription, no server, no compromise.
        </p>
        <div className={styles.pillars}>
          <div className={styles.pillar}>
            <h3>Private</h3>
            <p>Your data never leaves your device. No telemetry, no ads, no tracking.</p>
          </div>
          <div className={styles.pillar}>
            <h3>Offline</h3>
            <p>Works anywhere — on a plane, in the bush, wherever you are.</p>
          </div>
          <div className={styles.pillar}>
            <h3>Open Source</h3>
            <p>MIT licensed. Inspect the code, fork it, contribute to it.</p>
          </div>
        </div>
      </section>

      <section className={styles.projects}>
        <h2>Our Projects</h2>
        <div className={styles.projectGrid}>
          <Link href="/maid" className={styles.projectCard}>
            <h3>Maid</h3>
            <p>
              A fully-featured Android AI chat app. Run GGUF models locally
              via llama.cpp, or connect to Ollama, OpenAI, Anthropic, and more.
            </p>
            <span className={styles.cardLink}>Learn more →</span>
          </Link>
          <Link href="/maise" className={styles.projectCard}>
            <h3>Maise</h3>
            <p>
              An on-device Android text-to-speech engine with 40+ voices across
              9 languages, powered by ONNX Runtime. No internet required.
            </p>
            <span className={styles.cardLink}>Learn more →</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
