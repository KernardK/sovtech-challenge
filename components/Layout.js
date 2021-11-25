import Head from "next/head";
import Link from "next/link";

import Footer from "./Footer";
import styles from "../styles/Layout.module.css";

// Layout component taking in props
export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      {/* Header Styling */}
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link href="/">
            <a>Kernard</a>
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link href="/projects">
                <a>Projects</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
}

//
Layout.defaultProps = {
  title: "Kernard | Portfolio and Skills Showcase",
  description:
    "A portfolio website showcasing prociency and software engineering skills",
  keywords:
    "software, programming, python, java, javascript, next js, software engineer",
};
