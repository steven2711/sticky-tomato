import Layout from "../../components/Layout";
import products from "../../data/products.json";

export default function AccessoriesPage({ data }) {
  return (
    <Layout>
      <h1>accessories page</h1>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const data = products.filter((product) => product.category === "accessories");

  return {
    props: { data },
  };
};
