/* eslint-disable @next/next/no-img-element */
import Layout from "../../components/Layout";
import { getAllProductsFromCategory } from "../../lib/products";
import { candyBg } from "../../styles/backgrounds";
import styled from "styled-components";

export default function CandiesPage({ products }) {
  return (
    <Layout background={candyBg}>
      <ImgWrapper>
        <img src="images/grapefruit.png" alt="Grapefruit" />
      </ImgWrapper>
    </Layout>
  );
}

const ImgWrapper = styled.div`
  position: relative;
  bottom: 0;
  width: 100%;
  height: 100%;
  right: 0;
  overflow: hidden;

  img {
    width: 100%;
    max-width: 700px;
    position: absolute;
    bottom: -75px;
    right: -100px;
    display: inline-block;
  }
`;

export const getStaticProps = async () => {
  const products = await getAllProductsFromCategory("candies");
  return {
    props: { products },
  };
};
