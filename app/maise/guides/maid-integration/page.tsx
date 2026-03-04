import Link from "next/link";
import type { Metadata } from "next";
import styles from "../guide.module.css";
import shared from "@/app/shared.module.css";

export const metadata: Metadata = {
  title: "Use Maise with Maid — Fully Offline AI Voice on Android",
  description: "Combine Maise on-device TTS and ASR with Maid's local AI inference for a completely offline AI assistant on Android. Local model, local voice, local transcription — no internet required at any step.",
  keywords: [
    "offline AI assistant Android",
    "Maid Maise integration",
    "local AI voice Android",
    "on-device AI speech Android",
    "fully offline AI Android",
    "private AI voice assistant",
    "llama.cpp TTS Android",
    "Maid voice response",
  ],
};

export default function MaidIntegrationGuidePage() {
  return (
    <main className={shared.page}>
      <div className={styles.guideHero}>
        <p className={styles.breadcrumb}>
          <Link href="/maise">Maise</Link> / <Link href="/maise/guides">Guides</Link> / Maid Integration
        </p>
        <h1 className={styles.guideTitle}>Use Maise with Maid</h1>
        <p className={styles.guideSubtitle}>
          Combine Maise&apos;s on-device TTS and ASR with Maid&apos;s local AI inference for a
          fully offline AI assistant. Local model, local voice, local transcription —
          no internet required at any step.
        </p>
      </div>

      <div className={styles.body}>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>What this gives you</h2>
          <p className={styles.prose}>
            <Link href="/maid" style={{ color: "#00b7ff" }}>Maid</Link> runs AI language models
            directly on your Android device using llama.cpp. Maise handles voice — converting
            the AI&apos;s text responses into speech, and optionally transcribing your voice back
            to text. Together, they form a complete AI assistant pipeline where nothing leaves
            your device:
          </p>
          <ul style={{ fontSize: "0.85rem", lineHeight: 1.9, opacity: 0.8, paddingLeft: "1.5rem", marginBottom: "1.25rem" }}>
            <li><strong>You speak</strong> — Maise transcribes your voice using distil-Whisper (on-device).</li>
            <li><strong>Maid thinks</strong> — The local LLM generates a response using llama.cpp (on-device).</li>
            <li><strong>Maise speaks</strong> — The response is read aloud using a Kokoro voice (on-device).</li>
          </ul>
          <p className={styles.prose}>
            No API keys, no subscriptions, no cloud. The entire loop runs on your phone.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Requirements</h2>
          <ul style={{ fontSize: "0.85rem", lineHeight: 1.9, opacity: 0.8, paddingLeft: "1.5rem", margin: 0 }}>
            <li><strong>Maise</strong> installed and configured as the system TTS engine (see <Link href="/maise/guides/tts-setup" style={{ color: "#00b7ff" }}>TTS Setup</Link>).</li>
            <li><strong>Maid</strong> installed with a local GGUF model loaded via the Llama provider (see <Link href="/maid/guides/llama-cpp" style={{ color: "#00b7ff" }}>llama.cpp guide</Link>).</li>
            <li>Both apps installed on the same device.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Step 1 — Set up Maise as the system TTS engine</h2>
          <p className={styles.prose}>
            If you haven&apos;t already, follow the <Link href="/maise/guides/tts-setup" style={{ color: "#00b7ff" }}>TTS Setup guide</Link> to
            make Maise the preferred engine in Android&apos;s TTS settings. Select a voice you
            want to hear for AI responses — a clear, natural-sounding voice like{" "}
            <span className={styles.inlineCode}>en-US-heart-kokoro</span> or{" "}
            <span className={styles.inlineCode}>en-US-nova-kokoro</span> works well for conversational text.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Step 2 — Enable voice in Maid</h2>
          <div className={styles.steps}>
            <div className={styles.step}>
              <span className={styles.stepNumber}>1</span>
              <div className={styles.stepContent}>
                Open Maid and go to <strong>Settings</strong>.
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>2</span>
              <div className={styles.stepContent}>
                Scroll to <strong>Voice</strong> under the Assistant Settings section. Tap the dropdown and select a voice. Maid pulls the list from the Android TTS framework, so Maise voices appear here automatically once Maise is installed and set as the default engine.
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>3</span>
              <div className={styles.stepContent}>
                Once a voice is selected, a <strong>speaker icon</strong> appears on assistant messages. Tap it to hear the response read aloud. The speaker becomes a <strong>volume-off icon</strong> during playback — tap to stop early.
              </div>
            </div>
          </div>
          <div className={styles.note}>
            Only the final response text is spoken — if the model uses a reasoning block (e.g. DeepSeek-R1, LFM Thinking), the internal reasoning trace is silently skipped and only the answer is read aloud.
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Step 3 — Use voice input in Maid (optional)</h2>
          <p className={styles.prose}>
            Maid has a built-in microphone button in the chat input bar. Tapping it starts
            voice dictation using whatever speech recognition service is currently set as the
            Android default. If you&apos;ve configured Maise as the system speech recognizer
            (see <Link href="/maise/guides/asr-setup" style={{ color: "#00b7ff" }}>ASR Setup</Link>),
            Maid will use Maise&apos;s Whisper-based transcription automatically.
          </p>
          <div className={styles.steps}>
            <div className={styles.step}>
              <span className={styles.stepNumber}>1</span>
              <div className={styles.stepContent}>
                In the Maid chat screen, tap the <strong>microphone icon</strong> in the input bar (visible when the text field is empty).
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>2</span>
              <div className={styles.stepContent}>
                Speak your message. Maise transcribes your speech on-device using distil-Whisper. When you stop speaking, the transcript appears in the input field.
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>3</span>
              <div className={styles.stepContent}>
                Review the transcription and tap <strong>Send</strong> to submit it to the model.
              </div>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>The full offline loop</h2>
          <p className={styles.prose}>
            With both apps configured, here is what the full interaction looks like — entirely
            on-device, with zero network traffic:
          </p>
          <div className={styles.steps}>
            <div className={styles.step}>
              <span className={styles.stepNumber}>1</span>
              <div className={styles.stepContent}>
                You tap the microphone in Maid and ask a question by voice.
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>2</span>
              <div className={styles.stepContent}>
                <strong>Maise ASR</strong> transcribes your speech to text using distil-Whisper.
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>3</span>
              <div className={styles.stepContent}>
                <strong>Maid + llama.cpp</strong> generates a response using the local GGUF model.
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>4</span>
              <div className={styles.stepContent}>
                You tap the speaker icon on the response.
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>5</span>
              <div className={styles.stepContent}>
                <strong>Maise TTS</strong> reads the response aloud using your chosen Kokoro voice.
              </div>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Choosing a model for voice interaction</h2>
          <p className={styles.prose}>
            For voice-based conversations, response latency matters more than it might for
            text-only use. Shorter responses feel more natural when spoken aloud, and
            faster models mean less waiting between speaking and hearing the reply.
          </p>
          <ul style={{ fontSize: "0.85rem", lineHeight: 1.9, opacity: 0.8, paddingLeft: "1.5rem", margin: 0 }}>
            <li><strong>Best balance</strong> — Gemma 2 2B or Qwen2.5 1.5B at Q4_K_M. Fast enough for natural back-and-forth.</li>
            <li><strong>Lower-end devices</strong> — TinyLlama 1.1B or Gemma 3 1B. Very fast, shorter responses.</li>
            <li><strong>Flagship phones</strong> — Qwen3 4B or Llama 3.2 3B for better quality while still being usable in conversation.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/maise/guides" className={shared.ctaButtonSecondary}>← All guides</Link>
            <Link href="/maid/guides/llama-cpp" className={shared.ctaButtonSecondary}>Maid llama.cpp guide →</Link>
          </div>
        </div>

      </div>
    </main>
  );
}
