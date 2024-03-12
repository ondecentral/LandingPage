import styled from "styled-components";
import { ArrowRight } from "icons";

interface ButtonProps {
  reverted?: boolean;
  height: string;
}

const ArrowIcon: React.FC<ButtonProps> = ({ reverted = false, height }) => {
  return (
    <ArrowIconWrapper reverted={reverted} height={height}>
      <ArrowRight fill={reverted ? "#E99B4D" : "white"} />
    </ArrowIconWrapper>
  );
};

export default ArrowIcon;

const ArrowIconWrapper = styled.div<{ reverted: boolean; height: string }>`
  background: ${({ reverted }) => (reverted ? "white" : "#E99B4D")};
  color: ${({ reverted }) => (reverted ? "#E99B4D" : "white")};
  width: ${({ height }) => height};
  height: ${({ height }) => height};
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: inherit;
`;
