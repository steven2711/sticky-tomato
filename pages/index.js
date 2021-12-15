import Layout from "../components/Layout";
import Link from "next/link";
import styled from "styled-components";

export default function Home() {
  return (
    <Layout>
      <Nav>
        <Link href="/candies">Candies</Link>
        <Link href="/chocolates">Chocolates</Link>
        <Link href="/flower">Flower</Link>
        <Link href="/topicals-tinctures">Topicals &amp; Tinctures</Link>
      </Nav>
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
