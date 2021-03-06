import Layout from "../../components/Layout";
import products from "../../data/products.json";
import styled from "styled-components";
import Img from "../../styles/elements/Img";

export default function FlowerPage({ data }) {
  return (
    <Layout>
      <IMG src="images/flower.png" alt="Hemp" />
      <BG_IMG src="images/flower-bg.png" alt="Flower Background" />
    </Layout>
  );
}

const IMG = styled(Img)`
  position: absolute;
  bottom: -200px;
  right: -190px;
  width: 100%;
  max-width: 700px;

  @media screen and (max-width: 500px) {
    bottom: -105px;
    right: -110px;
  }
`;

const BG_IMG = styled(Img)`
  position: absolute;
  top: 0;
  z-index: -10;
`;

export const getStaticProps = async () => {
  const data = products.filter((product) => product.category === "flower");

  return {
    props: { data },
  };
};
