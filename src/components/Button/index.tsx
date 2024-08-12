import styled from "styled-components";
import ArrowIcon from "components/ArrowIcon";
import LuciaSDK from "luciasdk-t3";
const api_key : string = process.env.REACT_APP_API_KEY as string;
interface ButtonProps {
  reverted?: boolean;
  children: React.ReactNode;
  onClick?: any;
  height: string;
}
LuciaSDK.init({
  clientId: "",
  baseURL: "https://staging.api.clickinsights.xyz/fk",
  api_key: api_key,
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
