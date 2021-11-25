import Link from "next/link";
// Social Icons
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";

import styles from "@/styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; Kernard Portfolio 2021</p>
      <div className={styles.socialGroup}>
        {/* Github Social */}
        <div className={styles.socialIcon}>
          <a
            target="_blank"
            href="https://github.com/KernardK"
            rel="noopener noreferrer"
          >
            <SiGithub />
          </a>
        </div>

        {/* LinkedIn Social */}
        <div className={styles.socialIcon}>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/kernardk/"
            rel="noopener noreferrer"
          >
            <SiLinkedin />
          </a>
        </div>
      </div>
      <Link href="/about">About This Portfolio</Link>
    </footer>
  );
}
