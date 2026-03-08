import Link from "next/link";
import type { Metadata } from "next";
import shared from "@/app/shared.module.css";
import styles from "./guide.module.css";

export const metadata: Metadata = {
  title: "Maid Guides — Setup & Configuration | Mobile Artificial Intelligence",
  description: "Step-by-step guides for setting up Maid on Android: run AI locally with llama.cpp, connect to Ollama over your home network, or use cloud providers like OpenAI, Anthropic, Mistral, and DeepSeek.",
  keywords: [
    "Maid app guides",
    "Android AI setup",
    "llama.cpp Android tutorial",
    "Ollama Android guide",
    "OpenAI Android app",
    "Claude Android app",
    "local LLM setup",
    "GGUF Android",
  ],
};

const guides = [
  {
    href: "/maid/guides/llama-cpp",
    title: "Run AI Locally with llama.cpp",
    description: "Run GGUF language models entirely on your Android device — no internet, no API key, no cost per query. Covers model selection, quantization, and loading custom files.",
    tag: "Local inference",
  },
  {
    href: "/maid/guides/ollama",
    title: "Connect to Ollama over Your Network",
    description: "Run a large model on your desktop or home server and use Maid on your phone as the chat interface. Covers installation, remote access, and the automatic Find Ollama feature.",
    tag: "Self-hosted",
  },
  {
    href: "/maid/guides/openai",
    title: "Use OpenAI & Compatible APIs",
    description: "Connect Maid to OpenAI's cloud models or any OpenAI-compatible endpoint such as LM Studio, OpenRouter, or vLLM. Covers API key setup and custom base URLs.",
    tag: "Cloud · OpenAI-compatible",
  },
  {
    href: "/maid/guides/anthropic",
    title: "Use Claude via Anthropic API",
    description: "Connect Maid to Anthropic's Claude family of models — including Claude Opus, Sonnet, and Haiku — via the official Anthropic API.",
    tag: "Cloud · Anthropic",
  },
  {
    href: "/maid/guides/deepseek",
    title: "Use DeepSeek",
    description: "Connect Maid to DeepSeek's cloud API, including DeepSeek-V3 and the DeepSeek-R1 reasoning model.",
    tag: "Cloud · DeepSeek",
  },
  {
    href: "/maid/guides/mistral",
    title: "Use Mistral AI",
    description: "Connect Maid to Mistral AI's cloud API. Covers Mistral Large, Mistral Small, and Codestral, plus custom base URL support for self-hosted Mistral-compatible servers.",
    tag: "Cloud · Mistral",
  },
  {
    href: "/maid/guides/llama-cpp-vision",
    title: "Vision Models with llama.cpp",
    description: "Send images to a vision-capable AI model running entirely on your Android device. Covers loading a multimodal projector file alongside a GGUF vision model for fully offline image understanding.",
    tag: "Local inference · Vision",
  },
  {
    href: "/maid/guides/ollama-vision",
    title: "Vision Models with Ollama",
    description: "Use Maid to send images to a vision-capable model running on your desktop via Ollama. Vision support is automatic — just pull a compatible model like llama3.2-vision or llava.",
    tag: "Self-hosted · Vision",
  },
];

export default function GuidesIndexPage() {
  return (
    <main className={shared.page}>
      <div className={styles.guideHero}>
        <p className={styles.breadcrumb}>
          <Link href="/maid">Maid</Link> / Guides
        </p>
        <h1 className={styles.guideTitle}>Maid Guides</h1>
        <p className={styles.guideSubtitle}>
          Everything you need to get Maid set up and working with your preferred
          AI provider — whether that&apos;s a model running on your phone, a
          server on your home network, or a cloud API.
        </p>
      </div>

      <div className={styles.body}>
        <div className={shared.grid2}>
          {guides.map((g) => (
            <Link key={g.href} href={g.href} style={{ textDecoration: "none" }}>
              <div className={shared.card} style={{ height: "100%", cursor: "pointer", transition: "border-color 0.2s ease" }}>
                <p style={{ fontSize: "0.7rem", color: "#00b7ff", opacity: 0.7, marginBottom: "0.5rem" }}>
                  {g.tag}
                </p>
                <h2 className={shared.cardTitle} style={{ fontSize: "1rem", marginBottom: "0.6rem" }}>{g.title}</h2>
                <p className={shared.cardBody}>{g.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
