import styled, { css } from "styled-components";

const btnStyle = ({ inverse, color }) => {
  if (inverse) {
    switch (color) {
      case "purple":
        return css`
          color: black;
          border: 1px solid ${props => props.theme.colors.accentPurple};
          background-color: ${props => props.theme.colors.accentPurple};
          &:hover {
            color: white;
            background: none;
            border: 1px solid ${props => props.theme.colors.accentPurple};
          }
        `;
      default:
        return css`
          color: black;
          border: 1px solid ${props => props.theme.colors.mainBlue};
          background-color: ${props => props.theme.colors.mainBlue};
          &:hover {
            color: white;
            background: none;
            border: 1px solid ${props => props.theme.colors.mainBlue};
          }
        `;
    }
  } else {
    switch (color) {
      case "purple":
        return css`
          color: white;
          border: 1px solid ${props => props.theme.colors.accentPurple};
          white-space: nowrap;
          &:hover {
            background-color: ${props => props.theme.colors.accentPurple};
            color: black;
          }
        `;
      default:
        return css`
          color: white;
          border: 1px solid ${props => props.theme.colors.mainBlue};
          white-space: nowrap;
          &:hover {
            background-color: ${props => props.theme.colors.mainBlue};
            color: black;
          }
        `;
    }
  }
};

const fullWidthStyle = ({ fullWidth }) => {
  if (fullWidth) {
    return css`
      display: block;
      width: 100%;
    `;
  }
};

export const StyledButton = styled.button`
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
  ${btnStyle};
  ${fullWidthStyle};
`;
