import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        background: linear-gradient(
          53.68deg,
          rgba(51, 205, 247, 0.04) 19.93%,
          rgba(248, 246, 243, 0.2) 41.25%,
          rgba(233, 155, 77, 0.2) 85.53%
        );
        ::-webkit-scrollbar-thumb {
          border-radius: 8px;
        }
        ::-webkit-scrollbar {
          width: 0px;
        }
        * {
        box-sizing: border-box;
        margin: 0;
        }
        font-family: 'Manrope';
        a {
            text-decoration: none;
            color: inherit;
        }
        .gradient-back-1 {
          background: linear-gradient(
            53.68deg,
            rgba(51, 205, 247, 0.04) 19.93%,
            rgba(248, 246, 243, 0.2) 41.25%,
            rgba(233, 155, 77, 0.2) 85.53%
          );
        }
    }
`;

export const GlobalContainer: React.FC<{
  children: React.ReactNode;
  className?: any;
}> = ({ children, className }) => {
  return (
    <Wrapper className={className}>
      <FixedWidthWrapper>{children}</FixedWidthWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  .gradient {
    background-image: ${({ theme }) => theme.colors.primaryGradient};
    background-clip: text;
    color: transparent;
    font-weight: 700;
  }
`;

const FixedWidthWrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 80px 0;
  position: relative;
`;

export default GlobalStyle;
