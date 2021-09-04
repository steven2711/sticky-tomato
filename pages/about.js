import styles from "../styles/pages/AboutPage.module.scss";
import Layout from "../components/Layout/Layout";
import Button from "../components/Button/button";

export default function AboutPage() {
  return (
    <Layout>
      <Button text="go back" />
      <section className={styles.container}>
        <h1>About page</h1>
      </section>
    </Layout>
  );
}
