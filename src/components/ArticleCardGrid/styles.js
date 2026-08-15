import styled from "styled-components";

export const SectionWrapper = styled.div`
  position: relative;
`;
export const WavesWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
  z-index: -1;
  > svg {
    position: relative;
    display: block;
    width: calc(300% + 1.3px);
    height: 500px;
    > path {
      fill: #2ccbd1;
    }
  }
`;
export const ArticlesGridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  min-height: 800px;
  margin: 0px 15px 125px 15px;
  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
export const ArticleLead = styled.div`
  font-family: "Prompt", sans-serif;
  font-weight: bold;
  color: #303030;
  padding-top: 70px;
  padding-left: 40px;
  > h4 {
    margin-top: 0;
  }
`;
export const ArticleSearch = styled.div`
  display: flex;
  margin: 0px 15px 25px 15px;
  align-items: center;
  > input {
    width: 100%;
    background-color: rgba(23, 23, 23, 1);
    color: #fff;
    padding: 15px;
    border: none;
    outline: none;
    flex: 1;
  }
  > button {
    border-radius: 0px;
    background-color: rgba(23, 23, 23, 1);
    border: none;
    color: ${props => props.theme.colors.accentPurple};
    padding: 15px;
    cursor: pointer;
  }
`;
