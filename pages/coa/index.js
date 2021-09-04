import styles from "../../styles/pages/CoaPage.module.scss";
import ProductCard from "../../components/Products/ProductCard/ProductCard";
import Layout from "../../components/Layout/Layout";
import Button from "../../components/Button/button";

export default function CoaPage() {
  return (
    <Layout>
      <Button text="goback" />
      <section className={styles.container}>
        <h1>coa</h1>
      </section>
    </Layout>
  );
}
