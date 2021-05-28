import styled from "styled-components";

export const ArticlesGridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin-top: 25px;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
