import type { Metadata } from "next";
import style from '../privacy/page.module.css';

export const metadata: Metadata = {
  title: "Terms & Conditions | Mobile Artificial Intelligence",
  description: "Terms and Conditions for the Mobile Artificial Intelligence Distribution app. Read about permitted use, intellectual property, liability, and more.",
};

function TermsAndConditions() {
  return (
    <main className={style.page}>
      <header className={style.header}>
        <h1>Terms &amp; Conditions</h1>
        <p className={style.effective}>Effective 2024-04-10</p>
      </header>

      <div className={style.content}>
        <p>
          These terms and conditions apply to the Mobile Artificial Intelligence
          Distribution app (hereby referred to as &ldquo;Application&rdquo;) for mobile
          devices that was created by danemadsen (hereby referred to as
          &ldquo;Service Provider&rdquo;) as an Open Source service.
        </p>
        <p>
          Upon downloading or utilizing the Application, you are automatically
          agreeing to the following terms. It is strongly advised that you
          thoroughly read and understand these terms prior to using the Application.
        </p>

        <section className={style.section}>
          <h2>Intellectual Property</h2>
          <p>
            Unauthorized copying, modification of the Application, any part of
            the Application, or our trademarks is strictly prohibited. Any
            attempts to extract the source code of the Application, translate the
            Application into other languages, or create derivative versions are
            not permitted.
          </p>
          <p>
            All trademarks, copyrights, database rights, and other intellectual
            property rights related to the Application remain the property of the
            Service Provider.
          </p>
        </section>

        <section className={style.section}>
          <h2>Service Modifications</h2>
          <p>
            The Service Provider is dedicated to ensuring that the Application is
            as beneficial and efficient as possible. As such, they reserve the
            right to modify the Application or charge for their services at any
            time and for any reason. The Service Provider assures you that any
            charges for the Application or its services will be clearly
            communicated to you.
          </p>
        </section>

        <section className={style.section}>
          <h2>Data &amp; Device Security</h2>
          <p>
            The Application stores and processes personal data that you have
            provided to the Service Provider in order to provide the Service. It
            is your responsibility to maintain the security of your phone and
            access to the Application.
          </p>
          <p>
            The Service Provider strongly advises against jailbreaking or rooting
            your phone, which involves removing software restrictions and
            limitations imposed by the official operating system of your device.
            Such actions could expose your phone to malware, viruses, and
            malicious programs, compromise your phone&apos;s security features, and
            may result in the Application not functioning correctly or at all.
          </p>
        </section>

        <section className={style.section}>
          <h2>Third-Party Services</h2>
          <p>
            Please note that the Application utilizes third-party services that
            have their own Terms and Conditions. Below are the links to the Terms
            and Conditions of the third-party service providers used by the
            Application:
          </p>
          <ul>
            <li>
              <a
                href="https://policies.google.com/terms"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Play Services
              </a>
            </li>
          </ul>
        </section>

        <section className={style.section}>
          <h2>Connectivity &amp; Data Charges</h2>
          <p>
            Some functions of the Application require an active internet
            connection, which can be Wi-Fi or provided by your mobile network
            provider. The Service Provider cannot be held responsible if the
            Application does not function at full capacity due to lack of access
            to Wi-Fi or if you have exhausted your data allowance.
          </p>
          <p>
            If you are using the application outside of a Wi-Fi area, please be
            aware that your mobile network provider&apos;s agreement terms still apply.
            Consequently, you may incur charges from your mobile provider for data
            usage during the connection to the application, or other third-party
            charges. By using the application, you accept responsibility for any
            such charges, including roaming data charges if you use the
            application outside of your home territory without disabling data
            roaming.
          </p>
          <p>
            If you are not the bill payer for the device on which you are using
            the application, it is assumed that you have obtained permission from
            the bill payer.
          </p>
        </section>

        <section className={style.section}>
          <h2>Our Responsibility</h2>
          <p>
            While the Service Provider strives to ensure that the Application is
            updated and accurate at all times, they do rely on third parties to
            provide information so that it can be made available to you. The
            Service Provider accepts no liability for any loss, direct or
            indirect, that you experience as a result of relying entirely on this
            functionality of the application.
          </p>
          <p>
            It is your responsibility to ensure that your device remains charged.
            If your device runs out of battery and you are unable to access the
            Service, the Service Provider cannot be held responsible.
          </p>
        </section>

        <section className={style.section}>
          <h2>Updates &amp; Termination</h2>
          <p>
            The Service Provider may wish to update the application at some point.
            The application is currently available as per the requirements for the
            operating system (and for any additional systems the availability of
            the application may be extended to) may change, and you will need to
            download the updates if you want to continue using the application.
          </p>
          <p>
            You agree to always accept updates to the application when offered to
            you. The Service Provider may also wish to cease providing the
            application and may terminate its use at any time without providing
            termination notice to you. Upon any termination: (a) the rights and
            licenses granted to you in these terms will end; (b) you must cease
            using the application, and (if necessary) delete it from your device.
          </p>
        </section>

        <section className={style.section}>
          <h2>Changes to These Terms</h2>
          <p>
            The Service Provider may periodically update these Terms and
            Conditions. Therefore, you are advised to review this page regularly
            for any changes. The Service Provider will notify you of any changes
            by posting the new Terms and Conditions on this page.
          </p>
        </section>

        <section className={style.section}>
          <h2>Contact Us</h2>
          <p>
            If you have any questions or suggestions about these Terms and
            Conditions, please contact the Service Provider at{' '}
            <a href="mailto:dane_madsen@hotmail.com">dane_madsen@hotmail.com</a>.
          </p>
        </section>
      </div>
    </main>
  );
}

export default TermsAndConditions;
