import styles from "../../styles/pages/CandiesPage.module.scss";
import ProductCard from "../../components/Products/ProductCard/ProductCard";
import Layout from "../../components/Layout/Layout";
import Button from "../../components/Button/button";
import { getAllProductsFromCategory } from "../../lib/products";

export default function CandiesPage({ products }) {
  return (
    <Layout>
      <Button text="go back" />
      <section className={`productsPageDisplay ${styles.container}`}>
        {products.map((product, index) => {
          return <ProductCard key={index} product={product} />;
        })}
      </section>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const products = await getAllProductsFromCategory("candies");
  return {
    props: { products },
  };
};
