import Link from "next/link";
import type { Metadata } from "next";
import styles from "../guide.module.css";
import shared from "@/app/shared.module.css";

export const metadata: Metadata = {
  title: "Babylon.cpp CLI Usage — phonemize, tts, serve Commands",
  description: "Complete reference for the babylon CLI: phonemize text to IPA, synthesise speech with Kokoro or VITS, and launch the local REST API server. All flags and config options covered.",
  keywords: [
    "babylon CLI",
    "babylon phonemize",
    "babylon tts command",
    "babylon serve",
    "local TTS CLI",
    "IPA phonemizer CLI",
    "Kokoro CLI",
  ],
};

export default function BabylonCliUsagePage() {
  return (
    <main className={shared.page}>
      <div className={styles.guideHero}>
        <p className={styles.breadcrumb}>
          <Link href="/babylon">Babylon.cpp</Link> / <Link href="/babylon/guides">Guides</Link> / CLI Usage
        </p>
        <h1 className={styles.guideTitle}>CLI Usage</h1>
        <p className={styles.guideSubtitle}>
          The <code>babylon</code> binary provides three subcommands —{" "}
          <code>phonemize</code>, <code>tts</code>, and <code>serve</code> — plus
          global flags for model configuration.
        </p>
      </div>

      <div className={styles.body}>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Configuration</h2>
          <p className={styles.prose}>
            On startup, <span className={styles.inlineCode}>babylon</span> automatically
            loads <span className={styles.inlineCode}>config.json</span> from the same directory
            as the executable. You can override this with <span className={styles.inlineCode}>--config</span>,
            and any individual flag overrides its corresponding config key.
          </p>
          <code className={styles.code}>{`{
  "phonemizer_model": "models/open-phonemizer.onnx",
  "dictionary":       "models/dictionary.json",
  "kokoro_model":     "models/kokoro-quantized.onnx",
  "kokoro_voice":     "en-US-heart",
  "kokoro_voices":    "models/voices",
  "vits_model":       "models/curie.onnx",
  "host":             "127.0.0.1",
  "port":             8775
}`}</code>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Global flags</h2>
          <p className={styles.prose}>
            These flags apply to all subcommands and are processed before dispatch.
          </p>
          <table className={styles.table}>
            <thead>
              <tr><th>Flag</th><th>Argument</th><th>Description</th></tr>
            </thead>
            <tbody>
              <tr><td><span className={styles.inlineCode}>--config</span></td><td><span className={styles.inlineCode}>&lt;path&gt;</span></td><td>Load a JSON config file</td></tr>
              <tr><td><span className={styles.inlineCode}>--phonemizer-model</span></td><td><span className={styles.inlineCode}>&lt;path&gt;</span></td><td>Phonemizer ONNX model</td></tr>
              <tr><td><span className={styles.inlineCode}>--dictionary</span></td><td><span className={styles.inlineCode}>&lt;path&gt;</span></td><td>Pronunciation dictionary JSON</td></tr>
              <tr><td><span className={styles.inlineCode}>--kokoro-model</span></td><td><span className={styles.inlineCode}>&lt;path&gt;</span></td><td>Kokoro ONNX model</td></tr>
              <tr><td><span className={styles.inlineCode}>--kokoro-voice</span></td><td><span className={styles.inlineCode}>&lt;name&gt;</span></td><td>Default Kokoro voice name</td></tr>
              <tr><td><span className={styles.inlineCode}>--kokoro-voices</span></td><td><span className={styles.inlineCode}>&lt;dir&gt;</span></td><td>Directory of voice .bin files</td></tr>
              <tr><td><span className={styles.inlineCode}>--vits-model</span></td><td><span className={styles.inlineCode}>&lt;path&gt;</span></td><td>VITS ONNX model</td></tr>
              <tr><td><span className={styles.inlineCode}>-h</span>, <span className={styles.inlineCode}>--help</span></td><td>—</td><td>Show help</td></tr>
            </tbody>
          </table>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>phonemize</h2>
          <p className={styles.prose}>
            Convert text to IPA phonemes using the Open Phonemizer G2P pipeline.
            Words found in the pronunciation dictionary are looked up directly;
            unknown words are handled by the neural model.
          </p>
          <code className={styles.code}>{`# IPA output (default)
babylon phonemize "Hello world"
# → hɛloʊ wɜːld

# Kokoro token IDs instead of IPA
babylon phonemize --tokens "Hello world"
# → [31, 29, 42, 0, 51, 17, 32, 42]`}</code>
          <table className={styles.table}>
            <thead>
              <tr><th>Flag</th><th>Description</th></tr>
            </thead>
            <tbody>
              <tr><td><span className={styles.inlineCode}>--tokens</span></td><td>Print Kokoro token IDs instead of the IPA string</td></tr>
              <tr><td><span className={styles.inlineCode}>-h</span>, <span className={styles.inlineCode}>--help</span></td><td>Show help</td></tr>
            </tbody>
          </table>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>tts</h2>
          <p className={styles.prose}>
            Synthesise speech from text and write a WAV file. The Kokoro engine is
            the default. Switch to VITS with <span className={styles.inlineCode}>--vits</span>.
          </p>
          <code className={styles.code}>{`# Kokoro synthesis (default voice, writes output.wav)
babylon tts "Hello world"

# Specify output path
babylon tts "Hello world" -o hello.wav

# Choose a voice and adjust speed
babylon tts --voice en-US-nova --speed 1.2 "Hello world" -o nova.wav

# Use the VITS engine
babylon tts --vits "Hello world" -o vits-out.wav`}</code>
          <table className={styles.table}>
            <thead>
              <tr><th>Flag</th><th>Argument</th><th>Description</th></tr>
            </thead>
            <tbody>
              <tr><td><span className={styles.inlineCode}>--kokoro</span></td><td>—</td><td>Use the Kokoro engine (default)</td></tr>
              <tr><td><span className={styles.inlineCode}>--vits</span></td><td>—</td><td>Use the VITS engine</td></tr>
              <tr><td><span className={styles.inlineCode}>--engine</span></td><td><span className={styles.inlineCode}>&lt;name&gt;</span></td><td>Select <span className={styles.inlineCode}>kokoro</span> or <span className={styles.inlineCode}>vits</span> explicitly</td></tr>
              <tr><td><span className={styles.inlineCode}>-v</span>, <span className={styles.inlineCode}>--voice</span></td><td><span className={styles.inlineCode}>&lt;name&gt;</span></td><td>Kokoro voice name (filename in voices dir without .bin)</td></tr>
              <tr><td><span className={styles.inlineCode}>--speed</span></td><td><span className={styles.inlineCode}>&lt;float&gt;</span></td><td>Speech speed multiplier (default: 1.0)</td></tr>
              <tr><td><span className={styles.inlineCode}>-o</span></td><td><span className={styles.inlineCode}>&lt;path&gt;</span></td><td>Output WAV file (default: output.wav)</td></tr>
              <tr><td><span className={styles.inlineCode}>-h</span>, <span className={styles.inlineCode}>--help</span></td><td>—</td><td>Show help</td></tr>
            </tbody>
          </table>
          <div className={styles.note}>
            Voice names are the filenames in the <span className={styles.inlineCode}>kokoro_voices</span>{" "}
            directory without the <span className={styles.inlineCode}>.bin</span> extension.
            For example, <span className={styles.inlineCode}>--voice en-US-heart</span> maps to{" "}
            <span className={styles.inlineCode}>models/voices/en-US-heart.bin</span>.
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>serve</h2>
          <p className={styles.prose}>
            Start a local HTTP server with the built-in web frontend. All configured
            models are pre-loaded on startup. The web UI is served at{" "}
            <span className={styles.inlineCode}>GET /</span> from{" "}
            <span className={styles.inlineCode}>index.html</span> in the same
            directory as the executable.
          </p>
          <code className={styles.code}>{`# Start on default address (127.0.0.1:8775)
babylon serve

# Expose on all interfaces, custom port
babylon serve --host 0.0.0.0 --port 9000`}</code>
          <table className={styles.table}>
            <thead>
              <tr><th>Flag</th><th>Argument</th><th>Description</th></tr>
            </thead>
            <tbody>
              <tr><td><span className={styles.inlineCode}>--host</span></td><td><span className={styles.inlineCode}>&lt;addr&gt;</span></td><td>Bind address (default: 127.0.0.1)</td></tr>
              <tr><td><span className={styles.inlineCode}>--port</span></td><td><span className={styles.inlineCode}>&lt;port&gt;</span></td><td>Port number (default: 8775)</td></tr>
              <tr><td><span className={styles.inlineCode}>-h</span>, <span className={styles.inlineCode}>--help</span></td><td>—</td><td>Show help</td></tr>
            </tbody>
          </table>
        </div>

        <div className={styles.section}>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/babylon/guides/getting-started" className={shared.ctaButtonSecondary}>← Getting Started</Link>
            <Link href="/babylon/guides/rest-api" className={shared.ctaButtonSecondary}>REST API →</Link>
          </div>
        </div>

      </div>
    </main>
  );
}
