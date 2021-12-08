import products from "../../data/products.json";

export default function CulinaryPage({ data }) {
  return <h1>culinary page</h1>;
}

export const getStaticProps = async () => {
  const data = products.filter((product) => product.category === "culinary");

  return {
    props: { data },
  };
};
