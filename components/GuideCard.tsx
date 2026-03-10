import Link from "next/link";
import shared from "@/app/shared.module.css";
import styles from "./GuideCard.module.css";

interface GuideCardProps {
  href: string;
  title: string;
  description: string;
  tag?: string;
  linkText?: string;
}

export default function GuideCard({ href, title, description, tag, linkText }: GuideCardProps) {
  return (
    <Link href={href} className={styles.card}>
      {tag && <p className={styles.tag}>{tag}</p>}
      <h3 className={styles.title}>{title}</h3>
      <p className={shared.cardBody}>{description}</p>
      {linkText && <span className={styles.link}>{linkText}</span>}
    </Link>
  );
}
