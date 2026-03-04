import Link from "next/link";
import type { Metadata } from "next";
import styles from "../guide.module.css";
import shared from "@/app/shared.module.css";

export const metadata: Metadata = {
  title: "Set Up On-Device Speech Recognition with Maise — Android Guide",
  description: "Configure Maise as your Android speech recognizer and voice keyboard. Dictate text in any app using Whisper-powered on-device recognition — no internet, no cloud, no data leaving your device.",
  keywords: [
    "on-device speech recognition Android",
    "offline speech-to-text Android",
    "Whisper Android setup",
    "Android voice keyboard offline",
    "Maise ASR setup",
    "private speech recognition Android",
    "Android speech recognizer",
    "dictation Android offline",
  ],
};

export default function AsrSetupGuidePage() {
  return (
    <main className={shared.page}>
      <div className={styles.guideHero}>
        <p className={styles.breadcrumb}>
          <Link href="/maise">Maise</Link> / <Link href="/maise/guides">Guides</Link> / ASR Setup
        </p>
        <h1 className={styles.guideTitle}>Set Up On-Device Speech Recognition</h1>
        <p className={styles.guideSubtitle}>
          Configure Maise as your Android speech recognizer and enable voice dictation in
          any text field. Everything runs on-device using distil-Whisper — no microphone
          data is sent to any server.
        </p>
      </div>

      <div className={styles.body}>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Overview</h2>
          <p className={styles.prose}>
            Maise provides two ways to use on-device speech recognition on Android:
          </p>
          <ul style={{ fontSize: "0.85rem", lineHeight: 1.9, opacity: 0.8, paddingLeft: "1.5rem", marginBottom: "1.25rem" }}>
            <li>
              <strong>System speech recognizer</strong> — Registers Maise as Android&apos;s
              preferred <span className={styles.inlineCode}>RecognitionService</span>. Apps that call
              the standard <span className={styles.inlineCode}>SpeechRecognizer</span> API use Maise automatically.
            </li>
            <li>
              <strong>Voice keyboard (IME)</strong> — Adds a voice dictation button to the keyboard in any text field across the entire system.
            </li>
          </ul>
          <p className={styles.prose}>
            Both are optional and independent — you can enable either or both. The ASR model
            used is <strong>distil-whisper/distil-small.en</strong>, a compact English-language
            Whisper variant that loads quickly and runs efficiently on mobile hardware.
          </p>
          <div className={styles.note}>
            Voice Activity Detection (WebRTC VAD) automatically stops recording when silence
            is detected, so you don&apos;t need to manually tap a stop button. Maximum recording
            duration is 30 seconds.
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Set Maise as the default speech recognizer</h2>
          <div className={styles.steps}>
            <div className={styles.step}>
              <span className={styles.stepNumber}>1</span>
              <div className={styles.stepContent}>
                Open the Android <strong>Settings</strong> app.
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>2</span>
              <div className={styles.stepContent}>
                Navigate to <strong>Apps</strong> → <strong>Default Apps</strong> → <strong>Assist &amp; voice input</strong>.
                The exact path varies by device — on Samsung it may be under <strong>General Management</strong> → <strong>Language</strong>.
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>3</span>
              <div className={styles.stepContent}>
                Under <em>Speech recognizer</em>, select <strong>Maise</strong>.
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>4</span>
              <div className={styles.stepContent}>
                The first time Maise is used for recognition, it will request <strong>Microphone</strong> permission. Tap <em>Allow</em>.
              </div>
            </div>
          </div>
          <div className={styles.note}>
            <strong>Shortcut:</strong> In the Maise app, tap <strong>Open Speech Settings</strong> on the ASR tab to jump directly to the relevant settings screen.
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Enable the voice keyboard</h2>
          <p className={styles.prose}>
            The Maise keyboard input method (IME) adds a microphone button to any text field
            on the device, allowing you to dictate text anywhere without switching apps.
          </p>
          <div className={styles.steps}>
            <div className={styles.step}>
              <span className={styles.stepNumber}>1</span>
              <div className={styles.stepContent}>
                Open the Android <strong>Settings</strong> app.
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>2</span>
              <div className={styles.stepContent}>
                Navigate to <strong>System</strong> → <strong>Language &amp; input</strong> → <strong>On-screen keyboard</strong> (or <strong>Virtual keyboard</strong> on some devices).
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>3</span>
              <div className={styles.stepContent}>
                Tap <strong>Manage keyboards</strong> and enable the toggle for <strong>Maise</strong>.
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>4</span>
              <div className={styles.stepContent}>
                Confirm the security prompt. Maise is now available as a keyboard option. Switch to it using the globe or keyboard icon that appears in text fields.
              </div>
            </div>
          </div>
          <div className={styles.note}>
            <strong>Shortcut:</strong> In the Maise app, tap <strong>Open Keyboard Settings</strong> on the ASR tab to jump directly to the keyboard management screen.
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Test it in the app</h2>
          <p className={styles.prose}>
            Before relying on ASR system-wide, test it in the Maise app to confirm it works
            on your device:
          </p>
          <div className={styles.steps}>
            <div className={styles.step}>
              <span className={styles.stepNumber}>1</span>
              <div className={styles.stepContent}>
                Open the Maise app and tap the <strong>ASR</strong> tab at the top of the screen.
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>2</span>
              <div className={styles.stepContent}>
                The status line will read <em>Loading model…</em> on first launch while the Whisper model initializes, then <em>Ready — tap to record</em>.
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>3</span>
              <div className={styles.stepContent}>
                Tap <strong>Start Recording</strong> and speak. Recording stops automatically after a pause in speech, or you can tap <strong>Stop Recording</strong> early.
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>4</span>
              <div className={styles.stepContent}>
                The status changes to <em>Transcribing…</em> then <em>Done</em>. The recognized text appears in the output field below.
              </div>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Troubleshooting</h2>
          <p className={styles.prose}><strong>Status stays on &quot;Loading model…&quot; for a long time</strong></p>
          <ul style={{ fontSize: "0.85rem", lineHeight: 1.9, opacity: 0.8, paddingLeft: "1.5rem", marginBottom: "1.25rem" }}>
            <li>The Whisper model loads from storage on first use. On slower devices this can take 5–10 seconds. Subsequent loads are faster.</li>
          </ul>
          <p className={styles.prose}><strong>Shows &quot;(no speech detected)&quot;</strong></p>
          <ul style={{ fontSize: "0.85rem", lineHeight: 1.9, opacity: 0.8, paddingLeft: "1.5rem", marginBottom: "1.25rem" }}>
            <li>Make sure the microphone permission is granted to Maise in Android Settings → Apps → Maise → Permissions.</li>
            <li>Speak clearly and within range of the microphone. Background noise can interfere with VAD.</li>
          </ul>
          <p className={styles.prose}><strong>Maise does not appear as a keyboard option</strong></p>
          <ul style={{ fontSize: "0.85rem", lineHeight: 1.9, opacity: 0.8, paddingLeft: "1.5rem", margin: 0 }}>
            <li>Make sure you enabled Maise in <strong>Manage keyboards</strong> (step 3 above).</li>
            <li>The keyboard switcher icon only appears in text fields — look for it when your keyboard is open.</li>
          </ul>
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
