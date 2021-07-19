import styled from "styled-components";

export const AboutContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  margin-top: 50px;
  a {
    text-decoration: none;
    color: #00de51;
    font-weight: bold;
  }
  span {
    color: #00de51;
  }
  > h3 {
    text-align: center;
    font-weight: bold;
  }
  > p {
    color: #ccc;
    font-size: 20px;
  }
  /* > p:last-child {
    font-size: 12px;
    width: 50%;
    margin-left: auto;
    padding-bottom: 10px;
    border-bottom: 1px solid #00de51;
    @media (min-width: 500px) {
      width: 25%;
    }
  } */
`;
export const AboutIconWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 70px);
  grid-gap: 35px;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  margin-bottom: 25px;
  @media (min-width: 500px) {
    grid-template-columns: repeat(6, 60px);
  }
`;
