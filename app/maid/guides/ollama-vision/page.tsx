import Link from "next/link";
import type { Metadata } from "next";
import styles from "../guide.module.css";
import shared from "@/app/shared.module.css";

export const metadata: Metadata = {
  title: "Use Vision Models with Ollama on Android — Maid Guide",
  description: "Send images to a vision-capable AI model running on your desktop or home server via Ollama. Maid automatically detects vision support — just pull a compatible model and start chatting.",
  keywords: [
    "Ollama vision Android",
    "LLaVA Ollama Android",
    "multimodal Ollama Maid",
    "Ollama image understanding Android",
    "llama3.2-vision Android",
    "moondream Ollama Android",
    "vision model home server",
    "Ollama image chat",
  ],
};

export default function OllamaVisionGuidePage() {
  return (
    <main className={shared.page}>
      <div className={styles.guideHero}>
        <p className={styles.breadcrumb}>
          <Link href="/maid">Maid</Link> / <Link href="/maid/guides">Guides</Link> / Ollama Vision
        </p>
        <h1 className={styles.guideTitle}>Vision Models with Ollama</h1>
        <p className={styles.guideSubtitle}>
          Use Maid to send images to a vision-capable AI model running on your desktop
          or home server via Ollama. Vision support is automatic — no extra configuration
          needed beyond choosing the right model.
        </p>
      </div>

      <div className={styles.body}>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>How it works</h2>
          <p className={styles.prose}>
            When you select a model in the Ollama provider, Maid queries that model&apos;s
            capabilities from your Ollama server. If the model reports vision support, the
            image attachment button is automatically enabled in the prompt input bar — no
            projector files, no extra settings.
          </p>
          <p className={styles.prose}>
            All image processing happens on your Ollama host machine, not on your phone.
            This means you can use large, high-quality vision models (7B, 13B, 34B parameters)
            that would never fit in a phone&apos;s memory.
          </p>
          <div className={styles.note}>
            If you haven&apos;t set up the Ollama connection yet, start with the{" "}
            <Link href="/maid/guides/ollama" style={{ color: "#00b7ff" }}>Ollama setup guide</Link> first.
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Compatible vision models</h2>
          <p className={styles.prose}>
            Ollama supports several vision-capable models. Pull any of the following on your
            host machine to use image chat in Maid:
          </p>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Model</th>
                <th>Pull command</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>LLaVA 1.6 (7B)</td>
                <td><code className={styles.inlineCode}>ollama pull llava</code></td>
                <td>Good general vision quality</td>
              </tr>
              <tr>
                <td>BakLLaVA</td>
                <td><code className={styles.inlineCode}>ollama pull bakllava</code></td>
                <td>Mistral base, good instruction following</td>
              </tr>
              <tr>
                <td>Moondream 2</td>
                <td><code className={styles.inlineCode}>ollama pull moondream</code></td>
                <td>Lightweight, fast, good for simple tasks</td>
              </tr>
              <tr>
                <td>Llama 3.2 Vision (11B)</td>
                <td><code className={styles.inlineCode}>ollama pull llama3.2-vision</code></td>
                <td>Meta&apos;s latest; strong reasoning and vision</td>
              </tr>
              <tr>
                <td>LLaVA-Llama3 (8B)</td>
                <td><code className={styles.inlineCode}>ollama pull llava-llama3</code></td>
                <td>Llama 3 base with vision adapter</td>
              </tr>
            </tbody>
          </table>
          <p className={styles.prose}>
            For the best results on a capable desktop, <strong>llama3.2-vision</strong> is recommended.
            For faster responses on lower-end hardware, <strong>moondream</strong> is a lightweight option.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Setup</h2>
          <div className={styles.steps}>
            <div className={styles.step}>
              <span className={styles.stepNumber}>1</span>
              <div className={styles.stepContent}>
                On your Ollama host machine, pull a vision-capable model. For example:
                <code className={styles.code}>ollama pull llama3.2-vision</code>
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>2</span>
              <div className={styles.stepContent}>
                Make sure Ollama is running and accepting remote connections. If you haven&apos;t
                done this yet, see the <Link href="/maid/guides/ollama" style={{ color: "#00b7ff" }}>Ollama setup guide</Link>.
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>3</span>
              <div className={styles.stepContent}>
                In Maid, go to <strong>Settings</strong> and select <strong>Ollama</strong> from the API dropdown.
                Set the Base URL to your Ollama server (or tap <strong>Find Ollama</strong>).
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>4</span>
              <div className={styles.stepContent}>
                From the <strong>Model dropdown</strong>, select the vision model you pulled
                (e.g. <code className={styles.inlineCode}>llama3.2-vision</code>). Maid automatically
                queries the model&apos;s capabilities.
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>5</span>
              <div className={styles.stepContent}>
                If the model supports vision, the <strong>image icon</strong> becomes active in
                the prompt input bar on the chat screen. No additional configuration is needed.
              </div>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Sending images</h2>
          <p className={styles.prose}>
            Once vision is active for the selected model:
          </p>
          <ol style={{ fontSize: "0.85rem", lineHeight: 1.9, opacity: 0.8, paddingLeft: "1.5rem", margin: 0 }}>
            <li>Tap the <strong>image icon</strong> to the left of the action button. Maid will request photo library access on first use.</li>
            <li>Select one or more images from your gallery.</li>
            <li>Selected images appear as thumbnails above the input field. Tap the <strong>×</strong> on any thumbnail to remove it before sending.</li>
            <li>Type your message (optional) and tap <strong>Send</strong>.</li>
          </ol>
          <p className={styles.prose} style={{ marginTop: "1rem" }}>
            Images are encoded as base64 and sent to your Ollama server alongside the text
            prompt. They are processed entirely on the Ollama host and are not sent to any
            third-party service.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Troubleshooting</h2>
          <p className={styles.prose}><strong>Image button is not active after selecting a model</strong></p>
          <ul style={{ fontSize: "0.85rem", lineHeight: 1.9, opacity: 0.8, paddingLeft: "1.5rem", marginBottom: "1.25rem" }}>
            <li>Confirm the selected model is a vision-capable model (e.g. llava, moondream, llama3.2-vision).</li>
            <li>Text-only models do not expose vision capability — the button will remain inactive.</li>
            <li>Try re-selecting the model from the dropdown to re-trigger the capability check.</li>
          </ul>
          <p className={styles.prose}><strong>Slow image responses</strong></p>
          <ul style={{ fontSize: "0.85rem", lineHeight: 1.9, opacity: 0.8, paddingLeft: "1.5rem", margin: 0 }}>
            <li>Image encoding happens before generation. A brief delay after sending is normal.</li>
            <li>Larger images take longer to encode and consume more context tokens. Use moondream for faster responses on limited hardware.</li>
            <li>Ensure the model fits fully in your GPU VRAM for maximum throughput.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/maid/guides" className={shared.ctaButtonSecondary}>← All guides</Link>
            <Link href="/maid/guides/ollama" className={shared.ctaButtonSecondary}>Ollama setup guide</Link>
            <Link href="/maid/guides/llama-cpp-vision" className={shared.ctaButtonSecondary}>Local vision with llama.cpp</Link>
          </div>
        </div>

      </div>
    </main>
  );
}
