import styled, { css } from "styled-components";

const bgStyle = ({ bg }) => {
  if (bg) {
    return css`
      background-color: #2ccbd1;
    `;
  }
};

export const LayoutWrapper = styled.div`
  min-height: 100vh;
  ${bgStyle};
`;
