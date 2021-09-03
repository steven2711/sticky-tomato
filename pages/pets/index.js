import styles from "../../styles/pages/PetsPage.module.scss";
import ProductCard from "../../components/Products/ProductCard/ProductCard";
import Layout from "../../components/Layout/Layout";
import { NEXT_URL } from "../../config/index";
import Button from "../../components/Button/button";

export default function PetsPage({ data: { data } }) {
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
  const res = await fetch(`${NEXT_URL}/api/products?filter=pets`);
  const data = await res.json();

  return {
    props: { data },
  };
};
