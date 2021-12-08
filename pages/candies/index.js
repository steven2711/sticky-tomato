import { getAllProductsFromCategory } from "../../lib/products";

export default function CandiesPage({ products }) {
  return <h1>candies page</h1>;
}

export const getStaticProps = async () => {
  const products = await getAllProductsFromCategory("candies");
  return {
    props: { products },
  };
};
