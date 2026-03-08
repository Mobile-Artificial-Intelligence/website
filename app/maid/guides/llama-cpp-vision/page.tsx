import Link from "next/link";
import type { Metadata } from "next";
import styles from "../guide.module.css";
import shared from "@/app/shared.module.css";

export const metadata: Metadata = {
  title: "Use Vision Models Locally on Android with llama.cpp — Maid Guide",
  description: "Send images to a local AI model running on your Android device. Learn how to load a multimodal projector file alongside a GGUF vision model in Maid to enable on-device image understanding — no internet required.",
  keywords: [
    "llama.cpp vision Android",
    "multimodal Android AI",
    "vision model GGUF",
    "mmproj Android",
    "local vision AI Android",
    "LLaVA Android",
    "on-device image understanding",
    "GGUF projector file",
  ],
};

export default function LlamaCppVisionGuidePage() {
  return (
    <main className={shared.page}>
      <div className={styles.guideHero}>
        <p className={styles.breadcrumb}>
          <Link href="/maid">Maid</Link> / <Link href="/maid/guides">Guides</Link> / Vision with llama.cpp
        </p>
        <h1 className={styles.guideTitle}>Vision Models with llama.cpp</h1>
        <p className={styles.guideSubtitle}>
          Send images to a vision-capable AI model running entirely on your Android
          device. No internet connection, no cloud upload — image understanding happens
          on your hardware.
        </p>
      </div>

      <div className={styles.body}>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>How it works</h2>
          <p className={styles.prose}>
            Vision models in llama.cpp are multimodal — they can process both text and images.
            They are made up of two parts: the base language model (a standard GGUF file) and
            a <strong>multimodal projector</strong>, sometimes called a clip or vision adapter.
          </p>
          <p className={styles.prose}>
            The projector is a small auxiliary model that encodes images into a format the
            language model can understand. It is distributed as a separate file with the
            extension <code className={styles.inlineCode}>.mmproj</code> or <code className={styles.inlineCode}>.gguf</code>.
            Both files must be loaded together — the base model alone cannot process images.
          </p>
          <p className={styles.prose}>
            Once both files are loaded, an image attachment button becomes active in the prompt
            input bar. You can attach one or more photos from your gallery, type an optional
            message, and the model will respond with an understanding of both the image and
            your text.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>What you need</h2>
          <p className={styles.prose}>
            You need two files for each vision model — a matched pair of base model and projector.
            They must correspond to the same model architecture; mismatched pairs will not work.
            Common vision-capable GGUF models and their projectors can be found on Hugging Face.
            Some examples include:
          </p>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Model family</th>
                <th>Base GGUF</th>
                <th>Projector file</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>LLaVA 1.5</td>
                <td><code className={styles.inlineCode}>llava-1.5-*.gguf</code></td>
                <td><code className={styles.inlineCode}>mmproj-llava-1.5-*.gguf</code></td>
              </tr>
              <tr>
                <td>LLaVA 1.6 / LLaVA-NeXT</td>
                <td><code className={styles.inlineCode}>llava-v1.6-*.gguf</code></td>
                <td><code className={styles.inlineCode}>mmproj-llava-v1.6-*.gguf</code></td>
              </tr>
              <tr>
                <td>Moondream 2</td>
                <td><code className={styles.inlineCode}>moondream2-*.gguf</code></td>
                <td><code className={styles.inlineCode}>moondream2-mmproj-*.gguf</code></td>
              </tr>
              <tr>
                <td>Gemma 3 Vision</td>
                <td><code className={styles.inlineCode}>gemma-3-*-it-*.gguf</code></td>
                <td><code className={styles.inlineCode}>mmproj-gemma-3-*.gguf</code></td>
              </tr>
            </tbody>
          </table>
          <div className={styles.note}>
            Search Hugging Face for the model name followed by &quot;GGUF&quot; to find quantized
            versions. The projector file is usually in the same repository as the base model.
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Quick start</h2>
          <div className={styles.steps}>
            <div className={styles.step}>
              <span className={styles.stepNumber}>1</span>
              <div className={styles.stepContent}>
                Download a matched vision model GGUF and its projector file to your Android
                device. Transfer them via USB, a file manager, or a cloud storage app.
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>2</span>
              <div className={styles.stepContent}>
                In Maid, go to <strong>Settings</strong> and select <strong>Llama</strong> from the API dropdown.
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>3</span>
              <div className={styles.stepContent}>
                Tap <strong>Add Model File</strong> and select the base <code className={styles.inlineCode}>.gguf</code> model
                file using the file picker. Once added, select it from the <strong>Model dropdown</strong>.
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>4</span>
              <div className={styles.stepContent}>
                Tap <strong>Add Projector File</strong> and select the projector file
                (<code className={styles.inlineCode}>.mmproj</code> or <code className={styles.inlineCode}>.gguf</code>).
                The projector is automatically linked to the currently active model.
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>5</span>
              <div className={styles.stepContent}>
                Tap <strong>Load Model</strong>. Maid loads both the base model and projector.
                When vision is confirmed, the <strong>image</strong> icon becomes active in the
                prompt input bar.
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>6</span>
              <div className={styles.stepContent}>
                Return to the chat screen. Tap the <strong>image icon</strong> to select one
                or more photos from your gallery, type an optional message, and tap <strong>Send</strong>.
              </div>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Projector matching rules</h2>
          <p className={styles.prose}>
            Maid applies the following logic to decide whether a projector will be used:
          </p>
          <ul style={{ fontSize: "0.85rem", lineHeight: 1.9, opacity: 0.8, paddingLeft: "1.5rem", margin: 0 }}>
            <li>The projector key matches the selected model key exactly, <strong>or</strong></li>
            <li>The model was loaded from a local file (model key ends in <code className={styles.inlineCode}>(local)</code>).</li>
          </ul>
          <p className={styles.prose} style={{ marginTop: "1rem" }}>
            In practice this means: if you load both files using <strong>Add Model File</strong> and{" "}
            <strong>Add Projector File</strong>, they are always paired correctly. The projector is
            always associated with the locally-loaded model.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Attaching images</h2>
          <p className={styles.prose}>
            Once a compatible projector is loaded and vision is active:
          </p>
          <ol style={{ fontSize: "0.85rem", lineHeight: 1.9, opacity: 0.8, paddingLeft: "1.5rem", margin: 0 }}>
            <li>Tap the <strong>image icon</strong> to the left of the action button. Maid will request photo library access on first use.</li>
            <li>Select one or more images from your photo library.</li>
            <li>Selected images appear as thumbnails above the input field. Tap the <strong>×</strong> on any thumbnail to remove it before sending.</li>
            <li>Type your message (optional) and tap <strong>Send</strong>.</li>
          </ol>
          <div className={styles.note}>
            Images are encoded as base64 and passed directly to the local model. They are never
            uploaded to any server or cloud service.
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Performance considerations</h2>
          <p className={styles.prose}>
            Vision models are more memory-intensive than text-only models of the same parameter
            count, because the projector adds additional memory overhead and image tokens consume
            context space. Keep the following in mind:
          </p>
          <ul style={{ fontSize: "0.85rem", lineHeight: 1.9, opacity: 0.8, paddingLeft: "1.5rem", margin: 0 }}>
            <li>Start with smaller models (1B–3B) and Q4_K_M quantization to keep RAM usage manageable.</li>
            <li>Image processing happens before text generation — expect a brief pause after sending an image.</li>
            <li>Close background apps before loading a vision model to maximise available RAM.</li>
            <li>Larger or higher-resolution images increase processing time and context token usage.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/maid/guides" className={shared.ctaButtonSecondary}>← All guides</Link>
            <Link href="/maid/guides/llama-cpp" className={shared.ctaButtonSecondary}>llama.cpp setup guide</Link>
            <Link href="/maid/guides/ollama-vision" className={shared.ctaButtonSecondary}>Ollama vision guide →</Link>
          </div>
        </div>

      </div>
    </main>
  );
}
