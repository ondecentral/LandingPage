import { ArrowRight } from "icons";
import { Container } from "./styled";
import { useRef } from "react";

const PastEvents: React.FC = () => {
  const ref = useRef(null);
  return (
    <Container>
      <h1>Past Events</h1>
      <div className="image-container">
        <div className="grid-container" ref={ref}>
          <img src="/images/events/1.png" alt="img" />
          <img src="/images/events/3.png" alt="img" />
          <img src="/images/events/2.png" alt="img" />
          <img src="/images/events/4.png" alt="img" />
          <img src="/images/events/5.png" alt="img" />
          <img src="/images/events/6.png" alt="img" />
          <img src="/images/events/7.png" alt="img" />
          <img src="/images/events/8.png" alt="img" />
          <img src="/images/events/9.png" alt="img" />
          <img src="/images/events/10.png" alt="img" />
          <img src="/images/events/11.png" alt="img" />
          <img src="/images/events/12.png" alt="img" />
          <img src="/images/events/13.png" alt="img" />
        </div>
        <div className="scroll-button">
          <div
            className="icon-wrapper reverse"
            onClick={() => {
              const container = ref.current;
              //@ts-ignore
              container.scrollLeft -= 150;
            }}
          >
            <ArrowRight fill="white" />
          </div>
          <div
            className="icon-wrapper"
            onClick={() => {
              const container = ref.current;
              //@ts-ignore
              container.scrollLeft += 150;
            }}
          >
            <ArrowRight fill="white" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PastEvents;
