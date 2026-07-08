import Link from "next/link";

export default function Card({ title, description, href }) {
  return (
    <Link href={href} className="card">
      <h3>{title}</h3>
      <p>{description}</p>
    </Link>
  );
}
