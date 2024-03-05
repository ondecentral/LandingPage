import styled from "styled-components";
import { Button } from "components";
import { GlobalContainer } from "style/global";
const ChatUs: React.FC = () => {
  return (
    <GlobalContainer>
      <Container>
        <h1>
          Let's <span className="gradient">Talk</span>
        </h1>
        <div className="content">
          <input className="input" placeholder="Name" />
          <input className="input" placeholder="Last Name" />
          <input className="input" placeholder="E-mail" />
        </div>
        <textarea className="input text" placeholder="Message" />
        <div className="action">
          <ButtonWrapper>
            <Button height="76px">Send</Button>
          </ButtonWrapper>
        </div>
      </Container>
    </GlobalContainer>
  );
};

export default ChatUs;

const Container = styled.div`
  width: 100%;
  background: linear-gradient(
    90deg,
    rgba(63, 207, 247, 0.2) 0%,
    rgba(181, 181, 181, 0.2) 34.33%,
    rgba(234, 159, 84, 0.2) 100%
  );
  box-shadow: 0px 84px 114px 0px #0000001c;
  border-radius: 60px;
  padding: 60px 40px 40px 40px;
  h1 {
    font-size: 40px;
    font-weight: 500;
  }
  text-align: center;
  .content {
    margin-top: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    color: ${({ theme }) => theme.colors.secondaryText};
    gap: 10px;
  }
  .input {
    background: ${({ theme }) => theme.colors.secondaryBackground};
    height: 53px;
    border-radius: 20px;
    width: 100%;
    font-size: 20px;
    border: none;
    padding: 10px;
    ::placeholder {
      color: ${({ theme }) => theme.colors.secondaryText};
    }
  }
  .text {
    margin-top: 20px;
    height: 143px;
  }
  .action {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
  }
`;
const ButtonWrapper = styled.div`
  width: 258px;
  height: 76px;
  color: white;
  font-size: 24px;
`;
