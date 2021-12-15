import Layout from "../../components/Layout";
import products from "../../data/products.json";
import { chocolateBg } from "../../styles/backgrounds";

export default function ChocolatesPage({ data }) {
  return (
    <Layout background={chocolateBg}>
      <h1>chocolates page</h1>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const data = products.filter((product) => product.category === "pets");

  return {
    props: { data },
  };
};
