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
  border: 1px solid #00de51;
  background: rgba(50, 50, 50, 1);
`;

export const Title = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  display: inline-block;
  text-transform: uppercase;
  font-size: 40px;
  font-weight: bold;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.75);
  color: #00de51;
  padding: 5px 15px;
`;

export const ArticleContentWrapper = styled.div`
  font-size: 20px;
  margin: 10px;
  border-radius: 10px;
  color: #999;
  > blockquote {
    padding: 25px;
    font-style: italic;
    font-size: 25px;
    color: #00de51;
    margin: 20px;
    display: flex;
    justify-content: center;
  }
  > h3 {
    color: white;
    border-bottom: 2px solid #00de51;
    padding-bottom: 15px;
    text-transform: uppercase;
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
    & img {
      width: 25px;
      border-radius: 50%;
    }
  }
`;
export const ByLineTwitterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > div:first-child {
    a {
      text-decoration: none;
      color: #00de51;
    }
    display: flex;
    align-items: center;
    font-size: 16px;
    color: #00de51;
    margin-top: 5px;
    &:after {
      content: "FOLLOW";
      font-size: 10px;
      margin-left: 5px;
    }
  }
`;
