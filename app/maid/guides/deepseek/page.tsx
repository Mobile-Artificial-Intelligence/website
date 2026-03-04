import Link from "next/link";
import type { Metadata } from "next";
import styles from "../guide.module.css";
import shared from "@/app/shared.module.css";

export const metadata: Metadata = {
  title: "Use DeepSeek with Maid on Android — Setup Guide",
  description: "Connect Maid on Android to the DeepSeek API, including DeepSeek-V3 and the DeepSeek-R1 reasoning model. Step-by-step API key and configuration guide.",
  keywords: [
    "DeepSeek Android",
    "DeepSeek API Android",
    "DeepSeek-R1 Android",
    "DeepSeek-V3 mobile",
    "Maid DeepSeek setup",
    "DeepSeek reasoning model Android",
    "AI reasoning Android",
  ],
};

export default function DeepSeekGuidePage() {
  return (
    <main className={shared.page}>
      <div className={styles.guideHero}>
        <p className={styles.breadcrumb}>
          <Link href="/maid">Maid</Link> / <Link href="/maid/guides">Guides</Link> / DeepSeek
        </p>
        <h1 className={styles.guideTitle}>Use DeepSeek</h1>
        <p className={styles.guideSubtitle}>
          Connect Maid to DeepSeek&apos;s cloud API and access DeepSeek-V3 and the
          DeepSeek-R1 reasoning model — both competitive with frontier models at
          a fraction of the cost.
        </p>
      </div>

      <div className={styles.body}>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Overview</h2>
          <p className={styles.prose}>
            DeepSeek is a Chinese AI lab that has released a series of high-quality
            open-weight models, including <strong>DeepSeek-V3</strong> (a general-purpose
            chat model) and <strong>DeepSeek-R1</strong> (a reasoning model that shows its
            chain-of-thought before answering). Both are available via the DeepSeek cloud API.
          </p>
          <p className={styles.prose}>
            DeepSeek pricing is notably lower than comparable models from OpenAI or Anthropic,
            which makes it an attractive option if you do a high volume of queries. The API
            endpoint is fixed at <span className={styles.inlineCode}>https://api.deepseek.com</span> and
            is not configurable.
          </p>
          <div className={styles.note}>
            Maid displays the reasoning trace from DeepSeek-R1 as a collapsible &quot;Show Reasoning&quot;
            block above the final response — the same way it handles other thinking models.
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Get a DeepSeek API key</h2>
          <div className={styles.steps}>
            <div className={styles.step}>
              <span className={styles.stepNumber}>1</span>
              <div className={styles.stepContent}>
                Create an account at <a href="https://platform.deepseek.com" target="_blank" rel="noopener noreferrer" style={{ color: "#00b7ff" }}>platform.deepseek.com</a>.
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>2</span>
              <div className={styles.stepContent}>
                Navigate to <strong>API Keys</strong> in your dashboard.
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>3</span>
              <div className={styles.stepContent}>
                Click <strong>Create API Key</strong> and copy the generated key.
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
                Open <strong>Settings</strong> in Maid and select <strong>DeepSeek</strong> from the API dropdown.
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
                Maid fetches available models automatically. Select <strong>deepseek-chat</strong> for general use, or <strong>deepseek-reasoner</strong> for the R1 reasoning model.
              </div>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Available models</h2>
          <table className={styles.table}>
            <thead>
              <tr><th>Model ID</th><th>Description</th></tr>
            </thead>
            <tbody>
              <tr><td>deepseek-chat</td><td>DeepSeek-V3 — general-purpose chat and instruction following</td></tr>
              <tr><td>deepseek-reasoner</td><td>DeepSeek-R1 — chain-of-thought reasoning model</td></tr>
            </tbody>
          </table>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Configuration reference</h2>
          <table className={styles.table}>
            <thead>
              <tr><th>Field</th><th>Required</th><th>Notes</th></tr>
            </thead>
            <tbody>
              <tr><td>API Key</td><td>Yes</td><td>—</td></tr>
              <tr><td>Model</td><td>Yes</td><td>Auto-populated</td></tr>
              <tr><td>Base URL</td><td>No</td><td>Fixed — not configurable</td></tr>
              <tr><td>Custom Headers</td><td>No</td><td>Supported</td></tr>
              <tr><td>Parameters</td><td>No</td><td>Provider defaults</td></tr>
            </tbody>
          </table>
        </div>

        <div className={styles.section}>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/maid/guides" className={shared.ctaButtonSecondary}>← All guides</Link>
            <Link href="/maid/guides/mistral" className={shared.ctaButtonSecondary}>Mistral guide</Link>
          </div>
        </div>

      </div>
    </main>
  );
}
