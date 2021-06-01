import styled, { css } from "styled-components";

const fullWidthStyles = ({ fullWidth }) => {
  if (fullWidth) {
    return css`
      display: block;
      width: 100%;
    `;
  }
};

export const Button = styled.button`
  outline: none;
  padding: 0 20px;
  height: 44px;
  line-height: 44px;
  box-shadow: none;
  font-size: 18px;
  font-family: "Inter", sans-serif;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  background: none;
  color: white;
  border: 1px solid #00de51;
  white-space: nowrap;
  ${fullWidthStyles};
  &:hover {
    background: #00de51;
    color: black;
  }
`;
