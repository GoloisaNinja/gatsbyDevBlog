import styled from "styled-components";

export const ArticleCardWrapper = styled.div`
  border: 1px solid #00de51;
  display: flex;
  flex-direction: column;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  overflow: hidden;
  > div:first-child {
    border-bottom: 1px solid #00de51;
    overflow: hidden;
    > div:first-child {
      max-width: 100%;
      transition: 0.5s all ease-in-out;
      &:hover {
        transform: scale(1.2);
      }
    }
  }
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 25px;
  margin: 15px;
`;

export const Preview = styled.div`
  color: #999;
  text-align: left;
  padding: 0 20px 10px 20px;
  text-overflow: ellipsis;
  margin-top: 10px;
  margin-bottom: 10px;
  flex-grow: 1;
  > span {
    > a {
      text-decoration: none;
      color: #00de51;
    }
  }
`;

export const Author = styled.div`
  font-weight: bold;
  font-size: 12px;
  font-style: italic;
  text-transform: uppercase;
  margin-left: 15px;
  margin-right: 15px;
  color: #00de51;
`;

export const CreatedAt = styled.div`
  font-size: 10px;
  margin-bottom: 10px;
  margin-right: 20px;
  text-align: right;
`;
