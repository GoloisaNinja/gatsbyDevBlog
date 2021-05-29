import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 5px 10px;
  box-sizing: border-box;
  flex-wrap: nowrap;
  background: black;
  color: white;
  > div {
    display: flex;
    align-items: center;
    flex-grow: 1;
    > h3 {
      @media (max-width: 600px) {
        display: none;
      }
    }
  }
  > svg {
    color: #00de51;
    padding-right: 20px;
  }
`;
