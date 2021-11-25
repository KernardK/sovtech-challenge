import { BiErrorAlt } from "react-icons/bi";

import Link from "next/link";
import Layout from "@/components/Layout";
import styles from "@/styles/404.module.css";

export default function NotFoundPage() {
  return (
    <Layout title="Page Not Found">
      <div className={styles.error}>
        <h1>
          <BiErrorAlt /> 404
        </h1>
        <h4>Appologies, There is nothing to see here</h4>
        <Link href="/">Let us Go Home</Link>
      </div>
    </Layout>
  );
}
