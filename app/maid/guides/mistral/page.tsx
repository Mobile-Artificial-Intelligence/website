import Link from "next/link";
import type { Metadata } from "next";
import styles from "../guide.module.css";
import shared from "@/app/shared.module.css";

export const metadata: Metadata = {
  title: "Use Mistral AI with Maid on Android — Setup Guide",
  description: "Connect Maid on Android to Mistral AI's cloud API. Access Mistral Large, Mistral Small, and Codestral using your own API key. Step-by-step setup guide.",
  keywords: [
    "Mistral Android",
    "Mistral AI API Android",
    "Mistral Large Android",
    "Codestral Android",
    "Maid Mistral setup",
    "European AI Android",
    "Mistral API key mobile",
  ],
};

export default function MistralGuidePage() {
  return (
    <main className={shared.page}>
      <div className={styles.guideHero}>
        <p className={styles.breadcrumb}>
          <Link href="/maid">Maid</Link> / <Link href="/maid/guides">Guides</Link> / Mistral
        </p>
        <h1 className={styles.guideTitle}>Use Mistral AI</h1>
        <p className={styles.guideSubtitle}>
          Connect Maid to Mistral AI&apos;s cloud API and access Mistral Large, Mistral Small,
          Codestral, and other models from the European AI lab known for efficient,
          high-quality open-weight models.
        </p>
      </div>

      <div className={styles.body}>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Overview</h2>
          <p className={styles.prose}>
            Mistral AI is a French AI lab that has produced several notable models, including
            <strong> Mistral Large</strong> (a frontier-class model), <strong>Mistral Small</strong>
            (fast and cost-efficient), and <strong>Codestral</strong> (specialized for code generation).
            All are available via the Mistral cloud API using your own API key.
          </p>
          <p className={styles.prose}>
            The Mistral provider in Maid also supports a custom base URL, which means it can
            connect to any self-hosted Mistral-compatible inference server — for example, a
            vLLM or TGI instance running a Mistral model.
          </p>
          <div className={styles.note}>
            Note: the Mistral provider does not support custom HTTP headers. If you need
            header-based authentication, consider using the OpenAI-compatible provider with
            a Mistral-compatible base URL instead.
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Get a Mistral API key</h2>
          <div className={styles.steps}>
            <div className={styles.step}>
              <span className={styles.stepNumber}>1</span>
              <div className={styles.stepContent}>
                Create an account at <a href="https://console.mistral.ai" target="_blank" rel="noopener noreferrer" style={{ color: "#00b7ff" }}>console.mistral.ai</a>.
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>2</span>
              <div className={styles.stepContent}>
                Navigate to <strong>API Keys</strong> in the left-hand menu.
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>3</span>
              <div className={styles.stepContent}>
                Click <strong>Create new key</strong> and copy the generated key.
              </div>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Configure Maid</h2>
          <div className={styles.steps}>
            <div className={styles.step}>
              <span className={styles.stepNumber}>1</span>
              <div className={styles.stepContent}>
                Open <strong>Settings</strong> in Maid and select <strong>Mistral</strong> from the API dropdown.
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>2</span>
              <div className={styles.stepContent}>
                Paste your API key into the <strong>API Key</strong> field.
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>3</span>
              <div className={styles.stepContent}>
                Maid automatically fetches the available models. Select one from the <strong>Model dropdown</strong> — <span className={styles.inlineCode}>mistral-small-latest</span> is a good cost-effective default; use <span className={styles.inlineCode}>mistral-large-latest</span> for more demanding tasks.
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>4</span>
              <div className={styles.stepContent}>
                Optionally set a <strong>Custom Base URL</strong> if connecting to a self-hosted Mistral-compatible server. The default is <span className={styles.inlineCode}>https://api.mistral.ai</span>.
              </div>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Available models</h2>
          <table className={styles.table}>
            <thead>
              <tr><th>Model</th><th>Best for</th></tr>
            </thead>
            <tbody>
              <tr><td>mistral-large-latest</td><td>Demanding tasks, complex reasoning</td></tr>
              <tr><td>mistral-small-latest</td><td>Fast, cost-efficient general use</td></tr>
              <tr><td>codestral-latest</td><td>Code generation and completion</td></tr>
            </tbody>
          </table>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Configuration reference</h2>
          <table className={styles.table}>
            <thead>
              <tr><th>Field</th><th>Required</th><th>Default</th></tr>
            </thead>
            <tbody>
              <tr><td>API Key</td><td>Yes</td><td>—</td></tr>
              <tr><td>Model</td><td>Yes</td><td>Auto-populated</td></tr>
              <tr><td>Base URL</td><td>No</td><td>https://api.mistral.ai</td></tr>
              <tr><td>Parameters</td><td>No</td><td>Provider defaults</td></tr>
            </tbody>
          </table>
        </div>

        <div className={styles.section}>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/maid/guides" className={shared.ctaButtonSecondary}>← All guides</Link>
            <Link href="/maid/guides/deepseek" className={shared.ctaButtonSecondary}>DeepSeek guide</Link>
          </div>
        </div>

      </div>
    </main>
  );
}
