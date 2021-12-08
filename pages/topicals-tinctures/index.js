import { getAllProductsFromCategory } from "../../lib/products";

export default function TopicalsAndTincturesPage({ products }) {
  return <h1>topicals and tinctures</h1>;
}

export const getStaticProps = async () => {
  const products = await getAllProductsFromCategory("topicals-tinctures");

  return {
    props: { products },
  };
};
