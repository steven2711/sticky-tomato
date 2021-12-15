import Layout from "../../components/Layout";
import { getAllProductsFromCategory } from "../../lib/products";

export default function TopicalsAndTincturesPage({ products }) {
  return (
    <Layout>
      <h1>topicals and tinctures</h1>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const products = await getAllProductsFromCategory("topicals-tinctures");

  return {
    props: { products },
  };
};
