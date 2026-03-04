import Link from "next/link";
import type { Metadata } from "next";
import shared from "@/app/shared.module.css";
import styles from "./guide.module.css";

export const metadata: Metadata = {
  title: "Maise Guides — Setup & Configuration | Mobile Artificial Intelligence",
  description: "Step-by-step guides for Maise: set up on-device TTS as your Android system voice, enable offline speech recognition, explore the full voice library, and integrate with Maid for fully private AI conversations.",
  keywords: [
    "Maise setup guide",
    "Android TTS setup",
    "on-device speech recognition Android",
    "Kokoro voices guide",
    "offline TTS Android guide",
    "Maise Maid integration",
    "Android speech engine setup",
    "local TTS Android",
  ],
};

const guides = [
  {
    href: "/maise/guides/tts-setup",
    title: "Set Maise as Your System TTS Engine",
    description: "Make Maise the default text-to-speech engine for your entire Android device. Every app that uses the standard TTS API — including navigation, accessibility tools, and Maid — will speak with Maise voices.",
    tag: "Setup",
  },
  {
    href: "/maise/guides/asr-setup",
    title: "Set Up On-Device Speech Recognition",
    description: "Configure Maise as your Android speech recognizer and enable the voice keyboard. Dictate text in any app using Whisper-powered recognition that runs entirely on your device.",
    tag: "Setup",
  },
  {
    href: "/maise/guides/voices",
    title: "Voices & Languages Reference",
    description: "Browse the full catalogue of 68 Kokoro voices across 9 languages. Learn how to preview voices in the app and set your system-wide default.",
    tag: "Reference",
  },
  {
    href: "/maise/guides/maid-integration",
    title: "Use Maise with Maid",
    description: "Combine Maise TTS with Maid's local AI inference for a fully offline AI assistant — local model, local voice, local transcription, end to end.",
    tag: "Integration",
  },
  {
    href: "/maise/guides/how-it-works",
    title: "How Maise Works",
    description: "A technical walkthrough of the TTS and ASR pipelines: text normalisation, IPA phonemization, Kokoro neural synthesis, streaming playback, WebRTC VAD, and distil-Whisper transcription.",
    tag: "Technical",
  },
];

export default function MaiseGuidesIndexPage() {
  return (
    <main className={shared.page}>
      <div className={styles.guideHero}>
        <p className={styles.breadcrumb}>
          <Link href="/maise">Maise</Link> / Guides
        </p>
        <h1 className={styles.guideTitle}>Maise Guides</h1>
        <p className={styles.guideSubtitle}>
          Everything you need to get Maise set up as your Android speech engine —
          from first install to full offline AI voice integration with Maid.
        </p>
      </div>

      <div className={styles.body}>
        <div className={shared.grid2}>
          {guides.map((g) => (
            <Link key={g.href} href={g.href} style={{ textDecoration: "none" }}>
              <div className={shared.card} style={{ height: "100%", cursor: "pointer", transition: "border-color 0.2s ease" }}>
                <p style={{ fontFamily: "var(--font-space-mono)", fontSize: "0.7rem", color: "#00b7ff", opacity: 0.7, marginBottom: "0.5rem" }}>
                  {g.tag}
                </p>
                <h2 className={shared.cardTitle} style={{ fontSize: "1rem", marginBottom: "0.6rem" }}>{g.title}</h2>
                <p className={shared.cardBody}>{g.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
