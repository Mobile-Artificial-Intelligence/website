import Link from "next/link";
import type { Metadata } from "next";
import styles from "../guide.module.css";
import shared from "@/app/shared.module.css";

export const metadata: Metadata = {
  title: "Run AI Locally on Android with llama.cpp — Maid Guide",
  description: "Learn how to run GGUF language models entirely on your Android device using Maid and llama.cpp. No internet, no API key, no cost per query. Step-by-step setup guide with quantization explained.",
  keywords: [
    "llama.cpp Android",
    "run AI offline Android",
    "GGUF Android guide",
    "local LLM Android",
    "on-device AI Android",
    "llama.rn",
    "GGUF quantization explained",
    "run LLM without internet",
  ],
};

export default function LlamaCppGuidePage() {
  return (
    <main className={shared.page}>
      <div className={styles.guideHero}>
        <p className={styles.breadcrumb}>
          <Link href="/maid">Maid</Link> / <Link href="/maid/guides">Guides</Link> / llama.cpp
        </p>
        <h1 className={styles.guideTitle}>Run AI Locally with llama.cpp</h1>
        <p className={styles.guideSubtitle}>
          Run GGUF language models entirely on your Android device — no internet
          connection, no API key, and no cost per query. Every token is generated
          on your hardware, so your conversations stay completely private.
        </p>
      </div>

      <div className={styles.body}>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>How it works</h2>
          <p className={styles.prose}>
            Maid uses <strong>llama.cpp</strong> — the widely-used open-source inference engine — compiled for
            Android via the <strong>llama.rn</strong> React Native library. When you select the Llama
            provider in Maid, the app loads a GGUF model file directly into memory and runs
            inference on the device CPU. No network requests are made at any point.
          </p>
          <p className={styles.prose}>
            GGUF is the standard model format for llama.cpp. It packages the model weights,
            tokenizer, and metadata into a single file. Maid can load any GGUF file — either
            from its built-in catalogue or from a file you provide yourself.
          </p>
          <p className={styles.prose}>
            Performance depends on your device&apos;s CPU and available RAM. On a modern flagship
            Android phone (e.g. Pixel 9 Pro, Samsung Galaxy S24) you can expect 10–20 tokens
            per second with a 1–3B parameter Q4 model. Smaller or more aggressively quantized
            models run faster; larger models require more RAM and may not load on lower-end devices.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Quick start</h2>
          <div className={styles.steps}>
            <div className={styles.step}>
              <span className={styles.stepNumber}>1</span>
              <div className={styles.stepContent}>
                Open Maid and tap the <strong>hamburger menu (≡)</strong> in the top-left corner to open the sidebar, then tap the <strong>settings icon</strong>.
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>2</span>
              <div className={styles.stepContent}>
                At the top of the Settings screen, tap the <strong>API dropdown</strong> and select <strong>Llama</strong>.
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>3</span>
              <div className={styles.stepContent}>
                Tap the <strong>Model dropdown</strong>. This opens the built-in model catalogue. Select a model and quantization, then confirm — the download starts automatically.
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>4</span>
              <div className={styles.stepContent}>
                Once the download finishes, tap <strong>Load Model</strong>. Maid will initialize llama.cpp with the selected file. Loading can take a few seconds depending on model size.
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>5</span>
              <div className={styles.stepContent}>
                Navigate back to the chat screen and start a conversation. The model runs entirely on your device — no internet connection is needed.
              </div>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Built-in model catalogue</h2>
          <p className={styles.prose}>
            Maid ships with a curated selection of GGUF models sourced from Hugging Face.
            These cover a range of sizes from 1B to 4B parameters, suitable for most Android
            hardware. The catalogue includes:
          </p>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Model</th>
                <th>Parameters</th>
                <th>Best for</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>LFM 2.5 1.2B Thinking</td><td>1.2B</td><td>Reasoning tasks, fast devices</td></tr>
              <tr><td>Qwen3 4B</td><td>4.0B</td><td>General purpose, higher quality</td></tr>
              <tr><td>Phi 3 Mini 4K Instruct</td><td>3.8B</td><td>Instruction following</td></tr>
              <tr><td>TinyLlama 1.1B Chat</td><td>1.1B</td><td>Very low RAM, quick responses</td></tr>
              <tr><td>Gemma 2 2B IT</td><td>2.0B</td><td>Balanced speed and quality</td></tr>
              <tr><td>Gemma 3 1B IT</td><td>1.0B</td><td>Low-end devices</td></tr>
              <tr><td>Gemmasutra Mini 2B v1</td><td>2.0B</td><td>Creative tasks</td></tr>
              <tr><td>Gemmasutra Small 4B v1a</td><td>4.0B</td><td>Creative tasks, higher quality</td></tr>
              <tr><td>Qwen2.5 1.5B Instruct</td><td>1.5B</td><td>Fast general assistant</td></tr>
              <tr><td>Llama 3.2 1B Instruct</td><td>1.0B</td><td>Lightweight Meta model</td></tr>
              <tr><td>Llama 3.2 3B Instruct</td><td>3.0B</td><td>Meta model, good quality</td></tr>
              <tr><td>Tesslate Tessa T1 3B</td><td>3.0B</td><td>Instruction following</td></tr>
            </tbody>
          </table>
          <div className={styles.note}>
            If a model you want is not listed, you can load any GGUF file manually — see the section below.
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Choosing a quantization</h2>
          <p className={styles.prose}>
            Each model is available in multiple quantizations. Quantization reduces the
            precision of the model weights to shrink the file size and memory footprint,
            at the cost of some output quality. Choosing the right quantization is mostly
            a trade-off between your device&apos;s available RAM and how much quality degradation
            you can accept.
          </p>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Quantization</th>
                <th>Size</th>
                <th>Quality</th>
                <th>Recommendation</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Q2_K / Q3_K</td><td>Smallest</td><td>Lowest</td><td>Only if RAM is very limited</td></tr>
              <tr><td>Q4_K_M</td><td>Medium</td><td>Good</td><td>Best default for most devices</td></tr>
              <tr><td>Q5_K_M / Q6_K</td><td>Larger</td><td>Better</td><td>Flagship devices with 8 GB+ RAM</td></tr>
              <tr><td>Q8_0</td><td>Large</td><td>Near-lossless</td><td>12 GB+ RAM only</td></tr>
              <tr><td>F16 / BF16</td><td>Full size</td><td>Original</td><td>Not recommended on mobile</td></tr>
            </tbody>
          </table>
          <p className={styles.prose}>
            <strong>Q4_K_M is the recommended starting point</strong> for most Android devices. It
            offers a good balance of response quality and file size, and will load comfortably
            on devices with 6 GB of RAM when using a 1–3B parameter model.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Loading a custom GGUF file</h2>
          <p className={styles.prose}>
            You can load any GGUF model file you have obtained externally — for example from
            Hugging Face, a self-converted model, or a fine-tuned model shared by the community.
          </p>
          <div className={styles.steps}>
            <div className={styles.step}>
              <span className={styles.stepNumber}>1</span>
              <div className={styles.stepContent}>
                Transfer the <span className={styles.inlineCode}>.gguf</span> file to your Android device via USB, a file manager app, or a cloud storage service.
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>2</span>
              <div className={styles.stepContent}>
                In Maid, go to <strong>Settings</strong> and confirm <strong>Llama</strong> is selected as the API.
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>3</span>
              <div className={styles.stepContent}>
                Tap <strong>Add Model File</strong> and use the file picker to navigate to the <span className={styles.inlineCode}>.gguf</span> file.
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>4</span>
              <div className={styles.stepContent}>
                Once added, select the file from the <strong>Model dropdown</strong> and tap <strong>Load Model</strong>.
              </div>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Performance tips</h2>
          <p className={styles.prose}>
            Local inference is CPU-bound on most Android devices. Here are a few things that
            help get the best performance:
          </p>
          <ul style={{ fontSize: "0.85rem", lineHeight: 1.9, opacity: 0.8, paddingLeft: "1.5rem", margin: 0 }}>
            <li>Close background apps before loading a model to free up RAM.</li>
            <li>Start with Q4_K_M before trying larger quantizations.</li>
            <li>1B and 2B models will run noticeably faster than 3B–4B models on mid-range hardware.</li>
            <li>Keep the screen on while the model is generating — Android may throttle the CPU when the display is off.</li>
            <li>Plug in to charge if running longer sessions; sustained CPU load drains the battery quickly.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/maid/guides" className={shared.ctaButtonSecondary}>← All guides</Link>
            <Link href="/maid" className={shared.ctaButtonSecondary}>Maid overview</Link>
          </div>
        </div>

      </div>
    </main>
  );
}
