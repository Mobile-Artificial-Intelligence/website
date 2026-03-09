import Link from "next/link";
import type { Metadata } from "next";
import styles from "./page.module.css";
import shared from "@/app/shared.module.css";

export const metadata: Metadata = {
  title: "Babylon.cpp — Local G2P and Neural TTS Library | Mobile Artificial Intelligence",
  description: "Babylon.cpp is a free, open-source C/C++ library for grapheme-to-phoneme conversion and neural text-to-speech. Runs locally via ONNX Runtime — no internet required. Supports Kokoro (54+ voices) and VITS/Piper engines.",
  keywords: [
    "babylon.cpp",
    "C++ TTS library",
    "local TTS",
    "offline TTS",
    "grapheme to phoneme",
    "G2P library",
    "Kokoro TTS",
    "VITS TTS",
    "ONNX TTS",
    "Piper TTS",
    "neural text-to-speech",
    "on-device TTS",
    "open source TTS library",
    "IPA phonemization",
    "local speech synthesis",
    "cross-platform TTS",
  ],
  openGraph: {
    title: "Babylon.cpp — Local G2P and Neural TTS Library",
    description: "Open-source C/C++ library for local grapheme-to-phoneme conversion and neural TTS. 54+ Kokoro voices, VITS/Piper support, REST API, and Python bindings. No internet required.",
    url: "https://mobile-artificial-intelligence.com/babylon",
    siteName: "Mobile Artificial Intelligence",
    type: "website",
  },
};

const features = [
  {
    title: "Fully Local Inference",
    description: "All G2P and TTS inference runs on-device via ONNX Runtime. No internet connection is required and no text or audio ever leaves the host machine.",
  },
  {
    title: "Kokoro Engine",
    description: "High-quality multi-voice neural TTS at 24 kHz. 54+ voices across English (US/UK), German, French, Japanese, Chinese, and more.",
  },
  {
    title: "VITS / Piper Engine",
    description: "End-to-end neural TTS compatible with Piper model files. Sample rate is determined by metadata embedded in the model.",
  },
  {
    title: "Open Phonemizer G2P",
    description: "Text is phonemized via a ~130,000-entry pronunciation dictionary and an ONNX neural G2P model for out-of-vocabulary words.",
  },
  {
    title: "REST API & Web UI",
    description: "Built-in HTTP server with a single-page web frontend. Supports /phonemize and /tts endpoints — ideal for local integrations.",
  },
  {
    title: "C and C++ APIs",
    description: "A stable C API for FFI use from any language, plus higher-level C++ session classes for OpenPhonemizer, Kokoro, and VITS.",
  },
  {
    title: "Python Bindings",
    description: "Pre-built Python package bundling compiled libraries for Linux, macOS, and Windows. Drop-in access to all G2P and TTS functions.",
  },
  {
    title: "Cross-Platform",
    description: "Builds on Linux (x86_64), macOS (universal), Windows (x86_64), and Android (arm64-v8a, x86_64) from a single CMake project.",
  },
];

const platforms = [
  { platform: "Linux", arch: "x86_64", lib: "libbabylon.so" },
  { platform: "macOS", arch: "Universal (x86_64 + arm64)", lib: "libbabylon.dylib" },
  { platform: "Windows", arch: "x86_64", lib: "babylon.dll" },
  { platform: "Android", arch: "arm64-v8a, x86_64", lib: "libbabylon.so" },
];

export default function BabylonPage() {
  return (
    <main className={shared.page}>
      <section className={shared.hero}>
        <h1 className={shared.heroTitle}>Babylon.cpp</h1>
        <p className={shared.tagline}>Local G2P and Neural TTS</p>
        <p className={shared.description}>
          A free, open-source C and C++ library for grapheme-to-phoneme conversion
          and neural text-to-speech synthesis. Kokoro (54+ voices) and VITS/Piper
          engines — all running locally via ONNX Runtime, zero internet required.
        </p>
        <div className={shared.heroCta}>
          <Link
            href="https://github.com/Mobile-Artificial-Intelligence/babylon.cpp"
            className={shared.ctaButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub →
          </Link>
          <Link href="/babylon/guides" className={shared.ctaButtonSecondary}>
            Read the guides →
          </Link>
        </div>
      </section>

      <section className={shared.section}>
        <h2 className={shared.sectionTitle}>Features</h2>
        <div className={shared.grid3}>
          {features.map((f) => (
            <div key={f.title} className={shared.card}>
              <h3 className={shared.cardTitle}>{f.title}</h3>
              <p className={shared.cardBody}>{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={shared.section}>
        <h2 className={shared.sectionTitle}>Platform Support</h2>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Platform</th>
                <th>Architecture</th>
                <th>Library</th>
              </tr>
            </thead>
            <tbody>
              {platforms.map((p) => (
                <tr key={p.platform}>
                  <td>{p.platform}</td>
                  <td>{p.arch}</td>
                  <td><code className={styles.inlineCode}>{p.lib}</code></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className={shared.section}>
        <h2 className={shared.sectionTitle}>Quick Start</h2>
        <p className={shared.sectionIntro}>
          Build from source with a single command. Requires CMake 3.18+, a C++17 compiler, and Git.
        </p>
        <pre className={styles.codeBlock}>{`git clone --recursive https://github.com/Mobile-Artificial-Intelligence/babylon.cpp.git
cd babylon.cpp
make cli`}</pre>
        <p className={styles.codeCaption}>
          All output goes to <code className={styles.inlineCode}>bin/</code>. The <code className={styles.inlineCode}>cli</code> target builds the library, CLI binary, and copies runtime files.
        </p>
      </section>

      <section className={shared.section}>
        <h2 className={shared.sectionTitle}>Guides</h2>
        <p className={shared.sectionIntro}>
          Step-by-step guides for building, integrating, and using Babylon.cpp.
        </p>
        <div className={shared.grid2}>
          <Link href="/babylon/guides/getting-started" className={styles.projectCard}>
            <h3 className={shared.cardTitle}>Getting Started</h3>
            <p className={shared.cardBody}>Build babylon.cpp from source, set up model files, and run your first synthesis.</p>
            <span className={styles.cardLink}>Read guide →</span>
          </Link>
          <Link href="/babylon/guides/cli-usage" className={styles.projectCard}>
            <h3 className={shared.cardTitle}>CLI Usage</h3>
            <p className={shared.cardBody}>Use the babylon CLI to phonemize text, synthesise speech, and serve the REST API.</p>
            <span className={styles.cardLink}>Read guide →</span>
          </Link>
          <Link href="/babylon/guides/rest-api" className={styles.projectCard}>
            <h3 className={shared.cardTitle}>REST API</h3>
            <p className={shared.cardBody}>Integrate local TTS and G2P into any app via the built-in HTTP endpoints.</p>
            <span className={styles.cardLink}>Read guide →</span>
          </Link>
          <Link href="/babylon/guides/c-api" className={styles.projectCard}>
            <h3 className={shared.cardTitle}>C / C++ API</h3>
            <p className={shared.cardBody}>Embed babylon.cpp directly in your C or C++ project using the native library API.</p>
            <span className={styles.cardLink}>Read guide →</span>
          </Link>
          <Link href="/babylon/guides/python" className={styles.projectCard}>
            <h3 className={shared.cardTitle}>Python Wrapper</h3>
            <p className={shared.cardBody}>Use the pre-built Python package for G2P and TTS without compiling anything.</p>
            <span className={styles.cardLink}>Read guide →</span>
          </Link>
        </div>
        <div style={{ marginTop: "4rem" }}>
          <Link href="/babylon/guides" className={shared.ctaButtonSecondary}>View all guides →</Link>
        </div>
      </section>

      <section className={shared.section}>
        <div className={shared.ctaWrapper}>
          <p className={shared.sectionIntro}>
            Babylon.cpp is MIT licensed and actively developed.
          </p>
          <Link
            href="https://github.com/Mobile-Artificial-Intelligence/babylon.cpp"
            className={shared.ctaButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            Contribute on GitHub →
          </Link>
        </div>
      </section>
    </main>
  );
}
