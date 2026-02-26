import Link from "next/link";
import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Maise — On-Device Text-to-Speech for Android | Mobile Artificial Intelligence",
  description: "Maise is a free, open-source Android TTS engine that synthesizes speech entirely on-device using ONNX Runtime. 40+ voices across 9 languages. No internet required.",
  keywords: [
    "on-device TTS",
    "Android text-to-speech",
    "offline TTS",
    "private TTS",
    "ONNX TTS",
    "open source TTS",
    "Kokoro TTS Android",
    "local speech synthesis",
    "AI voice Android",
    "no cloud TTS",
    "Maise TTS",
    "on-device speech",
  ],
  openGraph: {
    title: "Maise — On-Device Text-to-Speech for Android",
    description: "Open-source Android TTS engine with 40+ voices across 9 languages, powered by ONNX Runtime. Synthesizes speech entirely on-device — no internet required.",
    url: "https://mobile-artificial-intelligence.com/maise",
    siteName: "Mobile Artificial Intelligence",
    type: "website",
  },
};

const features = [
  {
    title: "Fully On-Device",
    description: "Speech synthesis runs entirely on your Android device using ONNX Runtime. Your text never leaves your phone.",
  },
  {
    title: "40+ Voices",
    description: "Powered by the Kokoro engine with voices across English (US/UK), German, French, Greek, Italian, Japanese, Portuguese, and Chinese.",
  },
  {
    title: "System-Wide TTS",
    description: "Works as a native Android TextToSpeech service — any app that uses the standard TTS API can use Maise automatically.",
  },
  {
    title: "Streaming Playback",
    description: "Producer-consumer architecture enables low-latency streaming audio output as synthesis happens, rather than waiting for the full result.",
  },
  {
    title: "Voice Preview",
    description: "The companion app lets you browse voices, preview synthesis in real-time, and set your system-wide default.",
  },
  {
    title: "Maid Integration",
    description: "Pairs with Maid for fully on-device AI conversations — local inference and local voice, end to end.",
  },
];

const techDetails = [
  { label: "Platform", value: "Android" },
  { label: "Language", value: "Kotlin" },
  { label: "Runtime", value: "ONNX Runtime" },
  { label: "Audio", value: "24 kHz mono 16-bit PCM" },
  { label: "Engines", value: "Kokoro, Kitten TTS" },
  { label: "License", value: "MIT" },
];

const languages = [
  "English (US)", "English (UK)", "German", "French",
  "Greek", "Italian", "Japanese", "Portuguese", "Chinese",
];

export default function MaisePage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <h1>Maise</h1>
        <p className={styles.tagline}>On-Device Text-to-Speech for Android</p>
        <p className={styles.description}>
          A free, open-source Android TTS engine that synthesizes speech
          entirely on your device. 40+ voices, 9 languages, zero internet
          required.
        </p>
        <div className={styles.heroCta}>
          <Link
            href="https://github.com/Mobile-Artificial-Intelligence/maise"
            className={styles.ctaButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </Link>
          <Link
            href="https://github.com/Mobile-Artificial-Intelligence/maise/releases"
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

      <section className={styles.languages}>
        <h2>Supported Languages</h2>
        <ul className={styles.langList}>
          {languages.map((lang) => (
            <li key={lang}>{lang}</li>
          ))}
        </ul>
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
          Maise is MIT licensed and actively developed. v1.0.0 released
          February 2026.
        </p>
        <Link
          href="https://github.com/Mobile-Artificial-Intelligence/maise"
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
