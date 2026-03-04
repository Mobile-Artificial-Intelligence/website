import Link from "next/link";
import type { Metadata } from "next";
import styles from "../guide.module.css";
import shared from "@/app/shared.module.css";

export const metadata: Metadata = {
  title: "Use OpenAI & Compatible APIs with Maid on Android — Setup Guide",
  description: "Connect Maid to OpenAI's cloud models or any OpenAI-compatible endpoint such as LM Studio, OpenRouter, or vLLM. Step-by-step setup guide for Android.",
  keywords: [
    "OpenAI Android app",
    "ChatGPT Android alternative",
    "OpenAI API Android",
    "LM Studio Android",
    "OpenRouter Android",
    "OpenAI compatible API mobile",
    "Maid OpenAI setup",
    "gpt-4o Android",
  ],
};

export default function OpenAIGuidePage() {
  return (
    <main className={shared.page}>
      <div className={styles.guideHero}>
        <p className={styles.breadcrumb}>
          <Link href="/maid">Maid</Link> / <Link href="/maid/guides">Guides</Link> / OpenAI
        </p>
        <h1 className={styles.guideTitle}>Use OpenAI & Compatible APIs</h1>
        <p className={styles.guideSubtitle}>
          Connect Maid to OpenAI&apos;s cloud models — including GPT-4o and o3 — using your
          own API key. The same provider also works with any OpenAI-compatible endpoint,
          including LM Studio, OpenRouter, and vLLM.
        </p>
      </div>

      <div className={styles.body}>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Overview</h2>
          <p className={styles.prose}>
            Maid&apos;s OpenAI provider sends requests to the OpenAI REST API using the standard
            chat completions endpoint. Because the base URL is configurable, it also works
            with any third-party service that implements the same API spec — which many do,
            including local inference servers like LM Studio and cloud aggregators like OpenRouter.
          </p>
          <p className={styles.prose}>
            Unlike the local llama.cpp provider, this option requires an internet connection
            and charges are incurred based on token usage at OpenAI&apos;s current rates.
            Your API key is stored in encrypted local storage on your device and is only
            ever sent to the endpoint you configure.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Get an OpenAI API key</h2>
          <div className={styles.steps}>
            <div className={styles.step}>
              <span className={styles.stepNumber}>1</span>
              <div className={styles.stepContent}>
                Create an account at <a href="https://platform.openai.com" target="_blank" rel="noopener noreferrer" style={{ color: "#00b7ff" }}>platform.openai.com</a>.
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>2</span>
              <div className={styles.stepContent}>
                Navigate to <strong>API Keys</strong> in your account dashboard.
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>3</span>
              <div className={styles.stepContent}>
                Click <strong>Create new secret key</strong>, give it a name, and copy the key. Store it somewhere safe — OpenAI only shows it once.
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
                Open <strong>Settings</strong> in Maid and select <strong>OpenAI</strong> from the API dropdown.
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
                Maid automatically fetches the list of models available on your account and populates the <strong>Model dropdown</strong>. Select a model — for most use cases <span className={styles.inlineCode}>gpt-4o-mini</span> is a good cost-effective choice, while <span className={styles.inlineCode}>gpt-4o</span> offers the best quality.
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>4</span>
              <div className={styles.stepContent}>
                Optionally set a <strong>Custom Base URL</strong> if you are using a compatible third-party endpoint (see below).
              </div>
            </div>
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
              <tr><td>Base URL</td><td>No</td><td>https://api.openai.com/v1</td></tr>
              <tr><td>Custom Headers</td><td>No</td><td>—</td></tr>
              <tr><td>Parameters</td><td>No</td><td>Provider defaults</td></tr>
            </tbody>
          </table>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Using compatible APIs</h2>
          <p className={styles.prose}>
            Because the base URL is configurable, the OpenAI provider in Maid works with
            any service that implements the OpenAI chat completions specification. This
            includes local inference servers — meaning you can run a model on your desktop
            and connect to it from your phone without Ollama.
          </p>
          <table className={styles.table}>
            <thead>
              <tr><th>Service</th><th>Base URL</th><th>API Key</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>LM Studio</td>
                <td><span className={styles.inlineCode}>http://&lt;host&gt;:1234/v1</span></td>
                <td>Not required</td>
              </tr>
              <tr>
                <td>OpenRouter</td>
                <td><span className={styles.inlineCode}>https://openrouter.ai/api/v1</span></td>
                <td>Your OpenRouter key</td>
              </tr>
              <tr>
                <td>vLLM</td>
                <td><span className={styles.inlineCode}>http://&lt;host&gt;:8000/v1</span></td>
                <td>Optional</td>
              </tr>
            </tbody>
          </table>
          <div className={styles.note}>
            When using OpenRouter, you may also need to add an{" "}
            <span className={styles.inlineCode}>HTTP-Referer</span> custom header with your site URL.
            This can be added via the <strong>Headers</strong> panel in Maid&apos;s Settings.
          </div>
        </div>

        <div className={styles.section}>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/maid/guides" className={shared.ctaButtonSecondary}>← All guides</Link>
            <Link href="/maid/guides/anthropic" className={shared.ctaButtonSecondary}>Claude / Anthropic guide</Link>
          </div>
        </div>

      </div>
    </main>
  );
}
