import Layout from "../../components/Layout";
import products from "../../data/products.json";
import { flowerBg } from "../../styles/backgrounds";

export default function FlowerPage({ data }) {
  return (
    <Layout background={flowerBg}>
      <h1>flower page</h1>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const data = products.filter((product) => product.category === "flower");

  return {
    props: { data },
  };
};
