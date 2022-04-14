import styled from "styled-components";

export const WavesWrapper = styled.div`
  position: relative;
  width: 100%;
  z-index: -1;
  > div:first-child {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    margin-bottom: -1px;
    > svg {
      position: relative;
      display: block;
      width: calc(132% + 1.3px);
      height: 86px;
      > path {
        fill: ${props => props.theme.colors.mainBlue};
      }
    }
  }
`;

export const FooterWrapper = styled.footer`
  display: grid;
  grid-template-areas:
    "site icons other"
    "copyright copyright copyright";
  grid-gap: 15px;
  width: 100%;
  background-color: ${props => props.theme.colors.mainBlue};
  font-family: "Prompt", sans-serif;
  color: #303030;
  padding: 25px;
`;
export const SiteLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: site;
  max-width: 300px;
  > a {
    text-decoration: none;
    color: #303030;
    margin-bottom: 25px;
    font-weight: 700;
  }
`;
export const IconsWrapper = styled.div`
  display: grid;
  grid-template-areas:
    "twiiter reddit"
    "linkedin portfolio"
    "github github";
  grid-area: icons;
  max-width: 300px;
  > a {
    > svg {
      font-size: 25px;
      color: #303030;
    }
  }
`;
export const Copyright = styled.div`
  grid-area: copyright;
`;
