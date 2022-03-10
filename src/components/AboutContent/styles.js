import styled from "styled-components";

export const AboutContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 15px;
  margin-top: 50px;
  margin-bottom: 125px;
  a {
    text-decoration: none;
    color: ${props => props.theme.colors.accentPurple};
    font-weight: bold;
  }
  span {
    color: ${props => props.theme.colors.accentPurple};
  }
  > h3 {
    font-family: "Prompt", sans-serif;
    color: ${props => props.theme.colors.mainBlue};
    text-align: center;
    font-weight: bold;
  }
  > p {
    color: #ccc;
    font-size: 20px;
  }
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
