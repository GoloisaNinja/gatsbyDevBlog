import styled from "styled-components";

export const StyleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.mainBlue};
  padding: 50px 40px;
`;
export const HeadingWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 25px;
  width: 100%;
  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
  > div:first-child {
    font-family: "Prompt", sans-serif;
    padding: 10px;
    > h4 {
      color: #030303;
      font-weight: bold;
    }
    > p {
      font-weight: 500;
      color: #505050;
      margin-bottom: 10px;
    }
  }
`;
