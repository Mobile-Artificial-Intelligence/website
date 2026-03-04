import Link from "next/link";
import type { Metadata } from "next";
import styles from "../guide.module.css";
import shared from "@/app/shared.module.css";

export const metadata: Metadata = {
  title: "Use Ollama with Maid on Android — Setup Guide",
  description: "Run large AI models on your desktop or home server and use Maid on your Android phone as the chat interface. Step-by-step guide to installing Ollama, allowing remote connections, and connecting via Maid's Find Ollama feature.",
  keywords: [
    "Ollama Android",
    "Ollama mobile",
    "connect Ollama phone",
    "Ollama local network Android",
    "Maid Ollama setup",
    "self-hosted LLM Android",
    "Ollama remote access",
    "local AI home server Android",
  ],
};

export default function OllamaGuidePage() {
  return (
    <main className={shared.page}>
      <div className={styles.guideHero}>
        <p className={styles.breadcrumb}>
          <Link href="/maid">Maid</Link> / <Link href="/maid/guides">Guides</Link> / Ollama
        </p>
        <h1 className={styles.guideTitle}>Connect to Ollama over Your Network</h1>
        <p className={styles.guideSubtitle}>
          Use Maid as a mobile chat interface for an Ollama instance running on your
          desktop or home server. This lets you run larger, more capable models on
          real hardware while keeping your phone in your pocket.
        </p>
      </div>

      <div className={styles.body}>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>What is Ollama?</h2>
          <p className={styles.prose}>
            <strong>Ollama</strong> is an open-source tool that makes it easy to download and run large
            language models on macOS, Linux, and Windows. It manages model downloads,
            handles GGUF and other formats, and exposes a simple REST API on
            <span className={styles.inlineCode}>http://localhost:11434</span> that Maid can talk to.
          </p>
          <p className={styles.prose}>
            The key advantage over Maid&apos;s built-in llama.cpp provider is hardware: a desktop
            CPU or GPU can run much larger models (7B, 13B, 70B+ parameters) that would never
            fit in an Android phone&apos;s memory. Your phone acts purely as the chat front-end —
            input and output only, with all the heavy inference happening on the server.
          </p>
          <div className={styles.note}>
            Your phone and the Ollama host must be on the <strong>same local network</strong> (e.g. the same Wi-Fi) for this to work.
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Step 1 — Install Ollama on your computer</h2>
          <p className={styles.prose}>
            Download and install Ollama on the machine that will act as the server. Official
            installers are available for macOS, Linux, and Windows at{" "}
            <a href="https://ollama.com" target="_blank" rel="noopener noreferrer" style={{ color: "#00b7ff" }}>ollama.com</a>.
          </p>
          <p className={styles.prose}>
            Once installed, pull a model to get started. For example, to download Llama 3.2 (3B):
          </p>
          <code className={styles.code}>ollama pull llama3.2</code>
          <p className={styles.prose}>
            You can pull any model from the Ollama library. Larger models like Llama 3.1 70B
            or Mistral Large will give much better results on a capable desktop than anything
            that can run locally on a phone.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Step 2 — Allow remote connections</h2>
          <p className={styles.prose}>
            By default Ollama only accepts connections from the same machine
            (<span className={styles.inlineCode}>localhost</span>). To let Maid on your phone connect to it,
            you need to tell Ollama to listen on all network interfaces.
          </p>
          <p className={styles.prose}><strong>On Linux / macOS (terminal):</strong></p>
          <code className={styles.code}>OLLAMA_HOST=0.0.0.0 ollama serve</code>
          <p className={styles.prose}><strong>On Windows (PowerShell):</strong></p>
          <code className={styles.code}>{`$env:OLLAMA_HOST="0.0.0.0"; ollama serve`}</code>
          <p className={styles.prose}>
            You also need to make sure your firewall allows inbound TCP connections on port{" "}
            <span className={styles.inlineCode}>11434</span> from your local network. On most home networks
            this is the only step required. On corporate or managed networks, additional
            firewall rules may be needed.
          </p>
          <div className={styles.note}>
            If you want Ollama to always start with remote access enabled, set
            {" "}<span className={styles.inlineCode}>OLLAMA_HOST=0.0.0.0</span> as a permanent environment
            variable in your system settings or shell profile.
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Step 3 — Connect from Maid</h2>
          <p className={styles.prose}>
            With Ollama running and accepting remote connections, open Maid and configure it to connect.
          </p>
          <div className={styles.steps}>
            <div className={styles.step}>
              <span className={styles.stepNumber}>1</span>
              <div className={styles.stepContent}>
                In Maid, go to <strong>Settings</strong> and select <strong>Ollama</strong> from the API dropdown.
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>2</span>
              <div className={styles.stepContent}>
                <strong>Option A — Automatic:</strong> Tap <strong>Find Ollama</strong>. Maid scans every host on your local subnet at port 11434 simultaneously. The first responding host is set as the base URL. An alert appears if nothing is found.
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>3</span>
              <div className={styles.stepContent}>
                <strong>Option B — Manual:</strong> Enter the server&apos;s IP address in the <strong>Base URL</strong> field directly. Example:
                <code className={styles.code}>http://192.168.1.100:11434</code>
                You can find the server&apos;s local IP with <span className={styles.inlineCode}>ip addr</span> (Linux), <span className={styles.inlineCode}>ifconfig</span> (macOS), or <span className={styles.inlineCode}>ipconfig</span> (Windows).
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>4</span>
              <div className={styles.stepContent}>
                Once the base URL is set, Maid fetches the list of available models from your Ollama server and populates the <strong>Model dropdown</strong> automatically. Select the model you want to use.
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>5</span>
              <div className={styles.stepContent}>
                Return to the chat screen. Your messages are sent to Ollama over your local network and responses are streamed back in real time.
              </div>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Configuration reference</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Field</th>
                <th>Required</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Base URL</td><td>Yes</td><td>e.g. http://192.168.1.100:11434</td></tr>
              <tr><td>Model</td><td>Yes</td><td>Auto-populated from your Ollama instance</td></tr>
              <tr><td>Custom Headers</td><td>No</td><td>Useful for proxies requiring authentication</td></tr>
              <tr><td>Parameters</td><td>No</td><td>temperature, top_p, top_k, max_tokens, etc.</td></tr>
            </tbody>
          </table>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Troubleshooting</h2>
          <p className={styles.prose}><strong>Find Ollama finds nothing</strong></p>
          <ul style={{ fontFamily: "var(--font-space-mono)", fontSize: "0.85rem", lineHeight: 1.9, opacity: 0.8, paddingLeft: "1.5rem", marginBottom: "1.25rem" }}>
            <li>Confirm Ollama is running with <span className={styles.inlineCode}>OLLAMA_HOST=0.0.0.0</span>.</li>
            <li>Check that the firewall on the server allows port 11434.</li>
            <li>Make sure both devices are on the same Wi-Fi network (not guest vs. main).</li>
          </ul>
          <p className={styles.prose}><strong>Model dropdown is empty after setting the Base URL</strong></p>
          <ul style={{ fontFamily: "var(--font-space-mono)", fontSize: "0.85rem", lineHeight: 1.9, opacity: 0.8, paddingLeft: "1.5rem", marginBottom: "1.25rem" }}>
            <li>Run <span className={styles.inlineCode}>ollama list</span> on the server to confirm you have models pulled.</li>
            <li>Pull at least one model with <span className={styles.inlineCode}>ollama pull &lt;model-name&gt;</span>.</li>
          </ul>
          <p className={styles.prose}><strong>Slow responses</strong></p>
          <ul style={{ fontFamily: "var(--font-space-mono)", fontSize: "0.85rem", lineHeight: 1.9, opacity: 0.8, paddingLeft: "1.5rem", margin: 0 }}>
            <li>The bottleneck is almost always the server, not the network. Try a smaller model or one that fits fully in your GPU VRAM.</li>
            <li>Check server CPU/GPU utilization with <span className={styles.inlineCode}>htop</span> or your GPU monitoring tool.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/maid/guides" className={shared.ctaButtonSecondary}>← All guides</Link>
            <Link href="/maid/guides/llama-cpp" className={shared.ctaButtonSecondary}>Run locally with llama.cpp</Link>
          </div>
        </div>

      </div>
    </main>
  );
}
