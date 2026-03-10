import Link from "next/link";
import type { Metadata } from "next";
import shared from "@/app/shared.module.css";
import styles from "./guide.module.css";
import GuideCard from "@/components/GuideCard";

export const metadata: Metadata = {
  title: "Babylon.cpp Guides — Build, Integrate & Use | Mobile Artificial Intelligence",
  description: "Step-by-step guides for babylon.cpp: build from source, set up Kokoro and VITS models, use the CLI, call the REST API, and integrate the C/C++ or Python library into your project.",
  keywords: [
    "babylon.cpp guide",
    "build babylon.cpp",
    "Kokoro TTS setup",
    "VITS TTS guide",
    "G2P library guide",
    "local TTS integration",
    "C++ TTS tutorial",
    "babylon REST API",
    "babylon Python",
  ],
};

const guides = [
  {
    href: "/babylon/guides/getting-started",
    title: "Getting Started",
    description: "Build babylon.cpp from source, download model files, and run your first phonemization and speech synthesis in minutes.",
    tag: "Setup",
  },
  {
    href: "/babylon/guides/cli-usage",
    title: "CLI Usage",
    description: "Use the babylon command-line tool to phonemize text to IPA, synthesise WAV audio, and launch the local REST API server.",
    tag: "Reference",
  },
  {
    href: "/babylon/guides/rest-api",
    title: "REST API",
    description: "Integrate local TTS and G2P into any application via the built-in HTTP server. Covers all endpoints with request and response examples.",
    tag: "Reference",
  },
  {
    href: "/babylon/guides/c-api",
    title: "C / C++ API",
    description: "Embed babylon.cpp in your C or C++ project. Complete function reference for the G2P, Kokoro, and VITS session APIs.",
    tag: "Integration",
  },
  {
    href: "/babylon/guides/python",
    title: "Python Wrapper",
    description: "Use the pre-built Python package to add local G2P and TTS to any Python project — no compilation required.",
    tag: "Integration",
  },
];

export default function BabylonGuidesIndexPage() {
  return (
    <main className={shared.page}>
      <div className={styles.guideHero}>
        <p className={styles.breadcrumb}>
          <Link href="/babylon">Babylon.cpp</Link> / Guides
        </p>
        <h1 className={styles.guideTitle}>Babylon.cpp Guides</h1>
        <p className={styles.guideSubtitle}>
          Everything you need to build, integrate, and use babylon.cpp — from
          compiling the library to calling the REST API from any language.
        </p>
      </div>

      <div className={styles.body}>
        <div className={shared.grid2}>
          {guides.map((g) => (
            <GuideCard key={g.href} href={g.href} title={g.title} description={g.description} tag={g.tag} />
          ))}
        </div>
      </div>
    </main>
  );
}
