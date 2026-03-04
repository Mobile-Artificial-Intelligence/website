import Link from "next/link";
import type { Metadata } from "next";
import styles from "../guide.module.css";
import shared from "@/app/shared.module.css";

export const metadata: Metadata = {
  title: "How Maise Works — On-Device TTS & ASR Pipeline Explained",
  description: "A technical walkthrough of Maise's on-device speech pipelines: text normalisation, IPA phonemization, Kokoro neural synthesis, streaming playback, WebRTC VAD, and distil-Whisper transcription — all running locally via ONNX Runtime.",
  keywords: [
    "how Maise works",
    "Kokoro TTS pipeline",
    "ONNX Runtime TTS Android",
    "Whisper ASR Android",
    "on-device TTS technical",
    "neural TTS pipeline explained",
    "distil-Whisper Android",
    "WebRTC VAD Android",
  ],
};

export default function HowItWorksGuidePage() {
  return (
    <main className={shared.page}>
      <div className={styles.guideHero}>
        <p className={styles.breadcrumb}>
          <Link href="/maise">Maise</Link> / <Link href="/maise/guides">Guides</Link> / How It Works
        </p>
        <h1 className={styles.guideTitle}>How Maise Works</h1>
        <p className={styles.guideSubtitle}>
          A technical walkthrough of the TTS and ASR pipelines that run entirely
          on your Android device — from raw text and microphone input to spoken
          audio and transcribed text.
        </p>
      </div>

      <div className={styles.body}>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>The runtime: ONNX Runtime</h2>
          <p className={styles.prose}>
            Both TTS and ASR in Maise are powered by <strong>ONNX Runtime</strong>, the open-source
            inference engine from Microsoft. ONNX Runtime runs neural network models described
            in the ONNX format, which Kokoro (TTS) and distil-Whisper (ASR) are both exported to.
          </p>
          <p className={styles.prose}>
            On Android, ONNX Runtime uses the device CPU with NNAPI acceleration where available.
            No GPU-specific code paths are used, which means the models run on any ARM64 Android
            device regardless of GPU vendor. The minimum requirement is Android 8.0 (API 26) on
            an ARM64-v8a device.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Text-to-Speech pipeline</h2>
          <p className={styles.prose}>
            Converting text to speech involves four sequential stages. The entire pipeline runs
            on-device with no network requests.
          </p>

          <div className={styles.steps}>
            <div className={styles.step}>
              <span className={styles.stepNumber}>1</span>
              <div className={styles.stepContent}>
                <strong>Text normalisation</strong><br />
                Raw input text is cleaned and standardized before any other processing. Numbers
                are expanded to words (&quot;42&quot; → &quot;forty-two&quot;), common abbreviations are
                resolved, and punctuation is handled so the phonemizer receives well-formed prose.
                This step is critical for natural-sounding output — unnormalized text produces
                artifacts like spelled-out digits or skipped symbols.
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>2</span>
              <div className={styles.stepContent}>
                <strong>Phonemization via Open Phonemizer</strong><br />
                The normalized text is converted into a sequence of{" "}
                <a href="https://en.wikipedia.org/wiki/International_Phonetic_Alphabet" target="_blank" rel="noopener noreferrer" style={{ color: "#00b7ff" }}>IPA phonemes</a>{" "}
                by <a href="https://github.com/NeuralVox/OpenPhonemizer" target="_blank" rel="noopener noreferrer" style={{ color: "#00b7ff" }}>Open Phonemizer</a>.
                Phonemes are the fundamental units of sound in a language — converting text
                to phonemes first allows the neural synthesis model to focus on acoustics
                rather than spelling, improving pronunciation accuracy across languages.
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>3</span>
              <div className={styles.stepContent}>
                <strong>Neural synthesis via Kokoro</strong><br />
                The phoneme sequence and a per-voice <em>style embedding</em> are passed to{" "}
                <a href="https://github.com/hexgrad/kokoro" target="_blank" rel="noopener noreferrer" style={{ color: "#00b7ff" }}>Kokoro</a>,
                a multi-lingual neural TTS model running under ONNX Runtime. Kokoro is a
                flow-matching model that maps from the phoneme and style input directly to a
                raw PCM audio waveform. Each voice is defined by its style embedding — the
                68 bundled voices represent different accents, characters, and speaking styles
                that can be applied to the same underlying model weights.
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>4</span>
              <div className={styles.stepContent}>
                <strong>Streaming playback</strong><br />
                Synthesis and playback run in parallel using a producer-consumer architecture.
                Kokoro generates audio in chunks, and each chunk is handed to the audio player
                as soon as it is ready. This means audio playback begins well before the full
                input has been synthesized — noticeably reducing perceived latency on longer
                texts. Audio output is <strong>24 kHz mono 16-bit PCM</strong>, sent directly
                to the device speaker or any connected audio output.
              </div>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Automatic Speech Recognition pipeline</h2>
          <p className={styles.prose}>
            Transcribing spoken audio to text involves three stages, all running locally.
          </p>

          <div className={styles.steps}>
            <div className={styles.step}>
              <span className={styles.stepNumber}>1</span>
              <div className={styles.stepContent}>
                <strong>Recording with Voice Activity Detection</strong><br />
                Audio is captured from the microphone at <strong>16 kHz mono 16-bit PCM</strong> — the
                format expected by Whisper. Rather than requiring you to manually stop recording,
                Maise uses the <strong>WebRTC VAD</strong> algorithm to detect when speech ends.
                When sustained silence is detected after a period of speech, recording stops
                automatically. You can also tap Stop Recording to end early. The maximum
                recording duration is 30 seconds.
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>2</span>
              <div className={styles.stepContent}>
                <strong>Log-mel spectrogram</strong><br />
                The captured audio is converted into an <strong>80-band log-mel spectrogram</strong>,
                the input representation used by all Whisper models. This transform converts
                the raw waveform into a time-frequency representation that the encoder
                processes more efficiently than raw audio samples.
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>3</span>
              <div className={styles.stepContent}>
                <strong>Transcription via distil-Whisper</strong><br />
                The spectrogram is fed into{" "}
                <a href="https://github.com/huggingface/distil-whisper" target="_blank" rel="noopener noreferrer" style={{ color: "#00b7ff" }}>distil-whisper/distil-small.en</a>,
                a distilled version of OpenAI&apos;s Whisper model trained by Hugging Face. The
                distilled variant is roughly 6× faster than Whisper Small while retaining
                most of its accuracy on English speech. It uses an encoder-decoder Transformer
                architecture with greedy decoding (highest-probability token at each step) to
                produce the transcribed text. This model is English-only.
              </div>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>System integration</h2>
          <p className={styles.prose}>
            Maise integrates with Android at the framework level rather than sitting in front
            of it. This is what makes it system-wide:
          </p>
          <table className={styles.table}>
            <thead>
              <tr><th>Component</th><th>Android API</th><th>Effect</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>TTS engine</td>
                <td><span className={styles.inlineCode}>TextToSpeechService</span></td>
                <td>Any app calling the TTS API uses Maise automatically</td>
              </tr>
              <tr>
                <td>Speech recognizer</td>
                <td><span className={styles.inlineCode}>RecognitionService</span></td>
                <td>Any app using SpeechRecognizer API uses distil-Whisper</td>
              </tr>
              <tr>
                <td>Voice keyboard</td>
                <td><span className={styles.inlineCode}>InputMethodService</span></td>
                <td>Microphone dictation button in any text field</td>
              </tr>
            </tbody>
          </table>
          <p className={styles.prose}>
            Because Maise registers at the framework level, it requires no integration work
            from other apps. Any app that already uses the standard Android TTS or ASR APIs
            gains on-device processing automatically.
          </p>
        </div>

        <div className={styles.section}>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/maise/guides" className={shared.ctaButtonSecondary}>← All guides</Link>
            <Link href="/maise/guides/tts-setup" className={shared.ctaButtonSecondary}>Set up TTS →</Link>
          </div>
        </div>

      </div>
    </main>
  );
}
