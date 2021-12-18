import Layout from "../../components/Layout";
import Img from "../../styles/elements/Img";
import styled from "styled-components";

export default function TopicalsAndTincturesPage({ products }) {
  return (
    <Layout>
      <IMG src="images/tinctures.png" alt="Tinctures" />
      <BG_IMG src="images/tinctures-bg.png" alt="Tinctures Background" />
    </Layout>
  );
}

const IMG = styled(Img)`
  position: absolute;
  bottom: -54px;
  left: -45px;
  width: 100%;
  max-width: 500px;

  @media screen and (max-width: 500px) {
    bottom: -32px;
    left: -24px;
    max-width: 300px;
  }
`;

const BG_IMG = styled(Img)`
  position: absolute;
  top: 0;
  z-index: -10;
`;

// export const getStaticProps = async () => {
//   const products = await getAllProductsFromCategory("topicals-tinctures");

//   return {
//     props: { products },
//   };
// };
