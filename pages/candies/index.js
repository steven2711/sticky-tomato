/* eslint-disable @next/next/no-img-element */
import Layout from "../../components/Layout";
import { getAllProductsFromCategory } from "../../lib";
import Img from "../../styles/elements/Img";
import styled from "styled-components";

export default function CandiesPage({ products }) {
  return (
    <Layout>
      <IMG src="images/grapefruit.png" alt="Grapefruit" />
    </Layout>
  );
}

const IMG = styled(Img)`
  position: absolute;
  bottom: -75px;
  right: -90px;
  width: 100%;
  max-width: 700px;

  @media screen and (max-width: 500px) {
    bottom: -37px;
    right: -55px;
  }
`;

export const getStaticProps = async () => {
  const products = await getAllProductsFromCategory("candies");
  return {
    props: { products },
  };
};
