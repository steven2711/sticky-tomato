import Layout from "../../components/Layout";
import products from "../../data/products.json";
import styled from "styled-components";
import Img from "../../styles/elements/Img";

export default function ChocolatesPage({ data }) {
  return (
    <Layout>
      <IMG src="images/chocolate.png" alt="Chocolate" />
      <BG_IMG src="images/chocolate-bg.png" alt="Chocolate Background" />
    </Layout>
  );
}

const IMG = styled(Img)`
  position: absolute;
  bottom: -105px;
  left: -85px;
  width: 100%;
  max-width: 700px;

  @media screen and (max-width: 500px) {
    bottom: -53px;
    left: -60px;
  }
`;

const BG_IMG = styled(Img)`
  position: absolute;
  top: 0;
  z-index: -10;
`;

export const getStaticProps = async () => {
  const data = products.filter((product) => product.category === "pets");

  return {
    props: { data },
  };
};
