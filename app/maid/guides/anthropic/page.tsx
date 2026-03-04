import Link from "next/link";
import type { Metadata } from "next";
import styles from "../guide.module.css";
import shared from "@/app/shared.module.css";

export const metadata: Metadata = {
  title: "Use Claude (Anthropic API) with Maid on Android — Setup Guide",
  description: "Connect Maid to Anthropic's Claude family of models on Android using your own API key. Step-by-step guide covering API key setup, model selection, and configuration.",
  keywords: [
    "Claude Android app",
    "Anthropic API Android",
    "Claude mobile",
    "claude-opus Android",
    "claude-sonnet Android",
    "Maid Anthropic setup",
    "Claude API key mobile",
    "AI assistant Android Claude",
  ],
};

export default function AnthropicGuidePage() {
  return (
    <main className={shared.page}>
      <div className={styles.guideHero}>
        <p className={styles.breadcrumb}>
          <Link href="/maid">Maid</Link> / <Link href="/maid/guides">Guides</Link> / Anthropic
        </p>
        <h1 className={styles.guideTitle}>Use Claude via Anthropic API</h1>
        <p className={styles.guideSubtitle}>
          Connect Maid to Anthropic&apos;s Claude family of models using your own API key.
          Claude is known for its strong reasoning, long context handling, and careful
          instruction following — available on Android without any dedicated app.
        </p>
      </div>

      <div className={styles.body}>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Overview</h2>
          <p className={styles.prose}>
            Maid connects to the official Anthropic API to give you access to the full
            Claude model family directly from your Android device. Because you supply your
            own API key, you are billed directly by Anthropic at their current token rates —
            there is no subscription or mark-up through Maid.
          </p>
          <p className={styles.prose}>
            Claude models are particularly strong at tasks requiring nuanced reasoning,
            careful instruction following, and handling very long documents. The Haiku
            models are fast and cost-efficient; Sonnet offers a balance of speed and
            capability; Opus is the most capable for demanding tasks.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Get an Anthropic API key</h2>
          <div className={styles.steps}>
            <div className={styles.step}>
              <span className={styles.stepNumber}>1</span>
              <div className={styles.stepContent}>
                Create an account at <a href="https://console.anthropic.com" target="_blank" rel="noopener noreferrer" style={{ color: "#00b7ff" }}>console.anthropic.com</a>.
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>2</span>
              <div className={styles.stepContent}>
                Navigate to <strong>API Keys</strong> in the left-hand sidebar.
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>3</span>
              <div className={styles.stepContent}>
                Click <strong>Create Key</strong>, give it a descriptive name (e.g. &quot;Maid Android&quot;), and copy the generated key. Store it securely.
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>4</span>
              <div className={styles.stepContent}>
                Add billing details to your account if you haven&apos;t already. Anthropic offers some free credits for new accounts; after that, usage is billed per token.
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
                Open <strong>Settings</strong> in Maid and select <strong>Anthropic</strong> from the API dropdown.
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
                Maid fetches the available Claude models automatically and populates the <strong>Model dropdown</strong>. Select your preferred model.
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>4</span>
              <div className={styles.stepContent}>
                Optionally set a <strong>Custom Base URL</strong> if you are routing requests through a proxy or gateway. The default is <span className={styles.inlineCode}>https://api.anthropic.com</span>.
              </div>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Available models</h2>
          <p className={styles.prose}>
            Maid auto-fetches the model list from your account, but here is a reference for
            the current Claude model family:
          </p>
          <table className={styles.table}>
            <thead>
              <tr><th>Model</th><th>Best for</th></tr>
            </thead>
            <tbody>
              <tr><td>claude-opus-4-6</td><td>Most capable — complex reasoning, long documents</td></tr>
              <tr><td>claude-sonnet-4-6</td><td>Balanced performance and cost</td></tr>
              <tr><td>claude-haiku-4-5</td><td>Fastest and most affordable</td></tr>
            </tbody>
          </table>
          <div className={styles.note}>
            Model availability and names change as Anthropic releases updates. The dropdown
            in Maid always reflects what is currently available on your account.
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Configuration reference</h2>
          <table className={styles.table}>
            <thead>
              <tr><th>Field</th><th>Required</th><th>Default</th></tr>
            </thead>
            <tbody>
              <tr><td>API Key</td><td>Yes</td><td>—</td></tr>
              <tr><td>Model</td><td>Yes</td><td>Auto-populated from your account</td></tr>
              <tr><td>Base URL</td><td>No</td><td>https://api.anthropic.com</td></tr>
              <tr><td>Custom Headers</td><td>No</td><td>—</td></tr>
              <tr><td>Parameters</td><td>No</td><td>Provider defaults</td></tr>
            </tbody>
          </table>
        </div>

        <div className={styles.section}>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/maid/guides" className={shared.ctaButtonSecondary}>← All guides</Link>
            <Link href="/maid/guides/openai" className={shared.ctaButtonSecondary}>OpenAI guide</Link>
          </div>
        </div>

      </div>
    </main>
  );
}
