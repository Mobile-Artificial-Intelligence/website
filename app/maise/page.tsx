import Link from "next/link";
import type { Metadata } from "next";
import styles from "./page.module.css";
import shared from "@/app/shared.module.css";

export const metadata: Metadata = {
  title: "Maise — On-Device Speech for Android | Mobile Artificial Intelligence",
  description: "Maise is a free, open-source Android speech engine with on-device TTS and ASR. 40+ Kokoro voices across 9 languages plus Whisper speech recognition — no internet required.",
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
    "Whisper ASR",
    "Android speech recognition",
    "on-device ASR",
    "offline speech-to-text",
  ],
  openGraph: {
    title: "Maise — On-Device Speech for Android",
    description: "Open-source Android speech engine with 40+ TTS voices and Whisper ASR, powered by ONNX Runtime. Runs entirely on-device — no internet required.",
    url: "https://mobile-artificial-intelligence.com/maise",
    siteName: "Mobile Artificial Intelligence",
    type: "website",
  },
};

const features = [
  {
    title: "Fully On-Device",
    description: "Speech synthesis and recognition run entirely on your Android device using ONNX Runtime. Your audio and text never leave your phone.",
  },
  {
    title: "40+ Voices",
    description: "Powered by the Kokoro engine with voices across English (US/UK), German, French, Greek, Italian, Japanese, Portuguese, and Chinese.",
  },
  {
    title: "Whisper ASR",
    description: "On-device automatic speech recognition via Whisper, enabling accurate offline transcription without any cloud dependency.",
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
    description: "Pairs with Maid for fully on-device AI conversations — local inference, local voice, and local transcription, end to end.",
  },
];

const techDetails = [
  { label: "Platform", value: "Android" },
  { label: "Language", value: "Kotlin" },
  { label: "Runtime", value: "ONNX Runtime" },
  { label: "Audio", value: "24 kHz mono 16-bit PCM" },
  { label: "TTS Engine", value: "Kokoro" },
  { label: "ASR Engine", value: "Whisper" },
  { label: "License", value: "MIT" },
];

const languages = [
  "English (US)", "English (UK)", "German", "French",
  "Greek", "Italian", "Japanese", "Portuguese", "Chinese",
];

export default function MaisePage() {
  return (
    <main className={shared.page}>
      <section className={shared.hero}>
        <h1 className={shared.heroTitle}>Maise</h1>
        <p className={shared.tagline}>On-Device Speech for Android</p>
        <p className={shared.description}>
          A free, open-source Android speech engine with on-device TTS and ASR.
          40+ voices, 9 languages, Whisper transcription — zero internet
          required.
        </p>
        <div className={shared.heroCta}>
          <Link
            href="https://github.com/Mobile-Artificial-Intelligence/maise"
            className={shared.ctaButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </Link>
          <Link
            href="https://github.com/Mobile-Artificial-Intelligence/maise/releases"
            className={shared.ctaButtonSecondary}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download APK
          </Link>
        </div>
      </section>

      <section className={shared.section}>
        <h2 className={shared.sectionTitle}>Features</h2>
        <div className={shared.grid3}>
          {features.map((f) => (
            <div key={f.title} className={shared.card}>
              <h3 className={shared.cardTitle}>{f.title}</h3>
              <p className={shared.cardBody}>{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={shared.section}>
        <h2 className={shared.sectionTitle}>Supported Languages</h2>
        <ul className={styles.langList}>
          {languages.map((lang) => (
            <li key={lang} className={styles.langItem}>{lang}</li>
          ))}
        </ul>
      </section>

      <section className={shared.section}>
        <h2 className={shared.sectionTitle}>Technical Details</h2>
        <dl className={shared.techList}>
          {techDetails.map((t) => (
            <div key={t.label} className={shared.techRow}>
              <dt className={shared.techLabel}>{t.label}</dt>
              <dd className={shared.techValue}>{t.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className={shared.section}>
        <div className={shared.ctaWrapper}>
          <p className={shared.sectionIntro}>
            Maise is MIT licensed and actively developed. v1.0.0 released
            February 2026.
          </p>
          <Link
            href="https://github.com/Mobile-Artificial-Intelligence/maise"
            className={shared.ctaButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            Contribute on GitHub →
          </Link>
        </div>
      </section>
    </main>
  );
}
