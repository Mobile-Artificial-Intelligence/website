import shared from "@/app/shared.module.css";

interface CardProps {
  title: string;
  children: React.ReactNode;
}

export default function Card({ title, children }: CardProps) {
  return (
    <div className={shared.card}>
      <h3 className={shared.cardTitle}>{title}</h3>
      <p className={shared.cardBody}>{children}</p>
    </div>
  );
}
