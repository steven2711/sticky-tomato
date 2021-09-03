import styles from "../styles/pages/AboutPage.module.scss";
import Layout from "../components/Layout/Layout";

export default function AboutPage() {
  return (
    <Layout>
      <section className={styles.container}>
        <h1>About page</h1>
      </section>
    </Layout>
  );
}
