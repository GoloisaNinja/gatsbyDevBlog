import styled from "styled-components";

export const HeadlineWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  background-color: ${props => props.theme.colors.mainBlue};
  > div {
    padding: 50px 40px;
    text-align: left;
    > h4 {
      font-family: "Prompt", sans-serif;
      color: #303030;
      font-weight: bold;
    }
  }
`;
export const HeadlineGridWrapper = styled.div`
  display: grid;
  font-family: "Prompt", sans-serif;
  grid-template-areas:
    "one"
    "two";
  grid-gap: 25px;
  @media (min-width: 600px) {
    grid-template-areas: "one two";
  }
  > div {
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
  > div:first-child {
    grid-area: one;
    > svg:last-child {
      margin-left: 10px;
    }
    > svg {
      font-size: 25px;
      color: #303030;
    }
  }
  > div:nth-child(2) {
    grid-area: two;
    > svg:last-child {
      margin-left: 10px;
    }
    > svg {
      font-size: 25px;
      color: #303030;
    }
  }
`;
