import styled from "styled-components";
import ArrowIcon from "components/ArrowIcon";
import LuciaSDK from "luciasdk-t3";
interface ButtonProps {
  reverted?: boolean;
  children: React.ReactNode;
  onClick?: any;
  height: string;
}
LuciaSDK.init({
  clientId: "",
  baseURL: "http://localhost:3001",
  api_key: "6c0fe4f1-aad91b16-4089b2f8-fe574215-b7d78d12-b01a1db8-4b0ca8be-a1e84b93",
});
const Button: React.FC<ButtonProps> = ({
  reverted = false,
  children,
  onClick,
  height,
}) => {
  return (
    <ButtonWrapper reverted={reverted} onClick={onClick} height={height}>
      {children}
      <IconWrapper>
        <ArrowIcon height={height} reverted={!reverted} />
      </IconWrapper>
    </ButtonWrapper>
  );
};

export default Button;

const ButtonWrapper = styled.button<{ reverted: boolean; height: string }>`
  position: relative;
  background: ${({ reverted }) =>
    reverted
      ? "white"
      : "linear-gradient(96.01deg,#cd7675 0%,#e99b4d 74.3%,#c8d49e 109.27%)"};
  border: none;
  border-radius: 60px;
  width: 100%;
  height: 100%;
  font-size: inherit;
  color: inherit;
  padding-right: ${({ height }) => height};
  cursor: pointer;
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;
