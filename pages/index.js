import styled from "styled-components";
import Header from "../src/components/Header";

const Title = styled.h1`
  font-size: 50px;
  color: var(--color-primary);
`;

export default function Home() {
  return (
    <div>
      <Title>My page</Title>
      <Header />
    </div>
  );
}
