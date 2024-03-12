import { NewsCard } from "components";
import { Container } from "./styled";

const newsContents = [
  {
    title: "Lucia Protocol — Revolutionizing Credit Access in the Digital Age",
    img: "https://miro.medium.com/v2/resize:fill:112:112/1*Z2mbznPE3H0nPz9vBys45A.jpeg",
    content:
      "Unleashing the Power of DeFi: Can Lucia Protocol Transform the Lending and Borrowing Landscape? Introduction Decentralized Finance, or DeFi, has taken the financial ...",
    date: "Oct 18, 2023",
    link: "https://lucia-protocol.medium.com/lucia-protocol-revolutionizing-credit-access-in-the-digital-age-0b81be7b0978",
  },
  {
    title: "Why the first person you hire should be your HR person",
    img: "https://miro.medium.com/v2/resize:fill:112:112/0*HmQYknO7-Wr90ABb.png",
    content:
      "This is actually something I learned while working at a then Series C Silicon Valley startup Branch. I was there and the CEO mentioned to me his background in ...",
    date: "Mar 6, 2024",
    link: "https://lucia-protocol.medium.com/why-the-first-person-you-hire-should-be-your-hr-person-b40b3d090fdc",
  },
  {
    title: "Why Most Founders Suck",
    img: "https://miro.medium.com/v2/resize:fill:224:224/0*MQp_xcSGwZfG0kwn.jpg",
    content:
      "Author: Ling Qing Meng Lot of founders work too much. They don’t allocate their time properly. They don’t pay enough attention to data or metrics. Ultimately this causes their ...",
    date: "Feb 11, 2024",
    link: "https://lucia-protocol.medium.com/why-most-founders-suck-8a4c7549513f",
  },
  {
    title: "Cybersecurity Policy- How to be a modern cyber warrior in 2024",
    img: "https://miro.medium.com/v2/resize:fill:224:224/1*HxCTqdASAJQ721GX3nc-BQ.png",
    content:
      "Anti-fragile policies for web3 and AI startups This is our crypto team’s cybersecurity policy. Sharing for any company to use to create a safer, more resilient organization. There’s ...",
    date: "Feb 1, 2024",
    link: "https://lucia-protocol.medium.com/cybersecurity-policy-f2f4e88383a3",
  },
];

const News: React.FC = () => {
  return (
    <Container>
      <h1>Latest News</h1>
      <div className="card-container">
        {newsContents.map((_news, index) => (
          <NewsCard {..._news} key={index} />
        ))}
      </div>
    </Container>
  );
};

export default News;
