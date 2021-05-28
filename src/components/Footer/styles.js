import styled from "styled-components";

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 150px;
  width: 100%;
  background: rgba(50, 50, 50, 1);
  color: white;
  > div:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: white;
    margin-top: 10px;
  }
`;
export const IconsWrapper = styled.div`
  display: flex;
  font-size: 25px;
  margin-left: 15px;
  margin-top: 10px;
  > a {
    color: #00de51;
    text-decoration: none;
    margin-left: 10px;
  }
  > a:first-child {
    margin-left: 0;
  }
`;
