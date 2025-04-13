import './SdkSection.css';

function SdkSection() {
    return (
        <section id="sdk-section">
            <h1>llama_sdk</h1>
            <p>
                `llama_sdk` is a dart package created for the Mobile Artificial Intelligence Distribution (MAID) project.
                It provides a simple and efficient way to interact with the the llama.cpp library, 
                allowing developers to integrate advanced AI capabilities into their cross platform flutter applications.
            </p>
            <p>
                The package is designed to be easy to use, with a focus on performance and reliability. 
                It builds llama.cpp from source on all platforms to ensure accountability and transparency.
                This means that developers can trust that the code they are using is secure and free from any malicious
                modifications.
            </p>
            <p>Add `llama_sdk` to your flutter project now by running the following command in your flutter project root:</p>
            <div className='code-box' ><code>flutter pub add llama_sdk</code></div>
        </section>
    );
}

export default SdkSection;