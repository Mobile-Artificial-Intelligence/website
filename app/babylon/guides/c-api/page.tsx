import Link from "next/link";
import type { Metadata } from "next";
import styles from "../guide.module.css";
import shared from "@/app/shared.module.css";

export const metadata: Metadata = {
  title: "Babylon.cpp C and C++ API Reference",
  description: "Complete C and C++ API reference for babylon.cpp. Covers the G2P (phonemizer), Kokoro TTS, and VITS TTS session APIs with function signatures and working examples.",
  keywords: [
    "babylon.cpp C API",
    "babylon C++ API",
    "libbabylon",
    "Kokoro C library",
    "VITS C library",
    "G2P C API",
    "TTS C++ integration",
    "embed TTS C++",
  ],
};

export default function BabylonCApiPage() {
  return (
    <main className={shared.page}>
      <div className={styles.guideHero}>
        <p className={styles.breadcrumb}>
          <Link href="/babylon">Babylon.cpp</Link> / <Link href="/babylon/guides">Guides</Link> / C / C++ API
        </p>
        <h1 className={styles.guideTitle}>C / C++ API</h1>
        <p className={styles.guideSubtitle}>
          Include <code>babylon.h</code> and link against <code>libbabylon</code> to embed
          local G2P and TTS directly in your C or C++ application. A stable C API
          allows FFI use from any language.
        </p>
      </div>

      <div className={styles.body}>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Linking</h2>
          <p className={styles.prose}>
            After building with <span className={styles.inlineCode}>make cli</span>, link against
            the shared library and include the header:
          </p>
          <code className={styles.code}>{`# Linux / Android
gcc -o myapp myapp.c -I/path/to/babylon.cpp/include -L/path/to/bin -lbabylon

# macOS
clang -o myapp myapp.c -I/path/to/babylon.cpp/include -L/path/to/bin -lbabylon`}</code>
          <p className={styles.prose}>
            The library must be able to locate its ONNX Runtime dependency at runtime.
            On Linux, add the <span className={styles.inlineCode}>bin/</span> directory to
            <span className={styles.inlineCode}> LD_LIBRARY_PATH</span>. On macOS, use
            <span className={styles.inlineCode}> DYLD_LIBRARY_PATH</span>.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>C API — G2P (Phonemization)</h2>

          <h3 className={styles.sectionTitle} style={{ fontSize: "1rem", marginTop: "1.5rem" }}>babylon_g2p_init</h3>
          <code className={styles.code}>{`int babylon_g2p_init(const char* model_path,
                     babylon_g2p_options_t options);`}</code>
          <p className={styles.prose}>
            Loads the Open Phonemizer ONNX model. Must be called before any phonemization
            or TTS function. Returns <span className={styles.inlineCode}>0</span> on success,
            non-zero on failure.
          </p>
          <code className={styles.code}>{`typedef struct {
  const char*         dictionary_path; // path to dictionary.json, or NULL
  const unsigned char use_punctuation; // 1 to preserve punctuation, 0 to strip
} babylon_g2p_options_t;`}</code>

          <h3 className={styles.sectionTitle} style={{ fontSize: "1rem", marginTop: "1.5rem" }}>babylon_g2p</h3>
          <code className={styles.code}>{`char* babylon_g2p(const char* text);`}</code>
          <p className={styles.prose}>
            Phonemizes <span className={styles.inlineCode}>text</span> and returns a
            heap-allocated IPA string. The caller must call{" "}
            <span className={styles.inlineCode}>free()</span> on the result.
          </p>

          <h3 className={styles.sectionTitle} style={{ fontSize: "1rem", marginTop: "1.5rem" }}>babylon_g2p_tokens</h3>
          <code className={styles.code}>{`int* babylon_g2p_tokens(const char* text);`}</code>
          <p className={styles.prose}>
            Phonemizes <span className={styles.inlineCode}>text</span> and returns a
            heap-allocated, <span className={styles.inlineCode}>-1</span>-terminated array of
            Kokoro-compatible token IDs. The caller must call{" "}
            <span className={styles.inlineCode}>free()</span> on the result.
          </p>

          <h3 className={styles.sectionTitle} style={{ fontSize: "1rem", marginTop: "1.5rem" }}>babylon_g2p_free</h3>
          <code className={styles.code}>{`void babylon_g2p_free(void);`}</code>
          <p className={styles.prose}>
            Releases the G2P session and frees all associated memory.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>C API — Kokoro TTS</h2>

          <h3 className={styles.sectionTitle} style={{ fontSize: "1rem", marginTop: "1.5rem" }}>babylon_kokoro_init</h3>
          <code className={styles.code}>{`int babylon_kokoro_init(const char* model_path);`}</code>
          <p className={styles.prose}>
            Loads the Kokoro ONNX model. The G2P session must already be initialised.
            Returns <span className={styles.inlineCode}>0</span> on success.
          </p>

          <h3 className={styles.sectionTitle} style={{ fontSize: "1rem", marginTop: "1.5rem" }}>babylon_kokoro_tts</h3>
          <code className={styles.code}>{`void babylon_kokoro_tts(const char* text,
                        const char* voice_path,
                        float       speed,
                        const char* output_path);`}</code>
          <p className={styles.prose}>
            Synthesises <span className={styles.inlineCode}>text</span> using the voice style
            loaded from <span className={styles.inlineCode}>voice_path</span> (.bin file) at the
            given <span className={styles.inlineCode}>speed</span>, writing a 24 kHz WAV file to{" "}
            <span className={styles.inlineCode}>output_path</span>.
          </p>

          <h3 className={styles.sectionTitle} style={{ fontSize: "1rem", marginTop: "1.5rem" }}>babylon_kokoro_free</h3>
          <code className={styles.code}>{`void babylon_kokoro_free(void);`}</code>
          <p className={styles.prose}>Releases the Kokoro session.</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>C API — VITS TTS</h2>

          <h3 className={styles.sectionTitle} style={{ fontSize: "1rem", marginTop: "1.5rem" }}>babylon_tts_init</h3>
          <code className={styles.code}>{`int babylon_tts_init(const char* model_path);`}</code>
          <p className={styles.prose}>
            Loads a VITS ONNX model. The G2P session must already be initialised.
            Returns <span className={styles.inlineCode}>0</span> on success.
          </p>

          <h3 className={styles.sectionTitle} style={{ fontSize: "1rem", marginTop: "1.5rem" }}>babylon_tts</h3>
          <code className={styles.code}>{`void babylon_tts(const char* text, const char* output_path);`}</code>
          <p className={styles.prose}>
            Synthesises <span className={styles.inlineCode}>text</span> and writes a WAV file to{" "}
            <span className={styles.inlineCode}>output_path</span>. The sample rate is determined
            by metadata embedded in the model.
          </p>

          <h3 className={styles.sectionTitle} style={{ fontSize: "1rem", marginTop: "1.5rem" }}>babylon_tts_free</h3>
          <code className={styles.code}>{`void babylon_tts_free(void);`}</code>
          <p className={styles.prose}>Releases the VITS session.</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>C API example</h2>
          <code className={styles.code}>{`#include "babylon.h"
#include <stdlib.h>

int main(void) {
    babylon_g2p_options_t opts = {
        .dictionary_path = "models/dictionary.json",
        .use_punctuation = 1,
    };

    if (babylon_g2p_init("models/open-phonemizer.onnx", opts) != 0)
        return 1;

    if (babylon_kokoro_init("models/kokoro-quantized.onnx") != 0)
        return 1;

    babylon_kokoro_tts(
        "Hello world",
        "models/voices/en-US-heart.bin",
        1.0f,
        "output.wav"
    );

    babylon_kokoro_free();
    babylon_g2p_free();
    return 0;
}`}</code>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>C++ API</h2>
          <p className={styles.prose}>
            Higher-level C++ session classes are available in their respective namespaces.
            Include <span className={styles.inlineCode}>babylon.h</span> and link against the
            same <span className={styles.inlineCode}>libbabylon</span>.
          </p>

          <h3 className={styles.sectionTitle} style={{ fontSize: "1rem", marginTop: "1.5rem" }}>OpenPhonemizer::Session</h3>
          <code className={styles.code}>{`namespace OpenPhonemizer {
  class Session {
  public:
    Session(const std::string& model_path,
            const std::string& dictionary_path = "",
            bool use_punctuation = false);

    // Returns concatenated IPA string
    std::string phonemize(const std::string& text);

    // Returns Kokoro-compatible token IDs
    std::vector<int64_t> phonemize_tokens(const std::string& text);
  };
}`}</code>

          <h3 className={styles.sectionTitle} style={{ fontSize: "1rem", marginTop: "1.5rem" }}>Kokoro::Session</h3>
          <code className={styles.code}>{`namespace Kokoro {
  class Session {
  public:
    Session(const std::string& model_path);

    void tts(const std::string& phonemes,
             const std::string& voice_path,
             float speed,
             const std::string& output_path);
  };
}`}</code>

          <h3 className={styles.sectionTitle} style={{ fontSize: "1rem", marginTop: "1.5rem" }}>Vits::Session</h3>
          <code className={styles.code}>{`namespace Vits {
  class Session {
  public:
    Session(const std::string& model_path);

    void tts(const std::vector<std::string>& phonemes,
             const std::string& output_path);
  };
}`}</code>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>C++ API example</h2>
          <code className={styles.code}>{`#include "babylon.h"

int main() {
    OpenPhonemizer::Session phonemizer(
        "models/open-phonemizer.onnx",
        "models/dictionary.json",
        /* use_punctuation = */ true
    );

    Kokoro::Session kokoro("models/kokoro-quantized.onnx");

    std::string phonemes = phonemizer.phonemize("Hello world");

    kokoro.tts(phonemes,
               "models/voices/en-US-heart.bin",
               /* speed = */ 1.0f,
               "output.wav");

    return 0;
}`}</code>
        </div>

        <div className={styles.section}>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/babylon/guides/rest-api" className={shared.ctaButtonSecondary}>← REST API</Link>
            <Link href="/babylon/guides/python" className={shared.ctaButtonSecondary}>Python Wrapper →</Link>
          </div>
        </div>

      </div>
    </main>
  );
}
