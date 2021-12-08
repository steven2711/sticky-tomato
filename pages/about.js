import Layout from "../components/Layout/Layout";
import Button from "../components/Button/button";
import styled from "styled-components";
import { Container } from "reactstrap";

export default function AboutPage() {
  return (
    <Layout>
      <Button text="go back" />
      <Container>
        <h1>About page</h1>
      </Container>
    </Layout>
  );
}

// const Container = styled.section`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
// `;
