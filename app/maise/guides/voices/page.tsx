import Link from "next/link";
import type { Metadata } from "next";
import styles from "../guide.module.css";
import shared from "@/app/shared.module.css";

export const metadata: Metadata = {
  title: "Maise Voices & Languages Reference — 68 Kokoro Voices",
  description: "Browse all 68 Kokoro TTS voices available in Maise across 9 languages: English (US & UK), German, French, Greek, Italian, Japanese, Portuguese, and Chinese. Learn how to preview and set your default voice.",
  keywords: [
    "Kokoro TTS voices list",
    "Maise voice list",
    "Android TTS voices",
    "on-device TTS voices",
    "offline voice synthesis Android",
    "Kokoro multilingual TTS",
    "English TTS voices Android",
    "Japanese TTS Android",
  ],
};

const voiceGroups = [
  {
    language: "English (US)",
    code: "en-US",
    voices: ["alloy", "aoede", "bella", "heart", "jessica", "kore", "nicole", "nova", "river", "sarah", "sky", "adam", "echo", "eric", "fenrir", "liam", "michael", "onyx", "puck", "santa"],
  },
  {
    language: "English (UK)",
    code: "en-GB",
    voices: ["alice", "emma", "isabella", "lily", "daniel", "fable", "george", "lewis"],
  },
  {
    language: "German",
    code: "de-DE",
    voices: ["dora", "alex", "santa"],
  },
  {
    language: "French",
    code: "fr-FR",
    voices: ["siwis"],
  },
  {
    language: "Greek",
    code: "el-GR",
    voices: ["alpha-f", "beta-f", "omega-m", "psi-m"],
  },
  {
    language: "Italian",
    code: "it-IT",
    voices: ["sara", "nicola"],
  },
  {
    language: "Japanese",
    code: "ja-JP",
    voices: ["alpha-f", "gongitsune", "nezumi", "tebukuro", "kumo"],
  },
  {
    language: "Portuguese (BR)",
    code: "pt-BR",
    voices: ["dora", "alex", "santa"],
  },
  {
    language: "Chinese (Simplified)",
    code: "zh-CN",
    voices: ["xiaobei", "xiaoni", "xiaoxiao", "xiaoyi", "yunjian", "yunxi", "yunxia", "yunyang"],
  },
];

export default function VoicesGuidePage() {
  return (
    <main className={shared.page}>
      <div className={styles.guideHero}>
        <p className={styles.breadcrumb}>
          <Link href="/maise">Maise</Link> / <Link href="/maise/guides">Guides</Link> / Voices
        </p>
        <h1 className={styles.guideTitle}>Voices & Languages Reference</h1>
        <p className={styles.guideSubtitle}>
          Maise ships with 68 Kokoro voices across 9 languages — all bundled in the app,
          no downloads required. Every voice runs entirely on-device.
        </p>
      </div>

      <div className={styles.body}>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>How to preview and change voices</h2>
          <div className={styles.steps}>
            <div className={styles.step}>
              <span className={styles.stepNumber}>1</span>
              <div className={styles.stepContent}>
                Open the Maise app and go to the <strong>TTS</strong> tab.
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>2</span>
              <div className={styles.stepContent}>
                Tap the <strong>Voice</strong> dropdown. Voices are listed with their full ID (e.g. <span className={styles.inlineCode}>en-US-heart-kokoro</span>).
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>3</span>
              <div className={styles.stepContent}>
                Select a voice, type some text into the text field, and tap <strong>Speak</strong> to preview it.
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>4</span>
              <div className={styles.stepContent}>
                Your selection is saved automatically and becomes the system-wide voice for all apps that use Maise as the TTS engine.
              </div>
            </div>
          </div>
          <div className={styles.note}>
            The default voice is <span className={styles.inlineCode}>en-US-heart-kokoro</span>. Voice IDs follow the pattern <span className={styles.inlineCode}>{"<lang>-<name>-kokoro"}</span>.
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Voice catalogue</h2>
          <p className={styles.prose}>
            All 68 voices are listed below by language. Voice names are the short identifier
            used in the dropdown — prefix with the language code to get the full ID
            (e.g. <span className={styles.inlineCode}>en-US-nova-kokoro</span>).
          </p>

          {voiceGroups.map((group) => (
            <div key={group.language} style={{ marginBottom: "2rem" }}>
              <h3 style={{ color: "#00b7ff", fontSize: "1rem", marginBottom: "0.75rem", fontWeight: 600 }}>
                {group.language} <span style={{ opacity: 0.5, fontWeight: 400, fontSize: "0.8rem" }}>({group.code})</span>
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {group.voices.map((voice) => (
                  <span
                    key={voice}
                    className={styles.inlineCode}
                    style={{ display: "inline-block" }}
                  >
                    {voice}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Voice quality & characteristics</h2>
          <p className={styles.prose}>
            All voices are generated by the <strong>Kokoro</strong> neural TTS model, which
            produces natural-sounding speech at 24 kHz. Voice quality is consistent across
            the catalogue — the differences between voices are in character, accent, and
            speaking style rather than fidelity.
          </p>
          <p className={styles.prose}>
            English (US) has the largest selection with 20 voices covering a range of tones
            — from warm and conversational (<span className={styles.inlineCode}>heart</span>,{" "}
            <span className={styles.inlineCode}>bella</span>) to clear and neutral (
            <span className={styles.inlineCode}>nova</span>,{" "}
            <span className={styles.inlineCode}>alloy</span>). If you&apos;re using Maise primarily
            for AI responses in Maid, voices like <span className={styles.inlineCode}>heart</span>,{" "}
            <span className={styles.inlineCode}>nova</span>, or <span className={styles.inlineCode}>echo</span>{" "}
            tend to work well for conversational text.
          </p>
          <p className={styles.prose}>
            For other languages, the number of available voices is smaller but all are
            production-quality. Japanese voices in particular are well-suited for both
            conversational and narrative text.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Reporting mispronunciations</h2>
          <p className={styles.prose}>
            Neural TTS can occasionally mispronounce uncommon words, proper nouns, or
            technical terms. If you encounter a word that is spoken incorrectly, tap
            <strong> Report mispronunciation</strong> in the Maise app to open a GitHub issue.
            Providing the exact text and the voice you were using helps the maintainers
            reproduce and fix the issue.
          </p>
        </div>

        <div className={styles.section}>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/maise/guides" className={shared.ctaButtonSecondary}>← All guides</Link>
            <Link href="/maise/guides/tts-setup" className={shared.ctaButtonSecondary}>TTS setup guide</Link>
          </div>
        </div>

      </div>
    </main>
  );
}
