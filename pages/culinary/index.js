import Layout from "../../components/Layout";
import products from "../../data/products.json";

export default function CulinaryPage({ data }) {
  return (
    <Layout>
      <h1>culinary page</h1>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const data = products.filter((product) => product.category === "culinary");

  return {
    props: { data },
  };
};
