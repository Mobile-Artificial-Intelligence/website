import './MaidSection.css';

function MaidSection() {
    return (
        <section id="maid-section">
            <div id="maid-text">
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