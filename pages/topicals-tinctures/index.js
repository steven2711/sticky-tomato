import styles from "../../styles/pages/TopicalsAndTincturesPage.module.scss";
import ProductCard from "../../components/Products/ProductCard/ProductCard";
import Layout from "../../components/Layout/Layout";
import Button from "../../components/Button/button";
import { getAllProductsFromCategory } from "../../lib/products";

export default function TopicalsAndTincturesPage({ products }) {
  return (
    <Layout>
      <Button text="go back" />
      <section className={`productsPageDisplay ${styles.container}`}>
        {products.map((product, index) => {
          return <ProductCard key={index} data={product} />;
        })}
      </section>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const products = await getAllProductsFromCategory("topicals-tinctures");

  return {
    props: { products },
  };
};
