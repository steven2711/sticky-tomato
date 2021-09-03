import styles from "../../styles/pages/TopicalsAndTincturesPage.module.scss";
import ProductCard from "../../components/Products/ProductCard/ProductCard";
import Layout from "../../components/Layout/Layout";
import { NEXT_URL } from "../../config/index";
import Button from "../../components/Button/button";
import products from "../../data/products.json";

export default function TopicalsAndTincturesPage({ data }) {
  return (
    <Layout>
      <Button text="go back" />
      <section className={`productsPageDisplay ${styles.container}`}>
        {data.map((product, index) => {
          return <ProductCard key={index} data={product} />;
        })}
      </section>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const data = products.filter(
    (product) => product.category === "topicals-tinctures"
  );

  return {
    props: { data },
  };
};
