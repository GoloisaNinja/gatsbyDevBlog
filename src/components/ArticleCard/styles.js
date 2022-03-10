import styled from "styled-components";

export const ArticleCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  overflow: hidden;
  > div:first-child {
    overflow: hidden;
    > div:first-child {
      max-width: 100%;
      transition: 0.5s all ease-in-out;
      &:hover {
        transform: scale(1.2);
      }
    }
  }
  > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    flex: 1;
    background-color: #303030;
    padding: 15px;
  }
`;

export const Title = styled.div`
  font-family: "Prompt", sans-serif;
  color: ${props => props.theme.colors.mainBlue};
  font-weight: 400;
  font-size: 25px;
  margin-bottom: 20px;
`;

export const Preview = styled.div`
  font-size: 14px;
  color: #999;
  text-align: left;
  text-overflow: ellipsis;
  margin-top: 20px;
  margin-bottom: 20px;
  flex: 1;
`;

export const Author = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 10px;
  text-transform: uppercase;

  color: #fff;
  > div:first-child {
    white-space: nowrap;
    font-size: 10px;
    text-transform: none;
    font-style: normal;
    margin-left: 10px;
    background: rgba(84, 87, 87, 1);
    border-radius: 10px;
    padding: 5px 10px;
    color: #fff;
    font-weight: bold;
  }
`;

export const CreatedAt = styled.div`
  font-size: 10px;
  margin-bottom: 10px;
  text-align: right;
  color: ${props => props.theme.colors.accentPurple};
`;

export const ButtonWrapper = styled.div`
  margin-bottom: 20px;
`;
