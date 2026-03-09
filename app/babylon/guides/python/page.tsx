import Link from "next/link";
import type { Metadata } from "next";
import styles from "../guide.module.css";
import shared from "@/app/shared.module.css";

export const metadata: Metadata = {
  title: "Babylon.cpp Python Wrapper — Local TTS and G2P in Python",
  description: "Use the babylon.cpp Python package to add local grapheme-to-phoneme conversion and neural TTS to any Python project. Pre-built binaries for Linux, macOS, and Windows — no compilation needed.",
  keywords: [
    "babylon python",
    "local TTS python",
    "Kokoro python",
    "G2P python library",
    "offline TTS python",
    "babylon.py",
    "ONNX TTS python",
    "on-device speech python",
  ],
};

export default function BabylonPythonPage() {
  return (
    <main className={shared.page}>
      <div className={styles.guideHero}>
        <p className={styles.breadcrumb}>
          <Link href="/babylon">Babylon.cpp</Link> / <Link href="/babylon/guides">Guides</Link> / Python Wrapper
        </p>
        <h1 className={styles.guideTitle}>Python Wrapper</h1>
        <p className={styles.guideSubtitle}>
          The pre-built Python package bundles compiled libraries for Linux, macOS,
          and Windows alongside a <code>babylon.py</code> wrapper module. Add local G2P
          and TTS to any Python project — no compilation required.
        </p>
      </div>

      <div className={styles.body}>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Installation</h2>
          <p className={styles.prose}>
            The package is distributed as a CI artifact attached to each release on GitHub.
            Download the wheel for your platform and install it with pip:
          </p>
          <code className={styles.code}>{`pip install babylon-0.0.2-linux-x86_64.whl`}</code>
          <p className={styles.prose}>
            Alternatively, the <span className={styles.inlineCode}>babylon.py</span> module can be
            used directly from the source tree alongside the compiled shared library.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Model setup</h2>
          <p className={styles.prose}>
            The Python wrapper requires the same model files as the CLI. Place them
            in a <span className={styles.inlineCode}>models/</span> directory or pass explicit
            paths to each init function.
          </p>
          <table className={styles.table}>
            <thead>
              <tr><th>File</th><th>Required for</th></tr>
            </thead>
            <tbody>
              <tr><td><span className={styles.inlineCode}>open-phonemizer.onnx</span></td><td>G2P phonemization (all engines)</td></tr>
              <tr><td><span className={styles.inlineCode}>dictionary.json</span></td><td>G2P dictionary lookup (optional but recommended)</td></tr>
              <tr><td><span className={styles.inlineCode}>kokoro-quantized.onnx</span></td><td>Kokoro TTS</td></tr>
              <tr><td><span className={styles.inlineCode}>voices/*.bin</span></td><td>Kokoro voice styles</td></tr>
              <tr><td><span className={styles.inlineCode}>curie.onnx</span></td><td>VITS TTS (optional)</td></tr>
            </tbody>
          </table>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Kokoro TTS example</h2>
          <p className={styles.prose}>
            Initialise the G2P session first, then the Kokoro session. Call{" "}
            <span className={styles.inlineCode}>kokoro_tts</span> to synthesise speech
            and write a WAV file.
          </p>
          <code className={styles.code}>{`import babylon

babylon.g2p_init(
    "models/open-phonemizer.onnx",
    "models/dictionary.json"
)
babylon.kokoro_init("models/kokoro-quantized.onnx")

babylon.kokoro_tts(
    "Hello world",
    "models/voices/en-US-heart.bin",
    speed=1.0,
    output_path="output.wav"
)

babylon.kokoro_free()
babylon.g2p_free()`}</code>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>G2P (phonemization)</h2>
          <p className={styles.prose}>
            Use <span className={styles.inlineCode}>g2p</span> to get IPA phonemes,
            or <span className={styles.inlineCode}>g2p_tokens</span> to get Kokoro token IDs.
          </p>
          <code className={styles.code}>{`import babylon

babylon.g2p_init(
    "models/open-phonemizer.onnx",
    "models/dictionary.json"
)

ipa = babylon.g2p("Hello world")
print(ipa)  # hɛloʊ wɜːld

tokens = babylon.g2p_tokens("Hello world")
print(tokens)  # [31, 29, 42, 0, 51, 17, 32, 42]

babylon.g2p_free()`}</code>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>VITS TTS example</h2>
          <code className={styles.code}>{`import babylon

babylon.g2p_init(
    "models/open-phonemizer.onnx",
    "models/dictionary.json"
)
babylon.tts_init("models/curie.onnx")

babylon.tts("Hello world", "output.wav")

babylon.tts_free()
babylon.g2p_free()`}</code>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>API reference</h2>
          <table className={styles.table}>
            <thead>
              <tr><th>Function</th><th>Description</th></tr>
            </thead>
            <tbody>
              <tr><td><span className={styles.inlineCode}>g2p_init(model, dictionary)</span></td><td>Initialise G2P session</td></tr>
              <tr><td><span className={styles.inlineCode}>g2p(text)</span></td><td>Returns IPA string</td></tr>
              <tr><td><span className={styles.inlineCode}>g2p_tokens(text)</span></td><td>Returns list of Kokoro token IDs</td></tr>
              <tr><td><span className={styles.inlineCode}>g2p_free()</span></td><td>Release G2P session</td></tr>
              <tr><td><span className={styles.inlineCode}>kokoro_init(model)</span></td><td>Initialise Kokoro session</td></tr>
              <tr><td><span className={styles.inlineCode}>kokoro_tts(text, voice, speed, output_path)</span></td><td>Synthesise with Kokoro</td></tr>
              <tr><td><span className={styles.inlineCode}>kokoro_free()</span></td><td>Release Kokoro session</td></tr>
              <tr><td><span className={styles.inlineCode}>tts_init(model)</span></td><td>Initialise VITS session</td></tr>
              <tr><td><span className={styles.inlineCode}>tts(text, output_path)</span></td><td>Synthesise with VITS</td></tr>
              <tr><td><span className={styles.inlineCode}>tts_free()</span></td><td>Release VITS session</td></tr>
            </tbody>
          </table>
          <div className={styles.note}>
            Always call <span className={styles.inlineCode}>g2p_init</span> before any TTS init
            function — the TTS engines depend on the G2P session being loaded.
          </div>
        </div>

        <div className={styles.section}>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/babylon/guides/c-api" className={shared.ctaButtonSecondary}>← C / C++ API</Link>
            <Link href="/babylon/guides" className={shared.ctaButtonSecondary}>All guides →</Link>
          </div>
        </div>

      </div>
    </main>
  );
}
