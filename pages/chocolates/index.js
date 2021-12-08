import products from "../../data/products.json";

export default function ChocolatesPage({ data }) {
  return <h1>chocolates page</h1>;
}

export const getStaticProps = async () => {
  const data = products.filter((product) => product.category === "pets");

  return {
    props: { data },
  };
};
