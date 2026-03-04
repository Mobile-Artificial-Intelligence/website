import Link from "next/link";
import type { Metadata } from "next";
import styles from "../guide.module.css";
import shared from "@/app/shared.module.css";

export const metadata: Metadata = {
  title: "Set Maise as Your Android TTS Engine — Setup Guide",
  description: "Learn how to set Maise as the default text-to-speech engine on Android. Once configured, every app that uses the standard TTS API — navigation, accessibility tools, Maid — will speak with on-device Kokoro voices.",
  keywords: [
    "set default TTS Android",
    "Android text-to-speech setup",
    "Maise TTS setup",
    "Kokoro TTS Android",
    "offline TTS Android setup",
    "Android accessibility TTS",
    "on-device voice Android",
    "private TTS Android",
  ],
};

export default function TtsSetupGuidePage() {
  return (
    <main className={shared.page}>
      <div className={styles.guideHero}>
        <p className={styles.breadcrumb}>
          <Link href="/maise">Maise</Link> / <Link href="/maise/guides">Guides</Link> / TTS Setup
        </p>
        <h1 className={styles.guideTitle}>Set Maise as Your System TTS Engine</h1>
        <p className={styles.guideSubtitle}>
          Configure Maise as the default text-to-speech engine for your entire Android
          device. Once set, every app that uses the standard Android TTS API will
          automatically speak with Maise&apos;s on-device Kokoro voices — no internet required.
        </p>
      </div>

      <div className={styles.body}>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>What &quot;system TTS engine&quot; means</h2>
          <p className={styles.prose}>
            Android has a built-in text-to-speech framework that apps use through the standard
            <span className={styles.inlineCode}> TextToSpeech</span> API. When an app calls this API —
            whether it&apos;s a navigation app reading turn-by-turn directions, a screen reader
            vocalizing UI elements, or Maid speaking an AI response — Android routes the request
            to whichever engine is currently set as the system default.
          </p>
          <p className={styles.prose}>
            By setting Maise as that default, you replace the standard Google TTS engine (or
            whatever was there before) with Maise&apos;s on-device Kokoro voices. The change is
            system-wide and instant — no per-app configuration is needed.
          </p>
          <div className={styles.note}>
            All voice synthesis in Maise runs entirely on your device using ONNX Runtime.
            No audio, text, or usage data is sent to any server at any point.
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Set Maise as the default TTS engine</h2>
          <p className={styles.prose}>
            The exact path through Android Settings varies slightly by manufacturer and Android
            version, but the structure is consistent across devices.
          </p>
          <div className={styles.steps}>
            <div className={styles.step}>
              <span className={styles.stepNumber}>1</span>
              <div className={styles.stepContent}>
                Install Maise from GitHub or Google Play and open it at least once so Android registers it as an available TTS engine.
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>2</span>
              <div className={styles.stepContent}>
                Open the Android <strong>Settings</strong> app.
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>3</span>
              <div className={styles.stepContent}>
                Navigate to <strong>Accessibility</strong> → <strong>Text-to-Speech Output</strong>.
                On some devices this may be under <strong>General Management</strong> → <strong>Language</strong> → <strong>Text-to-Speech</strong>.
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>4</span>
              <div className={styles.stepContent}>
                Under <em>Preferred engine</em>, tap the dropdown and select <strong>Maise</strong>.
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>5</span>
              <div className={styles.stepContent}>
                Confirm the change if prompted. Maise is now the system TTS engine.
              </div>
            </div>
          </div>
          <div className={styles.note}>
            <strong>Shortcut:</strong> In the Maise app, tap <strong>Open TTS Settings</strong> on the TTS tab to jump directly to the Android TTS settings screen.
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Select and preview a voice</h2>
          <p className={styles.prose}>
            Maise ships with 68 voices across 9 languages. The default is{" "}
            <span className={styles.inlineCode}>en-US-heart-kokoro</span> — a natural-sounding
            American English female voice. To change it:
          </p>
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
                Tap the <strong>Voice</strong> dropdown and browse the available voices. Voices are grouped by language.
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>3</span>
              <div className={styles.stepContent}>
                Type some text into the text field and tap <strong>Speak</strong> to preview the selected voice before committing to it.
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>4</span>
              <div className={styles.stepContent}>
                Your selection is saved automatically. The chosen voice is now used for all system TTS requests across every app on the device.
              </div>
            </div>
          </div>
          <p className={styles.prose}>
            See the <Link href="/maise/guides/voices" style={{ color: "#00b7ff" }}>Voices &amp; Languages Reference</Link> for the full list of available voices.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>What changes after setup</h2>
          <p className={styles.prose}>
            Once Maise is the preferred engine, the following all use it automatically:
          </p>
          <ul style={{ fontFamily: "var(--font-space-mono)", fontSize: "0.85rem", lineHeight: 1.9, opacity: 0.8, paddingLeft: "1.5rem", margin: 0 }}>
            <li><strong>Maid</strong> — AI responses are spoken using the voice you selected in Maise.</li>
            <li><strong>Navigation apps</strong> — Turn-by-turn directions use Maise voices.</li>
            <li><strong>Accessibility</strong> — Screen readers and TTS-based accessibility features use Maise.</li>
            <li><strong>Any app</strong> that calls the Android <span className={styles.inlineCode}>TextToSpeech</span> API.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Troubleshooting</h2>
          <p className={styles.prose}><strong>Maise does not appear in the engine list</strong></p>
          <ul style={{ fontFamily: "var(--font-space-mono)", fontSize: "0.85rem", lineHeight: 1.9, opacity: 0.8, paddingLeft: "1.5rem", marginBottom: "1.25rem" }}>
            <li>Make sure Maise is installed and has been opened at least once.</li>
            <li>Try force-stopping Maise and opening it again, then check the TTS settings.</li>
          </ul>
          <p className={styles.prose}><strong>No audio plays after switching to Maise</strong></p>
          <ul style={{ fontFamily: "var(--font-space-mono)", fontSize: "0.85rem", lineHeight: 1.9, opacity: 0.8, paddingLeft: "1.5rem", marginBottom: "1.25rem" }}>
            <li>Open the Maise app and use the <strong>Speak</strong> button on the TTS tab to confirm Maise itself works.</li>
            <li>Check that the device volume is not muted.</li>
          </ul>
          <p className={styles.prose}><strong>Another app is still using Google TTS</strong></p>
          <ul style={{ fontFamily: "var(--font-space-mono)", fontSize: "0.85rem", lineHeight: 1.9, opacity: 0.8, paddingLeft: "1.5rem", margin: 0 }}>
            <li>Some apps (notably Google Assistant and Google Maps) bypass the system engine and use their own bundled TTS. This is expected behaviour and cannot be changed.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/maise/guides" className={shared.ctaButtonSecondary}>← All guides</Link>
            <Link href="/maise/guides/asr-setup" className={shared.ctaButtonSecondary}>Set up speech recognition →</Link>
          </div>
        </div>

      </div>
    </main>
  );
}
