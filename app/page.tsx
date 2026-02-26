import Image from "next/image";
import styles from "@/app/page.module.css";

export default function Home() {
  return (
    <div>
      <section className={styles.titleSection} >
          <h1>Mobile + AI</h1>
          <h2>Artificial Intelligence on the edge</h2>
          <h2>Brisbane, Australia</h2>
      </section>
    </div>
  );
}
