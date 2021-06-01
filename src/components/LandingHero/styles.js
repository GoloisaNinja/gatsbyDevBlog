import styled from "styled-components";

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  box-sizing: border-box;
  width: 90%;
  min-height: 40vh;
  border-bottom: 1px solid #00de51;
`;

export const HeroTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > h1 {
    font-size: 65px;
    font-family: "Monoton", cursive;
    text-transform: uppercase;
    color: #00de51;
    @media (min-width: 375px) {
      font-size: 5em;
    }
    @media (min-width: 768px) {
      font-size: 6em;
    }
  }
  > h4 {
    justify-content: flex-end;
    margin-left: auto;
    text-align: right;
  }
`;

export const HeroButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 50px;
`;
