import Layout from "../components/Layout";
import Link from "next/link";
import styled from "styled-components";
import Img from "../styles/elements/Img";

export default function Home() {
  return (
    <Layout>
      <Nav>
        <Link href="/candies">Candies</Link>
        <Link href="/chocolates">Chocolates</Link>
        <Link href="/flower">Flower</Link>
        <Link href="/topicals-tinctures">Topicals &amp; Tinctures</Link>
      </Nav>
      <IMG src="images/home-bg.png" alt="Candy BG" />
    </Layout>
  );
}

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;

  a {
    padding: 30px 0;
  }
`;

const IMG = styled(Img)`
  position: absolute;
  top: 0;
  z-index: -10;
`;
