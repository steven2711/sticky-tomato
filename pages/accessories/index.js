import products from "../../data/products.json";

export default function AccessoriesPage({ data }) {
  return <h1>accessories page</h1>;
}

export const getStaticProps = async () => {
  const data = products.filter((product) => product.category === "accessories");

  return {
    props: { data },
  };
};
