import styled from "styled-components";

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  margin-top: 50px;
  box-sizing: border-box;
  min-height: 40vh;
`;

export const HeroTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  margin-left: 40px;
  margin-right: 40px;
  > h1 {
    font-size: 65px;
    font-family: "Prompt", sans-serif;
    letter-spacing: 3px;
    font-weight: 900;
    text-transform: uppercase;
    //color: #00de51;
    color: ${props => props.theme.main_blue};
    @media (min-width: 375px) {
      font-size: 85px;
    }
    @media (min-width: 768px) {
      font-size: 100px;
    }
    @media (min-width: 1000px) {
      font-size: 125px;
    }
  }
  > h4 {
    justify-content: flex-end;
    margin-left: auto;
    text-align: right;
    color: ${props => props.theme.colors.accentPurple};
  }
`;

export const WavesWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
  z-index: -1;
  > svg {
    position: relative;
    display: block;
    width: calc(152% + 1.3px);
    height: 106px;
    > path {
      fill: ${props => props.theme.colors.mainBlue};
    }
  }
`;

export const HeroButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 40px;
  margin-bottom: 150px;
`;
