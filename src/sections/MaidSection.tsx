import './MaidSection.css';

function MaidSection() {
    return (
        <section id="maid-section">
            <div className="maid-text">
                <h1>Mobile Artificial Intelligence Distribution</h1>
                <p>
                    The Mobile Artifical Intelligence Distribution (MAID) project is a research initiative 
                    focused on the development and deployment of artificial intelligence (AI) systems on 
                    mobile devices. 
                </p>
                <p>
                    The goal of MAID is to create a frontend for AI that is private, secure, 
                    and efficient, allowing users to leverage the power of AI without compromising their
                    personal data or privacy.
                </p>
            </div>
            <div id="maid-links">
                <a href='https://play.google.com/store/apps/details?id=com.danemadsen.maid&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                  <img 
                    src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'
                    alt='Get it on Google Play'
                    height="80"
                  />
                </a>
                <a href="https://f-droid.org/packages/com.danemadsen.maid/">
                  <img 
                    src="https://fdroid.gitlab.io/artwork/badge/get-it-on.png"
                    alt="Get it on F-Droid"
                    height="80"
                  />
                </a>
                <a href="https://www.openapk.net/maid/com.danemadsen.maid/">
                  <img 
                    src="https://www.openapk.net/images/openapk-badge.png"
                    alt="Get it on OpenAPK"
                    height="80"
                  />
                </a>
                <a href="https://www.androidfreeware.net/download-maid-apk.html">
                  <img 
                    src="https://www.androidfreeware.net/images/androidfreeware-badge.png"
                    alt="Get it on Android Freeware"
                    height="80"
                  />
                </a>
                <a href="https://github.com/Mobile-Artificial-Intelligence/maid/releases/latest">
                  <img
                    src="https://raw.githubusercontent.com/NeoApplications/Neo-Backup/refs/heads/main/badge_github.png"
                    alt="Get it on GitHub"
                    width="210" 
                  />
                </a>
            </div>
            <div className="maid-text">
                <h2>First of its kind</h2>
                <p>
                    In development since 2022, Maid is the first project to allow users to conveniently chat with 
                    large language models locally on their mobile devices without a internet connection. 
                </p>
                <p>
                    Maid is also one of the only AI frontends with a broad support of all platforms. Whether you are
                    using a mobile device, a desktop computer, or a web browser, Maid has you covered.
                </p>
            </div>
            <div id="maid-lists">
                <div className="maid-text">
                    <h2>Supported Ecosystems</h2>
                    <ul>
                        <li>Llama.cpp</li>
                        <li>Ollama</li>
                        <li>OpenAI</li>
                        <li>Mistral</li>
                        <li>Anthropic</li>
                        <li>Google Gemini</li>
                    </ul>
                </div>
                <div className="maid-text">
                    <h2>Supported Platforms</h2>
                    <ul>
                        <li>Android</li>
                        <li>Windows</li>
                        <li>Linux</li>
                        <li>MacOS</li>
                        <li>Web</li>
                    </ul>
                </div>
            </div>
            <div id="maid-carousel">
                <img src="/maid/1.png" alt="maid screen 1" />
                <img src="/maid/2.png" alt="maid screen 2" />
                <img src="/maid/3.png" alt="maid screen 3" />
                <img src="/maid/4.png" alt="maid screen 4" />
                <img src="/maid/5.png" alt="maid screen 5" />
                <img src="/maid/6.png" alt="maid screen 6" />
                <img src="/maid/7.png" alt="maid screen 7" />
            </div>
        </section>
    );
}

export default MaidSection;