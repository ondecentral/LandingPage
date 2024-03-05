import RoadmapCard from "components/RoadmapCard";
import { Container } from "./styled";

const PastEvents: React.FC = () => {
  return (
    <Container>
      <h1>Past Events</h1>
      <p>Lorem</p>
      <div className="grid-container">
        <img src="/images/event2.png" />
        <img src="/images/event1.png" />
        <img src="/images/event3.png" />
      </div>
    </Container>
  );
};

export default PastEvents;
