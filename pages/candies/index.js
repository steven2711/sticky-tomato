import Layout from "../../components/Layout";
import { getAllProductsFromCategory } from "../../lib/products";

export default function CandiesPage({ products }) {
  return (
    <Layout>
      <h1>candies page</h1>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const products = await getAllProductsFromCategory("candies");
  return {
    props: { products },
  };
};
