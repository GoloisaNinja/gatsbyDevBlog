import styled from "styled-components";

export const AboutHeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
export const HeadingIntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  > div:first-child {
    box-sizing: border-box;
    font-weight: bold;
    padding: 20px;

    span {
      color: #00de51;
    }
    @media (min-width: 500px) {
      max-width: 45%;
    }
  }
  > div:last-child {
    box-sizing: border-box;
    width: 300px;
    max-width: 100%;
    @media (min-width: 500px) {
      margin-left: 25px;
    }
  }
  @media (min-width: 500px) {
    flex-direction: row;
  }
`;
