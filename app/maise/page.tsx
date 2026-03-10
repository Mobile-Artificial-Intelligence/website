import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import styles from "./page.module.css";
import shared from "@/app/shared.module.css";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import GuideCard from "@/components/GuideCard";

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

const languages = [
  "English (US)", "English (UK)", "German", "French",
  "Greek", "Italian", "Japanese", "Portuguese", "Chinese",
];

export default function MaisePage() {
  return (
    <main className={shared.page}>
      <Hero
        title="Maise"
        tagline="On-Device Speech for Android"
        description="A free, open-source Android speech engine with on-device TTS and ASR. 40+ voices, 9 languages, Whisper transcription — zero internet required."
      >
        <Link
          href="https://play.google.com/store/apps/details?id=com.danemadsen.maise"
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
          href="https://github.com/Mobile-Artificial-Intelligence/maise/releases/latest"
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
        <h2 className={shared.sectionTitle}>Supported Languages</h2>
        <ul className={styles.langList}>
          {languages.map((lang) => (
            <li key={lang} className={styles.langItem}>{lang}</li>
          ))}
        </ul>
      </section>

      <section className={shared.section}>
        <h2 className={shared.sectionTitle}>Guides</h2>
        <p className={shared.sectionIntro}>
          Step-by-step guides for setting up and getting the most from Maise.
        </p>
        <div className={shared.grid2}>
          <GuideCard href="/maise/guides/tts-setup" title="Set Up System TTS" description="Make Maise the default voice engine for your entire Android device in a few taps." linkText="Read guide →" />
          <GuideCard href="/maise/guides/asr-setup" title="Set Up Speech Recognition" description="Enable offline voice dictation in any app using Whisper-powered on-device ASR." linkText="Read guide →" />
          <GuideCard href="/maise/guides/maid-integration" title="Use Maise with Maid" description="Combine local TTS and ASR with Maid's on-device AI for a fully offline assistant." linkText="Read guide →" />
          <GuideCard href="/maise/guides/voices" title="Voices & Languages" description="Browse all 68 Kokoro voices across 9 languages and learn how to preview them." linkText="Read guide →" />
        </div>
        <div style={{ marginTop: "4rem" }}>
          <Link href="/maise/guides" className={shared.ctaButtonSecondary}>View all guides →</Link>
        </div>
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
          <div className={shared.heroCta} style={{ justifyContent: 'flex-start', marginTop: 0 }}>
            <Link href="/maise/privacy" className={shared.ctaButtonSecondary}>Privacy Policy</Link>
            <Link href="/maise/terms" className={shared.ctaButtonSecondary}>Terms &amp; Conditions</Link>
            <Link href="/docs/maise-manual.pdf" className={shared.ctaButtonSecondary} target="_blank" rel="noopener noreferrer">User Manual (PDF)</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
