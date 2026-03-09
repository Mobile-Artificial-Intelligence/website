import Link from "next/link";
import type { Metadata } from "next";
import styles from "../guide.module.css";
import shared from "@/app/shared.module.css";

export const metadata: Metadata = {
  title: "Babylon.cpp REST API Reference",
  description: "Complete reference for the babylon.cpp HTTP REST API: /status, /voices, /phonemize, and /tts endpoints. Run local G2P and TTS from any language or tool via HTTP.",
  keywords: [
    "babylon REST API",
    "local TTS API",
    "local G2P API",
    "babylon serve",
    "TTS HTTP endpoint",
    "phonemize API",
    "on-device TTS REST",
  ],
};

export default function BabylonRestApiPage() {
  return (
    <main className={shared.page}>
      <div className={styles.guideHero}>
        <p className={styles.breadcrumb}>
          <Link href="/babylon">Babylon.cpp</Link> / <Link href="/babylon/guides">Guides</Link> / REST API
        </p>
        <h1 className={styles.guideTitle}>REST API</h1>
        <p className={styles.guideSubtitle}>
          When running <code>babylon serve</code>, a local HTTP server exposes four
          endpoints for G2P and TTS. All responses include{" "}
          <code>Access-Control-Allow-Origin: *</code>.
        </p>
      </div>

      <div className={styles.body}>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Starting the server</h2>
          <p className={styles.prose}>
            Launch the server with the <span className={styles.inlineCode}>serve</span> subcommand.
            All configured models are pre-loaded before the server accepts connections.
          </p>
          <code className={styles.code}>{`babylon serve
# Listening on http://127.0.0.1:8775

# Custom host / port
babylon serve --host 0.0.0.0 --port 9000`}</code>
          <p className={styles.prose}>
            The web frontend is served at <span className={styles.inlineCode}>GET /</span>.
            Open it in a browser to test phonemization and synthesis interactively.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Endpoints overview</h2>
          <table className={styles.table}>
            <thead>
              <tr><th>Method</th><th>Path</th><th>Description</th></tr>
            </thead>
            <tbody>
              <tr><td>GET</td><td><span className={styles.inlineCode}>/</span></td><td>Web frontend (HTML)</td></tr>
              <tr><td>GET</td><td><span className={styles.inlineCode}>/status</span></td><td>Engine availability and voice count</td></tr>
              <tr><td>GET</td><td><span className={styles.inlineCode}>/voices</span></td><td>Sorted list of available Kokoro voice names</td></tr>
              <tr><td>POST</td><td><span className={styles.inlineCode}>/phonemize</span></td><td>Convert text to IPA or Kokoro token IDs</td></tr>
              <tr><td>POST</td><td><span className={styles.inlineCode}>/tts</span></td><td>Synthesise speech, returns audio/wav</td></tr>
            </tbody>
          </table>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>GET /status</h2>
          <p className={styles.prose}>
            Returns the availability of each engine and the number of loaded voices.
            Model availability is determined by whether the configured file path exists.
          </p>
          <code className={styles.code}>{`curl http://127.0.0.1:8775/status`}</code>
          <p className={styles.prose}>Response (<span className={styles.inlineCode}>application/json</span>):</p>
          <code className={styles.code}>{`{
  "phonemizer": true,
  "kokoro":     true,
  "vits":       false,
  "voices":     54
}`}</code>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>GET /voices</h2>
          <p className={styles.prose}>
            Returns a sorted JSON array of available Kokoro voice names — the
            filenames in the <span className={styles.inlineCode}>kokoro_voices</span> directory
            without the <span className={styles.inlineCode}>.bin</span> extension.
          </p>
          <code className={styles.code}>{`curl http://127.0.0.1:8775/voices`}</code>
          <p className={styles.prose}>Response:</p>
          <code className={styles.code}>{`["en-GB-alice", "en-US-bella", "en-US-heart", "en-US-nova", ...]`}</code>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>POST /phonemize</h2>
          <p className={styles.prose}>
            Converts text to IPA phonemes or Kokoro token IDs using the Open Phonemizer
            G2P pipeline.
          </p>
          <table className={styles.table}>
            <thead>
              <tr><th>Field</th><th>Type</th><th>Required</th><th>Description</th></tr>
            </thead>
            <tbody>
              <tr><td><span className={styles.inlineCode}>text</span></td><td>string</td><td>Yes</td><td>Input text to phonemize</td></tr>
              <tr><td><span className={styles.inlineCode}>tokens</span></td><td>boolean</td><td>No</td><td>Return Kokoro token IDs instead of IPA (default: false)</td></tr>
            </tbody>
          </table>
          <code className={styles.code}>{`# IPA mode
curl -X POST http://127.0.0.1:8775/phonemize \\
  -H "Content-Type: application/json" \\
  -d '{"text": "Hello world"}'

# Response
{"phonemes": "hɛloʊ wɜːld"}

# Token mode
curl -X POST http://127.0.0.1:8775/phonemize \\
  -H "Content-Type: application/json" \\
  -d '{"text": "Hello world", "tokens": true}'

# Response
{"tokens": [31, 29, 42, 0, 51, 17, 32, 42]}`}</code>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>POST /tts</h2>
          <p className={styles.prose}>
            Synthesises speech from text. On success, returns a WAV audio binary.
            On error, returns a JSON object with an <span className={styles.inlineCode}>error</span> field.
          </p>
          <table className={styles.table}>
            <thead>
              <tr><th>Field</th><th>Type</th><th>Required</th><th>Description</th></tr>
            </thead>
            <tbody>
              <tr><td><span className={styles.inlineCode}>text</span></td><td>string</td><td>Yes</td><td>Input text</td></tr>
              <tr><td><span className={styles.inlineCode}>engine</span></td><td>string</td><td>No</td><td><span className={styles.inlineCode}>kokoro</span> (default) or <span className={styles.inlineCode}>vits</span></td></tr>
              <tr><td><span className={styles.inlineCode}>voice</span></td><td>string</td><td>No</td><td>Kokoro voice name; defaults to the config value</td></tr>
              <tr><td><span className={styles.inlineCode}>speed</span></td><td>number</td><td>No</td><td>Speech speed multiplier (default: 1.0)</td></tr>
            </tbody>
          </table>
          <code className={styles.code}>{`# Synthesise with default voice
curl -X POST http://127.0.0.1:8775/tts \\
  -H "Content-Type: application/json" \\
  -d '{"text": "Hello world"}' \\
  --output output.wav

# Choose a voice and speed
curl -X POST http://127.0.0.1:8775/tts \\
  -H "Content-Type: application/json" \\
  -d '{"text": "Hello world", "voice": "en-US-nova", "speed": 1.2}' \\
  --output nova.wav

# VITS engine
curl -X POST http://127.0.0.1:8775/tts \\
  -H "Content-Type: application/json" \\
  -d '{"text": "Hello world", "engine": "vits"}' \\
  --output vits.wav`}</code>
          <div className={styles.note}>
            The success response is a raw <span className={styles.inlineCode}>audio/wav</span> binary.
            On error, a <span className={styles.inlineCode}>{"{ \"error\": \"...\" }"}</span> JSON body
            is returned instead.
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Web frontend</h2>
          <p className={styles.prose}>
            The built-in web UI at <span className={styles.inlineCode}>GET /</span> communicates
            entirely with the local REST API and requires no external dependencies. It includes:
          </p>
          <ul style={{ fontSize: "0.85rem", lineHeight: 1.9, opacity: 0.8, paddingLeft: "1.5rem", margin: 0 }}>
            <li><strong>Status indicator</strong> — Cyan dot when at least one engine is ready; red when none are configured.</li>
            <li><strong>Engine selector</strong> — Switch between Kokoro and VITS; options are disabled when the model is unavailable.</li>
            <li><strong>Voice selector</strong> — Populated from <span className={styles.inlineCode}>GET /voices</span>.</li>
            <li><strong>Speed slider</strong> — Kokoro speech speed from 0.5× to 2.0×.</li>
            <li><strong>Phonemize</strong> — Calls <span className={styles.inlineCode}>POST /phonemize</span> and displays IPA.</li>
            <li><strong>Speak</strong> — Calls <span className={styles.inlineCode}>POST /tts</span> and plays the WAV inline.</li>
            <li><strong>Keyboard shortcut</strong> — <span className={styles.inlineCode}>Ctrl+Enter</span> / <span className={styles.inlineCode}>Cmd+Enter</span> triggers synthesis.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/babylon/guides/cli-usage" className={shared.ctaButtonSecondary}>← CLI Usage</Link>
            <Link href="/babylon/guides/c-api" className={shared.ctaButtonSecondary}>C / C++ API →</Link>
          </div>
        </div>

      </div>
    </main>
  );
}
