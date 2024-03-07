import { TeamCard } from "components";
import styled from "styled-components";
import { GlobalContainer } from "style/global";

const teams = [
  {
    img: "/images/ling.png",
    name: "Ling Qing Meng",
    position: "Chief Executive Officer",
    link: "https://www.linkedin.com/in/ling-qing-meng-6a2803214/",
  },
  {
    img: "/images/andrew.png",
    name: "Andrew Jacobs",
    position: "Chief Operating Officer",
    link: "https://www.linkedin.com/in/andrew-jacobs-205239b3/",
  },
  {
    img: "/images/joseph.png",
    name: "Joseph Nssien",
    position: "Director of Human Resources",
    link: "https://www.linkedin.com/in/josephnssien/",
  },
  {
    img: "/images/ajin.png",
    name: "Ajinkya Rajguru",
    position: "Full-Stack Software Engineer",
    link: "https://www.linkedin.com/in/ajinkya-rajguru/",
  },
  {
    img: "/images/inigo.png",
    name: "Inigo Vaca",
    position: "Director of Marketing",
    link: "https://www.linkedin.com/in/inigo-vaca/",
  },
  {
    img: "/images/usman.png",
    name: "Usman Ndako",
    position: "UI/UX Designer",
    link: "https://www.linkedin.com/in/uyndako/",
  },
  {
    img: "/images/mariano.png",
    name: "Mariano Herrera",
    position: "Web & Media Design Coordinator",
    link: "https://www.linkedin.com/in/mariano-herrera-84a6021ba/",
  },
  {
    img: "/images/isher.png",
    name: "Isherpreet Singh",
    position: "Engineering Director",
    link: "https://www.linkedin.com/in/isherous/",
  },
  {
    img: "/images/victor.png",
    name: "Victor Nwagbogwu",
    position: "Blockchain Engineer",
    link: "https://www.linkedin.com/in/victor-nwagbogwu/",
  },
  {
    img: "/images/meng.png",
    name: "Meng Lin",
    position: "Blockchain Engineer",
    link: "https://linkedin.com",
  },
  {
    img: "/images/jose.png",
    name: "Jose Alejandro Vera",
    position: "Director of Front-End Engineering",
    link: "https://www.linkedin.com/in/josealejandrovera/",
  },
  {
    img: "/images/ved.png",
    name: "Ved Prakash",
    position: "Full-Stack Engineer",
    link: "https://www.linkedin.com/in/prakashved04/",
  },
];

const AboutUs: React.FC = () => {
  return (
    <GlobalContainer>
      <Container>
        <div className="about-us">
          <h1>
            About <span className="gradient">Us</span>
          </h1>
          <p>
            Lucia Protocol is a non-custodial lending and borrowing platform
            aimed at providing frictionless credit access to both individuals
            and startup enterpri- ses. At its core, Lucia stands out for
            revolutionizing the financial sector, offering a comprehensive
            credit evaluation process that takes into account a multitude of
            both on-chain and off-chain metrics. This credit availability is
            intended not just for short-term needs but also for operational
            sustainabili- ty and long-term growth.
          </p>
        </div>
        <div className="our-story">
          <div>
            <h1>Our Story</h1>
            <p>
              Our team is a seasoned group of blockchain experts and experienced
              developers, driven by a deep passion for innovation. With years of
              collective experience in blockchain technology, we've been
              instrumental in pioneering projects and driving the adoption of
              this transformative technology. What sets us apart is our
              unwavering commitment to harnessing blockchain's potential to
              create practical and impactful solutions. With a proven track
              record of delivering high-quality services across various
              platforms, we're not just developers; we're innovators, problem
              solvers, and partners in the journey towards success. Join us, and
              together, let's shape the future of blockchain technology.
            </p>
          </div>
        </div>
        <div className="meet-team">
          <h1>
            Meet the <span className="gradient">Team</span>
          </h1>
          <div className="meet-team-container">
            {teams.map((_team, index) => (
              <TeamCard {..._team} key={index} />
            ))}
          </div>
        </div>
      </Container>
    </GlobalContainer>
  );
};

export default AboutUs;

const Container = styled.div`
  position: relative;
  p {
    font-size: 19px;
  }
  h1 {
    font-size: 61px;
    font-weight: 500;
    padding-bottom: 40px;
  }
  .about-us {
    max-width: 821px;
  }
  .our-story {
    width: 100%;
    padding: 40px;
    margin-top: 80px;
    border-radius: 40px;
    background: #ffffff;
    box-shadow: 0px 34px 84px 0px #0000001a;
    display: flex;
    h1 {
      color: ${({ theme }) => theme.colors.secondaryText};
      font-size: 48px;
      font-weight: 500;
      padding-bottom: 40px;
    }
  }
  .meet-team {
    margin-top: 80px;
  }
  .meet-team-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;
