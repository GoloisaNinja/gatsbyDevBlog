import styled from "styled-components";

export const ArticleImageWrapper = styled.div`
  height: 400px;
  max-height: 100vh;
  display: flex;
  margin-top: 25px;
  margin-bottom: 25px;
  border-radius: 10px;
  > div {
    flex-grow: 1;
  }
`;
export const ButtonWrapper = styled.div`
  margin-top: 70px;
  margin-bottom: 25px;
  margin-left: 15px;
`;
export const ArticleTitleContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: white;
  text-decoration: none;
  text-align: left;
  padding: 0 15px;
`;

export const Title = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  display: inline-block;
  text-transform: uppercase;
  font-family: "Prompt", sans-serif;
  font-size: 30px;
  font-weight: bold;
  color: ${props => props.theme.colors.mainBlue};
  padding: 5px;
  @media (min-width: 320px) {
    font-size: 35px;
  }
  @media (min-width: 385px) {
    font-size: 50px;
  }
  @media (min-width: 500px) {
    font-size: 65px;
  }
  @media (min-width: 700px) {
    font-size: 75px;
  }
  @media (min-width: 900px) {
    font-size: 95px;
  }
  @media (min-width: 1100px) {
    font-size: 125px;
  }
`;

export const ArticleContentWrapper = styled.div`
  font-size: 18px;
  margin: 50px 15px 125px 15px;
  border-radius: 10px;
  color: #999;
  > ul {
    margin-top: 25px;
    margin-bottom: 25px;
  }
  > p {
    strong {
      color: #fff;
    }
    img {
      width: 100%;
      margin-top: 25px;
      margin-bottom: 25px;
    }
    a {
      color: ${props => props.theme.colors.accentRed};
    }
  }

  > blockquote {
    padding: 20px;
    font-style: italic;
    font-size: 25px;
    color: ${props => props.theme.colors.accentPurple};
    margin: 20px;
    display: flex;
    justify-content: center;
    a {
      color: ${props => props.theme.colors.accentRed};
    }
  }
  > h3 {
    font-family: "Prompt", sans-serif;
    font-weight: 500;
    color: ${props => props.theme.colors.mainBlue};
    border-bottom: 2px solid ${props => props.theme.colors.mainBlue};
    padding-bottom: 15px;
    text-transform: uppercase;
    word-break: break-word;
  }
  > pre[class*="language-"] {
    margin-top: 25px;
    margin-bottom: 25px;
  }
`;

export const AuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 12px;
  text-align: right;
  color: white;
  text-transform: uppercase;
  justify-content: flex-end;
  padding-right: 30px;
  padding-bottom: 20px;
`;

export const AuthorAvatarWrapper = styled.div`
  > div:first-child {
    margin-right: 10px;
    width: 40px;
    max-width: 40px;
    & img {
      border-radius: 50%;
    }
  }
`;
export const ByLineTwitterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  > div:first-child {
    a {
      text-decoration: none;
      color: ${props => props.theme.colors.mainBlue};
    }
    display: flex;
    align-items: center;
    font-size: 16px;
    color: ${props => props.theme.colors.accentPurple};
    margin-top: 5px;
    &:after {
      content: "FOLLOW";
      font-size: 10px;
      margin-left: 5px;
    }
  }
`;
export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
  margin-top: 50px;
`;
export const Thumbnail = styled.img`
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
`;
