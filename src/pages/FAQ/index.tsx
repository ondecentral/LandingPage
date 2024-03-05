import FaqCard from "components/FaqCard";
import styled from "styled-components";
import { GlobalContainer } from "style/global";

const generals = [
  {
    title: "What is",
    marked: "Lucia Protocol",
    content:
      "Lucia is a protocol for decentralized liquidity markets where users can be either suppliers or borrowers. Suppliers contribute liquidity to the market to earn pasive income, while borrowers can borrow with either overcollateralization (perpetually) or undercollateralization (one-block liquidity).",
  },
  {
    title: "Why",
    marked: "Lucia",
    content: "Lorem",
  },
  {
    title: "How does one interact with",
    marked: "Lucia",
    content: "Lorem",
  },
  {
    title: "How much does it cost to interact with",
    marked: "Lucia",
    content: "Lorem",
  },
  {
    title: "Where are my funds stored",
    content: "Lorem",
  },
  {
    title: "What are the risks",
    content: "Lorem",
  },
];

const FAQ: React.FC = () => {
  return (
    <GlobalContainer>
      <Container>
        {generals.map((_general, index) => (
          <FaqCard {..._general} key={index} />
        ))}
      </Container>
    </GlobalContainer>
  );
};

export default FAQ;

const Container = styled.div``;
