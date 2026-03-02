import type { Metadata } from "next";
import style from './page.module.css';

export const metadata: Metadata = {
  title: "Privacy Policy | Maise",
  description: "Privacy Policy for the Maise on-device TTS and ASR app by Mobile Artificial Intelligence.",
};

function PrivacyPolicy() {
  return (
    <main className={style.page}>
      <header className={style.header}>
        <h1>Privacy Policy</h1>
        <p className={style.effective}>Effective 2026-03-02</p>
      </header>

      <div className={style.content}>
        <p>
          This privacy policy applies to the Maise app (hereby referred to as
          &ldquo;Application&rdquo;) for mobile devices that was created by Mobile
          Artificial Intelligence (hereby referred to as &ldquo;Service Provider&rdquo;)
          as an Open Source service. This service is intended for use &ldquo;AS IS&rdquo;.
        </p>

        <section className={style.section}>
          <h2>Information Collection and Use</h2>
          <p>
            The Application does not obtain any information when you download and
            use it. Registration is not required to use the Application.
          </p>
        </section>

        <section className={style.section}>
          <h2>Location Data</h2>
          <p>
            This Application does not collect precise information about the
            location of your mobile device.
          </p>
        </section>

        <section className={style.section}>
          <h2>Third Party Access</h2>
          <p>
            Since the Application does not collect any information, no data is
            shared with third parties.
          </p>
        </section>

        <section className={style.section}>
          <h2>Opt-Out Rights</h2>
          <p>
            You can stop all collection of information by the Application easily
            by uninstalling it. You may use the standard uninstall processes as
            may be available as part of your mobile device or via the mobile
            application marketplace or network.
          </p>
        </section>

        <section className={style.section}>
          <h2>Children</h2>
          <p>
            The Application is not used to knowingly solicit data from or market
            to children under the age of 13.
          </p>
          <p>
            The Service Provider does not knowingly collect personally
            identifiable information from children. The Service Provider
            encourages all children to never submit any personally identifiable
            information through the Application and/or Services. Parents and
            legal guardians are encouraged to monitor their children&apos;s Internet
            usage and to help enforce this Policy by instructing their children
            never to provide personally identifiable information through the
            Application and/or Services without their permission.
          </p>
          <p>
            If you have reason to believe that a child has provided personally
            identifiable information to the Service Provider through the
            Application and/or Services, please contact the Service Provider at{' '}
            <a href="mailto:dane_madsen@hotmail.com">dane_madsen@hotmail.com</a>{' '}
            so that the necessary actions can be taken. You must also be at least
            16 years of age to consent to the processing of your personally
            identifiable information in your country (in some countries a parent
            or guardian may do so on your behalf).
          </p>
        </section>

        <section className={style.section}>
          <h2>Security</h2>
          <p>
            The Service Provider is concerned about safeguarding the
            confidentiality of your information. However, since the Application
            does not collect any information, there is no risk of your data being
            accessed by unauthorized individuals.
          </p>
        </section>

        <section className={style.section}>
          <h2>Changes to This Privacy Policy</h2>
          <p>
            This Privacy Policy may be updated from time to time for any reason.
            The Service Provider will notify you of any changes by updating this
            page with the new Privacy Policy. You are advised to consult this
            Privacy Policy regularly for any changes, as continued use is deemed
            approval of all changes.
          </p>
        </section>

        <section className={style.section}>
          <h2>Your Consent</h2>
          <p>
            By using the Application, you are consenting to the processing of
            your information as set forth in this Privacy Policy now and as
            amended by the Service Provider.
          </p>
        </section>

        <section className={style.section}>
          <h2>Contact Us</h2>
          <p>
            If you have any questions regarding privacy while using the
            Application, or have questions about the practices, please contact
            the Service Provider via email at{' '}
            <a href="mailto:dane_madsen@hotmail.com">dane_madsen@hotmail.com</a>.
          </p>
        </section>
      </div>
    </main>
  );
}

export default PrivacyPolicy;
