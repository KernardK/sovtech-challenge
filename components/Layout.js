import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import Showcase from "./Showcase";
import AboutMe from "./AboutMe";

import Footer from "./Footer";
import styles from "@/styles/Layout.module.css";

// Layout component taking in props
export default function Layout({ title, keywords, description, children }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" type="image/x-icon" href="/logo.svg" />
      </Head>

      <header className={styles.header}>
        <div className={styles.logo}>
          <Link href="/">
            <a>Kernard</a>
          </Link>
        </div>
      </header>

      {router.pathname === "/" && <Showcase />}
      {router.pathname === "/" && <AboutMe />}
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
