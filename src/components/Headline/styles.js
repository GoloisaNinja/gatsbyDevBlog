import styled from "styled-components";

export const HeadlineWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  margin-top: 50px;
  > div {
    text-align: left;
    font-style: italic;
    color: #999;
  }
  > h3 {
    border: 1px solid #00de51;
    padding: 5px;
    box-sizing: border-box;
    > span {
      color: #00de51;
    }
  }
`;
