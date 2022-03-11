import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  background-color: #171717;
  color: white;
  height: 50px;
  padding-right: 35px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  > ul {
    display: flex;
    font-family: "Prompt", sans-serif;
    font-weight: 500;
    > li {
      list-style: none;
      > a {
        text-decoration: none;
        color: #fff;
      }
    }
    > li:not(:last-child) {
      margin-right: 25px;
    }
  }
`;
