import Link from "next/link";
import styles from "@/styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; Kernard Portfolio 2021</p>
      <Link href="/about">About This Portfolio</Link>
    </footer>
  );
}
