import Link from "next/link";
import type { Metadata } from "next";
import styles from "../guide.module.css";
import shared from "@/app/shared.module.css";

export const metadata: Metadata = {
  title: "Getting Started with Babylon.cpp — Build & Setup Guide",
  description: "Build babylon.cpp from source, download Kokoro and VITS model files, and run your first phonemization and speech synthesis. Covers Linux, macOS, Windows, and Android.",
  keywords: [
    "build babylon.cpp",
    "babylon.cpp setup",
    "Kokoro TTS setup",
    "VITS model setup",
    "compile TTS library",
    "ONNX TTS build",
    "local TTS getting started",
  ],
};

export default function BabylonGettingStartedPage() {
  return (
    <main className={shared.page}>
      <div className={styles.guideHero}>
        <p className={styles.breadcrumb}>
          <Link href="/babylon">Babylon.cpp</Link> / <Link href="/babylon/guides">Guides</Link> / Getting Started
        </p>
        <h1 className={styles.guideTitle}>Getting Started</h1>
        <p className={styles.guideSubtitle}>
          Build babylon.cpp from source, download the required model files, and
          run your first phonemization and speech synthesis in a few minutes.
        </p>
      </div>

      <div className={styles.body}>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Prerequisites</h2>
          <p className={styles.prose}>
            The following tools must be available on your system before building:
          </p>
          <table className={styles.table}>
            <thead>
              <tr><th>Tool</th><th>Version</th><th>Notes</th></tr>
            </thead>
            <tbody>
              <tr><td>CMake</td><td>3.18+</td><td>Used to configure and build the project</td></tr>
              <tr><td>C++17 compiler</td><td>GCC, Clang, or MSVC</td><td>MSVC requires Visual Studio 2019+</td></tr>
              <tr><td>Git</td><td>Any recent version</td><td>Required for submodule checkout</td></tr>
              <tr><td>Xcode CLI Tools</td><td>—</td><td>macOS only</td></tr>
            </tbody>
          </table>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Clone the repository</h2>
          <p className={styles.prose}>
            Babylon.cpp uses Git submodules for ONNX Runtime and other
            dependencies. The <span className={styles.inlineCode}>--recursive</span> flag
            is required.
          </p>
          <code className={styles.code}>{`git clone --recursive https://github.com/Mobile-Artificial-Intelligence/babylon.cpp.git
cd babylon.cpp`}</code>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Build targets</h2>
          <p className={styles.prose}>
            The project provides a Makefile that wraps CMake for common build
            scenarios. All output is placed in <span className={styles.inlineCode}>bin/</span>.
          </p>
          <table className={styles.table}>
            <thead>
              <tr><th>Target</th><th>Description</th></tr>
            </thead>
            <tbody>
              <tr><td><span className={styles.inlineCode}>make lib</span></td><td>Build the shared library only</td></tr>
              <tr><td><span className={styles.inlineCode}>make cli</span></td><td>Library + CLI binary + runtime files copied to bin/</td></tr>
              <tr><td><span className={styles.inlineCode}>make debug</span></td><td>CLI build in Debug mode</td></tr>
              <tr><td><span className={styles.inlineCode}>make android</span></td><td>Cross-compile for Android (requires NDK r27+)</td></tr>
            </tbody>
          </table>
          <p className={styles.prose}>
            For most users, <span className={styles.inlineCode}>make cli</span> is the right starting point.
            It also copies <span className={styles.inlineCode}>data/config.json</span>,
            <span className={styles.inlineCode}> data/index.html</span>, and the
            <span className={styles.inlineCode}> models/</span> directory into
            <span className={styles.inlineCode}> bin/</span>.
          </p>
          <code className={styles.code}>make cli</code>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Download model files</h2>
          <p className={styles.prose}>
            Babylon.cpp requires external ONNX model files that are not bundled in
            the repository. Place them in the <span className={styles.inlineCode}>bin/models/</span>{" "}
            directory (created by <span className={styles.inlineCode}>make cli</span>), or configure
            custom paths in <span className={styles.inlineCode}>bin/config.json</span>.
          </p>
          <table className={styles.table}>
            <thead>
              <tr><th>File</th><th>Description</th></tr>
            </thead>
            <tbody>
              <tr><td><span className={styles.inlineCode}>open-phonemizer.onnx</span></td><td>Neural G2P model (Open Phonemizer)</td></tr>
              <tr><td><span className={styles.inlineCode}>dictionary.json</span></td><td>~130,000-entry pronunciation dictionary</td></tr>
              <tr><td><span className={styles.inlineCode}>kokoro-quantized.onnx</span></td><td>Kokoro TTS model (recommended engine)</td></tr>
              <tr><td><span className={styles.inlineCode}>voices/*.bin</span></td><td>Kokoro voice style embeddings (one file per voice)</td></tr>
              <tr><td><span className={styles.inlineCode}>curie.onnx</span></td><td>VITS TTS model (optional, Piper-compatible)</td></tr>
            </tbody>
          </table>
          <div className={styles.note}>
            The Kokoro model and voice files are available from the{" "}
            <a href="https://github.com/hexgrad/kokoro" target="_blank" rel="noopener noreferrer" style={{ color: "#00b7ff" }}>
              Kokoro repository
            </a>. The Open Phonemizer model and dictionary are from the{" "}
            <a href="https://github.com/NeuralVox/OpenPhonemizer" target="_blank" rel="noopener noreferrer" style={{ color: "#00b7ff" }}>
              OpenPhonemizer repository
            </a>.
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Configure model paths</h2>
          <p className={styles.prose}>
            On startup, the <span className={styles.inlineCode}>babylon</span> binary automatically
            loads <span className={styles.inlineCode}>config.json</span> from the same directory as
            the executable. Edit it to point to your model files:
          </p>
          <code className={styles.code}>{`{
  "phonemizer_model": "models/open-phonemizer.onnx",
  "dictionary":       "models/dictionary.json",
  "kokoro_model":     "models/kokoro-quantized.onnx",
  "kokoro_voice":     "en-US-heart",
  "kokoro_voices":    "models/voices"
}`}</code>
          <p className={styles.prose}>
            Paths are resolved relative to the config file. You can also override
            any key with a CLI flag at runtime.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Run your first synthesis</h2>
          <p className={styles.prose}>
            From the <span className={styles.inlineCode}>bin/</span> directory, run:
          </p>
          <code className={styles.code}>{`# Phonemize text to IPA
./babylon phonemize "Hello world"
# → hɛloʊ wɜːld

# Synthesise speech (writes output.wav by default)
./babylon tts "Hello world"

# Choose a voice and output path
./babylon tts --voice en-US-nova --speed 1.2 "Hello world" -o hello.wav`}</code>
          <div className={styles.note}>
            If you see a model-not-found error, double-check that the paths in
            <span className={styles.inlineCode}> config.json</span> are correct and the files
            have been downloaded.
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Android builds</h2>
          <p className={styles.prose}>
            Cross-compiling for Android requires the Android NDK r27 or later.
            Set the <span className={styles.inlineCode}>ANDROID_NDK_HOME</span> environment
            variable before running <span className={styles.inlineCode}>make android</span>:
          </p>
          <code className={styles.code}>{`export ANDROID_NDK_HOME=/path/to/android-ndk-r27
make android`}</code>
          <p className={styles.prose}>
            The output library (<span className={styles.inlineCode}>libbabylon.so</span>) is placed
            in <span className={styles.inlineCode}>bin/android/</span> for each supported ABI.
          </p>
        </div>

        <div className={styles.section}>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/babylon/guides" className={shared.ctaButtonSecondary}>← All guides</Link>
            <Link href="/babylon/guides/cli-usage" className={shared.ctaButtonSecondary}>CLI Usage →</Link>
          </div>
        </div>

      </div>
    </main>
  );
}
