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
  border-radius: 10px;
  background: rgba(50, 50, 50, 1);
`;

export const Title = styled.div`
  margin-bottom: 5px;
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
    text-align: left;
  }
`;

export const AuthorWrapper = styled.div`
  width: 100%;
  text-align: right;
  color: white;
  font-style: italic;
  justify-content: flex-end;
  padding-right: 20px;
  padding-bottom: 20px;
`;
