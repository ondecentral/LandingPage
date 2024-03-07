import styled from "styled-components";

export const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const Button = styled.button`
  background: transparent;
  border: none;
`;

export const DropdownContent = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  background-color: white;
  gap: 7px;
`;

export const Option = styled.div`
  font-size: 16px;
  cursor: pointer;
  text-transform: uppercase;
  height: 48px;
  padding: 13px 16px 13px 12px;
  gap: 12px;
  display: flex;
  align-items: center;
  &:hover {
    opacity: 0.6;
  }
`;
